import NextHead from 'next/head';

export function Head() {
    return (
        <NextHead>
            <meta charSet="utf-8" />

            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />

            {/* Plausible.io analytics */}
            {/* See https://github.com/vercel/next.js/issues/9070#issuecomment-552981178 */}
            {process.env.NODE_ENV === 'production' && process.browser && (
                <script
                    async
                    defer
                    data-domain="videospeedup.com"
                    src="https://plausible.io/js/plausible.js"
                />
            )}
        </NextHead>
    );
}
