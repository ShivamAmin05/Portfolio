<script setup lang="js">
import { TresCanvas, useRenderLoop } from '@tresjs/core';
import { shallowRef, onMounted } from 'vue';
import { OrbitControls } from '@tresjs/cientos'
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { EffectComposerPmndrs, ASCIIPmndrs } from '@tresjs/post-processing'
import Laptop from '/Models/Laptop.glb'

const { onLoop } = useRenderLoop()
const modelGroupRef = shallowRef()

const gl = {
    toneMapping: THREE.NoToneMapping,
}

const glComposer = {
    multisampling: 4,
}

// Improved ASCII settings for brightness
const effectProps = {
    blendFunction: THREE.NormalBlending,
    asciiTexture: {
        characters: ' .,:;-~+=*ilfCGHELOWRD08@#█▓▒░',
    },
    cellSize: 12,
    backgroundColor: new THREE.Color(0x000000),
    // invert: false,
}

let mixer = null
let clock = new THREE.Clock()
let loadedModel = null

onMounted(async () => {
    const loader = new GLTFLoader()

    const gltf = await new Promise((resolve, reject) => {
        loader.load(
            Laptop,
            resolve,
            (progress) => {
            },
            reject
        )
    })

    loadedModel = gltf.scene
    modelGroupRef.value.add(gltf.scene)

    mixer = new THREE.AnimationMixer(gltf.scene)

    gltf.animations.forEach((clip, index) => {
        const action = mixer.clipAction(clip)

        action.setEffectiveTimeScale(1)
        action.setEffectiveWeight(1)
        action.clampWhenFinished = false
        action.setLoop(THREE.LoopRepeat)

        action.play()
    })
})

let frameCount = 0
onLoop(() => {
    if (mixer) {
        const delta = clock.getDelta()
        mixer.update(delta)
        frameCount++
    }
})

</script>

<template>
    <TresCanvas alpha shadows :output-color-space="'srgb'" antialias v-bind="gl" v-motion-fade-visible>

        <TresPerspectiveCamera :zoom="3.5" :position="[-3, 2, 6]" />
        <OrbitControls :enable-pan="false" :max-polar-angle="1.4" :min-polar-angle="-1.4" :maxZoom="1"
            :enable-zoom="true" />

        <TresGroup ref="modelGroupRef" />

        <TresDirectionalLight :position="[-6, 12, 8]" :intensity="5" color="#fff8e1" cast-shadow :shadow-camera-far="50"
            :shadow-camera-near="0.1" shadow-camera-left="-15" shadow-camera-right="15" shadow-camera-top="15"
            shadow-camera-bottom="-15" />
        <TresDirectionalLight :position="[8, 6, -4]" :intensity="2.5" color="#a8c8ff" />
        <TresDirectionalLight :position="[2, 4, -12]" :intensity="3.5" color="#ffb366" />
        <TresAmbientLight :intensity="0.4" color="#404060" />
        <TresDirectionalLight :position="[0, 20, 0]" :intensity="1.0" color="#87CEEB" />
        <TresDirectionalLight :position="[0, -8, 0]" :intensity="0.3" color="#362D1D" />
        <TresPointLight :position="[-3, 8, 6]" :intensity="2.5" color="#ffffff" :distance="25" :decay="2" />
        <TresDirectionalLight :position="[10, 8, 10]" :intensity="2.0" color="#fff2cc" />

        <Suspense>
            <EffectComposerPmndrs v-bind="glComposer">
                <ASCIIPmndrs v-bind="effectProps" />
            </EffectComposerPmndrs>
        </Suspense>

    </TresCanvas>
</template>