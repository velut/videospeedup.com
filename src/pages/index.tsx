import NextHead from 'next/head';
import { Layout } from '../components/common/Layout';

export default function IndexPage() {
    const pageTitle = 'Index page';

    return (
        <>
            <NextHead>
                <title>{pageTitle}</title>
            </NextHead>

            <Layout>
                <h1>hello</h1>
            </Layout>
        </>
    );
}
