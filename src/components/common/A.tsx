export function A({
    href,
    title,
    rel,
    children,
}: {
    href: string;
    title?: string;
    rel?: string;
    children: React.ReactNode;
}) {
    return (
        <a
            className="text-blue-700 dark:text-blue-300 hover:underline"
            href={href}
            title={title}
            rel={rel}
        >
            {children}
        </a>
    );
}
