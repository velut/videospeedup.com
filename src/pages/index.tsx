import dynamic from 'next/dynamic';
import NextHead from 'next/head';
import { Layout } from '../components/common/Layout';
import { CreditsSection } from '../components/sections/CreditsSection';
import { CustomSpeedSection } from '../components/sections/CustomSpeedSection';
import { HowToSection } from '../components/sections/HowToSection';
import { SlowdownSection } from '../components/sections/SlowdownSection';
import { SpeedupSection } from '../components/sections/SpeedupSection';

const FeedbackForm = dynamic(
    (() =>
        import('../components/common/FeedbackForm').then(
            ({ FeedbackForm }) => FeedbackForm
        )) as any,
    { ssr: false }
) as any;

export default function IndexPage() {
    const pageTitle = `Speed up videos on Youtube, Vimeo, Netflix, Prime Video and many more | VideoSpeedup.com`;
    const pageDescription = `VideoSpeedup.com lets you easily change video playback speed on Youtube, Vimeo, Netflix, Prime Video and many more video platforms.`;

    return (
        <>
            <NextHead>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />

                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta
                    property="og:url"
                    content="https://www.videospeedup.com"
                />

                <meta property="twitter:title" content={pageTitle} />
                <meta
                    property="twitter:description"
                    content={pageDescription}
                />
            </NextHead>

            <Layout>
                <div className="space-y-12">
                    <FeedbackForm />
                    <HowToSection />
                    <SpeedupSection />
                    <SlowdownSection />
                    <CustomSpeedSection />
                    <CreditsSection />
                </div>
            </Layout>
        </>
    );
}
