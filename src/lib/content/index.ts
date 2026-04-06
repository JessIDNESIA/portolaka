import { id } from "./id";
import { en } from "./en";
import type { Lang } from "$lib/stores/lang";

export type Content = {
    [K in keyof typeof id]: {
        [P in keyof (typeof id)[K]]: (typeof id)[K][P] extends any[]
        ? any[]
        : (typeof id)[K][P] extends object
        ? any
        : string;
    };
};

export const content: Record<Lang, any> = {
    id,
    en,
};

export { id, en };
