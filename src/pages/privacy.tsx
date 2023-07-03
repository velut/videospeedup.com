import NextHead from 'next/head';
import { A } from '../components/common/A';
import { Layout } from '../components/common/Layout';

export default function PrivacyPolicyPage() {
    const pageTitle = 'Privacy Policy - VideoSpeedup.com';
    const pageDescription = 'Privacy policy for VideoSpeedup.com';

    return (
        <>
            <NextHead>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />

                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta
                    property="og:url"
                    content="https://www.videospeedup.com/privacy"
                />

                <meta property="twitter:title" content={pageTitle} />
                <meta
                    property="twitter:description"
                    content={pageDescription}
                />
            </NextHead>

            <Layout>
                <article className="space-y-12">
                    <IntroSection />
                    <FirstPartySection />
                    <HostingSection />
                    <LinksToExternalWebsitesSection />
                    <ContactInformationSection />
                </article>
            </Layout>
        </>
    );
}

function IntroSection() {
    return (
        <section>
            <h1>Privacy Policy</h1>

            <p>This page contains the privacy policy for VideoSpeedup.com.</p>

            <p>The privacy policy was last updated on July 3, 2023.</p>
        </section>
    );
}

function FirstPartySection() {
    return (
        <section>
            <h2>First Party</h2>

            <p>
                On VideoSpeedup.com we do not directly collect personal data
                from our visitors.
            </p>
        </section>
    );
}

function HostingSection() {
    return (
        <section>
            <h2>Hosting</h2>

            <p>
                VideoSpeedup.com is hosted on{' '}
                <A href="https://vercel.com/">Vercel</A>, which may collect some
                data to provide its hosting services.
            </p>

            <p>
                To learn more about the data collected by Vercel, you can visit
                their{' '}
                <A href="https://vercel.com/legal/privacy-policy">
                    privacy policy
                </A>{' '}
                page.
            </p>
        </section>
    );
}

function LinksToExternalWebsitesSection() {
    return (
        <section>
            <h2>Links to External Websites</h2>

            <p>
                VideoSpeedup.com may contain links to external websites not
                operated by us and with different privacy policies.
            </p>

            <p>
                We recommend you to review the privacy policy of any website you
                may visit.
            </p>
        </section>
    );
}

function ContactInformationSection() {
    return (
        <section>
            <h2>Contact Information</h2>

            <p>
                You can reach us by email at{' '}
                <A href="mailto:info@videospeedup.com">info@videospeedup.com</A>
                .
            </p>
        </section>
    );
}
