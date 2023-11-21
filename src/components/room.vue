<script setup lang="js">
import { TresCanvas, useRenderLoop } from
    '@tresjs/core';
import { shallowRef } from 'vue';
import { GLTFModel, OrbitControls, } from '@tresjs/cientos'


const { onLoop } = useRenderLoop()


const cubeRef = shallowRef()
onLoop(({ delta, elapsed }) => {
    if (cubeRef.value) {
        cubeRef.value.rotation.y += delta
        cubeRef.value.position.y = Math.sin(elapsed)
    }
})

const roomRef = shallowRef()
onLoop(({ delta, elapsed }) => {
    if (roomRef.value) {
        roomRef.value.rotation.y += delta / 2
        roomRef.value.position.y = Math.sin(elapsed) / 2
    }
})


</script>

<template>
    <TresCanvas clear-color="#1A1644" v-motion-slide-visible-right>
        <TresPerspectiveCamera />
        <OrbitControls />
        <TresMesh ref="roomRef">
            <Suspense>
                <GLTFModel path="IsoBedroom.glb" />
            </Suspense>
        </TresMesh>
        <TresAmbientLight :intensity="1" />
        <TresDirectionalLight :position="[-4, 8, 4]" :intensity="1.5" cast-shadow />
        <TresDirectionalLight :position="[-4, 30, 4]" :intensity="0.2" />
    </TresCanvas>
</template>
