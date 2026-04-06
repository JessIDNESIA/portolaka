<script lang="ts">
    import { lang } from "$lib/stores/lang";
    import { content } from "$lib/content";

    $: t = content[$lang].closing;
    $: titleSplit = t.title ? t.title.split(" ") : ["", ""];
    $: firstPart = titleSplit[0];
    $: restPart = titleSplit.slice(1).join(" ");

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
</script>

<main
    class="relative grid-bg min-h-screen overflow-hidden pb-32 bg-[#0e0e0e] text-white font-body selection:bg-primary selection:text-on-primary"
>
    <!-- Atmospheric Glows -->
    <div
        class="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"
        data-aos="zoom-in"
        data-aos-duration="2000"
    ></div>
    <div
        class="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-delay="500"
    ></div>

    <div class="max-w-4xl mx-auto px-6 py-24 relative z-10 text-center">
        <!-- High-Impact Title -->
        <div class="mb-16" data-aos="fade-up">
            <h1
                class="font-headline font-black text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] mb-8"
            >
                <span
                    class="text-transparent bg-clip-text bg-gradient-to-br from-[#ff9159] to-[#ff7a2f] inline-block"
                    >{firstPart}</span
                >
                <span class="text-white whitespace-nowrap">{restPart}</span>
            </h1>
            <p
                class="font-body text-xl md:text-2xl leading-relaxed text-white/50 max-w-2xl mx-auto"
            >
                {t.subtitle}
            </p>
        </div>

        <!-- Key Takeaways Grid Section -->
        <div class="mb-24" data-aos="fade-up">
            <div class="flex items-center justify-center gap-3 mb-8">
                <span
                    class="font-label text-primary uppercase tracking-[0.3em] text-xs block"
                    >{t.uniqueTitle}</span
                >
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                {#each t.takeaways as item, i}
                    <div
                        class="glass-card p-8 rounded-2xl group hover:scale-[1.02] transition-all duration-500"
                        data-aos="fade-up"
                        data-aos-delay={i * 100}
                    >
                        <div
                            class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                        >
                            <iconify-icon
                                icon={item.icon}
                                class="text-primary text-3xl"
                            ></iconify-icon>
                        </div>
                        <h3
                            class="font-headline font-bold text-xl text-white mb-3"
                        >
                            {item.title}
                        </h3>
                        <p class="text-zinc-400 text-sm leading-relaxed">
                            {item.body}
                        </p>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Contact Section -->
        <div
            class="glass-card rounded-[2.5rem] p-12 glow-effect relative overflow-hidden group"
            data-aos="fade-up"
        >
            <div class="absolute top-0 right-0 p-8">
                <iconify-icon
                    icon="hugeicons:at-sign"
                    class="text-primary/20 text-9xl -rotate-12 select-none pointer-events-none"
                ></iconify-icon>
            </div>
            <div class="relative z-10 text-left">
                <h2
                    class="font-headline font-bold text-4xl text-white mb-10 tracking-tighter"
                >
                    {t.contactTitle}
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <!-- Email -->
                    <a
                        class="flex items-center gap-4 group/item"
                        href="mailto:joseidnn1@gmail.com"
                    >
                        <div
                            class="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-highest group-hover/item:bg-primary transition-all duration-300"
                        >
                            <iconify-icon
                                icon="logos:google-gmail"
                                class="text-xl"
                            ></iconify-icon>
                        </div>
                        <span
                            class="font-label text-zinc-300 group-hover/item:text-white transition-colors"
                            >joseidnn1@gmail.com</span
                        >
                    </a>
                    <!-- LinkedIn -->
                    <a
                        class="flex items-center gap-4 group/item"
                        href="https://www.linkedin.com/in/jose-shabra-l1nk3d1n/"
                        target="_blank"
                    >
                        <div
                            class="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-highest group-hover/item:bg-primary transition-all duration-300"
                        >
                            <iconify-icon
                                icon="logos:linkedin-icon"
                                class="text-xl"
                            ></iconify-icon>
                        </div>
                        <span
                            class="font-label text-zinc-300 group-hover/item:text-white transition-colors"
                            >Jose Shabra</span
                        >
                    </a>
                    <!-- WhatsApp -->
                    <a
                        class="flex items-center gap-4 group/item"
                        href="https://wa.me/6282245517041"
                        target="_blank"
                    >
                        <div
                            class="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-highest group-hover/item:bg-primary transition-all duration-300"
                        >
                            <iconify-icon
                                icon="logos:whatsapp-icon"
                                class="text-xl"
                            ></iconify-icon>
                        </div>
                        <span
                            class="font-label text-zinc-300 group-hover/item:text-white transition-colors"
                            >+62 822-4551-7041</span
                        >
                    </a>
                    <!-- GitHub -->
                    <a
                        class="flex items-center gap-4 group/item"
                        href="https://github.com/JessIDNESIA"
                        target="_blank"
                    >
                        <div
                            class="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-highest group-hover/item:bg-primary transition-all duration-300"
                        >
                            <iconify-icon
                                icon="logos:github-icon"
                                class="text-xl"
                            ></iconify-icon>
                        </div>
                        <span
                            class="font-label text-zinc-300 group-hover/item:text-white transition-colors"
                            >JessIDNESIA</span
                        >
                    </a>
                </div>

                <div class="flex flex-col md:flex-row items-center gap-6">
                    <button
                        class="w-full md:w-auto px-10 py-5 bg-gradient-to-br from-primary to-primary-dim rounded-full text-on-primary font-headline font-bold text-lg hover:shadow-[0_0_30px_rgba(255,145,89,0.3)] hover:scale-[1.05] active:scale-95 transition-all"
                    >
                        {t.cta}
                    </button>
                    <button
                        class="font-label text-zinc-500 hover:text-primary transition-colors flex items-center gap-2"
                        on:click={scrollToTop}
                    >
                        {t.backToTop}
                        <iconify-icon
                            icon="hugeicons:arrow-up-01"
                            class="text-sm"
                        ></iconify-icon>
                    </button>
                </div>
            </div>
        </div>
    </div>
</main>

<!-- Footer -->
<footer
    class="w-full px-12 py-20 flex flex-col md:flex-row justify-between items-end gap-12 bg-black border-t-0 font-body text-sm leading-relaxed text-zinc-500 shadow-[0_-1px_0_rgba(255,145,89,0.05)]"
>
    <div class="flex flex-col gap-4 items-start">
        <span class="font-headline text-xl font-bold text-white uppercase tracking-tighter"
            >Jose Shabra</span
        >
        <p class="max-w-md">{t.footer || ""}</p>
    </div>
    <div class="flex gap-8">
        <a
            class="hover:text-primary transition-colors"
            href="https://www.instagram.com/jose.shabra/"
            target="_blank">Instagram</a
        >
        <a
            class="hover:text-primary transition-colors"
            href="https://www.linkedin.com/in/jose-shabra-l1nk3d1n/"
            target="_blank">LinkedIn</a
        >
        <a
            class="hover:text-primary transition-colors"
            href="mailto:joseidnn1@gmail.com">Email</a
        >
        <button
            class="text-primary hover:text-primary-dim transition-colors font-bold uppercase tracking-widest text-xs"
            on:click={scrollToTop}
        >
            {t.backToTop}
        </button>
    </div>
</footer>

<style>
    .grid-bg {
        background-image: radial-gradient(
            circle at 2px 2px,
            rgba(255, 145, 89, 0.05) 1px,
            transparent 0
        );
        background-size: 40px 40px;
    }
    .glow-effect {
        box-shadow: 0 0 60px rgba(255, 145, 89, 0.1);
    }
    .glass-card {
        background: rgba(38, 38, 38, 0.4);
        backdrop-filter: blur(12px);
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        border-left: 1px solid rgba(255, 255, 255, 0.05);
        border-right: 1px solid rgba(255, 255, 255, 0.02);
        border-bottom: 1px solid rgba(255, 255, 255, 0.02);
    }
</style>
