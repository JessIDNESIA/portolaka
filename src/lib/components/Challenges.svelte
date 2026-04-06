<script lang="ts">
    import { lang } from "$lib/stores/lang";
    import { content } from "$lib/content";
    $: t = content[$lang].challenges;
</script>

<section
    id="challenges"
    class="relative overflow-x-hidden bg-[#0e0e0e] text-white font-body py-16 px-6"
>
    <!-- Atmospheric Background -->
    <div
        class="absolute inset-0 pointer-events-none"
        style="background-image: radial-gradient(circle at 2px 2px, rgba(255,145,89,0.05) 1px, transparent 0); background-size: 40px 40px;"
    ></div>
    <div
        class="absolute -top-24 -left-24 w-96 h-96 rounded-full pointer-events-none"
        style="background: #ff9159; filter: blur(100px); opacity: 0.12;"
    ></div>
    <div
        class="absolute top-1/2 -right-24 w-80 h-80 rounded-full pointer-events-none"
        style="background: #feb246; filter: blur(100px); opacity: 0.10;"
    ></div>

    <!-- Content -->
    <div class="relative z-10 max-w-4xl mx-auto space-y-10">
        <!-- Section Title -->
        <header class="mb-4 text-center">
            <h2
                class="font-headline font-black text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.75] mb-6"
            >
                <span
                    class="bg-gradient-to-r from-[#ff9159] to-[#ff7a2f] bg-clip-text text-transparent"
                >
                    {t.title.split(" ")[0]}
                </span>
                <span class="text-white">
                    {t.title.split(" ").slice(1).join(" ")}</span
                >
            </h2>
            <p
                class="font-label text-[#adaaaa] uppercase tracking-[0.3em] text-xs"
            >
                Technical Deep Dive &amp; Architectural Evolution
            </p>
        </header>
        <!-- Challenge Card -->
        <section class="group">
            <div
                class="rounded-3xl p-8 md:p-12 border-l-4 border-l-[#ff7351] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01]"
                style="background: rgba(38,38,38,0.6); backdrop-filter: blur(12px); border-top: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.05); box-shadow: 0 0 40px rgba(255,115,81,0.05);"
            >
                <div class="flex items-start gap-6 mb-8">
                    <div
                        class="p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300"
                        style="background: rgba(255,115,81,0.1); color: #ff7351;"
                    >
                        <span class="material-symbols-outlined text-4xl"
                            >layers</span
                        >
                    </div>
                    <div>
                        <h2
                            class="font-headline text-3xl font-bold tracking-tight text-white mb-2"
                        >
                            {t.challengeTitle}
                        </h2>
                        <div
                            class="h-1 w-12 rounded-full group-hover:w-24 transition-all duration-500"
                            style="background: #ff7351;"
                        ></div>
                    </div>
                </div>
                <p
                    class="text-lg leading-relaxed font-light"
                    style="color: #adaaaa;"
                >
                    {t.challengeBody}
                </p>
            </div>
        </section>

        <!-- Solution / Architectural Synergy Card -->
        <section class="group">
            <div
                class="rounded-3xl p-8 md:p-12 border-l-4 border-l-[#3b82f6] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01]"
                style="background: rgba(38,38,38,0.6); backdrop-filter: blur(12px); border-top: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.05); box-shadow: 0 0 40px rgba(59,130,246,0.05);"
            >
                <div class="flex items-start gap-6 mb-8">
                    <div
                        class="p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300"
                        style="background: rgba(59,130,246,0.1); color: #3b82f6;"
                    >
                        <span class="material-symbols-outlined text-4xl"
                            >hub</span
                        >
                    </div>
                    <div>
                        <h2
                            class="font-headline text-3xl font-bold tracking-tight text-white mb-2"
                        >
                            {t.solutionTitle}
                        </h2>
                        <div
                            class="h-1 w-12 rounded-full group-hover:w-24 transition-all duration-500"
                            style="background: #3b82f6;"
                        ></div>
                    </div>
                </div>

                <p
                    class="text-lg leading-relaxed font-light mb-10"
                    style="color: #adaaaa;"
                >
                    {t.solutionBody}
                </p>

                <!-- Strategy Sub-grid -->
                <div class="grid md:grid-cols-2 gap-4">
                    {#each t.strategies as strategy}
                        <div
                            class="p-6 rounded-2xl transition-all duration-300 border border-[rgba(59,130,246,0.1)] hover:border-[rgba(59,130,246,0.4)] hover:bg-[rgba(32,31,31,0.6)]"
                            style="background: rgba(32,31,31,0.4);"
                        >
                            <div
                                class="font-label text-xs tracking-widest mb-3 uppercase"
                                style="color: #3b82f6;"
                            >
                                {strategy.title}
                            </div>
                            <p class="text-sm" style="color: #adaaaa;">
                                {strategy.body}
                            </p>
                        </div>
                    {/each}
                </div>
            </div>
        </section>

        <!-- Lessons Learned Card -->
        <section class="group">
            <div
                class="rounded-3xl p-8 md:p-12 border-l-4 border-l-[#10b981] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01]"
                style="background: rgba(38,38,38,0.6); backdrop-filter: blur(12px); border-top: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.05); box-shadow: 0 0 40px rgba(16,185,129,0.05);"
            >
                <div class="flex items-start gap-6 mb-8">
                    <div
                        class="p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300"
                        style="background: rgba(16,185,129,0.1); color: #10b981;"
                    >
                        <span class="material-symbols-outlined text-4xl"
                            >insights</span
                        >
                    </div>
                    <div>
                        <h2
                            class="font-headline text-3xl font-bold tracking-tight text-white mb-2"
                        >
                            {t.lessonsTitle}
                        </h2>
                        <div
                            class="h-1 w-12 rounded-full group-hover:w-24 transition-all duration-500"
                            style="background: #10b981;"
                        ></div>
                    </div>
                </div>

                <ul class="space-y-6">
                    {#each t.lessons as lesson, i}
                        <li class="flex items-start gap-4 group/item">
                            <span
                                class="material-symbols-outlined mt-1 transition-transform group-hover/item:translate-x-1"
                                style="color: #10b981;"
                            >
                                {i === 0
                                    ? "database"
                                    : i === 1
                                      ? "speed"
                                      : "auto_awesome"}
                            </span>
                            <div class="text-lg">
                                <span class="text-white font-bold"
                                    >{lesson.title}:</span
                                >
                                <span
                                    class="font-light"
                                    style="color: #adaaaa;"
                                >
                                    {lesson.body}</span
                                >
                            </div>
                        </li>
                    {/each}
                </ul>
            </div>
        </section>
    </div>
</section>
