/// <reference types="node" />

import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { setTimeout } from "node:timers/promises";

try {
  console.log("deploying to bunny.net...");
  await deploy();
  console.log("done deploying");
  process.exit(0);
} catch (e) {
  console.error("error deploying:");
  console.error(e);
  process.exit(1);
}

async function deploy() {
  const apiKey = getEnv("BUNNY_API_KEY");
  const pullZoneId = getEnv("BUNNY_PULL_ZONE_ID");
  const storageZoneEndpoint = getEnv("BUNNY_STORAGE_ZONE_ENDPOINT");
  const storageZonePassword = getEnv("BUNNY_STORAGE_ZONE_PASSWORD");

  // Script must be run from the project's root.
  const buildDir = path.join(process.cwd(), "build");

  await clearStorageZone(storageZoneEndpoint, storageZonePassword);
  await uploadFiles(buildDir, storageZoneEndpoint, storageZonePassword);
  await purgePullZoneCache(pullZoneId, apiKey);
}

function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`env ${name} is: ${value}`);
  }
  return value;
}

async function clearStorageZone(endpoint: string, password: string) {
  console.log("clearStorageZone: clearing storage zone");

  if (!endpoint.startsWith("https://storage.bunnycdn.com/")) {
    throw new Error("clearStorageZone: invalid storage zone endpoint");
  }

  // Bunny.net updated their API and we must delete files and directories one by one.
  const storageRootDir = `${endpoint}/`;
  const listRes = await fetch(storageRootDir, {
    method: "GET",
    headers: { accept: "application/json", AccessKey: password },
  });
  if (listRes.status >= 400) {
    console.error(await listRes.json());
    throw new Error("clearStorageZone: failed to list storage zone files");
  }

  // Delete top level entries.
  const entries = (await listRes.json()) as { ObjectName: string; IsDirectory: boolean }[];
  for (const entry of entries) {
    const deleteRes = await fetch(
      `${storageRootDir}${entry.ObjectName}${entry.IsDirectory ? "/" : ""}`,
      {
        method: "DELETE",
        headers: { AccessKey: password },
      },
    );
    if (deleteRes.status >= 400) {
      console.error(await deleteRes.json());
      throw new Error(
        `clearStorageZone: failed to delete entry: ${entry.ObjectName} (IsDirectory: ${entry.IsDirectory})`,
      );
    }
  }

  // Check if the storage zone is clear.
  await setTimeout(1000);
  const emptyCheckRes = await fetch(storageRootDir, {
    method: "GET",
    headers: { accept: "application/json", AccessKey: password },
  });
  if (emptyCheckRes.status >= 400) {
    console.error(await emptyCheckRes.json());
    throw new Error("clearStorageZone: failed to check if the storage zone is empty");
  }
  const data = await emptyCheckRes.json();
  const isEmptyArray = Array.isArray(data) && data.length === 0;
  if (!isEmptyArray) {
    throw new Error("clearStorageZone: storage zone is not empty");
  }

  console.log("clearStorageZone: cleared storage zone");
}

async function uploadFiles(buildDir: string, endpoint: string, password: string) {
  const entries = await fs.readdir(buildDir, { recursive: true, withFileTypes: true });
  const files = entries.filter((entry) => entry.isFile());
  let uploadedFilesCount = 0;
  for (const file of files) {
    const fsPath = path.join(file.parentPath, file.name);
    const relativePath = fsPath.replace(`${buildDir}/`, "");
    const storagePath = `${endpoint}/${relativePath}`;
    const data = await fs.readFile(fsPath);
    const hash = createHash("sha256").update(data).digest("hex").toUpperCase();
    const res = await fetch(storagePath, {
      method: "PUT",
      headers: { Checksum: hash, "content-type": "application/octet-stream", AccessKey: password },
      body: data,
    });
    if (res.status >= 400) {
      console.error(await res.json());
      throw new Error(`uploadFiles: failed to upload file: ${relativePath}`);
    }
    console.log(`uploadFiles: uploaded: ${relativePath}`);
    uploadedFilesCount += 1;
  }
  if (uploadedFilesCount < files.length) {
    throw new Error(
      `uploadFiles: failed to upload all files (total: ${files.length}, uploaded: ${uploadedFilesCount})`,
    );
  }

  console.log(`uploadFiles: uploaded all ${uploadedFilesCount} files`);
}

async function purgePullZoneCache(pullZoneId: string, apiKey: string) {
  const res = await fetch(`https://api.bunny.net/pullzone/${pullZoneId}/purgeCache`, {
    method: "POST",
    headers: { "content-type": "application/json", AccessKey: apiKey },
  });
  if (res.status >= 400) {
    console.error(await res.json());
    throw new Error("purgePullZoneCache: failed to purge pull zone cache");
  }

  console.log("purgePullZoneCache: purged pull zone cache");
}
