<script setup>
import { ref } from 'vue'
import Planet from './planet.vue'

const form = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const submitForm = async () => {
    isSubmitting.value = true

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        isSubmitting.value = false
        showSuccess.value = true

        // Reset form
        form.value = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }

        // Hide success message after 3 seconds
        setTimeout(() => {
            showSuccess.value = false
        }, 3000)
    }, 1000)
}
</script>

<template>
    <div class="w-screen h-96 flex flex-col bg-black">
        <div class="w-full flex h-full items-center justify-center">
            <Planet />
        </div>
    </div>

    <div class="min-h-screen py-20 bg-black">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <!-- Left side - Contact Info & Social -->
                <div class="group/text">
                    <!-- Header -->
                    <div class="mb-8" v-motion :initial="{ opacity: 0, y: -50 }"
                        :visible="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }">
                        <h1 class="text-4xl md:text-6xl font-bold mb-4 text-white">
                            <font-awesome-icon :icon="['fas', 'comment-nodes']" class="mr-4" />
                            Let's Connect
                        </h1>
                    </div>

                    <!-- Content -->
                    <div class="space-y-6 text-white/80">
                        <p class="text-lg leading-relaxed" v-motion :initial="{ opacity: 0, x: -30 }"
                            :visible="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200, ease: 'easeOut' } }">
                            I'm always interested in <span class="font-semibold text-purple-400">new
                                opportunities</span> and
                            <span class="font-semibold text-blue-400">collaborations</span>. Whether you have a project
                            idea,
                            want to discuss technology, or just want to chat, I'd love to hear from you.
                        </p>

                        <!-- Contact Info Card -->
                        <div class="group border-l-4 border-gradient-to-b from-blue-500 to-purple-500 pl-6 py-4 bg-slate-900/40 backdrop-blur-sm rounded-r-lg border border-white/10 hover:border-white/30 hover:bg-slate-800/60 transition-all duration-500 relative overflow-hidden"
                            v-motion :initial="{ opacity: 0, scale: 0.95, x: -20 }"
                            :visible="{ opacity: 1, scale: 1, x: 0, transition: { duration: 700, delay: 400, ease: 'easeOut' } }">

                            <div
                                class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out">
                            </div>

                            <div class="space-y-3 relative z-10">
                                <div class="flex items-center space-x-3 text-white/90">
                                    <font-awesome-icon :icon="['fas', 'envelope']" class="text-purple-400 w-5" />
                                    <span class="text-lg">shivamamin04@gmail.com</span>
                                </div>
                            </div>
                        </div>

                        <!-- Social Links -->
                        <div class="mt-8" v-motion :initial="{ opacity: 0, y: 20 }"
                            :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 600, ease: 'easeOut' } }">
                            <h3 class="text-xl font-semibold mb-4 text-white flex items-center">
                                <font-awesome-icon :icon="['fas', 'share-nodes']" class="mr-3 text-cyan-400" />
                                Connect on Social
                            </h3>
                            <div class="flex space-x-4">
                                <a href="mailto:shivamamin04@gmail.com"
                                    class="inline-flex items-center bg-slate-900/60 backdrop-blur-xl border border-white/20 text-purple-300 px-6 py-3 rounded-full text-sm font-medium hover:border-purple-400/40 hover:bg-purple-500/20 hover:text-purple-200 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer group"
                                    v-motion :initial="{ opacity: 0, scale: 0.8, y: 10 }"
                                    :visible="{ opacity: 1, scale: 1, y: 0, transition: { duration: 400, delay: 800, ease: 'backOut' } }">
                                    <font-awesome-icon :icon="['fas', 'envelope']"
                                        class="mr-2 group-hover:animate-bounce" />
                                    Email
                                </a>
                                <a href="https://github.com/ShivamAmin05" target="_blank" rel="noopener noreferrer"
                                    class="inline-flex items-center bg-slate-900/60 backdrop-blur-xl border border-white/20 text-blue-300 px-6 py-3 rounded-full text-sm font-medium hover:border-blue-400/40 hover:bg-blue-500/20 hover:text-blue-200 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 cursor-pointer group"
                                    v-motion :initial="{ opacity: 0, scale: 0.8, y: 10 }"
                                    :visible="{ opacity: 1, scale: 1, y: 0, transition: { duration: 400, delay: 900, ease: 'backOut' } }">
                                    <font-awesome-icon :icon="['fab', 'github']"
                                        class="mr-2 group-hover:animate-spin" />
                                    GitHub
                                </a>
                                <a href="https://linkedin.com/in/shivamamin05" target="_blank" rel="noopener noreferrer"
                                    class="inline-flex items-center bg-slate-900/60 backdrop-blur-xl border border-white/20 text-cyan-300 px-6 py-3 rounded-full text-sm font-medium hover:border-cyan-400/40 hover:bg-cyan-500/20 hover:text-cyan-200 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 cursor-pointer group"
                                    v-motion :initial="{ opacity: 0, scale: 0.8, y: 10 }"
                                    :visible="{ opacity: 1, scale: 1, y: 0, transition: { duration: 400, delay: 1000, ease: 'backOut' } }">
                                    <font-awesome-icon :icon="['fab', 'linkedin']"
                                        class="mr-2 group-hover:animate-pulse" />
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right side - Contact Form -->
                <div class="relative group" v-motion :initial="{ opacity: 0, x: 50, scale: 0.9 }"
                    :visible="{ opacity: 1, x: 0, scale: 1, transition: { duration: 800, delay: 300, ease: 'easeOut' } }">

                    <!-- Main container with glassmorphism effect -->
                    <div
                        class="bg-slate-900/60 backdrop-blur-xl border border-white/20 rounded-2xl p-8 transition-all duration-500 hover:border-blue-400/40 hover:bg-slate-800/60 hover:shadow-2xl hover:shadow-blue-500/20 relative overflow-hidden">

                        <!-- Subtle background gradient -->
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>

                        <!-- Header for the form section -->
                        <div class="relative z-10 mb-6" v-motion :initial="{ opacity: 0, y: -10 }"
                            :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: 500, ease: 'easeOut' } }">
                            <div class="flex items-center justify-between">
                                <h3 class="text-2xl font-semibold text-white flex items-center">
                                    <font-awesome-icon :icon="['fas', 'paper-plane']" class="mr-3 text-purple-400" />
                                    Send a Message
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

                        <!-- Success Message -->
                        <div v-if="showSuccess"
                            class="relative z-10 mb-6 group border-l-4 border-gradient-to-b from-green-500 to-emerald-500 pl-6 py-4 bg-green-900/40 backdrop-blur-sm rounded-r-lg border border-green-500/20 overflow-hidden"
                            v-motion :initial="{ opacity: 0, scale: 0.95, y: -10 }"
                            :visible="{ opacity: 1, scale: 1, y: 0, transition: { duration: 500, ease: 'backOut' } }">

                            <div
                                class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500 animate-pulse">
                            </div>

                            <p class="text-green-300 flex items-center relative z-10">
                                <font-awesome-icon :icon="['fas', 'check-circle']" class="mr-3 animate-bounce" />
                                <span class="font-medium">Message sent successfully! I'll get back to you soon.</span>
                            </p>
                        </div>

                        <!-- Contact Form -->
                        <form @submit.prevent="submitForm" class="relative z-10 space-y-6" v-motion
                            :initial="{ opacity: 0, scale: 0.95 }"
                            :visible="{ opacity: 1, scale: 1, transition: { duration: 600, delay: 700, ease: 'backOut' } }">

                            <div class="grid md:grid-cols-2 gap-6">
                                <div class="group/field">
                                    <label for="name" class="text-sm font-medium text-white/80 mb-2 flex items-center">
                                        <font-awesome-icon :icon="['fas', 'user']" class="mr-2 text-blue-400 text-xs" />
                                        Name *
                                    </label>
                                    <input id="name" v-model="form.name" type="text" required
                                        class="w-full px-4 py-3 bg-slate-800/60 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-white/40 transition-all duration-300 hover:border-white/40 hover:bg-slate-700/60"
                                        placeholder="Your name" />
                                </div>
                                <div class="group/field">
                                    <label for="email" class="text-sm font-medium text-white/80 mb-2 flex items-center">
                                        <font-awesome-icon :icon="['fas', 'envelope']"
                                            class="mr-2 text-purple-400 text-xs" />
                                        Email *
                                    </label>
                                    <input id="email" v-model="form.email" type="email" required
                                        class="w-full px-4 py-3 bg-slate-800/60 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-white/40 transition-all duration-300 hover:border-white/40 hover:bg-slate-700/60"
                                        placeholder="your.email@example.com" />
                                </div>
                            </div>

                            <div class="group/field">
                                <label for="subject" class="text-sm font-medium text-white/80 mb-2 flex items-center">
                                    <font-awesome-icon :icon="['fas', 'tag']" class="mr-2 text-cyan-400 text-xs" />
                                    Subject *
                                </label>
                                <input id="subject" v-model="form.subject" type="text" required
                                    class="w-full px-4 py-3 bg-slate-800/60 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-white/40 transition-all duration-300 hover:border-white/40 hover:bg-slate-700/60"
                                    placeholder="What's this about?" />
                            </div>

                            <div class="group/field">
                                <label for="message" class="text-sm font-medium text-white/80 mb-2 flex items-center">
                                    <font-awesome-icon :icon="['fas', 'message']" class="mr-2 text-green-400 text-xs" />
                                    Message *
                                </label>
                                <textarea id="message" v-model="form.message" rows="5" required
                                    class="w-full px-4 py-3 bg-slate-800/60 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-white/40 transition-all duration-300 hover:border-white/40 hover:bg-slate-700/60 resize-none"
                                    placeholder="Tell me about your project or idea..."></textarea>
                            </div>

                            <button type="submit" :disabled="isSubmitting"
                                class="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center shadow-lg hover:shadow-purple-500/30 backdrop-blur-sm border border-white/10 hover:border-white/20 group/button">
                                <font-awesome-icon v-if="isSubmitting" :icon="['fas', 'spinner']"
                                    class="animate-spin mr-3 text-lg" />
                                <font-awesome-icon v-else :icon="['fas', 'paper-plane']"
                                    class="mr-3 text-lg group-hover/button:animate-bounce" />
                                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                            </button>
                        </form>

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

            <!-- Footer -->
            <div class="border-t border-white/10 mt-20 pt-8 text-center" v-motion :initial="{ opacity: 0, y: 20 }"
                :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 1200, ease: 'easeOut' } }">
                <p class="text-white/50">
                    © 2025 Shivam Amin
                </p>
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