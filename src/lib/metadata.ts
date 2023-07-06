export const projectName = 'videospeedup.com';
export const projectNameStylized = 'VideoSpeedup.com';
export const baseUrl = `https://www.videospeedup.com`;
export const githubUrl = `https://github.com/velut/${projectName}`;
export const githubIssuesUrl = `${githubUrl}/issues`;
export const githubCommit = _GIT_COMMIT;
export const githubCommitShort = githubCommit.slice(0, 7);
export const githubCommitUrl = `${githubUrl}/commit/${githubCommit}`;

export const pageTitle = (title: string) => {
	return `${title} | ${projectNameStylized}`;
};

export const pageUrl = (path: string) => {
	return path === '' ? baseUrl : `${baseUrl}/${path}/`;
};
