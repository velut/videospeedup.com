import { useState } from 'react';
import { SpeedButton } from '../buttons/SpeedButton';

export function SlowdownSection() {
    const speeds = [0.1, 0.25, 0.5, 0.75];
    const [forceSpeed, setForceSpeed] = useState(false);

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

            <div className="flex justify-center mt-6">
                <div className="flex items-center pr-4 border border-gray-300 rounded shadow-md dark:border-gray-700">
                    <label className="p-4" htmlFor="force-slowdown-input">
                        Just set the desired speed, don't go back to 1x when
                        clicking the slowdown buttons again
                    </label>

                    <input
                        className="p-2 rounded"
                        id="force-slowdown-input"
                        name="force-slowdown-input"
                        type="checkbox"
                        checked={forceSpeed}
                        onChange={(e) => {
                            setForceSpeed(e.target.checked);
                        }}
                    />
                </div>
            </div>

            <ul className="grid grid-cols-2 gap-4 mt-6 sm:gap-6 sm:grid-cols-4">
                {speeds.map((speed) => (
                    <li key={speed}>
                        <SpeedButton speed={speed} forceSpeed={forceSpeed} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
