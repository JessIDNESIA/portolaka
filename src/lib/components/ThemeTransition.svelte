<!--
    Transisi tema: gelap (Education) → terang (Skills dan seterusnya).
    Bawah = gelap (sambung Education), atas = terang (sambung Skills).
-->
<section class="theme-transition" aria-hidden="true">
    <div class="transition-gradient"></div>
</section>

<style>
    .theme-transition {
        height: 42vh;
        min-height: 280px;
        width: 100%;
        position: relative;
        overflow: hidden;
        pointer-events: none;
    }

    .transition-gradient {
        position: absolute;
        inset: 0;
        /* Bawah (sambung Education) gelap → atas (sambung Skills) terang */
        background: linear-gradient(
            180deg,
            #030c1a 0%,
            #0f172a 15%,
            #1e293b 28%,
            #475569 42%,
            #94a3b8 58%,
            #cbd5e1 72%,
            #e2e8f0 85%,
            #f1f5f9 92%,
            #f8fafc 100%
        );
    }
</style>
