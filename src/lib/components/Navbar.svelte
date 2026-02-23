<script lang="ts">
    import { onMount } from "svelte";
    import { lang } from "$lib/stores/lang";
    import { content } from "$lib/content";

    let activeSection = "opening";
    let navOpen = false;

    const sectionIds: { id: string; key: keyof typeof content.id.nav; icon: string }[] = [
        { id: "opening", key: "home", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
        { id: "about", key: "about", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
        { id: "education", key: "education", icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" },
        { id: "skills", key: "skills", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
        { id: "project1", key: "project1", icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" },
        { id: "project2", key: "project2", icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" },
        { id: "project3", key: "project3", icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" },
        { id: "achievements", key: "achievements", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
        { id: "challenges", key: "challenges", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
        { id: "career-goal", key: "career", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
        { id: "closing", key: "contact", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
    ];

    $: t = content[$lang];
    $: navLabels = t.nav;

    $: if (typeof document !== "undefined") {
        document.body.style.overflow = navOpen ? "hidden" : "";
    }

    function setActiveFromHash() {
        const hash = typeof window !== "undefined" ? window.location.hash.slice(1) : "";
        if (hash) {
            const found = sectionIds.find((s) => s.id === hash);
            if (found) activeSection = found.id;
        }
    }

    function handleNavClick(e: MouseEvent, sectionId: string) {
        e.preventDefault();
        activeSection = sectionId;
        navOpen = false;
        if (typeof history !== "undefined") {
            history.replaceState(null, "", `#${sectionId}`);
        }
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    onMount(() => {
        const stored = localStorage.getItem("portolaka-lang");
        if (stored === "en" || stored === "id") lang.set(stored);
        setActiveFromHash();
        window.addEventListener("hashchange", setActiveFromHash);

        const ratios = new Map<string, number>();
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    ratios.set(
                        entry.target.id,
                        entry.isIntersecting ? entry.intersectionRatio : 0,
                    );
                }

                let bestId: string | null = null;
                let bestRatio = 0;
                for (const { id } of sectionIds) {
                    const r = ratios.get(id) ?? 0;
                    if (r > bestRatio) {
                        bestRatio = r;
                        bestId = id;
                    }
                }
                if (bestId && bestRatio > 0) activeSection = bestId;
            },
            {
                // Make "active" follow the section around mid-viewport.
                root: null,
                rootMargin: "-45% 0px -45% 0px",
                threshold: [0, 0.1, 0.2, 0.35, 0.5, 0.65, 0.8],
            },
        );

        for (const { id } of sectionIds) {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        }

        return () => {
            window.removeEventListener("hashchange", setActiveFromHash);
            observer.disconnect();
        };
    });
</script>

<!-- Mobile: hamburger button -->
<button
    type="button"
    class="nav-toggle"
    aria-label="Toggle menu"
    on:click={() => (navOpen = !navOpen)}
>
    {#if navOpen}
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    {:else}
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    {/if}
</button>

<!-- Mobile: overlay when nav open -->
<button
    type="button"
    class="nav-overlay"
    class:open={navOpen}
    aria-label="Close menu"
    on:click={() => (navOpen = false)}
></button>

<nav class="navbar" class:open={navOpen}>
    <!-- Top: Logo + close (mobile) -->
    <div class="nav-top-row">
        <div class="nav-logo">
            <span class="logo-text">J</span>
            <span class="logo-sub">{navLabels.portfolio}</span>
        </div>
        <button
            type="button"
            class="nav-close"
            aria-label="Close menu"
            on:click={() => (navOpen = false)}
        >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </div>

    <!-- Language switcher -->
    <div class="lang-switcher">
        <button
            type="button"
            class="lang-btn"
            class:active={$lang === "id"}
            on:click={() => lang.set("id")}
        >
            ID
        </button>
        <span class="lang-divider">|</span>
        <button
            type="button"
            class="lang-btn"
            class:active={$lang === "en"}
            on:click={() => lang.set("en")}
        >
            EN
        </button>
    </div>

    <!-- Divider -->
    <div class="nav-divider"></div>

    <!-- Nav Links -->
    <ul class="nav-list">
        {#each sectionIds as section}
            <li>
                <a
                    href="#{section.id}"
                    class="nav-item"
                    class:active={activeSection === section.id}
                    on:click={(e) => handleNavClick(e, section.id)}
                >
                    <!-- Active indicator bar -->
                    <span class="nav-indicator"></span>

                    <!-- Icon -->
                    <svg
                        class="nav-icon"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.8"
                            d={section.icon}
                        />
                    </svg>

                    <!-- Label -->
                    <span class="nav-label">{navLabels[section.key]}</span>
                </a>
            </li>
        {/each}
    </ul>

    <!-- Bottom: subtle glow decoration -->
    <div class="nav-bottom-glow"></div>
</nav>

<style>
    /* ── Design tokens match Opening.svelte ── */
    :root {
        --nav-bg: #06101f;
        --nav-border: rgba(255, 255, 255, 0.07);
        --accent: #38bdf8;
        --accent2: #818cf8;
        --text: #eef4ff;
        --muted: rgba(238, 244, 255, 0.42);
        --hover-bg: rgba(255, 255, 255, 0.04);
        --active-bg: rgba(56, 189, 248, 0.09);
    }

    /* ── Navbar shell ── */
    .navbar {
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        width: 256px;
        background: var(--nav-bg);
        border-right: 1px solid var(--nav-border);
        z-index: 40;
        overflow-y: auto;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        padding: 28px 16px 24px;
        /* Hide scrollbar but keep scroll */
        scrollbar-width: none;
    }
    .navbar::-webkit-scrollbar {
        display: none;
    }

    /* ── Navbar shell ── */
    .navbar {
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        width: 256px;
        max-width: 85vw;
        background: var(--nav-bg);
        border-right: 1px solid var(--nav-border);
        z-index: 50;
        overflow-y: auto;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        padding: 28px 16px 24px;
        scrollbar-width: none;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .navbar::-webkit-scrollbar {
        display: none;
    }

    /* Mobile: drawer closed by default */
    @media (max-width: 1023px) {
        .navbar {
            transform: translateX(-100%);
            box-shadow: none;
        }
        .navbar.open {
            transform: translateX(0);
            box-shadow: 8px 0 24px rgba(0, 0, 0, 0.4);
        }
    }
    @media (min-width: 1024px) {
        .navbar {
            transform: translateX(0);
        }
    }

    /* ── Hamburger (mobile only) ── */
    .nav-toggle {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 16px;
        left: 16px;
        z-index: 60;
        width: 44px;
        height: 44px;
        border-radius: 10px;
        background: var(--nav-bg);
        border: 1px solid var(--nav-border);
        color: var(--text);
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        transition: background 0.2s ease, color 0.2s ease;
    }
    .nav-toggle:hover {
        background: rgba(255, 255, 255, 0.06);
        color: var(--accent);
    }
    @media (min-width: 1024px) {
        .nav-toggle {
            display: none;
        }
    }

    /* ── Overlay (mobile only when open) ── */
    .nav-overlay {
        display: none;
        position: fixed;
        inset: 0;
        z-index: 45;
        background: rgba(0, 0, 0, 0.5);
        border: none;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    .nav-overlay.open {
        display: block;
        opacity: 1;
    }
    @media (min-width: 1024px) {
        .nav-overlay {
            display: none !important;
        }
    }

    /* ── Top row: logo + close ── */
    .nav-top-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 0 8px;
        margin-bottom: 24px;
        flex-shrink: 0;
    }
    .nav-close {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 8px;
        background: transparent;
        border: 1px solid var(--nav-border);
        color: var(--muted);
        cursor: pointer;
        transition: background 0.2s ease, color 0.2s ease;
        flex-shrink: 0;
    }
    .nav-close:hover {
        background: var(--hover-bg);
        color: var(--text);
    }
    @media (min-width: 1024px) {
        .nav-close {
            display: none;
        }
    }
    .nav-top-row .nav-logo {
        margin-bottom: 0;
    }

    /* ── Logo ── */
    .nav-logo {
        display: flex;
        flex-direction: column;
        padding: 0 8px;
        margin-bottom: 24px;
        flex-shrink: 0;
    }

    .logo-text {
        font-family: var(--font-d);
        font-size: 1.6rem;
        font-weight: 800;
        letter-spacing: -0.03em;
        /* Gradient matching Opening accent */
        background: linear-gradient(135deg, var(--accent) 0%, #7dd3fc 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        line-height: 1;
    }

    .logo-sub {
        font-family: var(--font-b);
        font-size: 0.7rem;
        font-weight: 400;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--muted);
        margin-top: 4px;
    }

    /* ── Language switcher ── */
    .lang-switcher {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 0 8px 16px;
        flex-shrink: 0;
    }
    .lang-btn {
        font-family: var(--font-b);
        font-size: 0.75rem;
        font-weight: 500;
        padding: 4px 10px;
        border-radius: 6px;
        background: transparent;
        border: 1px solid var(--nav-border);
        color: var(--muted);
        cursor: pointer;
        transition: background 0.18s ease, color 0.18s ease, border-color 0.18s ease;
    }
    .lang-btn:hover {
        background: var(--hover-bg);
        color: var(--text);
    }
    .lang-btn.active {
        background: var(--active-bg);
        border-color: rgba(56, 189, 248, 0.3);
        color: var(--accent);
    }
    .lang-divider {
        font-size: 0.7rem;
        color: var(--muted);
        opacity: 0.6;
    }

    /* ── Divider ── */
    .nav-divider {
        height: 1px;
        background: linear-gradient(
            to right,
            transparent,
            rgba(56, 189, 248, 0.2),
            transparent
        );
        margin: 0 8px 20px;
        flex-shrink: 0;
    }

    /* ── Nav list ── */
    .nav-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 2px;
        flex: 1;
    }

    /* ── Nav item ── */
    .nav-item {
        position: relative;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        border-radius: 10px;
        text-decoration: none;
        color: var(--muted);
        font-family: var(--font-b);
        font-size: 0.82rem;
        font-weight: 400;
        letter-spacing: 0.01em;
        transition:
            background 0.18s ease,
            color 0.18s ease;
        overflow: hidden;
    }

    .nav-item:hover:not(.active) {
        background: var(--hover-bg);
        color: var(--text);
    }

    /* Active state */
    .nav-item.active {
        background: var(--active-bg);
        color: var(--accent);
        font-weight: 500;
    }

    /* Left indicator bar (only visible when active) */
    .nav-indicator {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%) scaleY(0);
        width: 3px;
        height: 60%;
        border-radius: 0 2px 2px 0;
        background: var(--accent);
        box-shadow: 0 0 8px var(--accent);
        transition: transform 0.2s ease;
    }

    .nav-item.active .nav-indicator {
        transform: translateY(-50%) scaleY(1);
    }

    /* Icon */
    .nav-icon {
        flex-shrink: 0;
        width: 16px;
        height: 16px;
        opacity: 0.6;
        transition: opacity 0.18s ease;
    }

    .nav-item:hover .nav-icon,
    .nav-item.active .nav-icon {
        opacity: 1;
    }

    .nav-item.active .nav-icon {
        filter: drop-shadow(0 0 4px rgba(56, 189, 248, 0.5));
    }

    /* Label */
    .nav-label {
        flex: 1;
    }

    /* ── Bottom glow decoration ── */
    .nav-bottom-glow {
        flex-shrink: 0;
        margin-top: 20px;
        height: 120px;
        background: radial-gradient(
            ellipse at 50% 100%,
            rgba(56, 189, 248, 0.08) 0%,
            transparent 70%
        );
        pointer-events: none;
    }
</style>
