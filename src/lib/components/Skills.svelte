<script lang="ts">
    import { onMount } from "svelte";
    import { lang } from "$lib/stores/lang";
    import { content } from "$lib/content";

    let visible = false;
    let barsAnimated = false;
    $: t = content[$lang].skills;

    onMount(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    visible = true;
                    // Retrigger bar animation slightly after section becomes visible
                    setTimeout(() => (barsAnimated = true), 500);
                }
            },
            { threshold: 0.1 },
        );
        const section = document.getElementById("skills");
        if (section) observer.observe(section);
        return () => observer.disconnect();
    });
</script>

<!-- Main Skills Section -->
<section
    id="skills"
    class="relative min-h-screen py-24 px-6 lg:pl-32 overflow-hidden bg-background text-on-surface font-body w-full"
>
    <!-- Background Decor: Grid Pattern -->
    <div
        class="absolute inset-0 bg-[radial-gradient(rgba(255,107,0,0.07)_1px,transparent_1px)] bg-[length:40px_40px] opacity-30 pointer-events-none"
    ></div>

    <!-- Background Decor: Soft Blobs -->
    <div
        class="absolute top-[-5%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none animate-pulse-soft"
    ></div>
    <div
        class="absolute bottom-[5%] left-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -z-10 pointer-events-none animate-pulse-soft"
        style="animation-delay: -2s"
    ></div>

    <div class="relative max-w-screen-xl mx-auto space-y-32">
        <!-- Hero Title Section -->
        <header
            class="flex flex-col items-center text-center space-y-8 mb-24 px-6"
        >
            <h2
                class="font-headline text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.75]"
            >
                <span
                    class="text-transparent bg-clip-text bg-gradient-to-br from-[#ff9159] to-[#ff7a2f]"
                >
                    {t.title.split(" ")[0]}
                </span>
                <span class="text-white">
                    {t.title.split(" ").slice(1).join(" ")}
                </span>
            </h2>
            <p
                class="font-body text-on-surface-variant max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
            >
                {t.subtitle}
            </p>
        </header>

        <!-- Hard Skills List -->
        <div class="space-y-16">
            <div
                class="flex items-center gap-6 {visible
                    ? 'opacity-100'
                    : 'opacity-0'} transition-opacity duration-700 delay-300"
            >
                <div
                    class="h-[1px] flex-1 bg-gradient-to-r from-transparent via-outline-variant/40 to-outline-variant/40"
                ></div>
                <h2
                    class="font-label text-xs md:text-sm tracking-[0.4em] text-primary font-bold whitespace-nowrap"
                >
                    {t.hardSkillsTitle}
                </h2>
                <div class="h-[1px] w-12 bg-outline-variant/40"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                {#each t.items.hard as skill, i}
                    <div
                        class="group space-y-4 transition-all duration-700 ease-out"
                        style="transition-delay: {300 +
                            i * 100}ms; opacity: {visible
                            ? 1
                            : 0}; transform: {visible
                            ? 'translateY(0)'
                            : 'translateY(24px)'}"
                    >
                        <div class="flex justify-between items-end">
                            <div class="flex items-center gap-4">
                                <iconify-icon
                                    icon={skill.icon}
                                    width="28"
                                    class="group-hover:scale-110 transition-transform duration-300"
                                ></iconify-icon>
                                <span
                                    class="font-headline font-bold text-2xl lg:text-3xl tracking-tight text-white/90 group-hover:text-primary transition-colors"
                                    >{skill.name}</span
                                >
                            </div>
                            <span
                                class="font-label text-primary font-bold text-lg"
                                >{skill.pct}%</span
                            >
                        </div>
                        <!-- Progress Bar Container -->
                        <div
                            class="h-1.5 w-full bg-surface-container-highest/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/5 shadow-inner"
                        >
                            <div
                                class="h-full bg-primary rounded-full transition-all duration-[1500ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_0_15px_rgba(255,107,0,0.6)]"
                                style="width: {barsAnimated ? skill.pct : 0}%"
                            ></div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Tools & Software Grid -->
        <div class="space-y-16">
            <div
                class="flex items-center gap-6 {visible
                    ? 'opacity-100'
                    : 'opacity-0'} transition-opacity duration-700 delay-500"
            >
                <div class="h-[1px] w-12 bg-outline-variant/40"></div>
                <h2
                    class="font-label text-xs md:text-sm tracking-[0.4em] text-primary font-bold whitespace-nowrap"
                >
                    {t.toolsTitle}
                </h2>
                <div
                    class="h-[1px] flex-1 bg-gradient-to-l from-transparent via-outline-variant/40 to-outline-variant/40"
                ></div>
            </div>

            <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {#each t.items.tools as tool, i}
                    <div
                        class="group p-8 flex flex-col items-center gap-5 bg-surface-container/30 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-surface-container-high/50 hover:-translate-y-2 transition-all duration-500 cursor-default shadow-lg"
                        style="transition-delay: {500 +
                            i * 75}ms; opacity: {visible
                            ? 1
                            : 0}; transform: {visible
                            ? 'translateY(0)'
                            : 'translateY(24px)'}"
                    >
                        <div
                            class="w-16 h-16 flex items-center justify-center bg-surface-container-highest/80 rounded-2xl text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-500 shadow-xl group-hover:shadow-[0_0_20px_rgba(255,107,0,0.3)]"
                        >
                            <iconify-icon icon={tool.icon} width="36"
                            ></iconify-icon>
                        </div>
                        <span
                            class="font-label text-xs tracking-[0.2em] font-black text-on-surface/60 group-hover:text-white transition-colors text-center"
                            >{tool.name}</span
                        >
                    </div>
                {/each}
            </div>
        </div>

        <!-- Core Human Skills Section -->
        <div class="space-y-16 pb-20">
            <div
                class="flex items-center gap-6 {visible
                    ? 'opacity-100'
                    : 'opacity-0'} transition-opacity duration-700 delay-700"
            >
                <div
                    class="h-[1px] flex-1 bg-gradient-to-r from-transparent via-outline-variant/40 to-outline-variant/40"
                ></div>
                <h2
                    class="font-label text-xs md:text-sm tracking-[0.4em] text-primary font-bold whitespace-nowrap"
                >
                    {t.softSkillsTitle}
                </h2>
                <div class="h-[1px] w-12 bg-outline-variant/40"></div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {#each t.items.soft as s, i}
                    <div
                        class="relative p-12 group bg-surface-container/20 backdrop-blur-2xl border border-white/5 rounded-[40px] hover:bg-surface-container-high/40 transition-all duration-700 overflow-hidden"
                        style="transition-delay: {700 +
                            i * 200}ms; opacity: {visible
                            ? 1
                            : 0}; transform: {visible
                            ? 'translateY(0)'
                            : 'translateY(32px)'}"
                    >
                        <!-- Glow effect in card -->
                        <div
                            class="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"
                        ></div>

                        <div class="relative z-10 space-y-6">
                            <div
                                class="text-primary group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 inline-block drop-shadow-[0_0_10px_rgba(255,107,0,0.3)]"
                            >
                                <iconify-icon icon={s.icon} width="64"
                                ></iconify-icon>
                            </div>
                            <div class="space-y-3">
                                <h3
                                    class="font-headline text-3xl font-black tracking-tight"
                                >
                                    {s.name}
                                </h3>
                                <p
                                    class="font-body text-on-surface-variant/90 leading-relaxed text-lg italic decoration-primary/30 decoration-1 underline-offset-4"
                                >
                                    {s.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>

    <!-- Final Decorative Tonal Glow -->
    <div
        class="absolute top-[40%] left-[80%] w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[150px] -z-20 pointer-events-none opacity-40 animate-pulse"
        style="animation-duration: 8s"
    ></div>
</section>

<style>
    /* Ensure Material Symbols look sharp and follow the style */
    :global(.material-symbols-outlined) {
        font-variation-settings:
            "FILL" 0,
            "wght" 400,
            "GRAD" 0,
            "opsz" 48;
        display: block;
    }

    /* Staggered text reveal utility if needed */
    .font-headline {
        text-rendering: optimizeLegibility;
    }
</style>
