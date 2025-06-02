<script setup>
import imagePath from '/BlueHills.jpg'
import Intro from './components/intro.vue'
import Timeline from './components/timeline.vue'
import Skills from './components/skills.vue'
import Projects from './components/projects.vue'
import Navbar from './components/navbar.vue'
import AboutMe from './components/aboutme.vue'
import Room from './components/planet.vue'

</script>

<template>
  <Navbar />
  <div id="home">
    <Intro />
  </div>
  <div class="h-64 bg-gradient-to-b from-foreground from-20% to-transparent">
  </div>
  <div class="logo" :style="{ backgroundImage: `url(${imagePath})` }"></div>
  <div id="about">
    <AboutMe />
  </div>
  <div id="experiences" class="flex justify-center mt-10">
    <h1 class="text-5xl md:text-8xl font-bold" v-motion-fade-visible>
      <font-awesome-icon :icon="['fas', 'briefcase']" />
      Experiences
    </h1>
  </div>
  <Timeline />
  <div class="flex justify-center mt-10">
    <h1 class="text-5xl md:text-8xl font-bold" v-motion-pop-visible>
      <font-awesome-icon :icon="['fas', 'list-check']" />
      Skills
    </h1>
  </div>
  <Suspense>
    <div class="h-screen w-screen">
      <div class="h-1/2">
        <Skills />
      </div>
    </div>
  </Suspense>
  <div id="projects" class="flex justify-center mt-10">
    <h1 class="text-5xl md:text-8xl font-bold" v-motion-pop-visible>
      <font-awesome-icon :icon="['fas', 'computer']" />
      Projects
    </h1>
  </div>
  <Projects />

  <div class="w-screen h-96 flex flex-col bg-black">
    <div class="w-full flex h-full items-center justify-center">
      <Room />
    </div>
  </div>
  <footer id="contact" class="bg-black text-white">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold mb-4">Let's Connect <font-awesome-icon :icon="['fas', 'comment-nodes']" /></h2>
      <p class="text-gray-400 mb-8">I'm always interested in new opportunities and collaborations.</p>
      <div class="flex justify-center space-x-6 mb-8">
        <a href="mailto:shivamamin04@gmail.com" class="text-purple-400 hover:text-purple-300 transition-colors">
          <font-awesome-icon :icon="['fas', 'envelope']" /> Email
        </a>
        <a href="https://github.com/ShivamAmin05" class="text-purple-400 hover:text-purple-300 transition-colors">
          <font-awesome-icon :icon="['fab', 'github']" /> GitHub
        </a>
        <a href="https://linkedin.com/in/shivamamin05" class="text-purple-400 hover:text-purple-300 transition-colors">
          <font-awesome-icon :icon="['fab', 'linkedin']" /> LinkedIn
        </a>
      </div>
      <div class="border-t border-gray-800 pt-8">
        <p class="text-gray-500"></p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Prevent horizontal scrolling */
.logo {
  max-width: 100vw;
  background-size: cover;
  background-position: center;
}

/* Ensure all sections fit within viewport */
#home,
#about,
#experiences,
#projects,
#contact {
  max-width: 100vw;
  overflow-x: hidden;
}
</style>

<style>
/* Global styles to prevent horizontal overflow */
html {
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
  max-width: 100vw;
}
</style>
