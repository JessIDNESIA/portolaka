import { writable } from "svelte/store";

export type Lang = "id" | "en";

const STORAGE_KEY = "portolaka-lang";

function getStoredLang(): Lang {
    if (typeof window === "undefined") return "id";
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "id") return stored;
    return "id";
}

function createLangStore() {
    const { subscribe, set, update } = writable<Lang>(getStoredLang());
    return {
        subscribe,
        set: (lang: Lang) => {
            if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, lang);
            set(lang);
        },
        toggle: () => {
            update((current) => {
                const next = current === "id" ? "en" : "id";
                if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, next);
                return next;
            });
        },
    };
}

export const lang = createLangStore();
