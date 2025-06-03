<script setup lang="js">
import { TresCanvas } from '@tresjs/core'
import { GLTFModel, OrbitControls, Levioso } from '@tresjs/cientos'

import python from '/Models/Skills/PythonBall.glb'
import java from '/Models/Skills/JavaBall.glb'
import javascript from '/Models/Skills/JavaScriptBall.glb'
import html from '/Models/Skills/HTMLBall.glb'
import css from '/Models/Skills/CSSBall.glb'
import github from '/Models/Skills/GithubBall.glb'
import csharp from '/Models/Skills/CSharpBall.glb'
import blender from '/Models/Skills/BlenderBall.glb'
import unity from '/Models/Skills/UnityBall.glb'
import vue from '/Models/Skills/VueBall.glb'

</script>

<template>
    <div class="w-screen h-screen flex justify-center mt-10 flex-col">
        <div class="w-full h-1/2 min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:h-1/2">
            <TresCanvas alpha shadows tone-mapping="ACESFilmic" :output-color-space="'srgb'" antialias
                v-motion-slide-visible-bottom>
                <TresPerspectiveCamera :zoom="0.7" :position="[0, 10, 0]" :look-at="[0, 10, 0]" />
                <OrbitControls :enable-pan="false" :max-polar-angle="1.4" :min-polar-angle="-1.4"
                    :max-azimuth-angle="0.4" :min-azimuth-angle="-0.4" :enable-zoom="false" />

                <Levioso rotation-factor="0.3" speed="2.5" float-factor="6">
                    <TresMesh :position="[-6, 0, -2]">
                        <Suspense>
                            <GLTFModel :path="java" />
                        </Suspense>
                    </TresMesh>
                </Levioso>
                <Levioso rotation-factor="0.15" speed="3.5" float-factor="4">
                    <TresMesh :position="[-3, 0, -2]">
                        <Suspense>
                            <GLTFModel :path="python" />
                        </Suspense>
                    </TresMesh>
                </Levioso>
                <Levioso rotation-factor="0.25" speed="2.8" float-factor="7">
                    <TresMesh :position="[0, 0, -2]">
                        <Suspense>
                            <GLTFModel :path="javascript" />
                        </Suspense>
                    </TresMesh>
                </Levioso>
                <Levioso rotation-factor="0.18" speed="3.2" float-factor="5.5">
                    <TresMesh :position="[-6, 0, 2]">
                        <Suspense>
                            <GLTFModel :path="html" />
                        </Suspense>
                    </TresMesh>
                </Levioso>
                <Levioso rotation-factor="0.22" speed="2.7" float-factor="4.5">
                    <TresMesh :position="[-3, 0, 2]">
                        <Suspense>
                            <GLTFModel :path="css" />
                        </Suspense>
                    </TresMesh>
                </Levioso>
                <Levioso rotation-factor="0.28" speed="3.8" float-factor="6.2">
                    <TresMesh :position="[0, 0, 2]">
                        <Suspense>
                            <GLTFModel :path="github" />
                        </Suspense>
                    </TresMesh>
                </Levioso>
                <Levioso rotation-factor="0.16" speed="2.3" float-factor="5.8">
                    <TresMesh :position="[3, 0, 2]">
                        <Suspense>
                            <GLTFModel :path="csharp" />
                        </Suspense>
                    </TresMesh>
                </Levioso>
                <Levioso rotation-factor="0.24" speed="3.4" float-factor="4.8">
                    <TresMesh :position="[3, 0, -2]">
                        <Suspense>
                            <GLTFModel :path="blender" />
                        </Suspense>
                    </TresMesh>
                </Levioso>
                <Levioso rotation-factor="0.19" speed="2.9" float-factor="6.5">
                    <TresMesh :position="[6, 0, 2]">
                        <Suspense>
                            <GLTFModel :path="unity" />
                        </Suspense>
                    </TresMesh>
                </Levioso>
                <Levioso rotation-factor="0.26" speed="3.1" float-factor="5.2">
                    <TresMesh :position="[6, 0, -2]">
                        <Suspense>
                            <GLTFModel :path="vue" />
                        </Suspense>
                    </TresMesh>
                </Levioso>
                <TresDirectionalLight ref="lightRef" :position="[-6, 12, 8]" :intensity="3" color="#fff8e1" cast-shadow
                    :shadow-camera-far="50" :shadow-camera-near="0.1" shadow-camera-left="-15" shadow-camera-right="15"
                    shadow-camera-top="15" shadow-camera-bottom="-15" />
                <TresDirectionalLight ref="lightRef2" :position="[8, 6, -4]" :intensity="1.2" color="#a8c8ff" />
                <TresDirectionalLight :position="[2, 4, -12]" :intensity="2.2" color="#ffb366" />
                <TresDirectionalLight :position="[0, 20, 0]" :intensity="0.6" color="#87CEEB" />
                <TresDirectionalLight :position="[0, -8, 0]" :intensity="0.2" color="#362D1D" />
                <TresPointLight :position="[-8, 6, 8]" :intensity="1.5" color="#ffffff" :distance="30" :decay="2" />
                <TresPointLight :position="[8, 6, -8]" :intensity="1.2" color="#ff9966" :distance="25" :decay="2" />
                <TresPointLight :position="[0, 12, 0]" :intensity="0.8" color="#66ccff" :distance="35" :decay="1.5" />
                <TresDirectionalLight :position="[10, 8, 10]" :intensity="1.4" color="#fff2cc" />
                <TresAmbientLight :intensity="0.2" color="#404060" />
            </TresCanvas>
        </div>

        <!-- Fixed responsive skills section -->
        <div class="flex flex-col mt-8 md:mt-16 px-4 sm:px-6 lg:px-8 pb-8 md:pb-16">
            <!-- Primary Skills -->
            <div class="mb-6 md:mb-8 w-full">
                <div class="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-6xl mx-auto">
                    <span
                        class="inline-flex items-center bg-slate-900/60 backdrop-blur-xl border border-white/20 text-gray-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:border-gray-400/40 transition-all duration-200 hover:scale-105 cursor-default">
                        <font-awesome-icon :icon="['fab', 'java']" class="mr-1.5 sm:mr-2 text-xs" />
                        Java
                    </span>
                    <span
                        class="inline-flex items-center bg-slate-900/60 backdrop-blur-xl border border-white/20 text-blue-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:border-blue-400/40 transition-all duration-200 hover:scale-105 cursor-default">
                        <font-awesome-icon :icon="['fab', 'python']" class="mr-1.5 sm:mr-2 text-xs" />
                        Python
                    </span>
                    <span
                        class="inline-flex items-center bg-slate-900/60 backdrop-blur-xl border border-white/20 text-yellow-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:border-yellow-400/40 transition-all duration-200 hover:scale-105 cursor-default">
                        <font-awesome-icon :icon="['fab', 'js']" class="mr-1.5 sm:mr-2 text-xs" />
                        JavaScript
                    </span>
                    <span
                        class="inline-flex items-center bg-slate-900/60 backdrop-blur-xl border border-white/20 text-orange-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:border-orange-400/40 transition-all duration-200 hover:scale-105 cursor-default">
                        <font-awesome-icon icon="blender" class="mr-1.5 sm:mr-2 text-xs" />
                        Blender
                    </span>
                    <span
                        class="inline-flex items-center bg-slate-900/60 backdrop-blur-xl border border-white/20 text-emerald-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:border-emerald-400/40 transition-all duration-200 hover:scale-105 cursor-default">
                        <font-awesome-icon :icon="['fab', 'vuejs']" class="mr-1.5 sm:mr-2 text-xs" />
                        Vue
                    </span>
                    <span
                        class="inline-flex items-center bg-slate-900/60 backdrop-blur-xl border border-white/20 text-red-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:border-red-400/40 transition-all duration-200 hover:scale-105 cursor-default">
                        <font-awesome-icon :icon="['fab', 'html5']" class="mr-1.5 sm:mr-2 text-xs" />
                        HTML
                    </span>
                    <span
                        class="inline-flex items-center bg-slate-900/60 backdrop-blur-xl border border-white/20 text-cyan-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:border-cyan-400/40 transition-all duration-200 hover:scale-105 cursor-default">
                        <font-awesome-icon :icon="['fab', 'css3-alt']" class="mr-1.5 sm:mr-2 text-xs" />
                        CSS
                    </span>
                    <span
                        class="inline-flex items-center bg-slate-900/60 backdrop-blur-xl border border-white/20 text-purple-500 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:border-purple-400/40 transition-all duration-200 hover:scale-105 cursor-default">
                        <font-awesome-icon :icon="['fab', 'github']" class="mr-1.5 sm:mr-2 text-xs" />
                        Git
                    </span>
                    <span
                        class="inline-flex items-center bg-slate-900/60 backdrop-blur-xl border border-white/20 text-purple-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:border-purple-400/40 transition-all duration-200 hover:scale-105 cursor-default">
                        <font-awesome-icon :icon="['fab', 'microsoft']" class="mr-1.5 sm:mr-2 text-xs" />
                        C#
                    </span>
                    <span
                        class="inline-flex items-center bg-slate-900/60 backdrop-blur-xl border border-white/20 text-gray-500 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:border-gray-400/40 transition-all duration-200 hover:scale-105 cursor-default">
                        <font-awesome-icon :icon="['fab', 'unity']" class="mr-1.5 sm:mr-2 text-xs" />
                        Unity
                    </span>
                </div>
            </div>

            <!-- Secondary Skills -->
            <div class="w-full max-w-5xl mx-auto">
                <div
                    class="bg-slate-900/60 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-6 lg:p-8 transition-all duration-500 hover:border-purple-400/40 hover:bg-slate-800/60 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden group">
                    <!-- Enhanced Hover Gradient Overlay -->
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>

                    <!-- Animated Background Pattern -->
                    <div class="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                        <div
                            class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)] animate-pulse">
                        </div>
                    </div>

                    <div class="relative z-10">
                        <div class="flex items-center mb-4 sm:mb-6">
                            <div
                                class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-slate-800/80 to-slate-700/60 backdrop-blur-xl border-2 border-white/30 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-purple-400/50 shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/25 mr-3 sm:mr-4">
                                <font-awesome-icon icon="cogs"
                                    class="text-lg sm:text-2xl text-white/90 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                            </div>
                            <h3
                                class="text-lg sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300">
                                Additional Technologies
                            </h3>
                        </div>

                        <div class="flex flex-wrap gap-2 sm:gap-2.5">
                            <span
                                v-for="skill in ['React', 'C', 'SQL', 'Assembly', 'OCaml', 'Rust', 'R', 'Matlab', 'TensorFlow', 'PyTorch', 'NumPy', 'Polars', 'Pandas', 'Django', 'XML']"
                                :key="skill"
                                class="inline-flex items-center bg-gradient-to-r from-slate-700/80 to-slate-600/80 backdrop-blur-sm text-white/90 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium border border-white/20 hover:border-blue-400/40 hover:bg-slate-600/80 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 group/skill">
                                <font-awesome-icon icon="code"
                                    class="mr-1 sm:mr-1.5 text-xs group-hover/skill:rotate-12 transition-transform duration-300" />
                                {{ skill }}
                            </span>
                        </div>
                    </div>

                    <!-- Bottom Line -->
                    <div
                        class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out">
                    </div>

                    <!-- Corner Accents - Responsive -->
                    <div
                        class="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-r-2 border-purple-500/30 group-hover:border-purple-400/60 transition-all duration-500 group-hover:w-10 group-hover:h-10 sm:group-hover:w-16 sm:group-hover:h-16">
                    </div>
                    <div
                        class="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-pink-500/30 group-hover:border-pink-400/60 transition-all duration-500 group-hover:w-8 group-hover:h-8 sm:group-hover:w-12 sm:group-hover:h-12">
                    </div>

                    <!-- Floating particles effect -->
                    <div
                        class="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div class="absolute top-1/4 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse">
                        </div>
                        <div class="absolute top-3/4 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse"
                            style="animation-delay: 0.5s;"></div>
                        <div class="absolute bottom-1/3 left-2/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse"
                            style="animation-delay: 1s;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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

/* Enhanced pulse animation for particles */
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
</style>