<script lang="ts">
    import { lang } from "$lib/stores/lang";
    import { content } from "$lib/content";
    import { ArrowUpRight, X, Code2, Layers } from "lucide-svelte";
    import { onMount } from "svelte";
    import { fade, scale } from "svelte/transition";

    interface Project {
        id: string;
        name: string;
        category: string;
        tech: string;
        type: string;
        desc: string;
        image: string | null;
        icon: string;
        url: string;
    }

    $: t = content[$lang].works;

    let visible = false;
    let selectedFilter = "all";
    let selectedProject: Project | null = null;

    $: filteredItems = t.items.filter(
        (item: Project) =>
            selectedFilter === "all" || item.type === selectedFilter,
    );

    function closeModal() {
        selectedProject = null;
    }

    function handleKeydown(e: KeyboardEvent) {
        if (e.key === "Escape") closeModal();
    }

    onMount(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    visible = true;
                }
            },
            { threshold: 0.1 },
        );

        const element = document.getElementById("projects");
        if (element) observer.observe(element);

        return () => observer.disconnect();
    });
</script>

<svelte:window on:keydown={handleKeydown} />

<section
    id="projects"
    class="relative py-32 px-6 lg:px-12 overflow-hidden bg-background"
>
    <!-- Atmospheric Layer -->
    <div
        class="absolute inset-0 kinetic-grid pointer-events-none opacity-20"
    ></div>
    <div
        class="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full animate-pulse"
    ></div>
    <div
        class="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-50"
    ></div>

    <div class="relative max-w-screen-xl mx-auto">
        <!-- Header Section -->
        <header
            class="mb-24 flex flex-col items-center text-center space-y-6 transition-all duration-1000 ease-out {visible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'}"
        >
            <div
                class="inline-block px-4 py-1.5 border border-primary/20 bg-primary/5 rounded-full backdrop-blur-md"
            >
                <span
                    class="font-label text-xs tracking-[0.3em] uppercase text-primary"
                >
                    {t.tag}
                </span>
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
                class="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
            >
                {t.subtitle}
            </p>
        </header>

        <!-- Filter Bar -->
        <div class="flex justify-end mb-12">
            <div
                class="inline-flex p-1 bg-surface-container/50 backdrop-blur-3xl rounded-2xl border border-white/5 shadow-2xl"
            >
                {#each t.filters as filter}
                    <button
                        on:click={() => (selectedFilter = filter.id)}
                        class="px-6 py-2.5 rounded-xl text-sm font-label tracking-wide transition-all duration-500 {selectedFilter ===
                        filter.id
                            ? 'bg-primary text-background shadow-[0_0_20px_rgba(255,145,89,0.3)]'
                            : 'text-on-surface-variant hover:text-primary'}"
                    >
                        {filter.label}
                    </button>
                {/each}
            </div>
        </div>

        <!-- Project Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {#each filteredItems as project, i}
                <button
                    id="project-{project.id}"
                    class="glass-card group relative rounded-3xl overflow-hidden cursor-pointer text-left w-full h-full"
                    on:click={(e) => {
                        selectedProject = project;
                        e.currentTarget.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                        });
                    }}
                    data-aos="fade-up"
                    data-aos-delay={(i % 3) * 100}
                >
                    <!-- Image Container -->
                    <div
                        class="relative aspect-[16/10] overflow-hidden bg-surface-container"
                    >
                        {#if project.image}
                            <img
                                src={project.image}
                                alt={project.name}
                                class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                            />
                        {:else}
                            <div
                                class="w-full h-full flex items-center justify-center bg-gradient-to-br from-surface-container to-background group-hover:from-primary/10 group-hover:to-background transition-colors duration-700"
                            >
                                <iconify-icon
                                    icon={project.icon}
                                    class="text-7xl md:text-8xl text-primary/20 group-hover:text-primary/40 transition-all duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-100"
                                />
                            </div>
                        {/if}

                        <!-- Tech Badge -->
                        <div class="absolute top-6 left-6 flex gap-2">
                            <span
                                class="px-4 py-1.5 bg-background/80 backdrop-blur-xl rounded-full text-[10px] font-label font-bold tracking-widest uppercase border border-white/10 text-primary shadow-2xl"
                            >
                                {project.tech}
                            </span>
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="p-8 space-y-5">
                        <div class="flex justify-between items-center">
                            <span
                                class="font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant/70 italic"
                            >
                                {project.category}
                            </span>
                            <a
                                href={project.url}
                                target="_blank"
                                class="flex items-center gap-3 group/btn"
                                on:click|stopPropagation
                            >
                                <span
                                    class="text-[10px] font-label font-bold tracking-widest uppercase text-primary opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-500"
                                >
                                    {t.viewDesc}
                                </span>
                                <div
                                    class="p-2 rounded-full border border-white/5 group-hover/btn:border-primary/30 group-hover/btn:bg-primary/5 transition-all duration-500"
                                >
                                    <ArrowUpRight
                                        class="w-4 h-4 text-primary group-hover/btn:rotate-45 transition-transform duration-500"
                                    />
                                </div>
                            </a>
                        </div>

                        <div class="space-y-2">
                            <h3
                                class="font-headline text-2xl font-bold group-hover:text-primary transition-colors duration-500 line-clamp-1"
                            >
                                {project.name}
                            </h3>
                            <p
                                class="font-body text-on-surface-variant leading-relaxed text-sm line-clamp-2"
                            >
                                {project.desc}
                            </p>
                        </div>
                    </div>

                    <!-- Hover Border Glow -->
                    <div
                        class="absolute inset-0 border border-primary/0 group-hover:border-primary/20 rounded-3xl transition-colors duration-500 pointer-events-none"
                    ></div>
                </button>
            {/each}
        </div>
    </div>
</section>

<!-- Modal Overlay -->
{#if selectedProject}
    <div
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 overflow-hidden"
    >
        <!-- Backdrop -->
        <button
            class="absolute inset-0 bg-background/80 backdrop-blur-xl transition-all duration-500 w-full h-full cursor-default"
            on:click={closeModal}
            transition:fade={{ duration: 300 }}
            aria-label="Close Modal"
        ></button>

        <!-- Modal Content -->
        <div
            class="relative w-full max-w-5xl bg-surface/30 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl flex flex-col md:flex-row h-full max-h-[85vh] md:max-h-[700px]"
            transition:scale={{ duration: 500, start: 0.9, opacity: 0 }}
        >
            <!-- Close Button -->
            <button
                class="absolute top-6 right-6 z-10 p-3 rounded-full bg-surface/50 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                on:click={closeModal}
            >
                <X
                    class="w-5 h-5 text-on-surface group-hover:rotate-90 transition-transform duration-500"
                />
            </button>

            <!-- Image Area -->
            <div
                class="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden bg-surface-variant/5"
            >
                {#if selectedProject.image}
                    <img
                        src={selectedProject.image}
                        alt={selectedProject.name}
                        class="w-full h-full object-cover"
                    />
                {:else}
                    <div
                        class="w-full h-full flex flex-col items-center justify-center p-12 bg-gradient-to-br from-surface-variant/20 to-surface/5"
                    >
                        <iconify-icon
                            icon={selectedProject.icon || "lucide:terminal"}
                            class="text-8xl text-primary/20"
                        />
                    </div>
                {/if}
                <div
                    class="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-surface/40 hidden md:block"
                ></div>
            </div>

            <!-- Text Area -->
            <div
                class="flex-1 p-8 md:p-12 overflow-y-auto custom-scrollbar flex flex-col justify-between bg-surface/10"
            >
                <div class="space-y-8">
                    <div class="space-y-3">
                        <div class="flex items-center gap-3">
                            <span
                                class="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-label tracking-widest uppercase"
                            >
                                {selectedProject.category}
                            </span>
                            <span
                                class="text-on-surface-variant/40 text-[10px] font-label font-bold tracking-widest uppercase"
                            >
                                {selectedProject.tech}
                            </span>
                        </div>
                        <h2
                            class="text-3xl md:text-5xl font-display leading-tight"
                        >
                            {selectedProject.name}
                        </h2>
                    </div>

                    <div class="space-y-6">
                        <p
                            class="text-on-surface-variant leading-relaxed text-sm md:text-base border-l-2 border-primary/30 pl-6 italic"
                        >
                            {selectedProject.desc}
                        </p>

                        <div class="grid grid-cols-2 gap-4">
                            <div
                                class="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-1"
                            >
                                <div class="flex items-center gap-2 mb-1">
                                    <Code2 class="w-3 h-3 text-primary/60" />
                                    <span
                                        class="text-[10px] font-label text-on-surface-variant/40 uppercase tracking-widest"
                                        >Stack</span
                                    >
                                </div>
                                <p class="text-sm font-medium">
                                    {selectedProject.tech}
                                </p>
                            </div>
                            <div
                                class="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-1"
                            >
                                <div class="flex items-center gap-2 mb-1">
                                    <Layers class="w-3 h-3 text-primary/60" />
                                    <span
                                        class="text-[10px] font-label text-on-surface-variant/40 uppercase tracking-widest"
                                        >Type</span
                                    >
                                </div>
                                <p
                                    class="text-sm font-medium uppercase tracking-tight"
                                >
                                    {selectedProject.category}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="pt-10 flex flex-col sm:flex-row gap-4">
                    <a
                        href={selectedProject.url}
                        target="_blank"
                        class="flex-1 py-4 rounded-2xl bg-primary text-on-primary font-bold text-sm tracking-widest uppercase text-center hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                        <span>Open Repository</span>
                        <ArrowUpRight
                            class="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        />
                    </a>
                    <button
                        on:click={closeModal}
                        class="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 font-bold text-sm tracking-widest uppercase hover:bg-white/10 transition-all duration-300"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
{/if}

<style>
    .kinetic-grid {
        background-image: radial-gradient(
            circle at 1px 1px,
            rgba(255, 145, 89, 0.05) 1px,
            transparent 0
        );
        background-size: 40px 40px;
    }

    .glass-card {
        background: rgba(26, 25, 25, 0.4);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.05);
        transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .glass-card:hover {
        transform: translateY(-8px);
        background: rgba(26, 25, 25, 0.6);
        box-shadow:
            0 40px 80px -20px rgba(0, 0, 0, 0.5),
            0 0 50px -10px rgba(255, 145, 89, 0.1);
    }

    .custom-scrollbar::-webkit-scrollbar {
        width: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.01);
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
        background: rgba(255, 145, 89, 0.1);
        border-radius: 20px;
    }
</style>
