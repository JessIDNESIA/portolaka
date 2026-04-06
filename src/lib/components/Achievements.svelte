<script lang="ts">
    import { lang } from "$lib/stores/lang";
    import { content } from "$lib/content";
    import { onMount } from "svelte";
    $: t = content[$lang].achievements;

    let mounted = false;
    onMount(() => {
        mounted = true;
    });

    const certifications = [
        { title: "Basic of AI", provider: "Dicoding", icon: "psychology" },
        {
            title: "Learning to Use Generative AI",
            provider: "Dicoding",
            icon: "auto_awesome",
        },
        {
            title: "Generative AI for Educators",
            provider: "Google",
            icon: "school",
        },
        {
            title: "Coding Foundations",
            provider: "Sololearn",
            icon: "terminal",
        },
        { title: "Introduction to HTML", provider: "Sololearn", icon: "html" },
    ];

    const workshops = [
        {
            title: "Flutter Development",
            provider: "GDG (Google Developer Groups)",
            icon: "devices",
        },
    ];

    const onlineCourses = [
        {
            title: "Fullstack Next JS: Realtime Point Of Sale",
            provider: "wpucourse.id",
            icon: "javascript",
            premium: true,
        },
    ];
</script>

<section
    id="achievements"
    class="section-container-custom overflow-hidden relative"
>
    <!-- Decorative background glow -->
    <div
        class="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"
    ></div>
    <div
        class="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"
    ></div>

    <div class="max-w-7xl mx-auto space-y-24 relative z-10">
        <!-- Hero Title -->
        <header
            class="flex flex-col items-center text-center space-y-8 max-w-6xl mx-auto mb-24 px-6"
        >
            <h2
                class="font-headline text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.75]"
                class:animate-slide-up={mounted}
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
        </header>

        <!-- Certifications -->
        <div class="space-y-12">
            <div class="flex items-center gap-6">
                <h3
                    class="text-2xl font-bold text-primary italic uppercase tracking-wider"
                >
                    {t.certifications}
                </h3>
                <div class="flex-grow h-[1px] bg-white/5"></div>
                <span class="text-[10px] font-mono opacity-30 tracking-[0.3em]"
                    >01 / 04</span
                >
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {#each certifications as cert}
                    <div
                        class="glass-card p-8 rounded-2xl relative overflow-hidden group"
                    >
                        <div
                            class="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                        >
                            <span class="material-symbols-outlined text-9xl"
                                >workspace_premium</span
                            >
                        </div>

                        <span
                            class="material-symbols-outlined text-primary mb-6 block text-4xl"
                        >
                            {cert.icon}
                        </span>

                        <h4
                            class="text-xl font-bold text-white mb-2 leading-tight"
                        >
                            {cert.title}
                        </h4>
                        <p
                            class="text-xs text-on-surface-variant font-bold uppercase tracking-widest"
                        >
                            {cert.provider}
                        </p>

                        <button class="view-more-btn">
                            {t.viewMore}
                            <span class="material-symbols-outlined text-base"
                                >arrow_forward_ios</span
                            >
                        </button>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Workshops -->
        <div class="space-y-12">
            <div class="flex items-center gap-6">
                <h3
                    class="text-2xl font-bold text-primary italic uppercase tracking-wider"
                >
                    {t.workshops}
                </h3>
                <div class="flex-grow h-[1px] bg-white/5"></div>
                <span class="text-[10px] font-mono opacity-30 tracking-[0.3em]"
                    >02 / 04</span
                >
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {#each workshops as workshop}
                    <div class="glass-card p-8 rounded-2xl group">
                        <span
                            class="material-symbols-outlined text-primary mb-6 block text-4xl"
                        >
                            {workshop.icon}
                        </span>
                        <h4
                            class="text-xl font-bold text-white mb-2 leading-tight"
                        >
                            {workshop.title}
                        </h4>
                        <p
                            class="text-xs text-on-surface-variant font-bold uppercase tracking-widest"
                        >
                            {workshop.provider}
                        </p>
                        <button class="view-more-btn">
                            {t.viewMore}
                            <span class="material-symbols-outlined text-base"
                                >arrow_forward_ios</span
                            >
                        </button>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Online Courses -->
        <div class="space-y-12">
            <div class="flex items-center gap-6">
                <h3
                    class="text-2xl font-bold text-primary italic uppercase tracking-wider"
                >
                    {t.onlineCourses}
                </h3>
                <div class="flex-grow h-[1px] bg-white/5"></div>
                <span class="text-[10px] font-mono opacity-30 tracking-[0.3em]"
                    >03 / 04</span
                >
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {#each onlineCourses as course}
                    <div class="glass-card p-8 rounded-2xl relative group">
                        {#if course.premium}
                            <div
                                class="absolute top-4 right-4 text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded-full uppercase tracking-tighter border border-primary/20"
                            >
                                Premium
                            </div>
                        {/if}
                        <span
                            class="material-symbols-outlined text-primary mb-6 block text-4xl"
                        >
                            {course.icon}
                        </span>
                        <h4
                            class="text-xl font-bold text-white mb-2 leading-tight"
                        >
                            {course.title}
                        </h4>
                        <p
                            class="text-xs text-on-surface-variant font-bold uppercase tracking-widest"
                        >
                            {course.provider}
                        </p>
                        <button class="view-more-btn">
                            {t.viewMore}
                            <span class="material-symbols-outlined text-base"
                                >arrow_forward_ios</span
                            >
                        </button>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Competitions -->
        <div class="space-y-12">
            <div class="flex items-center gap-6">
                <h3
                    class="text-2xl font-bold text-primary italic uppercase tracking-wider"
                >
                    {t.competitions}
                </h3>
                <div class="flex-grow h-[1px] bg-white/5"></div>
                <span class="text-[10px] font-mono opacity-30 tracking-[0.3em]"
                    >04 / 04</span
                >
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                    class="glass-card p-8 rounded-2xl border-dashed border-primary/20 bg-transparent flex flex-col justify-center items-center text-center group cursor-default"
                >
                    <div
                        class="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500"
                    >
                        <span
                            class="material-symbols-outlined text-primary text-4xl"
                            style="font-variation-settings: 'FILL' 1;"
                            >trophy</span
                        >
                    </div>
                    <h4 class="text-xl font-bold text-white mb-2">
                        {t.comingSoon}
                    </h4>
                    <p class="text-sm text-on-surface-variant max-w-[200px]">
                        {t.comingSoonDesc}
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .glass-card {
        background: rgba(38, 38, 38, 0.4);
        backdrop-filter: blur(16px);
        border: 1px solid rgba(255, 255, 255, 0.05);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .glass-card:hover {
        background: rgba(45, 45, 45, 0.6);
        border-color: rgba(255, 145, 89, 0.3);
        transform: translateY(-4px) scale(1.02);
        box-shadow:
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 20px rgba(255, 145, 89, 0.1);
    }
    .kinetic-text {
        text-shadow: 0 0 30px rgba(255, 145, 89, 0.3);
    }
    .view-more-btn {
        @apply mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary/60 hover:text-primary transition-colors duration-300;
    }
    .section-container-custom {
        @apply min-h-screen pt-24 pb-32 px-6 lg:pr-12;
    }
    .animate-fade-in {
        animation: fadeIn 1s ease-out forwards;
    }
    .animate-slide-up {
        animation: slideUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
    }
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(40px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
