import { Link } from './Link';

export function Navbar() {
    return (
        <header className="p-5 text-gray-100 bg-gray-800 border-b border-gray-700 dark:bg-gray-900">
            <h1>
                <Link href="/">
                    <span className="font-bold text-gray-100 hover:underline">
                        VideoSpeedup.com
                    </span>
                </Link>
            </h1>

            <p className="mt-1 text-lg font-bold">
                Easily adjust video playback speed on Youtube, Vimeo, Netflix,
                Prime Video and many more.
            </p>
        </header>
    );
}
