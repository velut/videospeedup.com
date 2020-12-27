import { Footer } from './Footer';
import { Head } from './Head';
import { Main } from './Main';
import { Navbar } from './Navbar';

export function Layout(props: any) {
    return (
        <>
            <Head />

            <div className="flex flex-col h-screen text-gray-900 bg-white dark:text-gray-100 dark:bg-gray-800">
                <Navbar />

                <Main {...props} />

                <Footer />
            </div>
        </>
    );
}
