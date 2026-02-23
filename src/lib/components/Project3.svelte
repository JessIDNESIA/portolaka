<script lang="ts">
    import { lang } from "$lib/stores/lang";
    import { content } from "$lib/content";
    $: t = content[$lang].project3;
</script>
<section id="project3" class="section-container bg-slate-50">
    <div class="section-content">
        <div class="max-w-4xl mx-auto">
            <div class="card">
                <div class="mb-6">
                    <div class="flex items-center gap-3 mb-2">
                        <div class="bg-teal-100 p-2 rounded-lg text-teal-600">
                            <i class="fa-solid fa-clipboard-user text-xl"></i>
                        </div>
                        <h3 class="text-3xl font-bold text-slate-800">
                            {t.title}
                        </h3>
                    </div>
                    <p class="text-primary-600 font-medium">
                        {t.meta}
                    </p>
                </div>

                <div class="space-y-6">
                    <div>
                        <h4 class="text-xl font-semibold text-slate-700 mb-3 flex items-center gap-2">
                            <span class="text-teal-500"><i class="fa-solid fa-file-lines"></i></span> {t.descLabel}
                        </h4>
                        <p class="text-lg text-slate-600 leading-relaxed">{t.desc}</p>
                    </div>

                    <div class="bg-teal-50 p-6 rounded-xl">
                        <h4 class="text-xl font-semibold text-teal-700 mb-3 flex items-center gap-2">
                            <span class="text-teal-500"><i class="fa-solid fa-bullseye"></i></span> {t.goalTitle}
                        </h4>
                        <p class="text-lg text-slate-700 leading-relaxed">{t.goalBody}</p>
                    </div>

                    <div>
                        <h4 class="text-xl font-semibold text-slate-700 mb-3 flex items-center gap-2">
                            <span class="text-teal-500"><i class="fa-solid fa-user-gear"></i></span> {t.roleTitle}
                        </h4>
                        <p class="text-lg text-slate-600 leading-relaxed">
                            {@html t.roleBody.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")}
                        </p>
                    </div>

                    <div class="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                        <h4 class="text-xl font-semibold text-green-700 mb-3 flex items-center gap-2">
                            <span class="text-green-600"><i class="fa-solid fa-wand-magic-sparkles"></i></span> {t.resultTitle}
                        </h4>
                        <ul class="space-y-2 text-lg text-slate-700">
                            {#each t.results as result}
                                <li class="flex items-start gap-2">
                                    <span class="text-green-600 mt-1"><i class="fa-solid fa-check text-sm"></i></span>
                                    <span>{result}</span>
                                </li>
                            {/each}
                        </ul>
                    </div>

                    <div class="pt-4">
                        <a
                            href="https://github.com/JessIDNESIA/attendance-app"
                            target="_blank"
                            class="inline-flex items-center gap-2 bg-slate-800 text-white px-5 py-2.5 rounded-lg hover:bg-slate-700 transition-colors"
                        >
                            <i class="fa-brands fa-github"></i>
                            {t.viewGitHub}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
