<script lang="ts">
    export let id: string;
    export let project: {
        title: string;
        meta: string;
        descLabel: string;
        desc: string;
        goalTitle: string;
        goalBody: string;
        roleTitle: string;
        roleBody: string;
        resultTitle: string;
        results: readonly string[];
        viewGitHub: string;
    };
    export let useAltBg: boolean = false;
    export let githubUrl: string = "";
    export let mainIcon: string = "fa-qrcode";
    export let themeColor: "primary" | "indigo" | "teal" = "primary";

    const colorMap = {
        primary: {
            bg100: "bg-primary-100",
            text600: "text-primary-600",
            text500: "text-primary-500",
            text400: "text-primary-400", // Not used but for consistency
            bg50: "bg-primary-50",
            text700: "text-primary-700",
        },
        indigo: {
            bg100: "bg-indigo-100",
            text600: "text-indigo-600",
            text500: "text-indigo-500",
            bg50: "bg-indigo-50",
            text700: "text-indigo-700",
        },
        teal: {
            bg100: "bg-teal-100",
            text600: "text-teal-600",
            text500: "text-teal-500",
            bg50: "bg-teal-50",
            text700: "text-teal-700",
        },
    };

    $: colors = colorMap[themeColor];
</script>

<section {id} class="section-container {useAltBg ? 'bg-slate-50' : 'bg-white'}">
    <div class="section-content">
        <div class="max-w-4xl mx-auto">
            <div class="card">
                <div class="mb-6">
                    <div class="flex items-center gap-3 mb-2">
                        <div
                            class="{colors.bg100} p-2 rounded-lg {colors.text600}"
                        >
                            <i class="fa-solid {mainIcon} text-xl"></i>
                        </div>
                        <h3 class="text-3xl font-bold text-slate-800">
                            {project.title}
                        </h3>
                    </div>
                    <p class="text-primary-600 font-medium">
                        {project.meta}
                    </p>
                </div>

                <div class="space-y-6">
                    <div>
                        <h4
                            class="text-xl font-semibold text-slate-700 mb-3 flex items-center gap-2"
                        >
                            <span class={colors.text500}
                                ><i class="fa-solid fa-file-lines"></i></span
                            >
                            {project.descLabel}
                        </h4>
                        <p class="text-lg text-slate-600 leading-relaxed">
                            {project.desc}
                        </p>
                    </div>

                    <div class="{colors.bg50} p-6 rounded-xl">
                        <h4
                            class="text-xl font-semibold {colors.text700} mb-3 flex items-center gap-2"
                        >
                            <span class={colors.text500}
                                ><i class="fa-solid fa-bullseye"></i></span
                            >
                            {project.goalTitle}
                        </h4>
                        <p class="text-lg text-slate-700 leading-relaxed">
                            {project.goalBody}
                        </p>
                    </div>

                    <div>
                        <h4
                            class="text-xl font-semibold text-slate-700 mb-3 flex items-center gap-2"
                        >
                            <span class={colors.text500}
                                ><i class="fa-solid fa-user-gear"></i></span
                            >
                            {project.roleTitle}
                        </h4>
                        <p class="text-lg text-slate-600 leading-relaxed">
                            {@html project.roleBody.replace(
                                /\*\*(.*?)\*\*/g,
                                "<strong>$1</strong>",
                            )}
                        </p>
                    </div>

                    <div
                        class="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg"
                    >
                        <h4
                            class="text-xl font-semibold text-green-700 mb-3 flex items-center gap-2"
                        >
                            <span class="text-green-600"
                                ><i class="fa-solid fa-wand-magic-sparkles"
                                ></i></span
                            >
                            {project.resultTitle}
                        </h4>
                        <ul class="space-y-2 text-lg text-slate-700">
                            {#each project.results as result}
                                <li class="flex items-start gap-2">
                                    <span class="text-green-600 mt-1"
                                        ><i class="fa-solid fa-check text-sm"
                                        ></i></span
                                    >
                                    <span>{result}</span>
                                </li>
                            {/each}
                        </ul>
                    </div>

                    {#if githubUrl}
                        <div class="pt-4">
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center gap-2 bg-slate-800 text-white px-5 py-2.5 rounded-lg hover:bg-slate-700 transition-colors"
                            >
                                <i class="fa-brands fa-github"></i>
                                {project.viewGitHub}
                            </a>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</section>
