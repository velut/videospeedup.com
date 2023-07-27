/**
 * This is the bookmarklet function used in speed controls before minification.
 *
 * @param {number} speed Desired playback speed, for example 3x.
 * @param {boolean} fixedSpeed If true, just set the speed and never reset to 1x.
 * @param {boolean} allMedia If true, select all media elements in a page.
 * @param {boolean} includeAudio If true, select also audio elements in a page.
 * @returns {void}
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let b = (speed, fixedSpeed, allMedia, includeAudio) => {
	// Shorten successive calls to `document` and `window`.
	let d = document;
	let w = /** @type {Window & globalThis & {___vso: MutationObserver; ___vss: boolean}} */ (window);

	// Function used to change the playback speed of media elements.
	let changePlaybackSpeed = (/** @type {boolean | undefined} */ observing) => {
		// 1. Select all media elements on the page;
		//    only `video` by default; also `audio` if selected.
		// 2. Keep only relevant media elements;
		//    only first video/audio element by default; all elements if selected.
		// 3. Change playback speed of target elements;
		//    alternate between the wanted speed (for example, 3x) and the default 1x speed by default;
		//    or just set the wanted speed if selected or if we are observing a page update.
		Array.from(d.querySelectorAll(includeAudio ? 'video,audio' : 'video'))
			.slice(0, allMedia ? undefined : 1)
			.forEach((target) => {
				if (fixedSpeed || observing) {
					/** @type {HTMLMediaElement} */ (target).playbackRate = speed;
				} else {
					/** @type {HTMLMediaElement} */ (target).playbackRate =
						/** @type {HTMLMediaElement} */ (target).playbackRate === 1 ? speed : 1;
				}
			});
	};

	// If selected, track DOM changes to make sure that all media elements
	// added dynamically to a page are affected by speed changes.
	// This is needed for dynamic pages like YouTube Shorts or Twitter feed.
	if (allMedia) {
		// If it does not exist, create a MutationObserver that sets the speed
		// to the wanted one (for example, 3x) when updates are observed.
		w.___vso =
			w.___vso ||
			new MutationObserver(() => {
				changePlaybackSpeed(true);
			});
		w.___vss = w.___vss || false;

		if (w.___vss) {
			// If observing, stop observing.
			w.___vso.disconnect();
			w.___vss = false;
		} else {
			// If not observing, start observing the entire `body` tree.
			let body = /** @type {HTMLBodyElement} */ (d.querySelector('body'));
			w.___vso.observe(body, { subtree: true, childList: true });
			w.___vss = true;
		}
	}

	// Trigger at least one speed change.
	changePlaybackSpeed();
};
