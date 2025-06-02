<script setup>
import { ref, onMounted, nextTick } from 'vue'
import Tilt from 'vanilla-tilt-vue'

const projects = ref([
    {
        id: 1,
        title: "Learning the Unspoken",
        period: "2024-Present",
        icon: "hexagon-nodes",
        logo: "volume-high", // Replace with actual path or use Font Awesome
        logoType: "icon", // "image" or "icon" or "emoji"
        summary: "Award-winning machine learning project that achieved 1st place out of 300+ participants for developing an innovative classification system for nonverbal vocalizations in autistic individuals using advanced audio processing and deep learning techniques.",
        technologies: ["Python", "Polars", "Pytorch", , "Scikit-learn", "Librosa", "Javascript", "HTML", "CSS"],
        links: [
            { type: "website", url: "https://learningtheunspoken.github.io", label: "View Website" }
        ]
    },
    {
        id: 2,
        title: "Canvas-AI Chrome Extension (Palette)",
        period: "2024-Present",
        icon: "comment-nodes",
        logo: "school-circle-exclamation",
        logoType: "icon",
        summary: "Intelligent Chrome extension that integrates AI capabilities with Canvas LMS to provide personalized academic assistance. Features a responsive UI and cloud-hosted LLM for seamless cross-device functionality.",
        technologies: ["TypeScript", "React", "Tailwind CSS", "Python", "Canvas LMS API", "Llama LLM"],
        links: [
            { type: "code", url: "https://github.com/ShivamAmin05/Palette-Canvas-AI-Assistant", label: "View Code" }
        ]
    },
    {
        id: 3,
        title: "Kalshi Market Maker",
        period: "2024-Present",
        icon: "arrow-trend-up",
        logo: "temperature-half",
        logoType: "icon",
        summary: "A market-making bot for Kalshi prediction markets, designed to capitalize on real-time opportunities—especially in weather-related events. This system integrates WebSocket connections for live market updates and uses Selenium automation to scrape bid-ask spreads directly from Kalshi's interface in real time. It implements an automated trading strategy that dynamically adjusts orders to maintain tight spreads, provide liquidity, and profit from market inefficiencies. Ideal for users interested in algorithmic trading and data-driven arbitrage in regulated event markets.",
        technologies: ["Python", "Selenium", "Matplotlib"],
        links: [
            { type: "code", url: "https://github.com/eshan327/kalshi_scraper", label: "View Code" }
        ]
    },
    {
        id: 4,
        title: "Unity Parkour Game",
        period: "2022-2023",
        icon: "person-running",
        logo: "gamepad",
        logoType: "icon",
        summary: "Collaborative 3D parkour game featuring fluid character movement mechanics and realistic physics. Developed using agile methodologies with version control for seamless team coordination and rapid prototyping.",
        technologies: ["C#", "Unity Engine", "Git", "3D Modeling", "Animation Rigging", "Physics Systems", "Game Design", "Team Collaboration"],
        links: [
            { type: "code", url: "https://github.com/ShivamAmin05/Game-Project", label: "View Code" }
        ]
    },
])

const stats = ref([
    { label: "Projects Completed", value: "4+", icon: "rocket" },
    { label: "Technologies Used", value: "15+", icon: "cogs" },
    { label: "Years of Experience", value: "4+", icon: "chart-line" },
    { label: "Lines of Code", value: "10K+", icon: "code" }
])

</script>

<template>
    <div class="min-h-screen py-20">
        <div class="max-w-7xl mx-auto px-6">
            <!-- Projects Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div v-for="(project, index) in projects" :key="project.id" class="project-item">
                    <Tilt>
                        <div class="bg-slate-900/60 backdrop-blur-xl border border-white/20 rounded-2xl p-8 h-full transition-all duration-500 hover:border-blue-400/40 hover:bg-slate-800/60 hover:shadow-2xl hover:shadow-blue-500/20 relative overflow-hidden group transform-gpu"
                            style="transform-style: preserve-3d;">
                            <!-- Tilt Glare Effect -->
                            <div
                                class="tilt-glare absolute inset-0 pointer-events-none rounded-2xl opacity-0 transition-opacity duration-300">
                            </div>

                            <!-- Enhanced Hover Gradient Overlay -->
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            </div>

                            <!-- Animated Background Pattern -->
                            <div
                                class="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                <div
                                    class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse">
                                </div>
                            </div>

                            <!-- Enhanced Header -->
                            <div class="relative z-10 mb-8">
                                <div class="flex items-start justify-between mb-6">
                                    <div class="flex items-center space-x-5">
                                        <div class="relative">
                                            <div
                                                class="w-20 h-20 bg-gradient-to-br from-slate-800/80 to-slate-700/60 backdrop-blur-xl border-2 border-white/30 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-blue-400/50 shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/25">
                                                <!-- Dynamic Logo Display -->
                                                <div v-if="project.logoType === 'image'"
                                                    class="w-12 h-12 rounded-lg overflow-hidden">
                                                    <img :src="project.logo" :alt="project.title"
                                                        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110">
                                                </div>
                                                <font-awesome-icon v-else-if="project.logoType === 'icon'"
                                                    :icon="project.logo"
                                                    class="text-3xl text-white/90 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                                                <span v-else
                                                    class="text-3xl group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">{{
                                                        project.logo }}</span>

                                                <div
                                                    class="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                                </div>
                                                <div
                                                    class="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex-1">
                                            <h2
                                                class="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-300 leading-tight">
                                                {{ project.title }}
                                            </h2>
                                            <div
                                                class="inline-flex items-center bg-gradient-to-r from-blue-500/90 via-purple-500/90 to-blue-500/90 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 border border-white/20 hover:border-white/40">
                                                <font-awesome-icon icon="calendar-alt" class="mr-2" />
                                                {{ project.period }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="relative">
                                        <font-awesome-icon :icon="project.icon"
                                            class="text-4xl text-white/20 group-hover:text-white/60 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 filter drop-shadow-lg" />
                                        <font-awesome-icon :icon="project.icon"
                                            class="absolute inset-0 text-4xl text-white/0 group-hover:text-white/30 transition-all duration-500 blur-sm" />
                                    </div>
                                </div>

                                <!-- Decorative line -->
                                <div
                                    class="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-blue-400/40 transition-colors duration-500">
                                </div>
                            </div>

                            <!-- Summary Section -->
                            <div class="relative z-10 mb-6">
                                <h3 class="text-lg font-semibold text-blue-300 mb-3 flex items-center">
                                    <font-awesome-icon icon="clipboard-list" class="mr-2" />
                                    Summary
                                </h3>
                                <p
                                    class="text-white/80 leading-relaxed text-sm font-medium hover:text-white/90 transition-colors duration-200">
                                    {{ project.summary }}
                                </p>
                            </div>

                            <!-- Technologies Section -->
                            <div class="relative z-10 mb-6">
                                <h3 class="text-lg font-semibold text-purple-300 mb-3 flex items-center">
                                    <font-awesome-icon icon="screwdriver-wrench" class="mr-2" />
                                    Technologies Used
                                </h3>
                                <div class="flex flex-wrap gap-2">
                                    <span v-for="tech in project.technologies" :key="tech"
                                        class="inline-flex items-center bg-gradient-to-r from-slate-700/80 to-slate-600/80 backdrop-blur-sm text-white/90 px-3 py-1.5 rounded-full text-xs font-medium border border-white/20 hover:border-blue-400/40 hover:bg-slate-600/80 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                                        <font-awesome-icon icon="code" class="mr-1.5 text-xs" />
                                        {{ tech }}
                                    </span>
                                </div>
                            </div>

                            <!-- Action Links Section -->
                            <div class="relative z-10 mb-4" v-if="project.links && project.links.length > 0">
                                <div class="flex flex-wrap gap-3 pt-4 border-t border-white/10">
                                    <a v-for="link in project.links" :key="link.url" :href="link.url" target="_blank"
                                        rel="noopener noreferrer"
                                        class="inline-flex items-center bg-gradient-to-r from-blue-600/90 to-purple-600/90 hover:from-blue-500 hover:to-purple-500 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 border border-white/20 hover:border-white/40 backdrop-blur-sm group">
                                        <font-awesome-icon :icon="link.type === 'website' ? 'cloud' : 'code'"
                                            class="mr-2 text-sm group-hover:rotate-12 transition-transform duration-300" />
                                        {{ link.label }}
                                    </a>
                                </div>
                            </div>

                            <!-- Enhanced Bottom Elements -->
                            <div
                                class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out">
                            </div>

                            <!-- Enhanced Corner Accents -->
                            <div
                                class="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-blue-500/30 group-hover:border-blue-400/60 transition-all duration-500 group-hover:w-20 group-hover:h-20">
                            </div>
                            <div
                                class="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-purple-500/30 group-hover:border-purple-400/60 transition-all duration-500 group-hover:w-16 group-hover:h-16">
                            </div>

                            <!-- Floating particles effect -->
                            <div
                                class="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div class="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse">
                                </div>
                                <div class="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse"
                                    style="animation-delay: 0.5s;"></div>
                                <div class="absolute bottom-1/3 left-2/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse"
                                    style="animation-delay: 1s;"></div>
                            </div>
                        </div>
                    </Tilt>
                </div>
            </div>

            <!-- Enhanced Stats Section -->
            <div class="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div v-for="(stat, index) in stats" :key="index"
                    class="bg-slate-900/60 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center hover:border-blue-400/40 hover:bg-slate-800/60 transition-all duration-500 group relative overflow-hidden"
                    style="transform-style: preserve-3d;">
                    <div
                        class="tilt-glare absolute inset-0 pointer-events-none rounded-2xl opacity-0 transition-opacity duration-300">
                    </div>
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>
                    <div class="relative z-10">
                        <div
                            class="text-4xl mb-4 group-hover:scale-125 transition-all duration-500 group-hover:rotate-12 filter drop-shadow-lg">
                            <font-awesome-icon :icon="stat.icon" class="text-white/80" />

                        </div>
                        <div
                            class="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                            {{ stat.value }}
                        </div>
                        <div
                            class="text-white/70 text-sm font-medium group-hover:text-white/90 transition-colors duration-300">
                            {{ stat.label }}
                        </div>
                    </div>
                    <div
                        class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Custom scrollbar to match theme */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: rgba(15, 23, 42, 0.1);
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, #2563eb, #7c3aed);
}

/* Additional custom styles for enhanced animations */
.project-item {
    transform-origin: center;
}

.tilt-card {
    transform-style: preserve-3d;
}

/* Enhance the pulse animation for particles */
@keyframes pulse {

    0%,
    100% {
        opacity: 1;
        transform: scale(1);
    }

    50% {
        opacity: 0.5;
        transform: scale(1.2);
    }
}

.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Enhanced gradient background animation */
@keyframes gradient-shift {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

.bg-gradient-to-br {
    background-size: 200% 200%;
    animation: gradient-shift 10s ease infinite;
}

/* Smooth hover transitions for technology tags */
.tech-tag {
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>