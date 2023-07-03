import NextHead from 'next/head';

export function Head() {
    return (
        <NextHead>
            <meta charSet="utf-8" />

            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />

            {/* Global Open Graph tags */}
            <meta property="og:type" content="website" />
            <meta
                property="og:image"
                content="https://www.videospeedup.com/logo-512.png"
            />
            <meta property="og:image:alt" content="VideoSpeedup.com logo" />
            <meta property="og:site_name" content="VideoSpeedup.com" />

            {/* Global Twitter card tags */}
            <meta property="twitter:card" content="summary" />
            <meta
                property="twitter:image"
                content="https://www.videospeedup.com/logo-512.png"
            />
            <meta
                property="twitter:image:alt"
                content="VideoSpeedup.com logo"
            />
        </NextHead>
    );
}
