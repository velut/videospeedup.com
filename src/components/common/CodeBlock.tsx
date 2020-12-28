export function CodeBlock({ code }: { code: string }) {
    return (
        <pre className="p-8 my-4 overflow-x-scroll bg-gray-100 border border-gray-300 rounded dark:bg-gray-900 dark:border-gray-700">
            <code>{code}</code>
        </pre>
    );
}
