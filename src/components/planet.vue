<script setup lang="js">
import { TresCanvas, useRenderLoop } from
    '@tresjs/core';
import { shallowRef } from 'vue';
import { GLTFModel, OrbitControls } from '@tresjs/cientos'

import Planet from '/Models/Planet.glb'
import { EffectComposer, UnrealBloom, Glitch } from '@tresjs/post-processing'
const { onLoop } = useRenderLoop()


const planetRef = shallowRef()
onLoop(({ delta, elapsed }) => {
    if (planetRef.value) {
        planetRef.value.rotation.y += delta / 2
        planetRef.value.position.y = Math.sin(elapsed) / 2
    }
})
</script>

<template>
    <TresCanvas alpha shadows tone-mapping="ACESFilmic" :output-color-space="'srgb'" antialias
        v-motion-slide-visible-right>

        <TresPerspectiveCamera :zoom="1.0" />
        <OrbitControls :enable-zoom="false" />
        <TresMesh ref="planetRef">
            <Suspense>
                <GLTFModel :path="Planet" />
            </Suspense>
        </TresMesh>
        <TresDirectionalLight :position="[-6, 12, 8]" :intensity="3" color="#fff8e1" cast-shadow :shadow-camera-far="50"
            :shadow-camera-near="0.1" shadow-camera-left="-15" shadow-camera-right="15" shadow-camera-top="15"
            shadow-camera-bottom="-15" />

        <TresDirectionalLight :position="[8, 6, -4]" :intensity="1.2" color="#a8c8ff" />
        <TresDirectionalLight :position="[2, 4, -12]" :intensity="2" color="#ffb366" />
        <TresAmbientLight :intensity="0.15" color="#404060" />
        <TresDirectionalLight :position="[0, 20, 0]" :intensity="0.4" color="#87CEEB" />
        <TresDirectionalLight :position="[0, -8, 0]" :intensity="0.1" color="#362D1D" />
        <TresPointLight :position="[-3, 8, 6]" :intensity="1.2" color="#ffffff" :distance="25" :decay="2" />
        <TresDirectionalLight :position="[10, 8, 10]" :intensity="1.2" color="#fff2cc" />
        <Suspense>
            <EffectComposer>
                <UnrealBloom :strength="0.3" :radius="5" :threshold="0.5" />
            </EffectComposer>
        </Suspense>
    </TresCanvas>
</template>
