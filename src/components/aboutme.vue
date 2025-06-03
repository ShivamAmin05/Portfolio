<script setup>
import Laptop from './laptop.vue'
</script>

<template>
    <div class="min-h-screen py-20">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Text section -->
                <div class="group/text">
                    <!-- Header -->
                    <div class="mb-8" v-motion :initial="{ opacity: 0, y: -50 }"
                        :visible="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }">
                        <h1 class="text-4xl md:text-6xl font-bold mb-4 text-white">
                            <font-awesome-icon :icon="['fas', 'book-open-reader']" class="mr-4" />
                            About Me
                        </h1>
                    </div>

                    <!-- Content -->
                    <div class="space-y-6 text-white/80">
                        <p class="text-lg leading-relaxed" v-motion :initial="{ opacity: 0, x: -30 }"
                            :visible="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200, ease: 'easeOut' } }">
                            I'm a <span class="font-semibold text-blue-400">junior at the University of Maryland,
                                College Park</span>,
                            pursuing dual degrees in <span class="font-semibold text-purple-400">Computer Science</span>
                            and
                            <span class="font-semibold text-cyan-400">Mathematics</span>. My journey into technology
                            began in high school,
                            and what started as curiosity has grown into a genuine passion for using code to solve
                            meaningful problems.
                        </p>

                        <div class="group border-l-4 border-gradient-to-b from-blue-500 to-purple-500 pl-6 py-4 bg-slate-900/40 backdrop-blur-sm rounded-r-lg border border-white/10 hover:border-white/30 hover:bg-slate-800/60 transition-all duration-500 relative overflow-hidden"
                            v-motion :initial="{ opacity: 0, scale: 0.95, x: -20 }"
                            :visible="{ opacity: 1, scale: 1, x: 0, transition: { duration: 700, delay: 400, ease: 'easeOut' } }">

                            <!-- Subtle background gradient on hover -->
                            <div
                                class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out">
                            </div>

                            <p class="text-lg leading-relaxed italic text-white/90 relative z-10">
                                The intersection of mathematics and computer science fascinates me — it's where
                                theoretical concepts meet
                                real-world applications. This combination has shaped how I approach challenges, allowing
                                me to think
                                logically and analyze problems from multiple angles.
                            </p>
                        </div>

                        <p class="text-lg leading-relaxed" v-motion :initial="{ opacity: 0, x: -30 }"
                            :visible="{ opacity: 1, x: 0, transition: { duration: 600, delay: 600, ease: 'easeOut' } }">
                            What drives me most is the <span class="font-semibold text-green-400">continuous
                                learning</span>
                            that comes with this field. Every project presents new obstacles to overcome and
                            technologies to master.
                            I'm always eager to take on fresh challenges and contribute to innovative solutions that
                            make a real impact.
                        </p>

                        <!-- Skills badges -->
                        <div class="flex flex-wrap gap-3 mt-8" v-motion :initial="{ opacity: 0, y: 20 }"
                            :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 800, ease: 'easeOut' } }">
                            <span
                                class="inline-flex items-center bg-slate-900/60 backdrop-blur-xl border border-white/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium hover:border-blue-400/40 hover:bg-blue-500/20 hover:text-blue-200 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 cursor-pointer"
                                v-motion :initial="{ opacity: 0, scale: 0.8, y: 10 }"
                                :visible="{ opacity: 1, scale: 1, y: 0, transition: { duration: 400, delay: 1000, ease: 'backOut' } }">
                                <font-awesome-icon icon="brain" class="mr-2 text-xs" />
                                Problem Solving
                            </span>
                            <span
                                class="inline-flex items-center bg-slate-900/60 backdrop-blur-xl border border-white/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium hover:border-purple-400/40 hover:bg-purple-500/20 hover:text-purple-200 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer"
                                v-motion :initial="{ opacity: 0, scale: 0.8, y: 10 }"
                                :visible="{ opacity: 1, scale: 1, y: 0, transition: { duration: 400, delay: 1100, ease: 'backOut' } }">
                                <font-awesome-icon icon="project-diagram" class="mr-2 text-xs" />
                                Algorithm Design
                            </span>
                            <span
                                class="inline-flex items-center bg-slate-900/60 backdrop-blur-xl border border-white/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium hover:border-cyan-400/40 hover:bg-cyan-500/20 hover:text-cyan-200 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 cursor-pointer"
                                v-motion :initial="{ opacity: 0, scale: 0.8, y: 10 }"
                                :visible="{ opacity: 1, scale: 1, y: 0, transition: { duration: 400, delay: 1200, ease: 'backOut' } }">
                                <font-awesome-icon icon="calculator" class="mr-2 text-xs" />
                                Mathematical Analysis
                            </span>
                            <span
                                class="inline-flex items-center bg-slate-900/60 backdrop-blur-xl border border-white/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium hover:border-green-400/40 hover:bg-green-500/20 hover:text-green-200 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 cursor-pointer"
                                v-motion :initial="{ opacity: 0, scale: 0.8, y: 10 }"
                                :visible="{ opacity: 1, scale: 1, y: 0, transition: { duration: 400, delay: 1300, ease: 'backOut' } }">
                                <font-awesome-icon icon="lightbulb" class="mr-2 text-xs" />
                                Innovation
                            </span>
                        </div>
                    </div>
                </div>

                <!-- 3D Laptop section -->
                <div class="relative group" v-motion :initial="{ opacity: 0, x: 50, scale: 0.9 }"
                    :visible="{ opacity: 1, x: 0, scale: 1, transition: { duration: 800, delay: 300, ease: 'easeOut' } }">
                    <!-- Main container with glassmorphism effect -->
                    <div
                        class="bg-slate-900/60 backdrop-blur-xl border border-white/20 rounded-2xl p-8 transition-all duration-500 hover:border-blue-400/40 hover:bg-slate-800/60 hover:shadow-2xl hover:shadow-blue-500/20 relative overflow-hidden">

                        <!-- Subtle background gradient -->
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>

                        <!-- Header for the laptop section -->
                        <div class="relative z-10 mb-6" v-motion :initial="{ opacity: 0, y: -10 }"
                            :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: 500, ease: 'easeOut' } }">
                            <div class="flex items-center justify-between">
                                <h3 class="text-xl font-semibold text-white flex items-center">
                                    <font-awesome-icon icon="up-down-left-right" spin class="mr-3 text-blue-400" />
                                    Drag to Rotate/Zoom
                                </h3>
                                <div class="flex space-x-2">
                                    <div class="w-3 h-3 bg-red-500 rounded-full opacity-60"></div>
                                    <div class="w-3 h-3 bg-yellow-500 rounded-full opacity-60"></div>
                                    <div class="w-3 h-3 bg-green-500 rounded-full opacity-60"></div>
                                </div>
                            </div>
                            <div
                                class="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-4 group-hover:via-blue-400/40 transition-colors duration-500">
                            </div>
                        </div>

                        <!-- 3D Laptop Canvas -->
                        <div class="relative z-10 w-full h-[450px] md:h-[500px]" v-motion
                            :initial="{ opacity: 0, scale: 0.8 }"
                            :visible="{ opacity: 1, scale: 1, transition: { duration: 600, delay: 700, ease: 'backOut' } }">
                            <Laptop />
                        </div>

                        <!-- Hello World Note -->
                        <div class="relative z-10 mt-4 text-center" v-motion :initial="{ opacity: 0, y: 10 }"
                            :visible="{ opacity: 1, y: 0, transition: { duration: 400, delay: 900, ease: 'easeOut' } }">
                            <p
                                class="text-xs text-white/60 italic flex items-center justify-center hover:text-white/80 transition-colors duration-300">
                                <font-awesome-icon icon="code" class="mr-2 text-cyan-400" />
                                Displayed with "Hello World" characters :)
                                <font-awesome-icon icon="globe" class="ml-2 text-green-400" />
                            </p>
                        </div>

                        <!-- Bottom accent line -->
                        <div
                            class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out">
                        </div>

                        <!-- Corner accents -->
                        <div
                            class="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-blue-500/30 group-hover:border-blue-400/60 transition-all duration-500 group-hover:w-20 group-hover:h-20">
                        </div>
                        <div
                            class="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-purple-500/30 group-hover:border-purple-400/60 transition-all duration-500 group-hover:w-16 group-hover:h-16">
                        </div>
                    </div>

                    <!-- Subtle glow effect behind the container -->
                    <div
                        class="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Smooth transitions for all interactive elements */
.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom gradient border effect */
.border-gradient-to-b {
    border-image: linear-gradient(to bottom, #3b82f6, #8b5cf6) 1;
}
</style>