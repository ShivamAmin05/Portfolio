<script setup>
import imagePath from '/BlueHills.jpg'
import Room from './components/room.vue'
import Intro from './components/intro.vue'
import Timeline from './components/timeline.vue'
import Skills from './components/skills.vue'
import Projects from './components/projects.vue'
</script>

<template>
  <Intro />
  <div class=" h-64 bg-gradient-to-b from-foreground from-20% to-background">
  </div>
  <div class="logo" :style="{ backgroundImage: `url(${imagePath})` }"></div>
  <div class="w-screen h-screen flex flex-row mt-40">
    <div class="w-1/2 ml-10 mr-10">
      <h1 class="text-6xl font-bold text-shadow shadow-black text-center" v-motion-pop-visible>About Me</h1>
      <p class="font-medium text-center" v-motion-slide-visible-left>
        I am a freshman majoring in computer science at the university of Maryland, College Park. I have previous experience with programming languages including java, python, c#, html, css, and javascript.
      </p>
    </div>
    <div class="w-1/2">
      <Room />
    </div>
  </div>
  <div class="flex justify-center">
    <h1 class="text-6xl font-bold text-shadow shadow-black mt-5" v-motion-pop-visible>
      Experiences
    </h1>
  </div>
  <Timeline />
  <div class="flex justify-center">
    <h1 class="text-6xl font-bold text-shadow shadow-black mb-10" v-motion-pop-visible>
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
  <div class="flex justify-center">
    <h1 class="text-6xl font-bold text-shadow shadow-black mb-10" v-motion-pop-visible>
      Projects
    </h1>
  </div>
  <Projects />
</template>
      