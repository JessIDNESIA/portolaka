<script lang="ts">
    import { onMount } from "svelte";
    import { lang } from "$lib/stores/lang";
    import { content } from "$lib/content";
    import {
        MapPin,
        GraduationCap,
        Code,
        Layout,
        Database,
        Trophy,
        ArrowUpRight,
    } from "lucide-svelte";

    let visible = false;
    $: t = content[$lang].education;

    onMount(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) visible = true;
            },
            { threshold: 0.1 },
        );
        const section = document.getElementById("education");
        if (section) observer.observe(section);
        return () => observer.disconnect();
    });
</script>

<section
    id="education"
    class="relative min-h-screen bg-background text-white font-body py-32 md:py-48 px-6 md:px-12 lg:px-24 overflow-hidden overflow-y-auto selection:bg-primary selection:text-black"
>
    <!-- Animated Background elements -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div
            class="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse-soft"
        ></div>
        <div
            class="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-[150px] animate-pulse-soft"
            style="animation-delay: 2s;"
        ></div>
        <div class="grid-pattern absolute inset-0 opacity-10"></div>
    </div>

    <div
        class="relative z-10 max-w-7xl mx-auto transition-all duration-1000"
        class:opacity-0={!visible}
        class:opacity-100={visible}
    >
        <!-- Section Header -->
        <header
            class="flex flex-col items-center text-center space-y-8 mb-24 px-6"
        >
            <div
                class="inline-flex items-center gap-4 px-4 py-1.5 border border-white/5 rounded-full bg-white/[0.03] backdrop-blur-md"
            >
                <div
                    class="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(255,107,0,0.8)]"
                ></div>
                <span
                    class="font-label text-primary uppercase tracking-[0.4em] text-[10px] font-black"
                    >{t.tag}</span
                >
            </div>

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
                class="font-body text-white/50 text-xl md:text-2xl max-w-2xl leading-relaxed font-light mx-auto"
            >
                {t.subtitle}
            </p>
        </header>

        <!-- School Card -->
        <div
            class="group relative overflow-hidden rounded-3xl glass-panel obsidian-glow transition-all duration-700 border border-white/5 hover:border-primary/20 mb-32"
        >
            <!-- Image Area - Specially adjusted for Light-Themed image -->
            <div
                class="relative w-full aspect-[21/9] overflow-hidden bg-white/5"
            >
                <!-- Transition to grayscale with light theme compensation -->
                <img
                    src="/idn-solo.webp"
                    alt="IDN Boarding School Campus"
                    class="w-full h-full object-cover grayscale opacity-90 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                />

                <!-- Stronger vignette for light-themed images to blend with background -->
                <div
                    class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90"
                ></div>
                <div
                    class="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40"
                ></div>

                <!-- Refined Floating Badge: Black with Vibrant Green Outline -->
                <div
                    class="absolute top-8 right-8 px-5 py-2.5 bg-black border border-[#00ff88] text-[#00ff88] rounded-full font-label text-[10px] font-black tracking-widest uppercase flex items-center gap-3 shadow-[0_0_20px_rgba(0,255,136,0.4)] z-30"
                >
                    <span class="relative flex h-2.5 w-2.5">
                        <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff88] opacity-80"
                        ></span>
                        <span
                            class="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00ff88] shadow-[0_0_12px_rgba(0,255,136,1)]"
                        ></span>
                    </span>
                    {t.active}
                </div>
            </div>

            <!-- Content Area -->
            <div class="p-8 md:p-16 -mt-16 md:-mt-24 relative z-10">
                <div class="grid md:grid-cols-12 gap-12 items-end">
                    <div class="md:col-span-7 space-y-10">
                        <div>
                            <h2
                                class="font-headline text-5xl md:text-7xl font-black tracking-tighter mb-6 text-white leading-tight"
                            >
                                {@html t.schoolName.replace("\n", " ")}
                            </h2>
                            <div
                                class="flex items-center gap-3 text-white/40 font-label text-xs uppercase tracking-[0.2em] font-bold bg-white/5 w-fit px-4 py-2 rounded-lg border border-white/5"
                            >
                                <MapPin size={16} class="text-primary" />
                                {t.location}
                            </div>
                        </div>

                        <div
                            class="p-8 md:p-10 rounded-2xl bg-white/[0.03] border border-white/5 relative group/maj hover:border-primary/20 transition-all duration-500"
                        >
                            <span
                                class="font-label text-[10px] uppercase tracking-[0.3em] font-black text-primary mb-4 block"
                                >{t.majorLabel}</span
                            >
                            <h3
                                class="font-headline text-3xl font-black text-white mb-4 uppercase tracking-tight"
                            >
                                {t.majorName}
                            </h3>
                            <p
                                class="text-white/50 leading-relaxed text-lg font-light max-w-lg"
                            >
                                Immersive technical residency focused on
                                enterprise-scale development, architectural
                                patterns, and full-stack implementation.
                            </p>
                        </div>
                    </div>

                    <div class="md:col-span-5 flex flex-col gap-6">
                        <div class="flex gap-6">
                            <div
                                class="flex-1 p-8 rounded-2xl border border-white/5 bg-white/[0.02] text-center group/card transition-all duration-500 hover:bg-white/[0.05]"
                            >
                                <span
                                    class="block font-headline text-5xl font-black text-white mb-2 leading-none"
                                    >{t.period.split(" — ")[0]}</span
                                >
                                <span
                                    class="font-label text-[9px] text-white/30 uppercase tracking-[0.2em] font-bold"
                                    >Enrollment</span
                                >
                            </div>
                            <div
                                class="flex-1 p-8 rounded-2xl border border-white/5 bg-white/[0.02] text-center group/card transition-all duration-500 hover:bg-white/[0.05]"
                            >
                                <span
                                    class="block font-headline text-5xl font-black text-primary mb-2 leading-none"
                                    >4.0</span
                                >
                                <span
                                    class="font-label text-[9px] text-white/30 uppercase tracking-[0.2em] font-bold"
                                    >GPA Rating</span
                                >
                            </div>
                        </div>
                        <button
                            class="group w-full py-5 rounded-2xl bg-primary text-black font-label text-[11px] font-black uppercase tracking-[0.3em] hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(255,107,0,0.2)]"
                        >
                            Institution Details
                            <ArrowUpRight
                                size={18}
                                class="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Specializations Grid -->
        <section class="mb-32">
            <div
                class="flex items-center justify-between mb-16 border-b border-white/5 pb-8"
            >
                <h2
                    class="font-headline text-4xl font-black tracking-tighter uppercase text-white"
                >
                    {t.subjectsTitle}
                </h2>
                <span
                    class="hidden md:block font-label text-[10px] text-white/20 uppercase tracking-[0.4em] font-bold italic"
                    >CURRICULUM v2.4</span
                >
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Frontend -->
                <div
                    class="group glass-panel p-10 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
                >
                    <div class="flex justify-between items-start mb-10">
                        <div
                            class="text-primary/10 font-headline text-8xl font-black leading-none group-hover:text-primary/20 transition-colors"
                        >
                            01
                        </div>
                        <div
                            class="p-3 bg-primary/10 rounded-xl text-primary transition-transform group-hover:rotate-12"
                        >
                            <Layout size={24} />
                        </div>
                    </div>
                    <h3
                        class="font-headline text-2xl font-black text-white mb-8 uppercase tracking-tight"
                    >
                        {t.subject1}
                    </h3>
                    <div class="flex flex-wrap gap-2.5">
                        {#each t.subject1Chips as tool}
                            <span
                                class="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-[9px] font-label uppercase tracking-widest text-white/50 font-bold hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all cursor-default"
                            >
                                {tool}
                            </span>
                        {/each}
                    </div>
                </div>

                <!-- Web/Design -->
                <div
                    class="group glass-panel p-10 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 bg-white/[0.01]"
                >
                    <div class="flex justify-between items-start mb-10">
                        <div
                            class="text-white/5 font-headline text-8xl font-black leading-none group-hover:text-primary/20 transition-colors"
                        >
                            02
                        </div>
                        <div
                            class="p-3 bg-white/5 rounded-xl text-white/40 transition-transform group-hover:rotate-12 group-hover:text-primary group-hover:bg-primary/10 border border-white/5"
                        >
                            <Code size={24} />
                        </div>
                    </div>
                    <h3
                        class="font-headline text-2xl font-black text-white mb-8 uppercase tracking-tight"
                    >
                        {t.subject3}
                    </h3>
                    <div class="flex flex-wrap gap-2.5">
                        {#each t.subject3Chips as tool}
                            <span
                                class="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-[9px] font-label uppercase tracking-widest text-white/50 font-bold hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all cursor-default"
                            >
                                {tool}
                            </span>
                        {/each}
                    </div>
                </div>

                <!-- Mobile -->
                <div
                    class="group glass-panel p-10 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
                >
                    <div class="flex justify-between items-start mb-10">
                        <div
                            class="text-white/5 font-headline text-8xl font-black leading-none group-hover:text-primary/20 transition-colors"
                        >
                            03
                        </div>
                        <div
                            class="p-3 bg-white/5 rounded-xl text-white/40 transition-transform group-hover:rotate-12 group-hover:text-primary group-hover:bg-primary/10 border border-white/5"
                        >
                            <Database size={24} />
                        </div>
                    </div>
                    <h3
                        class="font-headline text-2xl font-black text-white mb-8 uppercase tracking-tight"
                    >
                        {t.subject2}
                    </h3>
                    <div class="flex flex-wrap gap-2.5">
                        {#each t.subject2Chips as tool}
                            <span
                                class="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-[9px] font-label uppercase tracking-widest text-white/50 font-bold hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all cursor-default"
                            >
                                {tool}
                            </span>
                        {/each}
                    </div>
                </div>
            </div>
        </section>

        <!-- Achievements -->
        <section>
            <div class="mb-16">
                <h2
                    class="font-headline text-4xl font-black tracking-tighter uppercase text-white"
                >
                    {t.achievementTitle}
                </h2>
            </div>

            <div class="relative group">
                <div
                    class="absolute -inset-1 bg-gradient-to-r from-primary/20 to-orange-600/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-700"
                ></div>
                <div
                    class="relative glass-panel rounded-[2.5rem] p-16 md:p-32 border border-dashed border-white/10 hover:border-primary/30 transition-all duration-700 flex flex-col items-center text-center group-hover:bg-white/[0.02]"
                >
                    <div
                        class="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-12 transition-all duration-700 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-[0_0_30px_rgba(255,107,0,0.3)]"
                    >
                        <Trophy size={40} class="text-primary" />
                    </div>
                    <h3
                        class="font-headline text-4xl font-black text-white mb-6 uppercase tracking-tight"
                    >
                        {t.achievementEmpty}
                    </h3>
                    <p
                        class="font-body text-lg text-white/40 max-w-lg mb-12 leading-relaxed font-light"
                    >
                        {t.achievementDesc.replace("**", "").replace("**", "")}
                    </p>

                    <div
                        class="flex items-center gap-4 px-6 py-3 rounded-full bg-black/60 text-white/40 font-label text-[10px] uppercase tracking-[0.4em] font-black border border-white/5 group-hover:border-primary/20 group-hover:text-primary transition-all"
                    >
                        Status: Exploring
                        <span class="relative flex h-2 w-2">
                            <span
                                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
                            ></span>
                            <span
                                class="relative inline-flex rounded-full h-2 w-2 bg-primary"
                            ></span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</section>

<style>
    .glass-panel {
        background: rgba(18, 18, 18, 0.4);
        backdrop-filter: blur(20px) saturate(180%);
    }

    .obsidian-glow {
        box-shadow:
            0 0 60px -15px rgba(0, 0, 0, 0.8),
            inset 0 0 40px rgba(255, 255, 255, 0.02);
    }

    .grid-pattern {
        background-image: radial-gradient(
            circle at 1px 1px,
            rgba(255, 107, 0, 0.05) 1px,
            transparent 0
        );
        background-size: 40px 40px;
    }
</style>
