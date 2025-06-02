<script>
import { ref, onMounted, nextTick } from 'vue'
export default {
    name: 'Timeline',
    setup() {
        const timelineItems = ref([
            {
                id: 1,
                title: "UMD Machine Learning Group",
                position: "Research Assistant",
                period: "2025 - Present",
                icon: "hexagon-nodes",
                logo: "/path/to/logo.png",
                logoType: "icon", // "image" or "icon" or "emoji"
                description: [
                    "Analyzed outputs from CLEAVER NLP model to evaluate sentence parsing performance across diverse grammatical structures",
                    "Developed prompt-generation scripts leveraging OpenAI's 4o-mini to iteratively fine-tune CLEAVER with custom data",
                    "Generated 10,000+ synthetically crafted sentences to augment training datasets for improved generalization"
                ]
            },
            {
                id: 2,
                title: "Apex Quant",
                position: "Quantitative Analyst",
                period: "2024 - Present",
                icon: "arrow-trend-up",
                logoType: "icon",
                description: [
                    "Engineering a Kalshi market-making strategy to profit from bid/ask spreads in weather-related prediction markets",
                    "Automated order execution with a Selenium web scraper to track bid/ask prices, submit trades, and log contract history",
                    "Built a Python-based backtesting engine for moving average crossovers on Forex pairs using Yahoo Finance data",
                    "Implemented capital-aware risk management system with position sizing and loss-thresholding logic"
                ]
            },
            {
                id: 3,
                title: "UMD Loop",
                position: "Software Engineer",
                period: "2024 - Present",
                icon: "robot",
                logoType: "icon",
                description: [
                    "Developing ROS2-based local path planning using Nav2 for obstacle avoidance and route optimization",
                    "Integrating navigation stack with rover hardware through ROS2 publisher/subscriber nodes for sensor data pipelines",
                    "Created a custom simulated environment using Gazebo and LIDAR scans to test SLAM-based navigation",
                    "Designed XML behavior trees with BehaviorTree.CPP to coordinate pathfinding, smoothing, and object detection logic"
                ]
            },
            {
                id: 4,
                title: "AI Club",
                position: "Vice President",
                period: "2021 - 2023",
                icon: "hexagon-nodes",
                logoType: "icon",
                description: [
                    "Led weekly lessons on machine learning, Python programming, and applied AI to increase club engagement",
                    "Fine-tuned YoloV5 with labeled datasets to detect food items using PyTorch and W&B logging",
                    "Built multilingual voice-enabled chatbot using OpenAI Whisper + GPT APIs with a user-friendly GUI interface",
                    "Trained an evolutionary neural network (FlappyBird) using a genetic algorithm for inherited feature optimization"
                ]
            },
            {
                id: 5,
                title: "Robotics Team",
                position: "Software Co-lead",
                period: "2022 - 2023",
                icon: "robot",
                logoType: "icon",
                description: [
                    "Collaborated with team to build and program robot in order to compete in the FTC robotics competition",
                    "Taught new members computer science concepts in Java including OOD principles and set up procedures for the robot",
                    "Utilized color detection to automate parking and picking up cones for the FTC competition"
                ]
            },
            {
                id: 6,
                title: "CS Summer Camp",
                position: "Tutor",
                period: "2022",
                icon: "school",
                logoType: "icon",
                description: [
                    "Tutored 10 kids ages 5-10 in basic computer science concepts including debugging, variables, and conditionals",
                    "Utilized various tools to improve computer science understanding including Scratch, Edblocks, and Edscratch",
                    "Organized activities for kids to program Edison robots for various activities including soccer, battles, and maze traversal"
                ]
            },
            {
                id: 7,
                title: "Coding Club",
                position: "Lead",
                period: "2021",
                icon: "computer",
                logoType: "icon",
                description: [
                    "Inventoried and recorded problems with 15 laptops including defective hard drives, motherboards, batteries, and RAM",
                    "Repaired computers by replacing parts, and installing Ubuntu operating system to improve system performance"
                ]
            },
        ])

        const animateTimeline = () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.remove('opacity-0', 'translate-y-12')
                            entry.target.classList.add('opacity-100', 'translate-y-0')
                        }, index * 150)
                    }
                })
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            })

            const timelineElements = document.querySelectorAll('.timeline-item')
            timelineElements.forEach(el => {
                el.classList.add('transition-all', 'duration-700', 'ease-out')
                observer.observe(el)
            })
        }

        onMounted(async () => {
            await nextTick()
            setTimeout(animateTimeline, 200)
        })

        return {
            timelineItems
        }
    }
}
</script>

<template>
    <div class="min-h-screen py-20">
        <div class="max-w-6xl mx-auto px-6">

            <div class="relative">
                <div
                    class="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-blue-400 rounded-full shadow-lg h-full hidden md:block">
                </div>
                <div
                    class="absolute left-8 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-blue-400 rounded-full shadow-lg h-full md:hidden">
                </div>

                <div v-for="(item, index) in timelineItems" :key="item.id"
                    class="timeline-item relative mb-12 opacity-0 transform translate-y-12"
                    :class="`delay-${index * 100}`">

                    <!-- Desktop Layout -->
                    <div class="hidden md:block">
                        <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-20">
                            <div
                                class="w-20 h-20 bg-slate-900/50 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-slate-800/50 group">
                                <!-- Dynamic Icon Rendering -->
                                <span v-if="item.logoType === 'emoji'"
                                    class="text-2xl group-hover:scale-110 transition-transform duration-300">
                                    {{ item.icon }}
                                </span>
                                <font-awesome-icon v-else-if="item.logoType === 'icon'" :icon="item.icon"
                                    class="text-2xl group-hover:scale-110 transition-transform duration-300 text-white" />
                                <img v-else-if="item.logoType === 'image'" :src="item.logo" :alt="item.title"
                                    class="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />

                                <div
                                    class="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                </div>
                            </div>
                        </div>

                        <!-- Content Card -->
                        <div :class="[
                            'bg-slate-900/50 backdrop-blur-lg border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:border-white/20 hover:bg-slate-800/50 relative overflow-hidden group',
                            'w-5/12 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10',
                            index % 2 === 0 ? 'ml-auto mr-8' : 'mr-auto ml-8'
                        ]">
                            <!-- Hover Gradient Overlay -->
                            <div
                                class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            </div>

                            <!-- Arrow -->
                            <div :class="[
                                'absolute top-1/2 transform -translate-y-1/2',
                                'w-0 h-0 border-t-4 border-b-4 border-transparent',
                                index % 2 === 0 ?
                                    '-left-4 border-r-4 border-r-slate-900/50' :
                                    '-right-4 border-l-4 border-l-slate-900/50'
                            ]"></div>

                            <div class="relative z-10">
                                <h2
                                    class="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                                    {{ item.title }}
                                </h2>
                                <h3
                                    class="text-lg font-semibold text-blue-300 mb-4 group-hover:text-white transition-colors duration-300">
                                    {{ item.position }}
                                </h3>
                                <div
                                    class="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
                                    <font-awesome-icon icon="calendar-alt" class="mr-2" />
                                    {{ item.period }}
                                </div>
                                <ul class="text-white/70 space-y-3">
                                    <li v-for="(desc, descIndex) in item.description" :key="descIndex"
                                        class="flex items-start space-x-3 group/item">
                                        <div
                                            class="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200">
                                        </div>
                                        <span
                                            class="leading-relaxed group-hover/item:text-white transition-colors duration-200">{{
                                                desc }}</span>
                                    </li>
                                </ul>
                            </div>

                            <!-- Bottom Gradient Line -->
                            <div
                                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500">
                            </div>
                        </div>
                    </div>

                    <!-- Mobile Layout -->
                    <div class="md:hidden">
                        <!-- Timeline Icon -->
                        <div class="absolute left-8 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-20">
                            <div
                                class="w-16 h-16 bg-slate-900/50 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center">
                                <!-- Dynamic Icon Rendering -->
                                <span v-if="item.logoType === 'emoji'" class="text-xl">
                                    {{ item.icon }}
                                </span>
                                <font-awesome-icon v-else-if="item.logoType === 'icon'" :icon="item.icon"
                                    class="text-xl text-white" />
                                <img v-else-if="item.logoType === 'image'" :src="item.logo" :alt="item.title"
                                    class="w-6 h-6" />
                            </div>
                        </div>

                        <!-- Content Card -->
                        <div
                            class="bg-slate-900/50 backdrop-blur-lg border border-white/10 rounded-2xl p-6 ml-20 transition-all duration-500 hover:border-white/20 hover:bg-slate-800/50 hover:-translate-y-1 relative overflow-hidden group">
                            <!-- Hover Gradient Overlay -->
                            <div
                                class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            </div>

                            <!-- Arrow -->
                            <div
                                class="absolute left-12 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-3 border-b-3 border-transparent border-r-3 border-r-slate-900/50">
                            </div>

                            <div class="relative z-10">
                                <h2
                                    class="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                                    {{ item.title }}
                                </h2>
                                <h3
                                    class="text-base font-semibold text-blue-300 mb-3 group-hover:text-white transition-colors duration-300">
                                    {{ item.position }}
                                </h3>
                                <div
                                    class="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4 shadow-lg">
                                    <font-awesome-icon icon="calendar-alt" class="mr-1" />
                                    {{ item.period }}
                                </div>
                                <ul class="text-white/70 space-y-2 text-sm">
                                    <li v-for="(desc, descIndex) in item.description" :key="descIndex"
                                        class="flex items-start space-x-2">
                                        <div
                                            class="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-1.5 flex-shrink-0">
                                        </div>
                                        <span class="leading-relaxed">{{ desc }}</span>
                                    </li>
                                </ul>
                            </div>

                            <!-- Bottom Gradient Line -->
                            <div
                                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.delay-0 {
    animation-delay: 0ms;
}

.delay-100 {
    animation-delay: 100ms;
}

.delay-200 {
    animation-delay: 200ms;
}

.delay-300 {
    animation-delay: 300ms;
}

.delay-400 {
    animation-delay: 400ms;
}

/* Custom scrollbar to match navbar */
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
</style>