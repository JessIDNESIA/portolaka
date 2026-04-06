<script lang="ts">
    import { lang } from "$lib/stores/lang";
    import { content } from "$lib/content";
    $: t = content[$lang].careerGoal;
</script>

<section id="career-goal" class="section-container">
    <div class="section-content">
        <header class="flex flex-col items-center text-center space-y-8 mb-24">
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
        </header>

        <div class="max-w-5xl mx-auto space-y-6">
            <!-- Vision Statement -->
            <div
                class="card bg-gradient-to-r from-primary-600 to-primary-500 text-white"
            >
                <div class="text-center py-6">
                    <h3 class="text-3xl font-bold mb-4">{t.visionTitle}</h3>
                    <p
                        class="text-xl md:text-2xl italic leading-relaxed max-w-3xl mx-auto"
                    >
                        {t.visionBody}
                    </p>
                </div>
            </div>

            <!-- Career Targets -->
            <div class="grid md:grid-cols-3 gap-6">
                <div
                    class="card text-center border border-white/5 hover:border-primary/30 transition-all duration-300"
                >
                    <div
                        class="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                        <span class="text-3xl">🎯</span>
                    </div>
                    <h3 class="text-xl font-semibold mb-3 text-white">
                        {t.shortTerm}
                    </h3>
                    <p class="text-white/60">
                        {t.shortTermBody}
                    </p>
                </div>

                <div
                    class="card text-center border border-white/5 hover:border-primary/30 transition-all duration-300"
                >
                    <div
                        class="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                        <span class="text-3xl">🚀</span>
                    </div>
                    <h3 class="text-xl font-semibold mb-3 text-white">
                        {t.midTerm}
                    </h3>
                    <p class="text-white/60">
                        {t.midTermBody}
                    </p>
                </div>

                <div
                    class="card text-center border border-white/5 hover:border-primary/30 transition-all duration-300"
                >
                    <div
                        class="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                        <span class="text-3xl">⭐</span>
                    </div>
                    <h3 class="text-xl font-semibold mb-3 text-white">
                        {t.longTerm}
                    </h3>
                    <p class="text-white/60">
                        {t.longTermBody}
                    </p>
                </div>
            </div>

            <!-- Skills to Develop -->
            <div class="card border border-white/5">
                <h3
                    class="text-2xl font-semibold mb-6 text-primary flex items-center gap-2"
                >
                    <span>📈</span>
                    {t.skillsTitle}
                </h3>
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 class="font-semibold text-white/80 mb-3">
                            {t.technicalSkills}
                        </h4>
                        <ul class="space-y-2">
                            <li class="flex items-center gap-2">
                                <span class="text-primary">▸</span>
                                <span class="text-white/60"
                                    >Machine Learning & AI</span
                                >
                            </li>
                            <li class="flex items-center gap-2">
                                <span class="text-primary">▸</span>
                                <span class="text-white/60"
                                    >Cloud Computing (AWS/GCP)</span
                                >
                            </li>
                            <li class="flex items-center gap-2">
                                <span class="text-primary">▸</span>
                                <span class="text-white/60"
                                    >Mobile Development</span
                                >
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold text-white/80 mb-3">
                            {t.professionalSkills}
                        </h4>
                        <ul class="space-y-2">
                            <li class="flex items-center gap-2">
                                <span class="text-primary">▸</span>
                                <span class="text-white/60"
                                    >Project Management</span
                                >
                            </li>
                            <li class="flex items-center gap-2">
                                <span class="text-primary">▸</span>
                                <span class="text-white/60"
                                    >Business Communication</span
                                >
                            </li>
                            <li class="flex items-center gap-2">
                                <span class="text-primary">▸</span>
                                <span class="text-white/60"
                                    >Company Leadership</span
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Contribution Goal -->
            <div
                class="card bg-white/[0.02] border-l-4 border-primary border-t border-r border-b border-white/5"
            >
                <h3
                    class="text-2xl font-semibold mb-4 text-primary flex items-center gap-2"
                >
                    <span>🌱</span>
                    {t.contributionTitle}
                </h3>
                <p class="text-lg text-white/80 leading-relaxed font-light">
                    {t.contributionBody}
                </p>
            </div>
        </div>
    </div>
</section>
