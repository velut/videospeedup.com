import NextHead from 'next/head';
import { Layout } from '../components/common/Layout';
import { CreditsSection } from '../components/sections/CreditsSection';
import { CustomSpeedSection } from '../components/sections/CustomSpeedSection';
import { HowToSection } from '../components/sections/HowToSection';
import { SlowdownSection } from '../components/sections/SlowdownSection';
import { SpeedupSection } from '../components/sections/SpeedupSection';

export default function IndexPage() {
    const pageTitle =
        'VideoSpeedup.com | Easily adjust video playback speed on Youtube, Vimeo, Netflix, Prime Video and many more.';

    const pageDescription =
        'VideoSpeedup.com provides easy to use bookmarklets that let you adjust video playback speed on Youtube, Vimeo, Netflix, Prime Video and many more video platforms.';

    return (
        <>
            <NextHead>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </NextHead>

            <Layout>
                <div className="space-y-12">
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
