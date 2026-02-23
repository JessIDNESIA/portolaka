<script lang="ts">
    import Opening from "$lib/components/Opening.svelte";
    import AboutMe from "$lib/components/AboutMe.svelte";
    import Education from "$lib/components/Education.svelte";
    import ThemeTransition from "$lib/components/ThemeTransition.svelte";
    import Skills from "$lib/components/Skills.svelte";
    import Project1 from "$lib/components/Project1.svelte";
    import Project2 from "$lib/components/Project2.svelte";
    import Project3 from "$lib/components/Project3.svelte";
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
    <ThemeTransition />
    <section data-aos="fade-up" data-aos-duration="600">
        <Skills />
    </section>
    <section data-aos="fade-up" data-aos-duration="600">
        <Project1 />
    </section>
    <section data-aos="fade-up" data-aos-duration="600">
        <Project2 />
    </section>
    <section data-aos="fade-up" data-aos-duration="600">
        <Project3 />
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
    <section data-aos="fade-up" data-aos-duration="600">
        <Closing />
    </section>
</main>
