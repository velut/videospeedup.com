export function SpeedButton({ speed }: { speed: number }) {
    const bookmarklet = `javascript:(function(){var v=document.querySelector('video');v.playbackRate=v.playbackRate!=1?1:${speed};})();`;
    const icon = speed < 1 ? '⏪' : '⏩';
    const text = `${icon} ${speed}x`;
    const classes =
        'flex items-center justify-center p-4 text-lg font-bold border border-gray-300 rounded shadow-md dark:border-gray-700';

    return (
        <>
            <div
                dangerouslySetInnerHTML={{
                    __html: `<a href="${bookmarklet}" class="${classes}">${text}</a>`,
                }}
            />
        </>
    );
}
