<script lang="ts">
    import "../app.css";
    import "aos/dist/aos.css";
    import Navbar from "$lib/components/Navbar.svelte";
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

<Navbar />
<div class="main-content">
    <slot />
</div>
