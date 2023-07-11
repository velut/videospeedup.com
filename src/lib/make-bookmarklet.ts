export type MakeBookmarkletArgs = {
	speed: number;
	fixedSpeed: boolean;
	allMedia: boolean;
	includeAudio: boolean;
};

export const makeBookmarklet = ({
	speed,
	fixedSpeed,
	allMedia,
	includeAudio
}: MakeBookmarkletArgs) => {
	const fnStart = 'javascript:(function(){';
	const fnEnd = '})();';
	const selector = includeAudio
		? `let ms=document.querySelectorAll('video, audio');`
		: `let ms=document.querySelectorAll('video');`;
	const elements = allMedia ? `` : `ms=[ms[0]];`;
	const loopStart = 'ms.forEach((m)=>{';
	const loopEnd = '});';
	const setSpeed = fixedSpeed
		? `m.playbackRate=${speed};`
		: `m.playbackRate=m.playbackRate!==1?1:${speed};`;
	return `${fnStart}${selector}${elements}${loopStart}${setSpeed}${loopEnd}${fnEnd}`;
};
