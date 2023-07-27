export type MakeBookmarkletArgs = {
	speed: number;
	fixedSpeed: boolean;
	allMedia: boolean;
	includeAudio: boolean;
};

// See `bookmarklet.js`.
const bookmarkletMin = `(_,e,s,o)=>{let v=document,t=window,i=t=>{Array.from(v.querySelectorAll(o?"video,audio":"video")).slice(0,s?void 0:1).forEach(s=>{s.playbackRate=e||t?_:1===s.playbackRate?_:1})};if(s)if(t.___vso=t.___vso||new MutationObserver(()=>{i(!0)}),t.___vss=t.___vss||!1,t.___vss)t.___vso.disconnect(),t.___vss=!1;else{let _=v.querySelector("body");t.___vso.observe(_,{subtree:!0,childList:!0}),t.___vss=!0}i()}`;

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
