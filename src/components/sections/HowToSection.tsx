import { A } from '../common/A';

export function HowToSection() {
    return (
        <section>
            <h2>How-to</h2>

            <div>
                <p>
                    To start using the video speed controls displayed below,
                    just follow these steps:
                </p>

                <ol className="mt-2 ml-8 list-decimal">
                    <li>
                        Make sure your browser's bookmarks bar is visible. See
                        instructions for{' '}
                        <A href="https://www.howtogeek.com/415733/how-to-show-or-hide-the-google-chrome-bookmarks-bar/">
                            Chrome
                        </A>
                        ,{' '}
                        <A href="https://support.mozilla.org/en-US/kb/bookmarks-firefox#w_how-to-turn-on-the-bookmarks-toolbar">
                            Firefox
                        </A>
                        ,{' '}
                        <A href="https://www.tenforums.com/tutorials/145495-how-add-remove-favorites-bar-microsoft-edge-chromium.html#option3">
                            Edge
                        </A>{' '}
                        and{' '}
                        <A href="https://support.apple.com/guide/safari/customize-the-safari-window-ibrw1012/mac">
                            Safari
                        </A>
                        .
                    </li>

                    <li>
                        Drag and drop the buttons displayed below to your
                        browser's bookmarks bar.
                    </li>

                    <li>
                        Check that the button you selected is now present in
                        your browser's bookmarks bar.
                    </li>

                    <li>
                        When watching a video, click the button in your
                        browser's bookmarks bar to change playback speed.
                    </li>

                    <li>
                        Optionally, click the button again to go back to normal
                        viewing speed (1x).
                    </li>
                </ol>

                <p>
                    You can also watch the following{' '}
                    <A href="tutorial-chrome.mp4">video tutorial</A>:
                </p>
            </div>

            <div className="flex justify-center">
                <video
                    className="mt-6"
                    controls
                    poster="tutorial-chrome-cover.png"
                    preload="none"
                >
                    <source src="tutorial-chrome.mp4" type="video/mp4" />
                </video>
            </div>
        </section>
    );
}
