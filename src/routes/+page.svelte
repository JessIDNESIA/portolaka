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
</main>
