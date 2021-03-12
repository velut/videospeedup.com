/** Augment global window */
declare global {
    interface Window {
        plausible: Plausible;
    }
}

export interface Plausible {
    (event: string, other?: { callback?: any; props?: any }): void;
}
