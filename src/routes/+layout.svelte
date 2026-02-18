<script lang="ts">
    import "../app.css";
    import Navbar from "$lib/components/Navbar.svelte";
</script>

<Navbar />
<div class="ml-64">
    <slot />
</div>
