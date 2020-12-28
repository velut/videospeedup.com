import { A } from './A';
import { Link } from './Link';

export function Footer() {
    return (
        <footer className="p-5 bg-gray-100 border-t border-gray-300 dark:bg-gray-900 dark:border-gray-700 md:flex md:items-center md:justify-between">
            <p className="mt-0">
                <Link href="/">
                    <span className="font-bold text-gray-900 hover:underline dark:text-gray-100">
                        VideoSpeedup.com
                    </span>
                </Link>{' '}
                created by{' '}
                <A href="https://github.com/velut">Edoardo Scibona</A>
            </p>

            <ul className="mt-4 space-y-1 md:mt-0 sm:flex sm:space-x-4 sm:space-y-0">
                <li>
                    <Link href="/privacy">Privacy Policy</Link>
                </li>

                <li>
                    <A href="https://github.com/velut/videospeedup.com/issues">
                        Report an Issue
                    </A>
                </li>
            </ul>
        </footer>
    );
}
