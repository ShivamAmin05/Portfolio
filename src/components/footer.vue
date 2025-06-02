<script setup lang="js">
import Planet from './planet.vue'
</script>

<template>
    <div class="w-screen h-96 flex flex-col bg-black">
        <div class="w-full flex h-full items-center justify-center">
            <Planet />
        </div>
    </div>
    <footer id="contact" class="bg-black text-white">
        <div class="max-w-7xl mx-auto px-6 text-center">
            <h2 class="text-3xl font-bold mb-4">Let's Connect <font-awesome-icon :icon="['fas', 'comment-nodes']" />
            </h2>
            <p class="text-gray-400 mb-8">I'm always interested in new opportunities and collaborations.</p>
            <div class="flex justify-center space-x-6 mb-8">
                <a href="mailto:shivamamin04@gmail.com" class="text-purple-400 hover:text-purple-300 transition-colors">
                    <font-awesome-icon :icon="['fas', 'envelope']" /> Email
                </a>
                <a href="https://github.com/ShivamAmin05"
                    class="text-purple-400 hover:text-purple-300 transition-colors">
                    <font-awesome-icon :icon="['fab', 'github']" /> GitHub
                </a>
                <a href="https://linkedin.com/in/shivamamin05"
                    class="text-purple-400 hover:text-purple-300 transition-colors">
                    <font-awesome-icon :icon="['fab', 'linkedin']" /> LinkedIn
                </a>
            </div>
            <div class="border-t border-gray-800 pt-8">
                <p class="text-gray-500"></p>
            </div>
        </div>
    </footer>
</template>