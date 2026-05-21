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
    throw new Error(`${name} is: ${value}`);
  }
  return value;
}

async function clearStorageZone(endpoint: string, password: string) {
  console.log("clearStorageZone: clearing storage zone");

  if (!endpoint.startsWith("https://storage.bunnycdn.com/")) {
    throw new Error("clearStorageZone: invalid storage zone endpoint");
  }

  // DELETE ALL FILES IN THE STORAGE ZONE.
  const storageRootDir = `${endpoint}/`;
  const deleteRes = await fetch(storageRootDir, {
    method: "DELETE",
    headers: { AccessKey: password },
  });
  if (deleteRes.status >= 400) {
    console.error(storageRootDir);
    console.error(deleteRes);
    console.error(await deleteRes.json());
    throw new Error("clearStorageZone: delete request failed to clear storage zone");
  }

  // Check if the storage zone was cleared.
  await setTimeout(1000);
  const listRes = await fetch(storageRootDir, {
    method: "GET",
    headers: { accept: "application/json", AccessKey: password },
  });
  if (listRes.status >= 400) {
    console.error(await listRes.json());
    throw new Error("clearStorageZone: cannot list storage zone files");
  }
  const data = await listRes.json();
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
  console.log(`uploadFiles: uploaded ${uploadedFilesCount} files`);
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
