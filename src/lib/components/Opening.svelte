<script>
    import { onMount } from "svelte";
    import { lang } from "$lib/stores/lang";
    import { content } from "$lib/content";

    let visible = false;
    onMount(() => setTimeout(() => (visible = true), 100));

    $: t = content[$lang].opening;
</script>

<section id="opening" class="opening-section w-full">
    <div class="bg-grid"></div>
    <div class="bg-glow-tl"></div>
    <div class="bg-glow-br"></div>

    <div class="content-wrapper" class:visible>
        <!-- ────── LEFT: Text ────── -->
        <div class="left-panel">
            <div class="badge anim d1">
                <span class="badge-dot"></span>
                {t.badge}
            </div>

            <p class="greeting anim d2">{t.greeting}</p>

            <!-- REVISED: name split to 2 lines, more breathing room -->
            <h1 class="name anim d3">
                {t.nameLine1}
                <br />
                <span class="name-highlight">{t.nameLine2}</span>
            </h1>

            <div class="chips anim d4">
                <span class="chip chip-filled">{t.chip1}</span>
                <span class="chip chip-outline">{t.chip2}</span>
            </div>

            <p class="bio anim d5">
                {@html t.bio.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")}
            </p>

            <div class="mission-card anim d6">
                <svg
                    class="mission-icon"
                    width="18"
                    height="18"
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
                <p>
                    {t.mission}
                </p>
            </div>

            <div class="cta-group anim d7">
                <a href="#about" class="btn-primary">
                    {t.ctaBegin}
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
                            stroke-width="2.5"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </a>
                <a href="#project1" class="btn-ghost">{t.ctaProjects}</a>
            </div>
        </div>

        <!-- ────── RIGHT: Circle Photo ────── -->
        <div class="right-panel anim-photo">
            <div class="photo-wrap">
                <!-- Outer spinning dashed ring -->
                <div class="ring-spin"></div>
                <!-- Static accent ring -->
                <div class="ring-static"></div>

                <!-- Glow behind circle -->
                <div class="circle-glow"></div>

                <!-- Circle frame -->
                <div class="circle-frame">
                    <img
                        src="Jose Shabra.png"
                        alt="Jose Shabra Shatilla Rajjawani"
                        class="photo"
                    />
                </div>

                <!-- Floating "available" badge -->
                <div class="tag-available">
                    <span class="green-dot"></span>
                    {t.available}
                </div>

                <!-- Floating role card -->
                <div class="card-role">
                    <span class="role-top">{t.roleTop}</span>
                    <span class="role-bot">{t.roleBot}</span>
                </div>
            </div>
        </div>
    </div>

    <div class="scroll-hint" class:visible>
        <span>{t.scrollHint}</span>
        <div class="scroll-bar"></div>
    </div>
</section>

<style>
    :root {
        --bg-deep: #030c1a;
        --accent: #38bdf8;
        --accent2: #818cf8;
        --text: #eef4ff;
        --muted: rgba(238, 244, 255, 0.48);
        --glass: rgba(255, 255, 255, 0.045);
        --border: rgba(255, 255, 255, 0.09);
    }

    /* ── Section ── */
    .opening-section {
        min-height: 100vh;
        width: 100%;
        background: var(--bg-deep);
        position: relative;
        /* NO overflow: hidden — it was cutting bottom content.
           BG decorative divs use position:absolute so they won't overflow. */
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: var(--font-b);
        padding: 60px 0 96px; /* top + extra bottom for scroll-hint */
    }

    /* ── BG Layers ── */
    .bg-grid {
        position: absolute;
        inset: 0;
        background-image: linear-gradient(
                rgba(56, 189, 248, 0.04) 1px,
                transparent 1px
            ),
            linear-gradient(
                90deg,
                rgba(56, 189, 248, 0.04) 1px,
                transparent 1px
            );
        background-size: 56px 56px;
        mask-image: radial-gradient(
            ellipse 90% 90% at 50% 50%,
            black 30%,
            transparent 100%
        );
        -webkit-mask-image: radial-gradient(
            ellipse 90% 90% at 50% 50%,
            black 30%,
            transparent 100%
        );
    }
    .bg-glow-tl {
        position: absolute;
        top: -8%;
        left: -4%;
        width: 480px;
        height: 480px;
        background: radial-gradient(
            circle,
            rgba(129, 140, 248, 0.14) 0%,
            transparent 70%
        );
        pointer-events: none;
    }
    .bg-glow-br {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 560px;
        height: 560px;
        background: radial-gradient(
            circle,
            rgba(56, 189, 248, 0.1) 0%,
            transparent 65%
        );
        pointer-events: none;
    }

    /* ── Layout ── */
    .content-wrapper {
        position: relative;
        z-index: 2;
        width: 100%;
        max-width: 1160px;
        margin: 0 auto;
        padding: 72px 48px 48px;
        display: grid;
        grid-template-columns: 1fr 380px;
        gap: 56px;
        align-items: center;
    }

    /* ── Stagger Animations ── */
    .anim,
    .anim-photo {
        opacity: 0;
        transform: translateY(22px);
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
        transition-delay: 0.18s;
    }
    .content-wrapper.visible .anim.d3 {
        opacity: 1;
        transform: none;
        transition-delay: 0.27s;
    }
    .content-wrapper.visible .anim.d4 {
        opacity: 1;
        transform: none;
        transition-delay: 0.36s;
    }
    .content-wrapper.visible .anim.d5 {
        opacity: 1;
        transform: none;
        transition-delay: 0.44s;
    }
    .content-wrapper.visible .anim.d6 {
        opacity: 1;
        transform: none;
        transition-delay: 0.52s;
    }
    .content-wrapper.visible .anim.d7 {
        opacity: 1;
        transform: none;
        transition-delay: 0.6s;
    }
    .content-wrapper.visible .anim-photo {
        opacity: 1;
        transform: none;
        transition-delay: 0.22s;
        transition-duration: 0.9s;
    }

    /* ── Left Panel ── */
    .left-panel {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .badge {
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
    .badge-dot {
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

    .greeting {
        font-size: 1rem;
        font-weight: 300;
        color: var(--muted);
        letter-spacing: 0.06em;
    }

    /* ── REVISED NAME: lighter weight, generous line-height ── */
    .name {
        font-family: var(--font-d);
        font-size: clamp(2.6rem, 4.4vw, 4rem);
        font-weight: 700; /* was 800 → now 700, less packed */
        line-height: 1.18; /* was 1.0 → now 1.18, more air */
        letter-spacing: -0.01em; /* was -0.03em → less tight */
        color: var(--text);
        margin: 0;
    }
    .name-highlight {
        background: linear-gradient(135deg, var(--accent) 0%, #7dd3fc 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-weight: 800; /* accent line stays bold for contrast */
    }

    .chips {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }
    .chip {
        font-size: 0.76rem;
        font-weight: 500;
        padding: 5px 14px;
        border-radius: 100px;
        letter-spacing: 0.025em;
    }
    .chip-filled {
        background: linear-gradient(135deg, var(--accent2), #6366f1);
        color: #fff;
        box-shadow: 0 4px 20px rgba(99, 102, 241, 0.32);
    }
    .chip-outline {
        background: transparent;
        border: 1px solid var(--border);
        color: var(--muted);
    }

    .bio {
        font-size: 0.98rem;
        font-weight: 300;
        color: rgba(238, 244, 255, 0.65);
        line-height: 1.8;
        max-width: 460px;
        margin: 0;
    }
    .bio strong {
        color: var(--text);
        font-weight: 500;
    }

    .mission-card {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        background: var(--glass);
        border: 1px solid var(--border);
        border-left: 3px solid var(--accent);
        border-radius: 14px;
        padding: 16px 20px;
        max-width: 460px;
        backdrop-filter: blur(12px);
    }
    .mission-icon {
        color: var(--accent);
        flex-shrink: 0;
        margin-top: 1px;
    }
    .mission-card p {
        font-size: 0.86rem;
        color: var(--muted);
        line-height: 1.65;
        margin: 0;
    }

    .cta-group {
        display: flex;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;
    }
    .btn-primary {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: linear-gradient(135deg, #38bdf8, #6366f1);
        color: #fff;
        font-family: var(--font-d);
        font-size: 0.88rem;
        font-weight: 700;
        letter-spacing: 0.025em;
        padding: 13px 24px;
        border-radius: 12px;
        text-decoration: none;
        box-shadow: 0 8px 28px rgba(56, 189, 248, 0.28);
        transition:
            transform 0.2s,
            box-shadow 0.2s;
    }
    .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 14px 36px rgba(56, 189, 248, 0.42);
    }
    .btn-ghost {
        font-size: 0.86rem;
        font-weight: 400;
        color: var(--muted);
        text-decoration: none;
        padding-bottom: 2px;
        border-bottom: 1px solid transparent;
        transition:
            color 0.2s,
            border-color 0.2s;
        letter-spacing: 0.025em;
    }
    .btn-ghost:hover {
        color: var(--text);
        border-bottom-color: var(--border);
    }

    /* ── Right Panel ── */
    .right-panel {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .photo-wrap {
        position: relative;
        width: 320px;
        height: 360px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* Spinning dashed outer ring */
    .ring-spin {
        position: absolute;
        inset: -24px;
        border-radius: 50%;
        border: 1.5px dashed rgba(56, 189, 248, 0.22);
        animation: spin-ring 28s linear infinite;
        pointer-events: none;
    }
    /* Static solid inner ring */
    .ring-static {
        position: absolute;
        inset: -10px;
        border-radius: 50%;
        border: 1px solid rgba(56, 189, 248, 0.12);
        pointer-events: none;
    }
    @keyframes spin-ring {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }

    /* Glow underneath */
    .circle-glow {
        position: absolute;
        width: 280px;
        height: 280px;
        border-radius: 50%;
        background: radial-gradient(
            circle,
            rgba(56, 189, 248, 0.18) 0%,
            transparent 70%
        );
        filter: blur(24px);
        pointer-events: none;
        z-index: 0;
    }

    /* ── Circle frame, half-body crop ── */
    .circle-frame {
        position: relative;
        z-index: 1;
        width: 280px;
        height: 280px;
        border-radius: 50%;
        overflow: hidden;
        border: 3px solid rgba(56, 189, 248, 0.35);
        box-shadow:
            0 0 0 6px rgba(56, 189, 248, 0.08),
            0 20px 60px rgba(0, 0, 0, 0.6),
            inset 0 0 30px rgba(56, 189, 248, 0.05);
    }

    /*
     * object-fit: cover  → foto mengisi penuh circle, tidak menyempit
     * object-position: 50% 12%  → crop dari kepala sampai dada (half body)
     * mix-blend-mode: lighten   → bg hitam foto hilang melebur ke dark section
     */
    .photo {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 12%;
        mix-blend-mode: lighten;
        filter: brightness(1.06) contrast(1.03);
        display: block;
    }

    /* Floating available badge */
    .tag-available {
        position: absolute;
        top: -8px;
        right: -24px;
        display: flex;
        align-items: center;
        gap: 8px;
        background: rgba(3, 12, 26, 0.88);
        border: 1px solid rgba(56, 189, 248, 0.28);
        backdrop-filter: blur(14px);
        color: var(--text);
        font-size: 0.73rem;
        font-weight: 500;
        padding: 8px 14px;
        border-radius: 10px;
        white-space: nowrap;
        z-index: 4;
        box-shadow: 0 4px 18px rgba(0, 0, 0, 0.5);
    }
    .green-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #4ade80;
        box-shadow: 0 0 8px #4ade80;
        animation: pulse-dot 2.2s ease-in-out infinite;
    }

    /* Floating role card */
    .card-role {
        position: absolute;
        bottom: -8px;
        left: -28px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgba(3, 12, 26, 0.88);
        border: 1px solid var(--border);
        backdrop-filter: blur(14px);
        padding: 12px 18px;
        border-radius: 14px;
        z-index: 4;
        box-shadow: 0 4px 18px rgba(0, 0, 0, 0.5);
    }
    .role-top {
        font-family: var(--font-d);
        font-size: 1rem;
        font-weight: 800;
        color: var(--accent);
        line-height: 1;
    }
    .role-bot {
        font-size: 0.65rem;
        color: var(--muted);
        font-weight: 300;
        margin-top: 3px;
        white-space: nowrap;
    }

    /* Scroll hint */
    .scroll-hint {
        position: absolute;
        bottom: 24px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        opacity: 0;
        transition: opacity 0.8s ease 1.4s;
        z-index: 3;
        pointer-events: none;
    }
    .scroll-hint.visible {
        opacity: 1;
    }
    .scroll-hint span {
        font-size: 0.68rem;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: var(--muted);
    }
    .scroll-bar {
        width: 1.5px;
        height: 38px;
        background: linear-gradient(to bottom, var(--accent), transparent);
        animation: bar-drop 2.2s ease-in-out infinite;
    }
    @keyframes bar-drop {
        0% {
            transform: scaleY(0);
            transform-origin: top;
            opacity: 0;
        }
        45% {
            transform: scaleY(1);
            transform-origin: top;
            opacity: 1;
        }
        55% {
            transform: scaleY(1);
            transform-origin: bottom;
            opacity: 1;
        }
        100% {
            transform: scaleY(0);
            transform-origin: bottom;
            opacity: 0;
        }
    }
</style>
