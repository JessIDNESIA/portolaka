<script lang="ts">
    import Opening from "$lib/components/Opening.svelte";
    import AboutMe from "$lib/components/AboutMe.svelte";
    import Education from "$lib/components/Education.svelte";
    import Skills from "$lib/components/Skills.svelte";
    import Projects from "$lib/components/Projects.svelte";
    import Achievements from "$lib/components/Achievements.svelte";
    import Challenges from "$lib/components/Challenges.svelte";
    import CareerGoal from "$lib/components/CareerGoal.svelte";
    import Closing from "$lib/components/Closing.svelte";

    export let data;
</script>

<svelte:head>
    <title>Portfolio - Presentasi Profesional</title>
</svelte:head>

<main class="min-h-screen">
    <section data-aos="fade-up" data-aos-duration="600">
        <Opening />
    </section>
    <section data-aos="fade-up" data-aos-duration="600">
        <AboutMe />
    </section>
    <section data-aos="fade-up" data-aos-duration="600">
        <Education />
    </section>
    <section data-aos="fade-up" data-aos-duration="600">
        <Skills />
    </section>
    <section data-aos="fade-up" data-aos-duration="600">
        <Projects />
    </section>
    <section data-aos="fade-up" data-aos-duration="600">
        <Achievements />
    </section>
    <section data-aos="fade-up" data-aos-duration="600">
        <Challenges />
    </section>
    <section data-aos="fade-up" data-aos-duration="600">
        <CareerGoal />
    </section>
    <section id="contact" data-aos="fade-up" data-aos-duration="600">
        <Closing />
    </section>

    <!-- Supabase Data Test Section -->
    <section
        class="py-24 px-6 lg:pl-32 bg-surface-container/10 border-t border-white/5"
    >
        <div class="max-w-screen-xl mx-auto space-y-12">
            <header class="space-y-4">
                <h2
                    class="font-headline text-4xl md:text-5xl font-black tracking-tighter uppercase text-primary"
                >
                    Supabase <span class="text-white italic">Integration</span>
                </h2>
                <p
                    class="font-body text-on-surface-variant text-lg max-w-2xl leading-relaxed"
                >
                    Verifying real-time data connection with the Supabase
                    `countries` table.
                </p>
            </header>

            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {#each data.countries as country}
                    <div
                        class="p-6 bg-surface-container/30 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-surface-container-high/50 transition-all duration-300 group"
                    >
                        <span
                            class="font-headline text-xl font-bold text-white/80 group-hover:text-primary transition-colors"
                        >
                            {country.name}
                        </span>
                    </div>
                {/each}
            </div>
        </div>
    </section>
</main>
