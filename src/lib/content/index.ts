import { id } from "./id";
import { en } from "./en";
import type { Lang } from "$lib/stores/lang";

export type Content = typeof id;

export const content: Record<Lang, Content> = {
    id,
    en,
};

export { id, en };
