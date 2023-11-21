<script setup>
import Room from './components/room.vue'
import Intro from './components/intro.vue'
import Timeline from './components/timeline.vue'



</script>

<template>
  <Intro />
  <div class=" w-screen flex flex-row mt-40">
    <div class="w-1/2 flex flex-col">
      <h1 class="w-1/2 text-6xl font-bold text-shadow shadow-black" v-motion-slide-visible-left>About Me</h1>
      <p class=" font-medium" v-motion-slide-visible-left>I am a freshman majoring in computer science at the university of Maryland, College Park. I
        have previous experience with programming languages including java, python, c#, html, css, and javascript.</p>
    </div>
    <div class='w-1/2 h-screen flex flex-row relative'>
      <Room class=" justify-center items-start" />
    </div>
  </div>
  <div class="flex justify-center">
    <h1 class="text-6xl font-bold text-shadow shadow-black" v-motion-slide-visible-left>
      Experiences
    </h1>
  </div>
  <Timeline />
  <div>
    
</div>
</template>

