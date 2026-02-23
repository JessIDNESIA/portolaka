<script lang="ts">
    import { lang } from "$lib/stores/lang";
    import { content } from "$lib/content";

    $: t = content[$lang].closing;
</script>

<section
    id="closing"
    class="section-container bg-gradient-to-br from-slate-100 via-slate-50 to-white text-slate-800"
>
    <div class="section-content text-center">
        <div class="max-w-4xl mx-auto space-y-8">
            <!-- Summary -->
            <div class="mb-8">
                <h2 class="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                    {t.title}
                </h2>
                <p class="text-xl md:text-2xl leading-relaxed text-slate-600">
                    {t.subtitle}
                </p>
            </div>

            <!-- Key Takeaways -->
            <div
                class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-lg"
            >
                <h3 class="text-2xl font-semibold mb-6 text-slate-800">
                    {t.uniqueTitle}
                </h3>
                <div class="grid md:grid-cols-3 gap-6">
                    <div>
                        <div class="text-4xl mb-3">💪</div>
                        <p class="font-medium text-slate-700">{t.unique1}</p>
                    </div>
                    <div>
                        <div class="text-4xl mb-3">🎯</div>
                        <p class="font-medium text-slate-700">{t.unique2}</p>
                    </div>
                    <div>
                        <div class="text-4xl mb-3">🤝</div>
                        <p class="font-medium text-slate-700">{t.unique3}</p>
                    </div>
                </div>
            </div>

            <!-- Contact Information -->
            <div
                class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-lg"
            >
                <h3 class="text-2xl font-semibold mb-6 text-slate-800">{t.connectTitle}</h3>
                <div class="space-y-4">
                    <div class="flex items-center justify-center gap-3 text-lg text-slate-700">
                        <span>📧</span>
                        <span class="font-medium">{t.email}:</span>
                        <a
                            href="mailto:joseidnn1@gmail.com"
                            class="text-primary-600 hover:text-primary-700 transition-colors font-medium"
                        >
                            joseidnn1@gmail.com
                        </a>
                    </div>
                    <div class="flex items-center justify-center gap-3 text-lg text-slate-700">
                        <span>💼</span>
                        <span class="font-medium">{t.linkedin}:</span>
                        <a
                            href="https://www.linkedin.com/in/jose-shabra-l1nk3d1n/"
                            target="_blank"
                            class="text-primary-600 hover:text-primary-700 transition-colors font-medium"
                        >
                            www.linkedin.com/in/jose-shabra-l1nk3d1n/
                        </a>
                    </div>
                    <div class="flex items-center justify-center gap-3 text-lg text-slate-700">
                        <span>📱</span>
                        <span class="font-medium">{t.phone}:</span>
                        <span class="text-primary-600 font-medium">+62 822-4551-7041</span>
                    </div>
                    <div class="flex items-center justify-center gap-3 text-lg text-slate-700">
                        <span>🌐</span>
                        <span class="font-medium">{t.github}:</span>
                        <a
                            href="https://github.com/JessIDNESIA"
                            target="_blank"
                            class="text-primary-600 hover:text-primary-700 transition-colors font-medium"
                        >
                            JessIDNESIA
                        </a>
                    </div>
                </div>
            </div>

            <!-- Call to Action -->
            <div class="pt-6">
                <p class="text-xl mb-6 text-slate-600">
                    {t.cta}
                </p>
                <a href="#opening" class="btn-primary inline-block">
                    {t.backToTop}
                </a>
            </div>

            <!-- Footer -->
            <div class="pt-8 border-t border-slate-200">
                <p class="text-sm text-slate-500">
                    {t.footer}
                </p>
            </div>
        </div>
    </div>
</section>
