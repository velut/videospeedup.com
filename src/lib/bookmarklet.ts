/*
This is the bookmarklet function used in speed controls before minification.

@param speed - Desired playback speed, for example 3x.
@param fixedSpeed - If true, just set the speed and never reset to 1x.
@param allMedia - If true, select all media elements in a page.
@param includeAudio - If true, select also audio elements in a page.
*/
let bookmarklet = (
	speed: number,
	fixedSpeed: boolean,
	allMedia: boolean,
	includeAudio: boolean
) => {
	// Shorten successive calls to `document` and `window`.
	let d = document;

	// Add the following VideoSpeedup (vs) properties to `window`:
	// 1. __vss: the wanted playback speed (for example, 3x).
	// 2. __vso: a MutationObserver that checks and reacts to page updates.
	// 3. __vsa: a boolean that indicates whether the MutationObserver is active or not.
	let w = window as Window &
		typeof globalThis & { __vss: number; __vso: MutationObserver; __vsa: boolean };

	// Function used to change the playback speed of media elements.
	let changePlaybackSpeed = (observing?: boolean) => {
		// 1. Select all media elements on the page;
		//    only `video` by default; also `audio` if selected.
		// 2. Keep only relevant media elements;
		//    only first video/audio element by default; all elements if selected.
		// 3. Change playback speed of target elements;
		//    alternate between the wanted playback speed and the default 1x speed by default;
		//    or just set the wanted speed if selected or if we are observing a page update.
		[...d.querySelectorAll(includeAudio ? 'video,audio' : 'video')]
			.slice(0, allMedia ? undefined : 1)
			.forEach((target) => {
				if (fixedSpeed || observing) {
					(target as HTMLMediaElement).playbackRate = w.__vss;
				} else {
					(target as HTMLMediaElement).playbackRate =
						(target as HTMLMediaElement).playbackRate !== w.__vss ? w.__vss : 1;
				}
			});
	};

	// Function that tracks DOM changes to make sure that all media elements
	// added dynamically to a page are affected by speed changes.
	// This is needed for dynamic pages like YouTube Shorts or Twitter feed.
	let observeChanges = () => {
		if (!allMedia) return;

		// If it does not exist, create a MutationObserver that checks for page updates
		// and sets the speed to the wanted one when updates are observed.
		w.__vso =
			w.__vso ||
			new MutationObserver(() => {
				changePlaybackSpeed(true);
			});
		w.__vsa = w.__vsa || false;

		if (!w.__vsa) {
			// If not observing, start observing the entire `body` tree.
			let body = d.querySelector('body') as HTMLBodyElement;
			w.__vso.observe(body, { subtree: true, childList: true });
			w.__vsa = true;
			return;
		}

		if (w.__vsa && w.__vss === speed) {
			// If observing and wanted speed has not changed, that is,
			// if the most recently clicked bookmarklet got clicked again, stop observing.
			// The speed check prevents deactivating the observer when the user clicks
			// different bookmarklets to set different speeds.
			w.__vso.disconnect();
			w.__vsa = false;
			return;
		}
	};

	// Observe page for changes.
	observeChanges();

	// Set the wanted playback speed when the bookmarklet is clicked.
	// Must come after `observeChanges()` call to prevent the `w.__vss === speed` check to always be `true`.
	w.__vss = speed;

	// Trigger at least one speed change.
	changePlaybackSpeed();
};
