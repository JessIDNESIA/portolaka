<script lang="ts">
    import { lang } from "$lib/stores/lang";
    import { content } from "$lib/content";
    import {
        LayoutGrid,
        User,
        GraduationCap,
        Zap,
        Briefcase,
        Trophy,
        Target,
        TrendingUp,
        Mail,
        Languages,
        ChevronRight,
    } from "lucide-svelte";
    import { onMount } from "svelte";

    $: t = content[$lang].nav;

    const navItems = [
        { id: "opening", label: "home", icon: LayoutGrid, href: "#opening" },
        { id: "about", label: "about", icon: User, href: "#about" },
        { id: "education", label: "education", icon: GraduationCap, href: "#education" },
        { id: "skills", label: "skills", icon: Zap, href: "#skills" },
        { id: "projects", label: "portfolio", icon: Briefcase, href: "#projects" },
        { id: "achievements", label: "achievements", icon: Trophy, href: "#achievements" },
        { id: "challenges", label: "challenges", icon: Target, href: "#challenges" },
        { id: "career", label: "career", icon: TrendingUp, href: "#career" },
        { id: "contact", label: "contact", icon: Mail, href: "#contact" },
    ];

    let activeSection = "opening";

    function setActive(id: string) {
        activeSection = id;
    }

    onMount(() => {
        const observerOptions = {
            root: null,
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    activeSection = entry.target.id;
                }
            });
        }, observerOptions);

        navItems.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    });
</script>

<aside
    class="fixed left-0 top-0 h-screen w-20 md:w-64 bg-background/80 backdrop-blur-3xl border-r border-white/5 z-50 flex flex-col items-center md:items-start py-10 px-4 md:px-8 transition-all duration-500 group hover:w-64"
>
    <!-- Logo/Brand -->
    <div class="mb-10 flex items-center gap-4">
        <div
            class="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(255,107,0,0.4)]"
        >
            <span class="text-black font-black text-xl font-headline">J</span>
        </div>
        <div
            class="hidden md:block group-hover:block transition-all duration-300 overflow-hidden"
        >
            <p
                class="text-white font-black text-xs tracking-[0.3em] font-headline uppercase whitespace-nowrap"
            >
                JOSE SHABRA
            </p>
            <p
                class="text-primary font-bold text-[8px] tracking-[0.2em] font-label uppercase"
            >
                Software Engineer
            </p>
        </div>
    </div>

    <!-- Navigation Links -->
    <nav class="flex-1 w-full space-y-1 overflow-y-auto no-scrollbar py-4 pr-1">
        {#each navItems as item}
            <a
                href={item.href}
                class="flex items-center gap-4 p-3 rounded-xl transition-all group/nav relative {activeSection ===
                item.id
                    ? 'bg-primary/10 text-primary'
                    : 'text-white/40 hover:text-white/60 hover:bg-white/5'}"
                on:click={() => setActive(item.id)}
            >
                <svelte:component
                    this={item.icon}
                    size={18}
                    strokeWidth={activeSection === item.id ? 2.5 : 2}
                    class="transition-transform group-hover/nav:scale-110"
                />
                <span
                    class="hidden md:block group-hover:block font-label text-[10px] font-bold uppercase tracking-widest whitespace-nowrap"
                >
                    {t[item.label]}
                </span>

                {#if activeSection === item.id}
                    <div
                        class="absolute -right-2 w-1.5 h-6 bg-primary rounded-full hidden md:block group-hover:block blur-[1px]"
                    ></div>
                {/if}
            </a>
        {/each}
    </nav>

    <!-- Bottom Controls -->
    <div class="w-full pt-6 border-t border-white/5 space-y-4">
        <!-- Language Switcher -->
        <button
            on:click={() => lang.toggle()}
            class="w-full flex items-center gap-4 p-3 rounded-xl text-white/40 hover:text-primary transition-all group/lang"
        >
            <Languages
                size={18}
                class="group-hover/lang:rotate-12 transition-transform"
            />
            <div
                class="hidden md:block group-hover:block text-left overflow-hidden"
            >
                <p
                    class="font-label text-[9px] font-bold uppercase tracking-widest whitespace-nowrap"
                >
                    Language
                </p>
                <p class="text-white font-bold text-[10px] whitespace-nowrap">
                    {$lang === "en" ? "English" : "Indonesia"}
                </p>
            </div>
            <ChevronRight
                size={14}
                class="ml-auto hidden md:block group-hover:block text-white/20"
            />
        </button>

        <!-- Signature -->
        <div
            class="hidden md:flex group-hover:flex items-center gap-4 px-3 opacity-30 select-none pb-2"
        >
            <div class="w-1 h-1 rounded-full bg-white"></div>
            <span
                class="font-label text-[8px] uppercase tracking-widest font-bold text-white whitespace-nowrap"
                >v.2026.KINETIC</span
            >
        </div>
    </div>
</aside>

<style>
    /* Hide scrollbar for Chrome, Safari and Opera */
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .no-scrollbar {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }

    @media (max-width: 768px) {
        aside:not(:hover) {
            width: 5rem;
            padding-left: 1rem;
            padding-right: 1rem;
        }
    }
</style>
