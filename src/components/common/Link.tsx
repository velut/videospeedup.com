import NextLink from 'next/link';

export function Link({
    href,
    title,
    children,
}: {
    href: string;
    title?: string;
    children: React.ReactNode;
}) {
    return (
        <NextLink href={href}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
                className="text-blue-700 dark:text-blue-300 hover:underline"
                title={title}
            >
                {children}
            </a>
        </NextLink>
    );
}
