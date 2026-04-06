/**
 * English content.
 * Edit text here manually to change the site copy.
 */
export const en = {
    nav: {
        home: "Home",
        about: "About",
        education: "Education",
        skills: "Skills",
        project1: "Project 1",
        project2: "Project 2",
        project3: "Project 3",
        achievements: "Achievements",
        challenges: "Challenges",
        career: "Career",
        contact: "Contact",
        portfolio: "Portfolio",
    },

    opening: {
        badge: "IDN Boarding School · Software Engineer",
        greeting: "Hello, I'm",
        nameLine1: "Jose Shabra",
        chip1: "Full Stack Developer",
        chip2: "Web Engineer",
        bio: "Building **clean**, **responsive**, and **modern** web experiences — empowering local businesses to grow online.",
        mission: "This portfolio introduces my skills, experience, and career goals as a software engineer.",
        ctaBegin: "Let's Begin",
        ctaProjects: "View Projects",
        available: "Available for Projects",
        availableTop: "AVAILABLE FOR WORK",
        techStackTop: "SVELTE & TAILWIND CSS",
        roleTop: "Full Stack",
        roleBot: "Developer",
        scrollHint: "Scroll to explore",
    },

    about: {
        tag: "Get to know me",
        title: "About Me",
        subtitle: "A passionate developer who believes in building meaningful things through clean code and creative thinking.",
        backgroundTitle: "Background",
        backgroundBody: "I'm **Jose Shabra Shatilla Rajjawani**, a student at **IDN Boarding School, Solo**, majoring in **Software Engineering (RPL)**. I have a deep passion for technology and software development — constantly exploring new tools, building projects, and pushing the boundaries of what I can create.",
        strengthsTitle: "Personal Strengths",
        strengths: [
            { label: "Adaptability", desc: "Thrive in fast-changing environments" },
            { label: "Time Management", desc: "Deliver work on time, every time" },
            { label: "Target Oriented", desc: "Stay focused until the goal is reached" },
        ],
        softSkillsTitle: "Soft Skills",
        tags: ["Critical Thinking", "Teamwork", "Communication", "Problem Solving", "Social Ethics"],
        careerTitle: "Career Interest",
        careerBody: "Strongly driven to pursue a career in **software engineering** — building **innovative digital solutions** that make a real difference for people and businesses.",
        careerCta: "Empowering local businesses to grow online",
    },

    education: {
        tag: "Academic Background",
        title: "Journey Of Learning",
        subtitle: "Formal training in software engineering — building a strong foundation in modern web and mobile development technologies.",
        period: "2024 — 2026",
        active: "Active",
        schoolName: "IDN Boarding\nSchool",
        location: "Solo, Central Java · Indonesia",
        majorLabel: "Major",
        majorName: "Software Engineering (RPL)",
        subjectsTitle: "Relevant Subjects",
        subject1: "Web Development",
        subject1Chips: ["HTML", "CSS", "PHP", "JavaScript"],
        subject2: "Mobile App Development",
        subject2Chips: ["Flutter", "Dart"],
        subject3: "Frameworks & Tools",
        subject3Chips: ["Tailwind CSS", "Laravel", "Flutter"],
        achievementTitle: "Academic Achievements",
        achievementEmpty: "Still in Progress",
        achievementDesc: "Currently focused on sharpening skills and completing projects. **Achievements coming soon.**",
    },

    skills: {
        tag: "Skills & Expertise",
        title: "Skills & Expertise",
        subtitle: "A specialized toolkit forged through years of building high-performance digital architectures and immersive user experiences.",
        hardSkillsTitle: "Hard Skills",
        hardSkillsSub: "Core technical proficiency",
        toolsTitle: "Tools & Software",
        toolsSub: "Technologies I work with daily",
        softSkillsTitle: "Soft Skills",
        softSkillsSub: "How I work and think with others",
        items: {
            hard: [
                { name: "HTML", pct: 95, icon: "vscode-icons:file-type-html", color: "#e34f26" },
                { name: "CSS", pct: 95, icon: "vscode-icons:file-type-css", color: "#264de4" },
                { name: "Git", pct: 88, icon: "logos:git-icon", color: "#f05032" },
                { name: "Svelte", pct: 82, icon: "vscode-icons:file-type-svelte", color: "#ff3e00" },
                { name: "Laravel", pct: 90, icon: "logos:laravel", color: "#ff2d20" },
                { name: "Flutter", pct: 75, icon: "logos:flutter", color: "#02569b" },
                { name: "Tailwind", pct: 98, icon: "logos:tailwindcss-icon", color: "#06b6d4" },
                { name: "JavaScript", pct: 92, icon: "logos:javascript", color: "#f7df1e" },
            ],
            tools: [
                { name: "Figma", icon: "logos:figma" },
                { name: "VS Code", icon: "logos:visual-studio-code" },
                { name: "MySQL", icon: "logos:mysql" },
                { name: "Docker", icon: "logos:docker-icon" },
            ],
            soft: [
                {
                    name: "Communication",
                    desc: "Articulating complex technical concepts into actionable business insights for cross-functional stakeholders.",
                    icon: "fluent:chat-bubbles-question-24-regular",
                },
                {
                    name: "Teamwork",
                    desc: "Thriving in agile environments, fostering collaborative growth and maintaining high collective velocity.",
                    icon: "fluent:people-team-24-regular",
                },
                {
                    name: "Problem Solving",
                    desc: "Deconstructing intricate bottlenecks into elegant, scalable solutions with a focus on long-term stability.",
                    icon: "fluent:lightbulb-24-regular",
                },
            ],
        },
    },

    works: {
        tag: "Selected Projects",
        title: "Selected Works",
        subtitle: "A curation of high-performance visual narratives and systemic design solutions built at the intersection of aesthetics and utility.",
        viewDesc: "View Project",
        filters: [
            { id: "all", label: "All Cases" },
            { id: "flutter", label: "Flutter" },
            { id: "laravel", label: "Laravel" },
            { id: "web", label: "Svelte / Web" }
        ],
        items: [
            { id: "01", name: "Ki-mas Portfolio", category: "Web Architecture", tech: "Svelte", type: "web", desc: "A high-performance portfolio ecosystem engineered for modern kinetic aesthetics.", image: "/assets/images/kimas_preview.png", icon: "logos:svelte-icon", url: "https://github.com/JessIDNESIA/Ki-mas" },
            { id: "02", name: "AI Schedule Gen", category: "Intelligent Systems", tech: "Flutter", type: "flutter", desc: "Harnessing Gemini AI to automate complex schedule generation with a motion-first interface.", image: "/assets/images/ai_schedule_preview.png", icon: "logos:flutter", url: "https://github.com/JessIDNESIA/ai_schedule_generator" },
            { id: "03", name: "Payroll Service", category: "Enterprise Backend", tech: "Laravel", type: "laravel", desc: "A mission-critical payroll management system focused on data integrity and automated logic.", image: "/assets/images/payroll_preview.png", icon: "logos:laravel", url: "https://github.com/JessIDNESIA/Payroll_Service" },
            { id: "04", name: "QR Gen & Scanner", category: "Utility App", tech: "Flutter", type: "flutter", desc: "Rapid QR scanning engine and custom generation tool for seamless data exchange.", image: null, icon: "logos:flutter", url: "https://github.com/JessIDNESIA/qr_generator_and_scanner" },
            { id: "05", name: "UI.E-commerce", category: "Interface Design", tech: "Flutter", type: "flutter", desc: "Multi-platform shopping interface featuring cinematic transitions and organic UI flow.", image: null, icon: "logos:flutter", url: "https://github.com/JessIDNESIA/UI.E-commerce" },
            { id: "06", name: "ReadingApp", category: "Digital Library", tech: "Flutter", type: "flutter", desc: "Immersive mobile reading experience with local data persistence and custom themes.", image: null, icon: "logos:flutter", url: "https://github.com/JessIDNESIA/readingapp" },
            { id: "07", name: "Attendance App", category: "Utility", tech: "Flutter", type: "flutter", desc: "Mobile-first attendance tracking with real-time validation for institutional use.", image: null, icon: "logos:flutter", url: "https://github.com/JessIDNESIA/attendance-app" },
            { id: "08", name: "Api News", category: "Media", tech: "Flutter", type: "flutter", desc: "Real-time news aggregation app with personalized feeds and offline support.", image: null, icon: "logos:flutter", url: "https://github.com/JessIDNESIA/apinews_app" },
            { id: "09", name: "Bookstore Svelte", category: "E-Commerce", tech: "Svelte", type: "web", desc: "Experimental bookstore interface exploring Svelte's reactive state management.", image: null, icon: "logos:svelte-icon", url: "https://github.com/JessIDNESIA/bookstore_svelte" },
            { id: "10", name: "Web Book", category: "Library", tech: "PHP", type: "laravel", desc: "Web-based book management system with PHP backend and clean cataloging.", image: null, icon: "logos:php", url: "https://github.com/JessIDNESIA/Web_book" },
            { id: "11", name: "LARAVEL AJAX CRUD", category: "Utility", tech: "Laravel", type: "laravel", desc: "Laravel implementation of AJAX-based CRUD operations for seamless data updates.", image: null, icon: "logos:laravel", url: "https://github.com/JessIDNESIA/CRY_AJAX" },
            { id: "12", name: "Calculator Pro", category: "Utility", tech: "PHP", type: "laravel", desc: "Web-based mathematical engine exploring PHP functional logic and user input handling.", image: null, icon: "logos:php", url: "https://github.com/JessIDNESIA/kalkulatorpakbaihaqi" },
            { id: "13", name: "E-Commerce Anomali", category: "Web Design", tech: "HTML", type: "web", desc: "Boutique web design project focusing on custom HTML/CSS layouts and aesthetics.", image: null, icon: "logos:html-5", url: "https://github.com/JessIDNESIA/E-Commerce" },
            { id: "14", name: "Web Portofolio (Beta)", category: "Static Web", tech: "HTML", type: "web", desc: "Early exploration into professional web presence with semantic HTML and CSS.", image: null, icon: "logos:html-5", url: "https://github.com/JessIDNESIA/WebPortofolio" },
            { id: "15", name: "Notepad Project", category: "Utility", tech: "Java", type: "web", desc: "Systemic note-taking application designed for cross-platform data management.", image: null, icon: "logos:java" },
            { id: "16", name: "Ujian Laravel", category: "Education", tech: "Laravel", type: "laravel", desc: "Examination management system built with Laravel for academic assessment.", image: null, icon: "logos:laravel", url: "https://github.com/JessIDNESIA/Ujian_laravel-Jose" },
            { id: "17", name: "Pengaduan Web", category: "Governance", tech: "PHP", type: "laravel", desc: "Public complaint reporting platform focusing on transparency and accessibility.", image: null, icon: "logos:php", url: "https://github.com/JessIDNESIA/pengaduan-website" },
            { id: "18", name: "TODOS App", category: "Productivity", tech: "JavaScript", type: "web", desc: "Advanced task management system exploring modern reactive DOM interactions.", image: null, icon: "logos:javascript", url: "https://github.com/JessIDNESIA/TODOS-APP" },
            { id: "19", name: "Company Profile", category: "Business", tech: "HTML", type: "web", desc: "High-fidelity corporate identity website showcasing systemic design patterns.", image: null, icon: "logos:html-5", url: "https://github.com/JessIDNESIA/CompanyProfile" },
            { id: "20", name: "Portolaka", category: "Portfolio", tech: "Svelte", type: "web", desc: "The engine behind this high-performance portfolio ecosystem.", image: null, icon: "logos:svelte-icon", url: "https://github.com/JessIDNESIA/portolaka" }
        ]
    },

    achievements: {
        title: "Achievements & Certifications",
        competitions: "Competitions",
        comingSoon: "Coming soon",
        comingSoonDesc: "Ready for the next challenge!",
        certifications: "Certifications",
        workshops: "Workshops",
        onlineCourses: "Online Courses",
        verify: "Verify",
        viewMore: "View More",
        courseLink: "Course Link",
        docInProgress: "Documentation in progress",
    },

    challenges: {
        title: "Challenges & Learning",
        challengeTitle: "Biggest Challenge",
        challengeBody: "Becoming a Full Stack Developer",
        solutionTitle: "How I Overcome It",
        solutionBody: "Finding a mentor or learning from online resources",
        strategies: [
            { title: "Strategy 1", body: "Learn from trusted sources" },
            { title: "Strategy 2", body: "Build a project and share it on social media" },
            { title: "Strategy 3", body: "Gain more experience by building projects" },
        ],
        lessonsTitle: "Lessons Learned",
        lessons: [
            { title: "Lesson 1", body: "The importance of learning from trusted sources" },
            { title: "Lesson 2", body: "The importance of building a portfolio and sharing it on social media" },
            { title: "Lesson 3", body: "The importance of gaining experience through projects" },
        ],
    },

    careerGoal: {
        title: "Career Goals & Plans",
        visionTitle: "My Career Vision",
        visionBody: "To become a Full Stack Developer who contributes to creating technology solutions with social impact",
        shortTerm: "Short-term Goal",
        shortTermBody: "1-2 years - Master modern frameworks and land first job",
        midTerm: "Mid-term Goal",
        midTermBody: "3-5 years - Become a senior developer and lead a small team",
        longTerm: "Long-term Goal",
        longTermBody: "5+ years - Build my own startup or become a tech lead",
        skillsTitle: "Skills I Want to Develop",
        technicalSkills: "Technical Skills",
        professionalSkills: "Professional Skills",
        contributionTitle: "Contribution I Want to Give",
        contributionBody: "Creating technology products that help SMEs grow, sharing knowledge through mentoring, or contributing to the open-source community",
    },

    closing: {
        title: "Thank You 🎉",
        subtitle: "I am eager to contribute my skills and passion to high-impact projects and teams.",
        uniqueTitle: "What makes me unique?",
        takeaways: [
            {
                title: "Resilient Code",
                body: "Engineered for durability and performance across every viewport and connection speed.",
                icon: "hugeicons:workout-stretching"
            },
            {
                title: "Target Focus",
                body: "Meticulous attention to microscopic details that define the user's emotional journey.",
                icon: "hugeicons:target-02"
            },
            {
                title: "True Partnership",
                body: "Collaborative integration that aligns business goals with innovative creative solutions.",
                icon: "hugeicons:agreement-01"
            }
        ],
        contactTitle: "Let's initiate the next phase.",
        email: "Email",
        linkedin: "LinkedIn",
        phone: "Phone",
        github: "Github",
        cta: "Click the icon above to contact me 👋",
        backToTop: "↑ Back to Top",
        footer: "© 2026 Jose Shabra Shatilla Rajjawani | Made with ❤️ using SvelteKit & Tailwind CSS",
    },
} as const;

export type ContentEn = typeof en;
