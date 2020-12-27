import { SpeedButton } from '../buttons/SpeedButton';

export function SpeedupSection() {
    const speeds = [1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.5, 4, 5];

    return (
        <section>
            <h2>Speedup Controls</h2>

            <p>
                Drag and drop the speedup buttons displayed below to your
                browser's bookmarks bar above.
            </p>

            <p>
                When on a video page, click on the button now present in your
                browser's bookmarks bar to achieve the desired speedup.
            </p>

            <ul className="grid grid-cols-2 gap-4 mt-6 sm:gap-6 sm:grid-cols-3 lg:grid-cols-4">
                {speeds.map((speed) => (
                    <li key={speed}>
                        <SpeedButton speed={speed} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
