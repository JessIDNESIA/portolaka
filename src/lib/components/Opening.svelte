<script lang="ts">
    import { onMount } from "svelte";
    import { lang } from "$lib/stores/lang";
    import { content } from "$lib/content";
    import { ArrowDownRight } from "lucide-svelte";

    let visible = false;
    onMount(() => {
        setTimeout(() => (visible = true), 100);
    });

    $: t = content[$lang].opening;
</script>

<main
    class="relative min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden"
>
    <!-- Background Elements -->
    <div class="glow-orb top-[-10%] left-[-10%]"></div>
    <div class="glow-orb bottom-[-20%] right-[-5%]"></div>

    <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto w-full transition-opacity duration-1000"
        class:opacity-0={!visible}
        class:opacity-100={visible}
    >
        <!-- Left Column: Content -->
        <div class="flex flex-col items-start gap-10 z-20">
            <!-- Status Badge -->
            <div
                class="glass-panel px-5 py-2.5 rounded-full flex items-center gap-3 border border-white/5"
            >
                <span class="relative flex h-2 w-2">
                    <span
                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff9159] opacity-75"
                    ></span>
                    <span
                        class="relative inline-flex rounded-full h-2 w-2 bg-[#ff9159]"
                    ></span>
                </span>
                <span
                    class="font-label text-xs uppercase tracking-[0.2em] font-bold text-white/80"
                    >{t.badge}</span
                >
            </div>

            <!-- Main Headlines -->
            <div class="space-y-4">
                <p
                    class="font-headline text-2xl md:text-3xl text-white/60 tracking-tight"
                >
                    {t.greeting}
                </p>
                <h1
                    class="font-headline text-8xl md:text-9xl lg:text-[10rem] font-black tracking-[-0.06em] leading-[0.8]"
                >
                    <span
                        class="text-transparent bg-clip-text bg-gradient-to-br from-[#ff9159] to-[#ff7a2f]"
                        >{t.nameLine1.split(" ")[0]}</span
                    ><br />
                    <span class="text-white"
                        >{t.nameLine1.split(" ").slice(1).join(" ")}</span
                    >
                </h1>
            </div>

            <!-- Chips/Roles -->
            <div class="flex flex-wrap gap-4">
                <div
                    class="px-5 py-1.5 glass-panel rounded-full font-label text-[10px] md:text-xs text-[#ff9159] uppercase tracking-[0.2em] font-bold border border-[#ff9159]/30 hover:border-[#ff9159]/60 transition-all bg-[#ff9159]/5"
                >
                    {t.chip1}
                </div>
                <div
                    class="px-5 py-1.5 glass-panel rounded-full font-label text-[10px] md:text-xs text-[#ff9159] uppercase tracking-[0.2em] font-bold border border-[#ff9159]/30 hover:border-[#ff9159]/60 transition-all bg-[#ff9159]/5"
                >
                    {t.chip2}
                </div>
            </div>

            <!-- Bio & Mission -->
            <div class="max-w-lg space-y-6">
                <p
                    class="text-lg text-on-surface-variant leading-relaxed font-medium"
                >
                    {@html t.bio.replace(
                        /\*\*(.*?)\*\*/g,
                        "<strong>$1</strong>",
                    )}
                </p>
                <div
                    class="glass-panel p-6 rounded-2xl border-l-4 border-l-primary/60 group hover:bg-surface-variant/40 transition-all cursor-default"
                >
                    <p
                        class="font-headline text-lg italic text-white group-hover:text-primary transition-colors"
                    >
                        "{t.mission}"
                    </p>
                </div>
            </div>

            <!-- CTAs -->
            <div class="flex flex-col sm:flex-row gap-6 w-full sm:w-auto pt-4">
                <a
                    href="#about"
                    class="px-8 py-4 bg-[#ff9159] text-black font-headline font-black uppercase tracking-widest rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(255,145,89,0.4)] transition-all active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                    <span>{t.ctaBegin}</span>
                    <ArrowDownRight size={20} strokeWidth={3} />
                </a>
                <a
                    href="#project1"
                    class="px-8 py-4 border border-white/20 text-white font-label font-bold uppercase tracking-widest rounded-full hover:bg-white/10 transition-all flex items-center justify-center whitespace-nowrap"
                >
                    {t.ctaProjects}
                </a>
            </div>
        </div>

        <!-- Right Column: Visual Centerpiece -->
        <div class="relative flex items-center justify-center z-10">
            <!-- Glowing Rings -->
            <div
                class="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-primary/10 spin-slow"
            ></div>
            <div
                class="absolute w-[380px] h-[380px] md:w-[540px] md:h-[540px] rounded-full border border-dashed border-primary/20 spin-reverse"
            ></div>
            <div
                class="absolute w-[420px] h-[420px] md:w-[600px] md:h-[600px] rounded-full border border-primary/5"
            ></div>

            <!-- Main Profile Image Container -->
            <div
                class="relative z-10 p-4 glass-panel rounded-full overflow-hidden shadow-[0_0_80px_rgba(255,145,89,0.15)] group animate-float"
            >
                <div
                    class="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-surface-container-highest bg-surface-container relative"
                >
                    <img
                        src="Jose Shabra.jpg"
                        alt="Jose Shabra"
                        class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <!-- Inner Glow -->
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-40"
                    ></div>
                </div>
            </div>

            <!-- Floating Tech Badges -->
            <div
                class="absolute -top-4 -right-4 glass-panel px-5 py-3 rounded-2xl shadow-2xl pulse-soft z-30 border border-[#ff9159]/20"
            >
                <span
                    class="font-label text-xs text-[#ff9159] font-black tracking-[0.15em] uppercase"
                    >{t.techStackTop}</span
                >
            </div>
            <div
                class="absolute bottom-10 -left-12 glass-panel px-5 py-3 rounded-2xl shadow-2xl pulse-soft z-30 border border-[#ff9159]/20"
                style="animation-delay: 1.5s;"
            >
                <span
                    class="font-label text-xs text-[#ff9159] font-black tracking-[0.15em] uppercase"
                    >{t.availableTop}</span
                >
            </div>
        </div>
    </div>
</main>

<style>
    .glass-panel {
        background: rgba(38, 38, 38, 0.4);
        backdrop-filter: blur(16px);
        border: 1px solid rgba(255, 145, 89, 0.1);
    }
    .glow-orb {
        position: absolute;
        width: 400px;
        height: 400px;
        background: radial-gradient(
            circle,
            rgba(255, 145, 89, 0.15) 0%,
            rgba(255, 145, 89, 0) 70%
        );
        border-radius: 50%;
        filter: blur(60px);
        z-index: 0;
    }
    .spin-slow {
        animation: spin 20s linear infinite;
    }
    .spin-reverse {
        animation: spin 15s linear infinite reverse;
    }
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    .pulse-soft {
        animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    @keyframes pulse {
        0%,
        100% {
            opacity: 1;
            transform: scale(1);
        }
        50% {
            opacity: 0.5;
            transform: scale(0.95);
        }
    }
</style>
