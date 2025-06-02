<script setup lang="js">
import { TresCanvas } from '@tresjs/core'
import { GLTFModel, OrbitControls, Levioso } from '@tresjs/cientos'

import python from '/Models/Skills/PythonBall.glb'
import java from '/Models/Skills/JavaBall.glb'
import javascript from '/Models/Skills/JavaScriptBall.glb'
import html from '/Models/Skills/HTMLBall.glb'
import css from '/Models/Skills/CSSBall.glb'
import github from '/Models/Skills/GithubBall.glb'
import csharp from '/Models/Skills/CSharpBall.glb'
import blender from '/Models/Skills/BlenderBall.glb'
import unity from '/Models/Skills/UnityBall.glb'
import vue from '/Models/Skills/VueBall.glb'
</script>

<template>
    <TresCanvas alpha shadows tone-mapping="ACESFilmic" :output-color-space="'srgb'" antialias
        v-motion-slide-visible-bottom>
        <TresPerspectiveCamera :position="[0, 10, 0]" :look-at="[0, 10, 0]" />
        <OrbitControls :enable-pan="false" :max-polar-angle="1.4" :min-polar-angle="-1.4" :max-azimuth-angle="0.4"
            :min-azimuth-angle="-0.4" :enable-zoom="false" />

        <Levioso rotation-factor="0.3" speed="2.5" float-factor="6">
            <TresMesh :position="[-6, 0, -2]">
                <Suspense>
                    <GLTFModel :path="java" />
                </Suspense>
            </TresMesh>
        </Levioso>
        <Levioso rotation-factor="0.15" speed="3.5" float-factor="4">
            <TresMesh :position="[-3, 0, -2]">
                <Suspense>
                    <GLTFModel :path="python" />
                </Suspense>
            </TresMesh>
        </Levioso>
        <Levioso rotation-factor="0.25" speed="2.8" float-factor="7">
            <TresMesh :position="[0, 0, -2]">
                <Suspense>
                    <GLTFModel :path="javascript" />
                </Suspense>
            </TresMesh>
        </Levioso>
        <Levioso rotation-factor="0.18" speed="3.2" float-factor="5.5">
            <TresMesh :position="[-6, 0, 2]">
                <Suspense>
                    <GLTFModel :path="html" />
                </Suspense>
            </TresMesh>
        </Levioso>
        <Levioso rotation-factor="0.22" speed="2.7" float-factor="4.5">
            <TresMesh :position="[-3, 0, 2]">
                <Suspense>
                    <GLTFModel :path="css" />
                </Suspense>
            </TresMesh>
        </Levioso>
        <Levioso rotation-factor="0.28" speed="3.8" float-factor="6.2">
            <TresMesh :position="[0, 0, 2]">
                <Suspense>
                    <GLTFModel :path="github" />
                </Suspense>
            </TresMesh>
        </Levioso>
        <Levioso rotation-factor="0.16" speed="2.3" float-factor="5.8">
            <TresMesh :position="[3, 0, 2]">
                <Suspense>
                    <GLTFModel :path="csharp" />
                </Suspense>
            </TresMesh>
        </Levioso>
        <Levioso rotation-factor="0.24" speed="3.4" float-factor="4.8">
            <TresMesh :position="[3, 0, -2]">
                <Suspense>
                    <GLTFModel :path="blender" />
                </Suspense>
            </TresMesh>
        </Levioso>
        <Levioso rotation-factor="0.19" speed="2.9" float-factor="6.5">
            <TresMesh :position="[6, 0, 2]">
                <Suspense>
                    <GLTFModel :path="unity" />
                </Suspense>
            </TresMesh>
        </Levioso>
        <Levioso rotation-factor="0.26" speed="3.1" float-factor="5.2">
            <TresMesh :position="[6, 0, -2]">
                <Suspense>
                    <GLTFModel :path="vue" />
                </Suspense>
            </TresMesh>
        </Levioso>
        <TresDirectionalLight ref="lightRef" :position="[-6, 12, 8]" :intensity="3" color="#fff8e1" cast-shadow
            :shadow-camera-far="50" :shadow-camera-near="0.1" shadow-camera-left="-15" shadow-camera-right="15"
            shadow-camera-top="15" shadow-camera-bottom="-15" />
        <TresDirectionalLight ref="lightRef2" :position="[8, 6, -4]" :intensity="1.2" color="#a8c8ff" />
        <TresDirectionalLight :position="[2, 4, -12]" :intensity="2.2" color="#ffb366" />
        <TresDirectionalLight :position="[0, 20, 0]" :intensity="0.6" color="#87CEEB" />
        <TresDirectionalLight :position="[0, -8, 0]" :intensity="0.2" color="#362D1D" />
        <TresPointLight :position="[-8, 6, 8]" :intensity="1.5" color="#ffffff" :distance="30" :decay="2" />
        <TresPointLight :position="[8, 6, -8]" :intensity="1.2" color="#ff9966" :distance="25" :decay="2" />
        <TresPointLight :position="[0, 12, 0]" :intensity="0.8" color="#66ccff" :distance="35" :decay="1.5" />
        <TresDirectionalLight :position="[10, 8, 10]" :intensity="1.4" color="#fff2cc" />
        <TresAmbientLight :intensity="0.2" color="#404060" />
    </TresCanvas>

    <p class="font-medium text-center mt-5 text-lg" v-motion-fade-visible>Java, Python,
        JavaScript, Blender, Vue, HTML, CSS, Github, C#, Unity
    </p>
    <p class="font-medium text-center mt-5 text-md" v-motion-fade-visible>
        React, C, Git, SQL, Assembly, OCaml, Rust, R, Matlab, TensorFlow, PyTorch, NumPy, Polars, Pandas, React, Django
    </p>
</template>