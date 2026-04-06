<script lang="ts">
    import { onMount } from "svelte";
    import { lang } from "$lib/stores/lang";
    import { content } from "$lib/content";
    import {
        BookOpen,
        ShieldCheck,
        Cpu,
        Rocket,
        Sparkles,
        Hexagon,
    } from "lucide-svelte";

    let visible = false;
    $: t = content[$lang].about;

    onMount(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) visible = true;
            },
            { threshold: 0.1 },
        );
        const section = document.getElementById("about");
        if (section) observer.observe(section);

        // Simple parallax effect for shards
        const handleMouseMove = (e: MouseEvent) => {
            const x = (window.innerWidth / 2 - e.pageX) / 45;
            const y = (window.innerHeight / 2 - e.pageY) / 45;

            const shards = document.querySelectorAll(".shard");
            shards.forEach((shard, index) => {
                const element = shard as HTMLElement;
                const factor = (index + 1) * 10;
                element.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            observer.disconnect();
            window.removeEventListener("mousemove", handleMouseMove);
        };
    });
</script>

<section
    id="about"
    class="relative min-h-screen bg-[#0e0e0e] text-white font-body selection:bg-primary/30 py-32 md:py-48 px-6 md:px-12 lg:px-24 overflow-hidden overflow-y-auto"
>
    <!-- Decorative Floating Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div
            class="shard absolute w-32 h-32 top-[15%] left-[5%] opacity-20 animate-spin-slow bg-gradient-to-br from-primary/20 to-transparent blur-sm"
            style="clip-path: polygon(50% 0%, 100% 100%, 0% 80%);"
        ></div>
        <div
            class="shard absolute w-48 h-48 top-[60%] right-[10%] opacity-10 animate-pulse-soft bg-gradient-to-br from-orange-900/40 to-transparent blur-md"
            style="clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);"
        ></div>
        <div
            class="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] animate-pulse-soft"
        ></div>
        <div
            class="absolute bottom-[10%] right-[15%] w-[300px] h-[300px] bg-orange-900/10 rounded-full blur-[100px] animate-pulse-soft"
            style="animation-delay: 2s;"
        ></div>
        <div class="grid-pattern absolute inset-0 opacity-20"></div>
    </div>

    <div
        class="relative z-10 max-w-7xl mx-auto w-full transition-all duration-1000"
        class:opacity-0={!visible}
        class:opacity-100={visible}
    >
        <!-- Section Header -->
        <header
            class="flex flex-col items-center text-center space-y-8 mb-24 px-6"
        >
            <div class="flex items-center gap-4">
                <div
                    class="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_15px_rgba(255,107,0,0.8)]"
                ></div>
                <span
                    class="font-label text-primary uppercase tracking-[0.5em] text-[10px] font-extrabold"
                    >{t.tag}</span
                >
            </div>

            <h2
                class="font-headline text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.75] max-w-4xl"
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
                class="font-body text-white/50 text-xl md:text-2xl max-w-2xl leading-relaxed"
            >
                {t.subtitle}
            </p>
        </header>

        <!-- Main Grid -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
            <!-- Background Card -->
            <div
                class="md:col-span-8 glass-card rounded-2xl p-8 md:p-14 group border border-white/5 hover:border-primary/30 transition-all duration-500"
            >
                <div class="flex items-center gap-5 mb-12">
                    <div
                        class="p-3 bg-primary/10 rounded-xl border border-primary/20 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                    >
                        <BookOpen size={28} />
                    </div>
                    <h3
                        class="font-headline font-bold text-3xl uppercase tracking-tight text-white"
                    >
                        {t.backgroundTitle}
                    </h3>
                </div>

                <div class="flex flex-col md:flex-row gap-12 items-start">
                    <div
                        class="w-full md:w-2/5 aspect-[4/5] rounded-xl overflow-hidden border border-white/10 group-hover:border-primary/40 shadow-2xl transition-all duration-700"
                    >
                        <!-- Dark theme structure image placeholder -->
                        <div
                            class="w-full h-full bg-[#0a0a0a] flex items-center justify-center p-4 relative"
                        >
                            <img
                                src="Jose Shabra.jpg"
                                alt="Profile"
                                class="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                            />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none"
                            ></div>
                        </div>
                    </div>

                    <div class="w-full md:w-3/5 space-y-10 text-justify">
                        <p
                            class="font-body text-xl md:text-2xl text-white/80 leading-relaxed font-light"
                        >
                            {@html t.backgroundBody.replace(
                                /\*\*(.*?)\*\*/g,
                                '<span class="text-white font-bold border-b-2 border-primary/40">$1</span>',
                            )}
                        </p>
                        <div class="flex flex-wrap gap-4">
                            <div
                                class="bg-white/5 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10 group-hover:bg-primary/5 group-hover:border-primary/30 transition-all duration-300"
                            >
                                <span
                                    class="font-label text-[11px] text-primary uppercase tracking-widest font-bold"
                                    >Software Engineering</span
                                >
                            </div>
                            <div
                                class="bg-white/5 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10 group-hover:bg-primary/5 group-hover:border-primary/30 transition-all duration-300"
                            >
                                <span
                                    class="font-label text-[11px] text-primary uppercase tracking-widest font-bold"
                                    >Full Stack Developer</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Strengths Card -->
            <div
                class="md:col-span-4 glass-card rounded-2xl p-8 group border border-white/5 hover:border-primary/30 transition-all duration-500 bg-white/[0.02]"
            >
                <div class="flex items-center gap-4 mb-12">
                    <div
                        class="p-3 bg-primary/10 rounded-xl border border-primary/20 text-primary transition-transform duration-500 group-hover:scale-110"
                    >
                        <ShieldCheck size={26} />
                    </div>
                    <h3
                        class="font-headline font-bold text-2xl uppercase tracking-tight text-white"
                    >
                        {t.strengthsTitle}
                    </h3>
                </div>

                <div class="space-y-10">
                    {#each t.strengths as item}
                        <div class="flex gap-5 group/item cursor-default">
                            <div
                                class="text-white/20 transition-all duration-500 group-hover/item:text-primary group-hover/item:scale-125 pt-1"
                            >
                                <Sparkles size={18} />
                            </div>
                            <div>
                                <h4
                                    class="font-label text-[12px] uppercase font-extrabold text-white mb-2 tracking-[0.2em]"
                                >
                                    {item.label}
                                </h4>
                                <p
                                    class="font-body text-sm text-white/40 leading-relaxed font-medium"
                                >
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>

            <!-- Soft Skills Card -->
            <div
                class="md:col-span-6 glass-card rounded-2xl p-8 group border border-white/5 hover:border-primary/30 transition-all duration-500"
            >
                <div class="flex items-center gap-4 mb-10">
                    <div
                        class="p-3 bg-primary/10 rounded-xl border border-primary/20 text-primary transition-transform duration-500 group-hover:scale-110"
                    >
                        <Hexagon size={24} />
                    </div>
                    <h3
                        class="font-headline font-bold text-2xl uppercase tracking-tight text-white"
                    >
                        {t.softSkillsTitle}
                    </h3>
                </div>

                <div class="flex flex-wrap gap-3">
                    {#each t.tags as tag, i}
                        <span
                            class="px-5 py-3 bg-white/5 border border-white/10 rounded-xl font-label text-[10px] text-white/70 uppercase tracking-widest hover:border-primary/50 hover:text-white hover:bg-primary/5 transition-all cursor-default"
                            style="--delay: {i * 0.1}"
                        >
                            {tag}
                        </span>
                    {/each}
                </div>
            </div>

            <!-- Career Interest Card -->
            <div
                class="md:col-span-6 glass-card rounded-2xl p-8 group flex flex-col justify-between border border-white/5 hover:border-primary/30 transition-all duration-500"
            >
                <div>
                    <div class="flex items-center gap-4 mb-10">
                        <div
                            class="p-3 bg-primary/10 rounded-xl border border-primary/20 text-primary transition-transform duration-500 group-hover:scale-110"
                        >
                            <Rocket size={24} />
                        </div>
                        <h3
                            class="font-headline font-bold text-2xl uppercase tracking-tight text-white"
                        >
                            {t.careerTitle}
                        </h3>
                    </div>
                    <p
                        class="font-body text-white/60 text-xl mb-12 leading-relaxed font-light"
                    >
                        {@html t.careerBody.replace(
                            /\*\*(.*?)\*\*/g,
                            '<span class="text-white font-bold">$1</span>',
                        )}
                    </p>
                </div>

                <div class="pt-8 border-t border-white/5 space-y-6">
                    <div
                        class="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 relative group-hover:border-primary/20 group-hover:bg-primary/5 transition-all"
                    >
                        <div
                            class="absolute -top-3 left-6 px-3 py-0.5 bg-[#0e0e0e] font-label text-[8px] text-primary uppercase tracking-[0.3em] font-black border border-primary/20 rounded-full"
                        >
                            Core Mission
                        </div>
                        <p
                            class="font-body text-md text-white/80 italic leading-relaxed"
                        >
                            "{t.careerCta}"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .glass-card {
        background: rgba(26, 26, 26, 0.4);
        backdrop-filter: blur(16px) saturate(180%);
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    }

    .grid-pattern {
        background-image: linear-gradient(
                rgba(255, 255, 255, 0.03) 1px,
                transparent 1px
            ),
            linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.03) 1px,
                transparent 1px
            );
        background-size: 50px 50px;
    }
</style>
