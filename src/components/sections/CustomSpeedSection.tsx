import { useState } from 'react';
import { SpeedButton } from '../buttons/SpeedButton';

export function CustomSpeedSection() {
    const [value, setValue] = useState('1');
    const [speed, setSpeed] = useState(parseFloat(value));
    const [forceSpeed, setForceSpeed] = useState(false);

    return (
        <section>
            <h2>Custom Speed Control</h2>

            <p>
                Use the input below to create a custom speedup (or slowdown)
                button, then install it just like the buttons above.
            </p>

            <p>
                Use values between <span className="italic">0</span> and{' '}
                <span className="italic">1</span> for a slowdown effect (for
                example, <span className="italic">0.28</span>); use values
                greater than <span className="italic">1</span> for a speedup
                effect (for example, <span className="italic">1.2</span>).
            </p>

            <div className="flex justify-center mt-6">
                <div className="flex items-center pr-4 border border-gray-300 rounded shadow-md dark:border-gray-700">
                    <label className="p-4" htmlFor="force-custom-speed-input">
                        Just set the desired speed, don't go back to 1x when
                        clicking the custom speed button again
                    </label>

                    <input
                        className="p-2 rounded"
                        id="force-custom-speed-input"
                        name="force-custom-speed-input"
                        type="checkbox"
                        checked={forceSpeed}
                        onChange={(e) => {
                            setForceSpeed(e.target.checked);
                        }}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 mt-6 sm:gap-6 sm:grid-cols-2">
                <div>
                    <label className="sr-only" htmlFor="custom-speed-input">
                        Enter the desired speed
                    </label>

                    <input
                        className="w-full h-full p-4 text-lg border border-gray-300 rounded dark:border-gray-700 dark:bg-gray-900"
                        id="custom-speed-input"
                        name="custom-speed-input"
                        type="number"
                        min={0}
                        step={0.01}
                        lang="en-US"
                        value={value}
                        onChange={(event) => {
                            const value = event.target.value;
                            setValue(value);

                            if (!value) {
                                return;
                            }

                            const speed = parseFloat(value);
                            if (speed < 0) {
                                return;
                            }

                            setSpeed(speed);
                        }}
                    />
                </div>

                <SpeedButton speed={speed} forceSpeed={forceSpeed} />
            </div>
        </section>
    );
}
