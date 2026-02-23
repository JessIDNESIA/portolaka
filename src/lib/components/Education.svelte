<script>
    import { onMount } from "svelte";
    let visible = false;

    onMount(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) visible = true;
            },
            { threshold: 0.1 },
        );
        const section = document.getElementById("education");
        if (section) observer.observe(section);
        return () => observer.disconnect();
    });
</script>

<section id="education" class="edu-section w-full">
    <!-- Colorful background blobs -->
    <div class="blob blob-cyan"></div>
    <div class="blob blob-purple"></div>
    <div class="blob blob-pink"></div>
    <div class="bg-grid"></div>

    <div class="content-wrapper" class:visible>
        <!-- ── Section Header ── -->
        <div class="section-header anim d1">
            <span class="section-tag">
                <span class="tag-dot"></span>
                Academic Background
            </span>
            <h2 class="section-title">My Education</h2>
            <p class="section-subtitle">
                Formal training in software engineering — building a strong
                foundation in modern web and mobile development technologies.
            </p>
        </div>

        <!-- ── Layout ── -->
        <div class="edu-layout">
            <!-- ① School Hero Card -->
            <div class="card card-school anim d2">
                <!-- Colorful top gradient bar -->
                <div class="school-topbar"></div>

                <div class="school-body">
                    <div class="school-icon-wrap">
                        <svg
                            width="32"
                            height="32"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.6"
                                d="M12 14l9-5-9-5-9 5 9 5z"
                            />
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.6"
                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                            />
                        </svg>
                    </div>

                    <div class="school-meta">
                        <span class="school-period">2024 — 2026</span>
                        <span class="school-status">
                            <span class="status-dot"></span>
                            Active
                        </span>
                    </div>

                    <h3 class="school-name">IDN Boarding<br />School</h3>
                    <p class="school-location">
                        Solo, Central Java · Indonesia
                    </p>

                    <div class="school-divider"></div>

                    <div class="school-major">
                        <svg
                            width="16"
                            height="16"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            />
                        </svg>
                        <div>
                            <span class="major-label">Major</span>
                            <span class="major-name"
                                >Software Engineering (RPL)</span
                            >
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right column -->
            <div class="right-col">
                <!-- ② Relevant Subjects -->
                <div class="card card-subjects anim d3">
                    <div class="card-header">
                        <div class="card-icon-wrap icon-blue">
                            <svg
                                width="22"
                                height="22"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.8"
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                />
                            </svg>
                        </div>
                        <h3 class="card-title">Relevant Subjects</h3>
                    </div>

                    <ul class="subject-list">
                        <li class="subject-item">
                            <span class="subject-num num-cyan">01</span>
                            <div>
                                <span class="subject-name">Web Development</span
                                >
                                <div class="subject-chips">
                                    <span class="s-chip chip-cyan">HTML</span>
                                    <span class="s-chip chip-cyan">CSS</span>
                                    <span class="s-chip chip-cyan">PHP</span>
                                    <span class="s-chip chip-cyan"
                                        >JavaScript</span
                                    >
                                </div>
                            </div>
                        </li>
                        <li class="subject-item">
                            <span class="subject-num num-purple">02</span>
                            <div>
                                <span class="subject-name"
                                    >Mobile App Development</span
                                >
                                <div class="subject-chips">
                                    <span class="s-chip chip-purple"
                                        >Flutter</span
                                    >
                                    <span class="s-chip chip-purple">Dart</span>
                                </div>
                            </div>
                        </li>
                        <li class="subject-item">
                            <span class="subject-num num-pink">03</span>
                            <div>
                                <span class="subject-name"
                                    >Frameworks & Tools</span
                                >
                                <div class="subject-chips">
                                    <span class="s-chip chip-pink"
                                        >Tailwind CSS</span
                                    >
                                    <span class="s-chip chip-pink">Laravel</span
                                    >
                                    <span class="s-chip chip-pink">Flutter</span
                                    >
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <!-- ③ Academic Achievements -->
                <div class="card card-achievement anim d4">
                    <div class="card-header">
                        <div class="card-icon-wrap icon-yellow">
                            <svg
                                width="22"
                                height="22"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.8"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                />
                            </svg>
                        </div>
                        <h3 class="card-title">Academic Achievements</h3>
                    </div>

                    <div class="achievement-empty">
                        <svg
                            class="empty-icon"
                            width="44"
                            height="44"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <p class="empty-title">Still in Progress</p>
                        <p class="empty-desc">
                            Currently focused on sharpening skills and
                            completing projects.
                            <strong>Achievements coming soon.</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    :root {
        --bg-deep: #030c1a;
        --text: #eef4ff;
        --muted: rgba(238, 244, 255, 0.48);
        --glass: rgba(255, 255, 255, 0.04);
        --border: rgba(255, 255, 255, 0.09);

        /* Colorful palette */
        --cyan: #22d3ee;
        --cyan-soft: rgba(34, 211, 238, 0.12);
        --cyan-border: rgba(34, 211, 238, 0.28);

        --purple: #a78bfa;
        --purple-soft: rgba(167, 139, 250, 0.12);
        --purple-border: rgba(167, 139, 250, 0.28);

        --pink: #f472b6;
        --pink-soft: rgba(244, 114, 182, 0.12);
        --pink-border: rgba(244, 114, 182, 0.28);

        --yellow: #fbbf24;
        --yellow-soft: rgba(251, 191, 36, 0.1);
        --yellow-border: rgba(251, 191, 36, 0.25);

        --green: #4ade80;
    }

    /* ── Section ── */
    .edu-section {
        min-height: 100vh;
        width: 100%;
        background: var(--bg-deep);
        position: relative;
        display: flex;
        align-items: center;
        font-family: var(--font-b);
        padding: 80px 0 96px;
        overflow: hidden;
    }

    /* ── Colorful blobs ── */
    .blob {
        position: absolute;
        border-radius: 50%;
        filter: blur(80px);
        pointer-events: none;
    }
    .blob-cyan {
        width: 420px;
        height: 420px;
        top: -10%;
        left: -6%;
        background: radial-gradient(
            circle,
            rgba(34, 211, 238, 0.13) 0%,
            transparent 70%
        );
    }
    .blob-purple {
        width: 480px;
        height: 480px;
        bottom: -8%;
        right: -4%;
        background: radial-gradient(
            circle,
            rgba(167, 139, 250, 0.14) 0%,
            transparent 70%
        );
    }
    .blob-pink {
        width: 320px;
        height: 320px;
        top: 40%;
        right: 20%;
        background: radial-gradient(
            circle,
            rgba(244, 114, 182, 0.08) 0%,
            transparent 70%
        );
    }

    /* ── BG grid ── */
    .bg-grid {
        position: absolute;
        inset: 0;
        background-image: linear-gradient(
                rgba(255, 255, 255, 0.025) 1px,
                transparent 1px
            ),
            linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.025) 1px,
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
        transition-delay: 0.3s;
    }
    .content-wrapper.visible .anim.d4 {
        opacity: 1;
        transform: none;
        transition-delay: 0.4s;
    }

    /* ── Section Header ── */
    .section-header {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    .section-tag {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: rgba(34, 211, 238, 0.08);
        border: 1px solid rgba(34, 211, 238, 0.22);
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
    /* Colorful gradient on accent word */
    .title-accent {
        background: linear-gradient(
            135deg,
            var(--cyan) 0%,
            var(--purple) 50%,
            var(--pink) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-weight: 800;
    }
    .section-subtitle {
        font-size: 1.1rem;
        font-weight: 300;
        color: var(--muted);
        line-height: 1.75;
        margin: 0;
        max-width: 640px;
    }

    /* ── Layout ── */
    .edu-layout {
        display: grid;
        grid-template-columns: 380px 1fr;
        gap: 24px;
        align-items: stretch;
    }

    /* ── Card base ── */
    .card {
        background: var(--glass);
        border: 1px solid var(--border);
        border-radius: 20px;
        padding: 32px;
        backdrop-filter: blur(16px);
        display: flex;
        flex-direction: column;
        gap: 22px;
        position: relative;
        overflow: hidden;
        transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
    }
    .card:hover {
        transform: translateY(-4px);
        box-shadow: 0 20px 56px rgba(0, 0, 0, 0.4);
    }

    /* ── School card ── */
    .card-school {
        padding: 0;
        flex-direction: column;
        border-color: rgba(34, 211, 238, 0.18);
    }
    .card-school:hover {
        border-color: rgba(34, 211, 238, 0.36);
    }

    /* Rainbow top bar */
    .school-topbar {
        height: 5px;
        border-radius: 20px 20px 0 0;
        background: linear-gradient(
            90deg,
            var(--cyan) 0%,
            var(--purple) 40%,
            var(--pink) 70%,
            var(--yellow) 100%
        );
    }

    .school-body {
        padding: 28px 32px 32px;
        display: flex;
        flex-direction: column;
        gap: 14px;
        flex: 1;
    }

    .school-icon-wrap {
        width: 62px;
        height: 62px;
        border-radius: 16px;
        background: var(--cyan-soft);
        border: 1px solid var(--cyan-border);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--cyan);
    }

    .school-meta {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    .school-period {
        font-family: var(--font-d);
        font-size: 0.82rem;
        font-weight: 600;
        color: var(--cyan);
        letter-spacing: 0.06em;
        text-transform: uppercase;
    }
    .school-status {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: rgba(74, 222, 128, 0.09);
        border: 1px solid rgba(74, 222, 128, 0.22);
        color: var(--green);
        font-size: 0.7rem;
        font-weight: 500;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        padding: 3px 10px;
        border-radius: 100px;
    }
    .status-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--green);
        box-shadow: 0 0 7px var(--green);
        animation: pulse-dot 2.2s ease-in-out infinite;
    }

    .school-name {
        font-family: var(--font-d);
        font-size: clamp(1.8rem, 2.8vw, 2.4rem);
        font-weight: 800;
        letter-spacing: -0.02em;
        line-height: 1.1;
        /* Colorful gradient on school name */
        background: linear-gradient(135deg, var(--text) 30%, var(--cyan) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin: 0;
    }
    .school-location {
        font-size: 0.95rem;
        font-weight: 300;
        color: var(--muted);
        margin: 0;
    }
    .school-divider {
        height: 1px;
        background: linear-gradient(
            90deg,
            var(--cyan-border),
            var(--purple-border),
            transparent
        );
    }
    .school-major {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        color: var(--purple);
    }
    .school-major svg {
        flex-shrink: 0;
        margin-top: 3px;
    }
    .major-label {
        display: block;
        font-size: 0.7rem;
        font-weight: 500;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--muted);
        margin-bottom: 3px;
    }
    .major-name {
        display: block;
        font-family: var(--font-d);
        font-size: 1.05rem;
        font-weight: 700;
        color: var(--purple);
        line-height: 1.3;
    }

    /* ── Right column ── */
    .right-col {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    /* ── Card header ── */
    .card-header {
        display: flex;
        align-items: center;
        gap: 14px;
    }
    .card-icon-wrap {
        width: 44px;
        height: 44px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }
    .icon-blue {
        background: var(--cyan-soft);
        border: 1px solid var(--cyan-border);
        color: var(--cyan);
    }
    .icon-yellow {
        background: var(--yellow-soft);
        border: 1px solid var(--yellow-border);
        color: var(--yellow);
    }

    .card-title {
        font-family: var(--font-d);
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--text);
        letter-spacing: -0.01em;
        margin: 0;
    }

    /* ── Subjects card border ── */
    .card-subjects {
        border-color: rgba(34, 211, 238, 0.15);
    }
    .card-subjects:hover {
        border-color: rgba(34, 211, 238, 0.3);
    }

    /* ── Subject list ── */
    .subject-list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .subject-item {
        display: flex;
        align-items: flex-start;
        gap: 16px;
    }

    /* Numbered badge per subject — each a different color */
    .subject-num {
        font-family: var(--font-d);
        font-size: 0.78rem;
        font-weight: 800;
        min-width: 34px;
        height: 34px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        letter-spacing: 0.02em;
    }
    .num-cyan {
        background: var(--cyan-soft);
        border: 1px solid var(--cyan-border);
        color: var(--cyan);
    }
    .num-purple {
        background: var(--purple-soft);
        border: 1px solid var(--purple-border);
        color: var(--purple);
    }
    .num-pink {
        background: var(--pink-soft);
        border: 1px solid var(--pink-border);
        color: var(--pink);
    }

    .subject-name {
        display: block;
        font-family: var(--font-d);
        font-size: 1rem;
        font-weight: 600;
        color: var(--text);
        line-height: 1.3;
        margin-bottom: 8px;
    }

    /* Colorful tech chips */
    .subject-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
    }
    .s-chip {
        font-size: 0.76rem;
        font-weight: 500;
        padding: 3px 10px;
        border-radius: 100px;
        letter-spacing: 0.02em;
    }
    .chip-cyan {
        background: var(--cyan-soft);
        border: 1px solid var(--cyan-border);
        color: var(--cyan);
    }
    .chip-purple {
        background: var(--purple-soft);
        border: 1px solid var(--purple-border);
        color: var(--purple);
    }
    .chip-pink {
        background: var(--pink-soft);
        border: 1px solid var(--pink-border);
        color: var(--pink);
    }

    /* ── Achievement card ── */
    .card-achievement {
        flex: 1;
        border-color: rgba(251, 191, 36, 0.15);
    }
    .card-achievement:hover {
        border-color: rgba(251, 191, 36, 0.3);
    }

    .achievement-empty {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 12px;
        padding: 24px;
        background: rgba(251, 191, 36, 0.03);
        border: 1px dashed rgba(251, 191, 36, 0.18);
        border-radius: 14px;
    }
    .empty-icon {
        color: rgba(251, 191, 36, 0.35);
    }
    .empty-title {
        font-family: var(--font-d);
        font-size: 1.15rem;
        font-weight: 700;
        color: var(--yellow);
        margin: 0;
    }
    .empty-desc {
        font-size: 0.92rem;
        font-weight: 300;
        color: rgba(238, 244, 255, 0.45);
        line-height: 1.7;
        margin: 0;
        max-width: 260px;
    }
    .empty-desc strong {
        color: rgba(251, 191, 36, 0.7);
        font-weight: 500;
    }
</style>
