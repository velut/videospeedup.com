import { useState } from 'react';
import { SpeedButton } from '../buttons/SpeedButton';

export function SpeedupSection() {
    const speeds = [1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.5, 4, 5];
    const [forceSpeed, setForceSpeed] = useState(false);

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

            <div className="flex justify-center mt-6">
                <div className="flex items-center pr-4 border border-gray-300 rounded shadow-md dark:border-gray-700">
                    <label className="p-4" htmlFor="force-speedup-input">
                        Just set the desired speed, don't go back to 1x when
                        clicking the speedup buttons again
                    </label>

                    <input
                        className="p-2 rounded"
                        id="force-speedup-input"
                        name="force-speedup-input"
                        type="checkbox"
                        checked={forceSpeed}
                        onChange={(e) => {
                            setForceSpeed(e.target.checked);
                        }}
                    />
                </div>
            </div>

            <ul className="grid grid-cols-2 gap-4 mt-6 sm:gap-6 sm:grid-cols-3 lg:grid-cols-4">
                {speeds.map((speed) => (
                    <li key={speed}>
                        <SpeedButton speed={speed} forceSpeed={forceSpeed} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
