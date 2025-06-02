<script setup>
import FrontTrees from '/Parallax/FrontTrees.png'
import BackTrees from '/Parallax/BackTrees.png'
import Clouds from '/Parallax/Clouds.png'
import Mountains from '/Parallax/Mountain.png'
import ForeGround from '/Parallax/Foreground.png'
import Stars from '/Parallax/Stars.png'
import Sky from '/Parallax/Sky.png'
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
    const backgroundSize = (scrollY) / 20
    if (scrollY < 800) {
        mountain.value.style.transform = 'translateY(' + (backgroundSize) + 'px)' + 'scale(' + (1 + backgroundSize * 0.02) + ')';
        clouds.value.style.transform = 'translateX(' + (backgroundSize * 10) + 'px)'
        stars.value.style.transform = 'translateY(' + (backgroundSize * -15) + 'px)'
        frontTrees.value.style.transform = 'translateY(' + (backgroundSize * -5) + 'px)' + 'scale(' + (1 + backgroundSize * 0.03) + ')';
        backTrees.value.style.transform = 'scale(' + (1 + backgroundSize * 0.005) + ')';
        greeting.value.style.transform = 'translateX(' + (backgroundSize * 20) + 'px)';
        name.value.style.transform = 'translateX(' + (backgroundSize * 10) + 'px)'
    }
}
</script>

<template>
    <div class='h-screen w-screen relative flex flex-col justify-start items-center parallax-container'>
        <img :src="Sky" class="parallax-image" v-motion-fade />
        <h1 class='font-extrabold text-6xl display-1 mt-28 text-white text-shadow shadow-purple-900 no-select z-10 relative'
            ref="greeting" v-motion-fade>
            Hi
            <font-awesome-icon :icon="['fas', 'hand']" shake size="xs" />,
            I'm
        </h1>
        <h1 class='font-extrabold text-6xl text-white text-shadow shadow-purple-900 no-select z-10 relative' ref="name"
            v-motion-fade>
            Shivam
        </h1>
        <img :src="Stars" class="parallax-image" ref="stars" v-motion-fade />
        <img :src="Clouds" class="parallax-image" ref="clouds" v-motion-fade />
        <img :src="Mountains" class="parallax-image" ref="mountain" v-motion-fade />
        <img :src="BackTrees" class="parallax-image" ref="backTrees" v-motion-fade />
        <img :src="ForeGround" class="parallax-image" ref="foreGround" v-motion-fade />
        <img :src="FrontTrees" class="parallax-image" ref="frontTrees" v-motion-fade />
    </div>
</template>

<style scoped>
.parallax-container {
    overflow: hidden;
    position: relative;
}

.parallax-image {
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
    -webkit-touch-callout: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: auto;
}

.parallax-image::-webkit-scrollbar {
    display: none;
}

.no-select {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-touch-callout: none;
}

img {
    max-width: 100%;
    max-height: 100%;
    display: block;
}
</style>