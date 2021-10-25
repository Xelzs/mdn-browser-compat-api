declare module '@xelzs/mdn-browser-compat-api' {
    import type { Browsers } from '@mdn/browser-compat-data/types';

    export type Folders =
        | 'api'
        | 'browsers'
        | 'css'
        | 'html'
        | 'http'
        | 'javascript'
        | 'mathml'
        | 'scripts'
        | 'svg'
        | 'webdriver'
        | 'webextensions'
        | 'xpath'
        | 'xslt';

    /**
     * Search for a feature.\
     * You can add an optional parameter folder to search inside specific [folder](https://github.com/mdn/browser-compat-data#repository-contents).
     * @param query The query to search for.
     * @param folder The folder to search in.
     */
    export function find(query: string, folder?: Folders): string[];

    /**
     * Get a list of features from mdn with the formatted paths.\
     * You can add an optional parameter `folder` to get features from a [folder](https://github.com/mdn/browser-compat-data#repository-contents).
     * @param folder The folder to get the features
     */
    export function getFeatures(folder?: Folders): string[];

    /**
     * Get the list of folders inside [@mdn/browser-compat-data](https://github.com/mdn/browser-compat-data).
     */
    export function getFolders(): string[];

    /**
     * Get the list of browsers. You check the schema at [@mdn-compat-data-schema.md](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md)
     */
    export function getBrowsers(): Browsers;

    /**
     * Get a list of object with corresponding features.\
     * You check the schema at [@mdn-compat-data-schema.md](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md)
     * @param query The query to get
     */
    export function get(query: string): string[];

    /**
     * Update data files. (By default, generated during installation).
     */
    export function updateData(): void;
}
