<script lang="ts">
    let activeSection = "opening";

    const sections = [
        { id: "opening", label: "Home" },
        { id: "about", label: "About" },
        { id: "education", label: "Education" },
        { id: "skills", label: "Skills" },
        { id: "project1", label: "Project 1" },
        { id: "project2", label: "Project 2" },
        { id: "project3", label: "Project 3" },
        { id: "achievements", label: "Achievements" },
        { id: "challenges", label: "Challenges" },
        { id: "career-goal", label: "Career" },
        { id: "closing", label: "Contact" },
    ];

    // Track active section on scroll
    if (typeof window !== "undefined") {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        activeSection = section.id;
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
    }
</script>

<nav
    class="fixed left-0 top-0 h-screen w-64 bg-white border-r border-slate-200 shadow-lg z-40 overflow-y-auto"
>
    <div class="p-6">
        <!-- Brand/Logo -->
        <div class="mb-8">
            <h2
                class="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent"
            >
                Portfolio
            </h2>
            <p class="text-sm text-slate-500 mt-1">Navigasi</p>
        </div>

        <!-- Navigation Links -->
        <ul class="space-y-1">
            {#each sections as section}
                <li>
                    <a
                        href="#{section.id}"
                        class="block px-4 py-3 rounded-lg transition-all duration-200"
                        class:bg-primary-50={activeSection === section.id}
                        class:border-l-4={activeSection === section.id}
                        class:border-primary-600={activeSection === section.id}
                        class:text-primary-600={activeSection === section.id}
                        class:font-semibold={activeSection === section.id}
                        class:text-slate-600={activeSection !== section.id}
                        class:hover:bg-slate-50={activeSection !== section.id}
                    >
                        {section.label}
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</nav>
