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
  <div class="h-64 bg-gradient-to-b from-foreground from-20% to-transparent">
  </div>
  <div class="logo" :style="{ backgroundImage: `url(${imagePath})` }"></div>
  <div class="w-screen h-screen flex flex-col md:flex-row mt-40 px-5 md:px-10">
    <div class="w-full md:w-1/2 p-5 text-center">
      <h1 class="text-4xl md:text-8xl font-bold text-shadow shadow-black" v-motion-pop-visible>
        About Me
      </h1>
      <p class="font-medium text-shadow shadow-black text-lg md:text-xl p-2">
        I am a Sophomore majoring in computer science and mathematics at the University of Maryland, College Park.
      </p>
    </div>
    <div class="w-full md:w-1/2 p-5">
      <Room />
    </div>
  </div>
  <div class="flex justify-center mt-10">
    <h1 class="text-4xl md:text-8xl font-bold text-shadow shadow-black" v-motion-pop-visible>
      Experiences
    </h1>
  </div>
  <Timeline />
  <div class="flex justify-center mt-10">
    <h1 class="text-4xl md:text-8xl font-bold text-shadow shadow-black" v-motion-pop-visible>
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
  <div class="flex justify-center mt-10">
    <h1 class="text-4xl md:text-8xl font-bold text-shadow shadow-black" v-motion-pop-visible>
      Projects
    </h1>
  </div>
  <Projects />
</template>
