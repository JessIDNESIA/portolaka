<script>
    import { onMount } from "svelte";
    import { lang } from "$lib/stores/lang";
    import { content } from "$lib/content";

    let visible = false;
    $: t = content[$lang].about;

    onMount(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) visible = true;
            },
            { threshold: 0.1 },
        );
        const section = document.getElementById("about");
        if (section) observer.observe(section);
        return () => observer.disconnect();
    });
</script>

<section id="about" class="about-section w-full">
    <!-- BG decorative — same as Opening -->
    <div class="bg-grid"></div>
    <div class="bg-glow-tr"></div>
    <div class="bg-glow-bl"></div>

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

        <!-- ── Main Grid ── -->
        <div class="about-grid">
            <!-- ① Background — full width, prominent -->
            <div class="card card-wide anim d2">
                <div class="card-icon-wrap">
                    <svg
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.8"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                    </svg>
                </div>
                <h3 class="card-title">{t.backgroundTitle}</h3>
                <p class="card-body">
                    {@html t.backgroundBody.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")}
                </p>
            </div>

            <!-- ② Personal Strengths -->
            <div class="card anim d3">
                <div class="card-icon-wrap">
                    <svg
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.8"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>
                <h3 class="card-title">{t.strengthsTitle}</h3>
                <ul class="strength-list">
                    {#each t.strengths as item}
                        <li class="strength-item">
                            <span class="strength-check">
                                <svg
                                    width="12"
                                    height="12"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="3"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </span>
                            <div>
                                <span class="strength-label">{item.label}</span>
                                <span class="strength-desc">{item.desc}</span>
                            </div>
                        </li>
                    {/each}
                </ul>
            </div>

            <!-- ③ Soft Skills -->
            <div class="card anim d4">
                <div class="card-icon-wrap">
                    <svg
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.8"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                </div>
                <h3 class="card-title">{t.softSkillsTitle}</h3>
                <div class="skill-tags">
                    {#each t.tags as tag}
                        <span class="skill-tag tag-accent">{tag}</span>
                    {/each}
                </div>
            </div>

            <!-- ④ Career Interest -->
            <div class="card anim d5">
                <div class="card-icon-wrap">
                    <svg
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.8"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                    </svg>
                </div>
                <h3 class="card-title">{t.careerTitle}</h3>
                <p class="card-body">
                    {@html t.careerBody.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")}
                </p>

                <!-- Mini mission line -->
                <div class="career-cta">
                    <svg
                        width="14"
                        height="14"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                    </svg>
                    {t.careerCta}
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    /* ── Design tokens — same as Opening.svelte ── */
    :root {
        --bg-deep: #030c1a;
        --bg-card: #071426;
        --accent: #38bdf8;
        --accent2: #818cf8;
        --text: #eef4ff;
        --muted: rgba(238, 244, 255, 0.48);
        --glass: rgba(255, 255, 255, 0.04);
        --border: rgba(255, 255, 255, 0.09);
    }

    /* ── Section shell ── */
    .about-section {
        min-height: 100vh;
        width: 100%;
        background: var(--bg-deep);
        position: relative;
        display: flex;
        align-items: center;
        font-family: var(--font-b);
        padding: 80px 0 96px;
    }

    /* ── BG Layers — mirrored from Opening for continuity ── */
    .bg-grid {
        position: absolute;
        inset: 0;
        background-image: linear-gradient(
                rgba(56, 189, 248, 0.03) 1px,
                transparent 1px
            ),
            linear-gradient(
                90deg,
                rgba(56, 189, 248, 0.03) 1px,
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
    .bg-glow-tr {
        position: absolute;
        top: -5%;
        right: -2%;
        width: 500px;
        height: 500px;
        background: radial-gradient(
            circle,
            rgba(56, 189, 248, 0.09) 0%,
            transparent 70%
        );
        pointer-events: none;
    }
    .bg-glow-bl {
        position: absolute;
        bottom: -5%;
        left: -4%;
        width: 440px;
        height: 440px;
        background: radial-gradient(
            circle,
            rgba(129, 140, 248, 0.11) 0%,
            transparent 70%
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
        gap: 48px;
    }

    /* ── Entrance animations — same stagger system as Opening ── */
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
        transition-delay: 0.3s;
    }
    .content-wrapper.visible .anim.d4 {
        opacity: 1;
        transform: none;
        transition-delay: 0.38s;
    }
    .content-wrapper.visible .anim.d5 {
        opacity: 1;
        transform: none;
        transition-delay: 0.46s;
    }

    /* ── Section Header ── */
    .section-header {
        display: flex;
        flex-direction: column;
        gap: 14px;
        max-width: 560px;
    }

    .section-tag {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: rgba(56, 189, 248, 0.08);
        border: 1px solid rgba(56, 189, 248, 0.22);
        color: var(--accent);
        font-size: 0.7rem;
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
        background: var(--accent);
        box-shadow: 0 0 8px var(--accent);
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

    /* Title — same style as Opening .name */
    .section-title {
        font-family: var(--font-d);
        font-size: clamp(2.2rem, 3.8vw, 3.4rem);
        font-weight: 700;
        line-height: 1.15;
        letter-spacing: -0.01em;
        color: var(--text);
        margin: 0;
    }
    .title-accent {
        background: linear-gradient(135deg, var(--accent) 0%, #7dd3fc 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-weight: 800;
    }

    .section-subtitle {
        font-size: 0.98rem;
        font-weight: 300;
        color: var(--muted);
        line-height: 1.75;
        margin: 0;
    }

    /* ── Card Grid ── */
    .about-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    /* ── Card Base ── */
    .card {
        background: var(--glass);
        border: 1px solid var(--border);
        border-radius: 18px;
        padding: 28px 28px 28px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        backdrop-filter: blur(12px);
        transition:
            border-color 0.25s ease,
            transform 0.25s ease,
            box-shadow 0.25s ease;
        position: relative;
        overflow: hidden;
    }

    /* Subtle top-left corner accent line */
    .card::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 48px;
        height: 3px;
        background: linear-gradient(90deg, var(--accent), transparent);
        border-radius: 0 0 4px 0;
        opacity: 0;
        transition: opacity 0.25s ease;
    }
    .card:hover::before {
        opacity: 1;
    }
    .card:hover {
        border-color: rgba(56, 189, 248, 0.2);
        transform: translateY(-3px);
        box-shadow: 0 16px 48px rgba(0, 0, 0, 0.35);
    }

    /* Background card spans 2 columns */
    .card-wide {
        grid-column: 1 / -1;
    }

    /* Icon wrap */
    .card-icon-wrap {
        width: 38px;
        height: 38px;
        border-radius: 10px;
        background: rgba(56, 189, 248, 0.1);
        border: 1px solid rgba(56, 189, 248, 0.18);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--accent);
        flex-shrink: 0;
    }

    /* Card title */
    .card-title {
        font-family: var(--font-d);
        font-size: 1.05rem;
        font-weight: 700;
        color: var(--text);
        letter-spacing: -0.01em;
        margin: 0;
    }

    /* Card body text */
    .card-body {
        font-size: 0.92rem;
        font-weight: 300;
        color: rgba(238, 244, 255, 0.65);
        line-height: 1.8;
        margin: 0;
    }
    .card-body strong {
        color: var(--text);
        font-weight: 500;
    }

    /* ── Strength list ── */
    .strength-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 14px;
        margin: 0;
        padding: 0;
    }
    .strength-item {
        display: flex;
        align-items: flex-start;
        gap: 12px;
    }
    .strength-check {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: rgba(56, 189, 248, 0.12);
        border: 1px solid rgba(56, 189, 248, 0.25);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--accent);
        flex-shrink: 0;
        margin-top: 1px;
    }
    .strength-label {
        display: block;
        font-size: 0.88rem;
        font-weight: 500;
        color: var(--text);
        line-height: 1.3;
    }
    .strength-desc {
        display: block;
        font-size: 0.76rem;
        font-weight: 300;
        color: var(--muted);
        margin-top: 2px;
    }

    /* ── Skill tags ── */
    .skill-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }
    .skill-tag {
        font-size: 0.76rem;
        font-weight: 500;
        padding: 5px 14px;
        border-radius: 100px;
        letter-spacing: 0.02em;
    }
    .tag-accent {
        background: linear-gradient(
            135deg,
            rgba(129, 140, 248, 0.2),
            rgba(99, 102, 241, 0.15)
        );
        border: 1px solid rgba(129, 140, 248, 0.3);
        color: #a5b4fc;
    }
    .tag-outline {
        background: transparent;
        border: 1px solid var(--border);
        color: var(--muted);
    }

    /* ── Career CTA line ── */
    .career-cta {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        margin-top: 4px;
        font-size: 0.78rem;
        font-weight: 500;
        color: var(--accent);
        background: rgba(56, 189, 248, 0.07);
        border: 1px solid rgba(56, 189, 248, 0.18);
        border-radius: 8px;
        padding: 8px 14px;
        width: fit-content;
    }
</style>
