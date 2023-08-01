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
	let w =
		// Add the following VideoSpeedup (vs) properties to `window`:
		// 1. ___vss: the wanted playback speed (for example, 3x).
		// 2. ___vso: a MutationObserver that checks and reacts to page updates.
		// 3. ___vsa: a boolean that indicates whether the MutationObserver is active or not.
		/** @type {Window & globalThis & {___vss: number; ___vso: MutationObserver; ___vsa: boolean }} */ (
			window
		);

	// Function used to change the playback speed of media elements.
	let changePlaybackSpeed = (/** @type {boolean | undefined} */ observing) => {
		// 1. Select all media elements on the page;
		//    only `video` by default; also `audio` if selected.
		// 2. Keep only relevant media elements;
		//    only first video/audio element by default; all elements if selected.
		// 3. Change playback speed of target elements;
		//    alternate between the wanted playback speed and the default 1x speed by default;
		//    or just set the wanted speed if selected or if we are observing a page update.
		Array.from(d.querySelectorAll(includeAudio ? 'video,audio' : 'video'))
			.slice(0, allMedia ? undefined : 1)
			.forEach((target) => {
				if (fixedSpeed || observing) {
					/** @type {HTMLMediaElement} */ (target).playbackRate = w.___vss;
				} else {
					/** @type {HTMLMediaElement} */ (target).playbackRate =
						/** @type {HTMLMediaElement} */ (target).playbackRate !== w.___vss ? w.___vss : 1;
				}
			});
	};

	// Function that tracks DOM changes to make sure that all media elements
	// added dynamically to a page are affected by speed changes.
	// This is needed for dynamic pages like YouTube Shorts or Twitter feed.
	let observeChanges = () => {
		if (!allMedia) {
			return;
		}

		// If it does not exist, create a MutationObserver that checks for page updates
		// and sets the speed to the wanted one when updates are observed.
		w.___vso =
			w.___vso ||
			new MutationObserver(() => {
				changePlaybackSpeed(true);
			});
		w.___vsa = w.___vsa || false;

		if (!w.___vsa) {
			// If not observing, start observing the entire `body` tree.
			let body = /** @type {HTMLBodyElement} */ (d.querySelector('body'));
			w.___vso.observe(body, { subtree: true, childList: true });
			w.___vsa = true;
			return;
		}

		if (w.___vsa && w.___vss === speed) {
			// If observing and wanted speed has not changed,
			// that is the same bookmarklet got clicked, stop observing.
			w.___vso.disconnect();
			w.___vsa = false;
			return;
		}
	};

	// Observe page for changes
	observeChanges();

	// Set the wanted playback speed when the bookmarklet is clicked.
	// Must come after `observeChanges()` call for the `w.___vss === speed` check to work.
	w.___vss = speed;

	// Trigger at least one speed change.
	changePlaybackSpeed();
};
