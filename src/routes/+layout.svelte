<script lang="ts">
    import "../app.css";
    import "aos/dist/aos.css";
    import Sidebar from "$lib/components/Sidebar.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        import("aos").then(({ default: AOS }) => {
            AOS.init({
                duration: 600,
                once: true,
                offset: 40,
            });
        });
    });
</script>

<svelte:head>
    <script
        src="https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js"
    ></script>
</svelte:head>

<Sidebar />
<div class="md:pl-64 min-h-screen transition-all duration-500">
    <slot />
</div>
