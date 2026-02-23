<script lang="ts">
    import { onMount } from "svelte";
    import { lang } from "$lib/stores/lang";
    import { content } from "$lib/content";

    let visible = false;
    let barsAnimated = false;
    $: t = content[$lang].skills;

    onMount(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    visible = true;
                    setTimeout(() => (barsAnimated = true), 400);
                }
            },
            { threshold: 0.1 },
        );
        const section = document.getElementById("skills");
        if (section) observer.observe(section);
        return () => observer.disconnect();
    });

    // Sorted descending by pct — bar color matches icon brand color
    const hardSkills = [
        { name: "HTML & CSS", pct: 100, icon: "vscode-icons:file-type-html", color: "#e34f26" },
        { name: "Git", pct: 100, icon: "logos:git-icon", color: "#f05032" },
        { name: "Svelte", pct: 85, icon: "vscode-icons:file-type-svelte", color: "#ff3e00" },
        { name: "Laravel", pct: 80, icon: "logos:laravel", color: "#ff2d20" },
        { name: "Flutter", pct: 80, icon: "logos:flutter", color: "#02569b" },
        { name: "Tailwind CSS", pct: 75, icon: "logos:tailwindcss-icon", color: "#06b6d4" },
        { name: "JavaScript", pct: 70, icon: "logos:javascript", color: "#f7df1e" },
    ];

    const tools = [
        { name: "HTML5", icon: "logos:html-5" },
        { name: "CSS3", icon: "logos:css-3" },
        { name: "Figma", icon: "logos:figma" },
        { name: "VS Code", icon: "logos:visual-studio-code" },
        { name: "Git", icon: "logos:git-icon" },
        { name: "Chrome", icon: "logos:chrome" },
        { name: "MySQL", icon: "logos:mysql" },
        { name: "Laravel+Composer", icon: "logos:laravel" },
    ];

    const softSkills = [
        {
            name: "Communication",
            desc: "Express ideas clearly and confidently",
            icon: "fluent:chat-bubbles-question-24-regular",
        },
        {
            name: "Teamwork",
            desc: "Collaborate effectively in any team",
            icon: "fluent:people-team-24-regular",
        },
        {
            name: "Problem Solving",
            desc: "Find creative solutions under pressure",
            icon: "fluent:lightbulb-24-regular",
        },
        {
            name: "Critical Thinking",
            desc: "Analyse situations with logic and clarity",
            icon: "fluent:brain-circuit-24-regular",
        },
        {
            name: "Adaptability",
            desc: "Thrive in fast-changing environments",
            icon: "fluent:arrow-sync-24-regular",
        },
        {
            name: "Time Management",
            desc: "Deliver quality work on schedule",
            icon: "fluent:clock-24-regular",
        },
    ];
</script>

<!--
    ⚠️  ENVIRONMENT NOTES:
    1. Iconify Web Component — no npm needed, loaded via CDN in <svelte:head>
    2. Fonts — Bunny Fonts (bunny.net) replaces Google Fonts (GDPR-friendly)
-->
<svelte:head>
    <!-- Iconify Web Component — use <iconify-icon icon="..."> anywhere -->
    <script
        src="https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js"
    ></script>
</svelte:head>

<section id="skills" class="skills-section w-full">
    <!-- BG blobs — one per section accent color -->
    <div class="blob blob-cyan"></div>
    <div class="blob blob-purple"></div>
    <div class="blob blob-pink"></div>
    <div class="bg-grid"></div>

    <div class="content-wrapper" class:visible>
        <!-- ── Section Header ── -->
        <div class="section-header anim d1">
            <span class="section-tag">
                <span class="tag-dot"></span>
                {t.tag}
            </span>
            <h2 class="section-title">{t.title}</h2>
            <p class="section-subtitle">
                {t.subtitle}
            </p>
        </div>

        <!-- ══════════════════════════════════
             ①  HARD SKILLS  —  CYAN accent
        ══════════════════════════════════ -->
        <div class="block anim d2">
            <div class="block-header">
                <div class="block-icon-wrap icon-cyan">
                    <iconify-icon icon="fluent:code-24-regular" width="24"
                    ></iconify-icon>
                </div>
                <div>
                    <h3 class="block-title title-cyan">{t.hardSkillsTitle}</h3>
                    <p class="block-sub">{t.hardSkillsSub}</p>
                </div>
            </div>

            <div class="bar-list">
                {#each hardSkills as skill}
                    <div class="bar-row">
                        <div class="bar-meta">
                            <div class="bar-name-row">
                                <iconify-icon
                                    icon={skill.icon}
                                    width="18"
                                    class="skill-icon"
                                ></iconify-icon>
                                <span class="bar-name">{skill.name}</span>
                            </div>
                            <span
                                class="bar-pct"
                                style="color: {skill.color}"
                            >{skill.pct}%</span>
                        </div>
                        <div class="bar-track">
                            <div
                                class="bar-fill"
                                style="width: {barsAnimated ? skill.pct : 0}%; --bar-color: {skill.color}"
                            ></div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>

        <!-- ══════════════════════════════════
             ②  TOOLS & SOFTWARE  —  PURPLE accent
        ══════════════════════════════════ -->
        <div class="block anim d3">
            <div class="block-header">
                <div class="block-icon-wrap icon-purple">
                    <iconify-icon
                        icon="fluent:wrench-screwdriver-24-regular"
                        width="24"
                    ></iconify-icon>
                </div>
                <div>
                    <h3 class="block-title title-purple">
                        {t.toolsTitle}
                    </h3>
                    <p class="block-sub">{t.toolsSub}</p>
                </div>
            </div>

            <div class="tools-grid">
                {#each tools as tool}
                    <div class="tool-card tool-purple">
                        <iconify-icon
                            icon={tool.icon}
                            width="36"
                            class="tool-icon"
                        ></iconify-icon>
                        <span class="tool-name">{tool.name}</span>
                    </div>
                {/each}
            </div>
        </div>

        <!-- ══════════════════════════════════
             ③  SOFT SKILLS  —  PINK accent
        ══════════════════════════════════ -->
        <div class="block anim d4">
            <div class="block-header">
                <div class="block-icon-wrap icon-pink">
                    <iconify-icon icon="fluent:star-24-regular" width="24"
                    ></iconify-icon>
                </div>
                <div>
                    <h3 class="block-title title-pink">{t.softSkillsTitle}</h3>
                    <p class="block-sub">{t.softSkillsSub}</p>
                </div>
            </div>

            <div class="soft-grid">
                {#each softSkills as s}
                    <div class="soft-card">
                        <div class="soft-icon-wrap">
                            <iconify-icon icon={s.icon} width="22"
                            ></iconify-icon>
                        </div>
                        <h4 class="soft-name">{s.name}</h4>
                        <p class="soft-desc">{s.desc}</p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    /* ── Design tokens (light theme) ── */
    .skills-section {
        --bg: #f8fafc;
        --text: #0f172a;
        --muted: rgba(15, 23, 42, 0.6);
        --glass: rgba(255, 255, 255, 0.7);
        --border: rgba(15, 23, 42, 0.1);

        /* Cyan — Hard Skills */
        --cyan: #0891b2;
        --cyan-soft: rgba(8, 145, 178, 0.12);
        --cyan-border: rgba(8, 145, 178, 0.35);
        --cyan-bar: linear-gradient(90deg, #0891b2 0%, #22d3ee 100%);

        /* Purple — Tools */
        --purple: #7c3aed;
        --purple-soft: rgba(124, 58, 237, 0.12);
        --purple-border: rgba(124, 58, 237, 0.35);

        /* Pink — Soft Skills */
        --pink: #db2777;
        --pink-soft: rgba(219, 39, 119, 0.12);
        --pink-border: rgba(219, 39, 119, 0.35);
    }

    /* ── Section shell ── */
    .skills-section {
        min-height: 100vh;
        width: 100%;
        background: var(--bg);
        position: relative;
        display: flex;
        align-items: center;
        font-family: var(--font-b);
        padding: 80px 0 96px;
        overflow: hidden;
    }

    /* ── Background blobs ── */
    .blob {
        position: absolute;
        border-radius: 50%;
        filter: blur(90px);
        pointer-events: none;
    }
    .blob-cyan {
        width: 380px;
        height: 380px;
        top: -8%;
        left: -4%;
        background: radial-gradient(
            circle,
            rgba(8, 145, 178, 0.15) 0%,
            transparent 70%
        );
    }
    .blob-purple {
        width: 440px;
        height: 440px;
        top: 30%;
        right: -5%;
        background: radial-gradient(
            circle,
            rgba(124, 58, 237, 0.12) 0%,
            transparent 70%
        );
    }
    .blob-pink {
        width: 340px;
        height: 340px;
        bottom: -5%;
        left: 20%;
        background: radial-gradient(
            circle,
            rgba(219, 39, 119, 0.12) 0%,
            transparent 70%
        );
    }

    .bg-grid {
        position: absolute;
        inset: 0;
        background-image: linear-gradient(
                rgba(15, 23, 42, 0.04) 1px,
                transparent 1px
            ),
            linear-gradient(
                90deg,
                rgba(15, 23, 42, 0.04) 1px,
                transparent 1px
            );
        background-size: 56px 56px;
        mask-image: radial-gradient(
            ellipse 90% 90% at 50% 50%,
            black 20%,
            transparent 100%
        );
        -webkit-mask-image: radial-gradient(
            ellipse 90% 90% at 50% 50%,
            black 20%,
            transparent 100%
        );
        pointer-events: none;
    }

    /* ── Content wrapper ── */
    .content-wrapper {
        position: relative;
        z-index: 2;
        width: 100%;
        max-width: 1160px;
        margin: 0 auto;
        padding: 0 48px;
        display: flex;
        flex-direction: column;
        gap: 52px;
    }

    /* ── Stagger animations ── */
    .anim {
        opacity: 0;
        transform: translateY(24px);
        transition:
            opacity 0.65s ease,
            transform 0.65s ease;
    }
    .content-wrapper.visible .anim.d1 {
        opacity: 1;
        transform: none;
        transition-delay: 0.1s;
    }
    .content-wrapper.visible .anim.d2 {
        opacity: 1;
        transform: none;
        transition-delay: 0.2s;
    }
    .content-wrapper.visible .anim.d3 {
        opacity: 1;
        transform: none;
        transition-delay: 0.32s;
    }
    .content-wrapper.visible .anim.d4 {
        opacity: 1;
        transform: none;
        transition-delay: 0.44s;
    }

    /* ── Section header ── */
    .section-header {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .section-tag {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: var(--cyan-soft);
        border: 1px solid var(--cyan-border);
        color: var(--cyan);
        font-size: 0.72rem;
        font-weight: 500;
        letter-spacing: 0.09em;
        text-transform: uppercase;
        padding: 6px 14px;
        border-radius: 100px;
        width: fit-content;
    }
    .tag-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--cyan);
        box-shadow: 0 0 8px var(--cyan);
        animation: pulse-dot 2.2s ease-in-out infinite;
    }
    @keyframes pulse-dot {
        0%,
        100% {
            opacity: 1;
            transform: scale(1);
        }
        50% {
            opacity: 0.5;
            transform: scale(0.75);
        }
    }

    .section-title {
        font-family: var(--font-d);
        font-size: clamp(2.6rem, 4.2vw, 3.8rem);
        font-weight: 700;
        line-height: 1.1;
        letter-spacing: -0.02em;
        color: var(--text);
        margin: 0;
    }
    .section-subtitle {
        font-size: 1.08rem;
        font-weight: 300;
        color: var(--muted);
        line-height: 1.75;
        margin: 0;
        max-width: 560px;
    }

    /* ══════════════════════════
       BLOCK — shared wrapper
    ══════════════════════════ */
    .block {
        background: var(--glass);
        border: 1px solid var(--border);
        border-radius: 20px;
        padding: 36px;
        backdrop-filter: blur(14px);
        display: flex;
        flex-direction: column;
        gap: 28px;
        position: relative;
        overflow: hidden;
        transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
    }
    .block:hover {
        transform: translateY(-3px);
        box-shadow: 0 20px 56px rgba(15, 23, 42, 0.12);
    }

    /* top accent line — hidden until hover */
    .block::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 3px;
        width: 100%;
        border-radius: 20px 20px 0 0;
        opacity: 0;
        transition: opacity 0.25s ease;
    }
    .block:hover::before {
        opacity: 1;
    }

    /* Per-block border/topbar color */
    .anim.d2 {
        border-color: var(--cyan-border);
    }
    .anim.d2::before {
        background: linear-gradient(90deg, var(--cyan), transparent);
    }

    .anim.d3 {
        border-color: var(--purple-border);
    }
    .anim.d3::before {
        background: linear-gradient(90deg, var(--purple), transparent);
    }

    .anim.d4 {
        border-color: var(--pink-border);
    }
    .anim.d4::before {
        background: linear-gradient(90deg, var(--pink), transparent);
    }

    /* block header */
    .block-header {
        display: flex;
        align-items: center;
        gap: 18px;
    }

    .block-icon-wrap {
        width: 52px;
        height: 52px;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }
    .icon-cyan {
        background: var(--cyan-soft);
        border: 1px solid var(--cyan-border);
        color: var(--cyan);
    }
    .icon-purple {
        background: var(--purple-soft);
        border: 1px solid var(--purple-border);
        color: var(--purple);
    }
    .icon-pink {
        background: var(--pink-soft);
        border: 1px solid var(--pink-border);
        color: var(--pink);
    }

    .block-title {
        font-family: var(--font-d);
        font-size: 1.35rem;
        font-weight: 700;
        letter-spacing: -0.01em;
        margin: 0;
    }
    .title-cyan {
        color: var(--cyan);
    }
    .title-purple {
        color: var(--purple);
    }
    .title-pink {
        color: var(--pink);
    }

    .block-sub {
        font-size: 0.82rem;
        font-weight: 300;
        color: var(--muted);
        margin: 4px 0 0;
        letter-spacing: 0.02em;
    }

    /* ══════════════════════════
       ① HARD SKILLS — bars
    ══════════════════════════ */
    .bar-list {
        display: flex;
        flex-direction: column;
        gap: 18px;
    }

    .bar-row {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .bar-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .bar-name-row {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .skill-icon {
        opacity: 0.85;
        flex-shrink: 0;
    }

    .bar-name {
        font-family: var(--font-d);
        font-size: 1rem;
        font-weight: 600;
        color: var(--text);
    }
    .bar-pct {
        font-family: var(--font-d);
        font-size: 0.9rem;
        font-weight: 700;
        letter-spacing: 0.02em;
    }

    /* Track */
    .bar-track {
        height: 8px;
        border-radius: 100px;
        background: rgba(15, 23, 42, 0.08);
        overflow: hidden;
    }

    /* Per-skill bar color via --bar-color (set inline from icon color) */
    .bar-fill {
        height: 100%;
        border-radius: 100px;
        transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
        background: linear-gradient(
            90deg,
            var(--bar-color, var(--cyan)) 0%,
            color-mix(in srgb, var(--bar-color, var(--cyan)) 80%, white) 100%
        );
        box-shadow: 0 0 10px color-mix(in srgb, var(--bar-color, var(--cyan)) 40%, transparent);
    }

    /* ══════════════════════════
       ② TOOLS — grid cards
    ══════════════════════════ */
    .tools-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 14px;
    }
    .tool-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        padding: 20px 12px;
        border-radius: 14px;
        background: rgba(124, 58, 237, 0.06);
        border: 1px solid rgba(124, 58, 237, 0.2);
        transition:
            background 0.2s ease,
            border-color 0.2s ease,
            transform 0.2s ease;
        cursor: default;
    }
    .tool-card:hover {
        background: rgba(124, 58, 237, 0.12);
        border-color: var(--purple-border);
        transform: translateY(-3px);
    }
    .tool-icon {
        opacity: 0.9;
    }
    .tool-name {
        font-family: var(--font-d);
        font-size: 0.82rem;
        font-weight: 600;
        color: var(--text);
        text-align: center;
        line-height: 1.3;
    }

    /* ══════════════════════════
       ③ SOFT SKILLS — grid cards
    ══════════════════════════ */
    .soft-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
    }
    .soft-card {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 24px 22px;
        border-radius: 16px;
        background: rgba(219, 39, 119, 0.05);
        border: 1px solid rgba(219, 39, 119, 0.2);
        transition:
            background 0.2s ease,
            border-color 0.2s ease,
            transform 0.2s ease;
    }
    .soft-card:hover {
        background: rgba(219, 39, 119, 0.1);
        border-color: var(--pink-border);
        transform: translateY(-3px);
    }
    .soft-icon-wrap {
        width: 42px;
        height: 42px;
        border-radius: 12px;
        background: var(--pink-soft);
        border: 1px solid var(--pink-border);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--pink);
    }
    .soft-name {
        font-family: var(--font-d);
        font-size: 1rem;
        font-weight: 700;
        color: var(--text);
        letter-spacing: -0.01em;
        margin: 0;
    }
    .soft-desc {
        font-size: 0.85rem;
        font-weight: 300;
        color: var(--muted);
        line-height: 1.65;
        margin: 0;
    }
</style>
