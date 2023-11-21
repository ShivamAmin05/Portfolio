
<script setup>
import FrontTrees from '/Parallax/FrontTrees.png'
import BackTrees from '/Parallax/BackTrees.png'
import Clouds from '/Parallax/Clouds.png'
import Mountains from '/Parallax/Mountain.png'
import ForeGround from '/Parallax/Foreground.png'
import Stars from '/Parallax/Stars.png'
import { ref, onMounted, onUnmounted } from 'vue'

const greeting = ref()
const name = ref()
const mountain = ref()
const clouds = ref()
const frontTrees = ref()
const backTrees = ref()
const foreGround = ref()
const stars = ref()


onMounted(() => {
    document.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    document.removeEventListener('scroll', handleScroll)
})

const handleScroll = (evt) => {
    const scrollY = window.scrollY
    console.log(scrollY)
    const backgroundSize = (scrollY) / 20 // increases as user scrolls
    if(scrollY < 1000) {
        mountain.value.style.transform = 'translateY(' + (backgroundSize) + 'px)' + 'scale(' + (1 + backgroundSize * 0.02) + ')';
        clouds.value.style.transform = 'translateX(' + (backgroundSize * 20) + 'px)'
        stars.value.style.transform = 'translateY(' + (backgroundSize * -15) + 'px)'
        frontTrees.value.style.transform = 'translateY(' + (backgroundSize * -20) + 'px)' + 'scale(' + (1 + backgroundSize * 0.2) + ')';
        backTrees.value.style.transform = 'scale(' + (1 + backgroundSize * 0.005) + ')';
        greeting.value.style.transform = 'translateX(' + (backgroundSize * 20) + 'px)';
        name.value.style.transform = 'translateX(' + (backgroundSize * 10) + 'px)'
    }
}

const motionShake = {
        initial: {
            x: 0,
        },
        enter: {
            x: 5,
            transition: {
                duration: 250,
                repeat: Infinity,
                repeatType: 'reverse',
            }
        }
    }

</script>

<template>
    <div class='h-screen bg-sky bg-no-repeat relative bg-fixed bg-cover flex flex-col justify-start items-center'>
        <h1 class='font-extrabold text-6xl display-1 mt-28 text-white text-shadow shadow-purple-900' ref="greeting" v-motion-fade>
            Hi, I'm
        </h1>
        <!-- <VueGlow> -->
            <h1 class='font-extrabold text-6xl text-white text-shadow shadow-purple-900' ref="name" v-motion-fade >
                Shivam
            </h1>
        <!-- </VueGlow> -->
        <img :src="Stars" class="h-full absolute" ref="stars" v-motion-fade />
        <img :src="Clouds" class="h-full absolute" ref="clouds" v-motion-fade />
        <img :src="Mountains" class="h-full absolute" ref="mountain" v-motion-fade />
        <img :src="BackTrees" class="h-full absolute" ref="backTrees" v-motion-fade />
        <img :src="ForeGround" class="h-full absolute" ref="foreGround" v-motion-fade />
        <img :src="FrontTrees" class="h-full absolute" ref="frontTrees" v-motion-fade />

    </div>
</template>