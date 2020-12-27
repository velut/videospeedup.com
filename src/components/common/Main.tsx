export function Main(props: any) {
    return (
        <main className="container flex-grow max-w-screen-xl px-4 py-12 mx-auto sm:px-8 md:px-12 xl:px-20">
            {props.children}
        </main>
    );
}
