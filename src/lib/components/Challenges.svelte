<script lang="ts">
    import { lang } from "$lib/stores/lang";
    import { content } from "$lib/content";
    $: t = content[$lang].challenges;
</script>
<section id="challenges" class="section-container bg-slate-50">
    <div class="section-content">
        <h2 class="section-title">{t.title}</h2>

        <div class="max-w-4xl mx-auto space-y-6">
            <!-- Challenge -->
            <div class="card border-t-4 border-red-500">
                <div class="flex items-start gap-4 mb-4">
                    <div class="bg-red-100 p-3 rounded-lg">
                        <span class="text-3xl">⚠️</span>
                    </div>
                    <div>
                        <h3 class="text-2xl font-semibold text-slate-800 mb-2">
                            {t.challengeTitle}
                        </h3>
                        <p class="text-lg text-slate-600 leading-relaxed">
                            {t.challengeBody}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Solution -->
            <div class="card border-t-4 border-blue-500">
                <div class="flex items-start gap-4 mb-4">
                    <div class="bg-blue-100 p-3 rounded-lg">
                        <span class="text-3xl">💡</span>
                    </div>
                    <div>
                        <h3 class="text-2xl font-semibold text-slate-800 mb-2">
                            {t.solutionTitle}
                        </h3>
                        <p class="text-lg text-slate-600 leading-relaxed mb-4">
                            {t.solutionBody}
                        </p>
                    </div>
                </div>
                <div class="grid md:grid-cols-2 gap-4">
                    {#each t.strategies as strategy}
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <h4 class="font-semibold text-blue-700 mb-2">
                                {strategy.title}
                            </h4>
                            <p class="text-slate-600">
                                {strategy.body}
                            </p>
                        </div>
                    {/each}
                </div>
            </div>

            <!-- Lessons Learned -->
            <div
                class="card border-t-4 border-green-500 bg-gradient-to-br from-green-50 to-white"
            >
                <div class="flex items-start gap-4 mb-4">
                    <div class="bg-green-100 p-3 rounded-lg">
                        <span class="text-3xl">📚</span>
                    </div>
                    <div class="flex-1">
                        <h3 class="text-2xl font-semibold text-slate-800 mb-4">
                            {t.lessonsTitle}
                        </h3>
                        <ul class="space-y-3">
                            {#each t.lessons as lesson}
                                <li class="flex items-start gap-3">
                                    <span class="text-green-600 text-xl mt-1">✓</span>
                                    <div>
                                        <p class="font-semibold text-slate-800">
                                            {lesson.title}
                                        </p>
                                        <p class="text-slate-600">
                                            {lesson.body}
                                        </p>
                                    </div>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
