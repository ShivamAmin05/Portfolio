<script setup>
import imagePath from '/BlueHills.jpg'
import Intro from './components/intro.vue'
import Timeline from './components/timeline.vue'
import Skills from './components/skills.vue'
import Projects from './components/projects.vue'
import Navbar from './components/navbar.vue'
import AboutMe from './components/aboutme.vue'
import Footer from './components/footer.vue'
import Planet from './components/planet.vue'

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
  <Footer />
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
