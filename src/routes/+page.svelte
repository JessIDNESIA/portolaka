<script lang="ts">
    import Opening from "$lib/components/Opening.svelte";
    import AboutMe from "$lib/components/AboutMe.svelte";
    import Education from "$lib/components/Education.svelte";
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
    <Opening />
    <AboutMe />
    <Education />
    <Skills />
    <Project1 />
    <Project2 />
    <Project3 />
    <Achievements />
    <Challenges />
    <CareerGoal />
    <Closing />
</main>
