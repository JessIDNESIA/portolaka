<script lang="ts">
    import { lang } from "$lib/stores/lang";
    import { content } from "$lib/content";
    import { TrendingUp, Target, Rocket, Star, Sprout } from "lucide-svelte";
    import { onMount } from "svelte";

    $: t = content[$lang].careerGoal;

    // Helper to split title at '&' for specific color mapping
    $: titleSplit = t.title.split(" & ");
    $: goalPart = titleSplit[0];
    $: planPart = titleSplit[1] ? ` & ${titleSplit[1]}` : "";

    // Helper to extract duration and goal from body strings (expects "Duration - Goal")
    function splitGoal(body: string) {
        const parts = body.split(" - ");
        if (parts.length > 1) {
            return { duration: parts[0], goal: parts.slice(1).join(" - ") };
        }
        return { duration: "", goal: body };
    }

    $: short = splitGoal(t.shortTermBody);
    $: mid = splitGoal(t.midTermBody);
    $: long = splitGoal(t.longTermBody);

    // Local translations for KINETIC-specific fields to avoid changing content folder context
    const localT = {
        en: {
            visionTag: "Career Vision",
            milestonesTag: "Strategic Roadmap",
            milestonesTitle: "Timeline Targets",
            competencyTag: "Competency Stack",
            technicalItems: [
                "Machine Learning & AI",
                "Cloud Computing",
                "Mobile Development",
            ],
            professionalItems: [
                {
                    label: "Management",
                    title: "Project Management",
                    desc: "Strategic orchestration of complex lifecycles using agile methodologies.",
                },
                {
                    label: "Diplomacy",
                    title: "Business Communication",
                    desc: "Bridging technical complexity with stakeholder vision through clear narrative.",
                },
                {
                    label: "Strategy",
                    title: "Company Leadership",
                    desc: "Mentoring high-impact teams to solve non-linear architectural challenges.",
                },
            ],
            contributionTag: "Contribution",
            contributionItems: ["Open Source", "Mentorship", "Ethics"],
        },
        id: {
            visionTag: "Visi Karier",
            milestonesTag: "Peta Jalan Strategis",
            milestonesTitle: "Target Pencapaian",
            competencyTag: "Tumpukan Kompetensi",
            technicalItems: [
                "Machine Learning & AI",
                "Komputasi Awan",
                "Pengembangan Mobile",
            ],
            professionalItems: [
                {
                    label: "Manajemen",
                    title: "Manajemen Proyek",
                    desc: "Orkestrasi strategis siklus hidup yang kompleks menggunakan metodologi agile.",
                },
                {
                    label: "Diplomasi",
                    title: "Komunikasi Bisnis",
                    desc: "Menjembatani kompleksitas teknis dengan visi pemangku kepentingan melalui narasi yang jelas.",
                },
                {
                    label: "Strategi",
                    title: "Kepemimpinan Perusahaan",
                    desc: "Membimbing tim berdampak tinggi untuk menyelesaikan tantangan arsitektur non-linear.",
                },
            ],
            contributionTag: "Kontribusi",
            contributionItems: ["Open Source", "Mentorship", "Etika"],
        },
    };

    $: lt = localT[$lang] || localT.en;
</script>

<section
    id="career"
    class="py-24 px-6 md:px-16 max-w-7xl mx-auto overflow-hidden relative"
>
    <!-- Hero Section / Vision Statement -->
    <div class="mb-16 animate-fade-in-up">
        <h2
            class="font-headline font-black text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.75] mb-8"
        >
            <span
                class="text-transparent bg-clip-text bg-gradient-to-br from-[#ff9159] to-[#ff7a2f]"
                >{goalPart}</span
            >
            <span class="text-white">{planPart}</span>
        </h2>

        <div
            class="vision-gradient p-8 md:p-12 rounded-xl relative overflow-hidden group shadow-[0_20px_50px_rgba(255,145,89,0.05)] border border-white/5"
        >
            <div
                class="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -mr-32 -mt-32"
            ></div>
            <div class="relative z-10">
                <div class="flex items-center gap-3 mb-4" id="vision-tag-container">
                    <TrendingUp class="w-5 h-5 text-primary" />
                    <span
                        class="font-label text-primary uppercase tracking-[0.3em] text-xs block"
                        >{lt.visionTag}</span
                    >
                </div>
                <h3
                    class="text-3xl md:text-4xl font-headline font-bold text-on-surface mb-4 leading-tight"
                >
                    {t.visionTitle}
                </h3>
                <p
                    class="text-on-surface-variant text-lg md:text-xl max-w-3xl leading-relaxed"
                >
                    {t.visionBody}
                </p>
            </div>
        </div>
    </div>

    <!-- Career Targets Section -->
    <div class="mb-20 animate-fade-in-up [animation-delay:100ms]">
        <div class="flex items-end justify-between mb-10">
            <div>
                <span
                    class="font-label text-primary uppercase tracking-[0.3em] text-xs mb-2 block"
                    >{lt.milestonesTag}</span
                >
                <h3
                    class="text-3xl font-headline font-bold uppercase tracking-tight"
                >
                    {lt.milestonesTitle}
                </h3>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Short Term -->
            <div class="glass-panel p-8 rounded-xl group">
                <div
                    class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 transition-colors"
                >
                    <Target class="w-6 h-6 text-primary" />
                </div>
                <h4
                    class="font-headline font-bold text-xl mb-4 text-on-surface"
                >
                    {t.shortTerm}
                </h4>
                <p class="text-on-surface-variant text-sm leading-relaxed mb-6">
                    {short.goal}
                </p>
                <div class="h-px w-full bg-outline-variant/20 mb-4"></div>
                <span
                    class="font-label text-[10px] uppercase tracking-widest text-primary"
                    >{short.duration}</span
                >
            </div>

            <!-- Mid Term -->
            <div class="glass-panel p-8 rounded-xl group">
                <div
                    class="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 border border-secondary/20 group-hover:bg-secondary/20 transition-colors"
                >
                    <Rocket class="w-6 h-6 text-secondary" />
                </div>
                <h4
                    class="font-headline font-bold text-xl mb-4 text-on-surface"
                >
                    {t.midTerm}
                </h4>
                <p class="text-on-surface-variant text-sm leading-relaxed mb-6">
                    {mid.goal}
                </p>
                <div class="h-px w-full bg-outline-variant/20 mb-4"></div>
                <span
                    class="font-label text-[10px] uppercase tracking-widest text-secondary"
                    >{mid.duration}</span
                >
            </div>

            <!-- Long Term -->
            <div class="glass-panel p-8 rounded-xl group">
                <div
                    class="w-12 h-12 bg-tertiary/10 rounded-lg flex items-center justify-center mb-6 border border-tertiary/20 group-hover:bg-tertiary/20 transition-colors"
                >
                    <Star class="w-6 h-6 text-tertiary" />
                </div>
                <h4
                    class="font-headline font-bold text-xl mb-4 text-on-surface"
                >
                    {t.longTerm}
                </h4>
                <p class="text-on-surface-variant text-sm leading-relaxed mb-6">
                    {long.goal}
                </p>
                <div class="h-px w-full bg-outline-variant/20 mb-4"></div>
                <span
                    class="font-label text-[10px] uppercase tracking-widest text-tertiary"
                    >{long.duration}</span
                >
            </div>
        </div>
    </div>

    <!-- Skills Section -->
    <div
        class="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in-up [animation-delay:200ms]"
    >
        <div>
            <span
                class="font-label text-primary uppercase tracking-[0.3em] text-xs mb-4 block"
                >{lt.competencyTag}</span
            >
            <h3 class="text-4xl font-headline font-bold mb-10">
                {t.skillsTitle}
            </h3>

            <div class="space-y-6">
                <!-- Technical Skills -->
                <div
                    class="glass-panel p-6 rounded-xl flex items-center justify-between group cursor-default"
                >
                    <div class="flex items-center gap-6">
                        <span class="material-symbols-outlined text-primary"
                            >terminal</span
                        >
                        <span
                            class="font-headline font-medium text-lg uppercase tracking-tight"
                            >{t.technicalSkills}</span
                        >
                    </div>
                </div>

                <div class="flex flex-wrap gap-3 mt-4">
                    {#each lt.technicalItems as item}
                        <span
                            class="px-4 py-2 rounded-full border border-outline-variant/30 text-[10px] font-label uppercase tracking-widest text-neutral-400"
                            >{item}</span
                        >
                    {/each}
                </div>
            </div>
        </div>

        <div class="flex flex-col justify-center">
            <div class="space-y-8 pl-0 lg:pl-12">
                {#each lt.professionalItems as item}
                    <div
                        class="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-secondary before:to-transparent"
                    >
                        <h5
                            class="font-label text-secondary uppercase tracking-widest text-[10px] mb-2"
                        >
                            {item.label}
                        </h5>
                        <h4 class="text-2xl font-headline font-bold mb-2">
                            {item.title}
                        </h4>
                        <p class="text-on-surface-variant text-sm">
                            {item.desc}
                        </p>
                    </div>
                {/each}
            </div>
        </div>
    </div>

    <!-- Contribution Goal Section -->
    <div class="animate-fade-in-up [animation-delay:300ms]">
        <div
            class="glass-panel rounded-2xl overflow-hidden border-l-[8px] border-l-primary flex flex-col md:flex-row items-stretch"
        >
            <div
                class="md:w-1/3 bg-surface-container-highest/40 p-12 flex flex-col justify-center items-center text-center"
            >
                <Sprout class="w-12 h-12 text-primary mb-4" />
                <h3
                    class="text-2xl font-headline font-black uppercase tracking-tighter"
                >
                    {lt.contributionTag}
                </h3>
            </div>
            <div class="md:w-2/3 p-12 bg-white/5 backdrop-blur-md">
                <h4
                    class="text-3xl font-headline font-bold text-white mb-6 leading-tight"
                >
                    {t.contributionTitle}
                </h4>
                <p
                    class="text-neutral-300 text-lg font-body font-light leading-relaxed"
                >
                    {t.contributionBody}
                </p>
                <div class="mt-8 flex gap-4 flex-wrap">
                    {#each lt.contributionItems as item}
                        <span
                            class="px-4 py-2 rounded-full border border-outline-variant/30 text-[10px] font-label uppercase tracking-widest text-neutral-400"
                            >{item}</span
                        >
                    {/each}
                </div>
            </div>
        </div>
    </div>

    <!-- Ambient Decorative Blobs -->
    <div
        class="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none"
    ></div>
    <div
        class="absolute bottom-[10%] right-[-10%] w-[30vw] h-[30vw] bg-secondary/5 blur-[100px] rounded-full -z-10 pointer-events-none"
    ></div>
</section>

<style>
    .glass-panel {
        background: rgba(38, 38, 38, 0.4);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.05);
        transition: all 0.3s ease;
    }
    .glass-panel:hover {
        background: rgba(255, 145, 89, 0.05);
        border-color: rgba(255, 145, 89, 0.2);
        transform: translateY(-4px);
    }
    .vision-gradient {
        background: linear-gradient(
            135deg,
            rgba(38, 38, 38, 0.6) 0%,
            rgba(255, 145, 89, 0.05) 100%
        );
    }

    @keyframes fadeInUp {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    .animate-fade-in-up {
        animation: fadeInUp 0.6s ease-out forwards;
    }
</style>
