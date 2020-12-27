import { SpeedButton } from '../buttons/SpeedButton';

export function SlowdownSection() {
    const speeds = [0.1, 0.25, 0.5, 0.75];

    return (
        <section>
            <h2>Slowdown Controls</h2>

            <p>
                Drag and drop the slowdown buttons displayed below to your
                browser's bookmarks bar above.
            </p>

            <p>
                When on a video page, click on the button now present in your
                browser's bookmarks bar to achieve the desired slowdown.
            </p>

            <ul className="grid grid-cols-2 gap-4 mt-6 sm:gap-6 sm:grid-cols-4">
                {speeds.map((speed) => (
                    <li key={speed}>
                        <SpeedButton speed={speed} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
