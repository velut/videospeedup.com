export type MakeBookmarkletArgs = {
	speed: number;
	fixedSpeed: boolean;
	allMedia: boolean;
	includeAudio: boolean;
};

// See `bookmarklet.js`.
const bookmarkletMin = `(_,s,e,v)=>{let o=document,a=window,r=_=>{Array.from(o.querySelectorAll(v?"video,audio":"video")).slice(0,e?void 0:1).forEach(e=>{e.playbackRate=s||_?a.___vss:e.playbackRate!==a.___vss?a.___vss:1})};(()=>{if(e){if(a.___vso=a.___vso||new MutationObserver(()=>{r(!0)}),a.___vsa=a.___vsa||!1,!a.___vsa){let _=o.querySelector("body");return a.___vso.observe(_,{subtree:!0,childList:!0}),void(a.___vsa=!0)}a.___vsa&&a.___vss===_&&(a.___vso.disconnect(),a.___vsa=!1)}})(),a.___vss=_,r()}`;

const shortBool = (b: boolean) => (b ? '!0' : '!1');

export const makeBookmarklet = ({
	speed,
	fixedSpeed,
	allMedia,
	includeAudio
}: MakeBookmarkletArgs) => {
	const args = [speed, shortBool(fixedSpeed), shortBool(allMedia), shortBool(includeAudio)].join(
		','
	);
	return `javascript:(${bookmarkletMin})(${args});`;
};
