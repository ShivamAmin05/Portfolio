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

    <TresCanvas alpha v-motion-slide-visible-bottom>
        <TresPerspectiveCamera :position="[0, 10, 0]" :look-at="[0, 10, 0]" />
        <OrbitControls :enable-pan="false" :max-polar-angle="1.4" :min-polar-angle="-1.4" :max-azimuth-angle="0.4"
            :min-azimuth-angle="-0.4" :enable-zoom="false" />
        <Levioso rotation-factor="0.2" speed="3" float-factor="5">
            <TresMesh :position="[-6, 0, -2]">
                <Suspense>
                    <GLTFModel :path="java" />
                </Suspense>
            </TresMesh>
        </Levioso>
        <Levioso rotation-factor="0.2" speed="3" float-factor="5">
            <TresMesh :position="[-3, 0, -2]">
                <Suspense>
                    <GLTFModel :path="python" />
                </Suspense>
            </TresMesh>
        </Levioso>
        <Levioso rotation-factor="0.2" speed="3" float-factor="5">
            <TresMesh :position="[0, 0, -2]">
                <Suspense>
                    <GLTFModel :path="javascript" />
                </Suspense>
            </TresMesh>
        </Levioso>
        <Levioso rotation-factor="0.2" speed="3" float-factor="5">
            <TresMesh :position="[-6, 0, 2]">
                <Suspense>
                    <GLTFModel :path="html" />
                </Suspense>
            </TresMesh>
        </Levioso>
        <Levioso rotation-factor="0.2" speed="3" float-factor="5">
            <TresMesh :position="[-3, 0, 2]">
                <Suspense>
                    <GLTFModel :path="css" />
                </Suspense>
            </TresMesh>
        </Levioso>
        <Levioso rotation-factor="0.2" speed="3" float-factor="5">
            <TresMesh :position="[0, 0, 2]">
                <Suspense>
                    <GLTFModel :path="github" />
                </Suspense>
            </TresMesh>
        </Levioso>
        <Levioso rotation-factor="0.2" speed="3" float-factor="5">
            <TresMesh :position="[3, 0, 2]">
                <Suspense>
                    <GLTFModel :path="csharp" />
                </Suspense>
            </TresMesh>
        </Levioso>
        <Levioso rotation-factor="0.2" speed="3" float-factor="5">
            <TresMesh :position="[3, 0, -2]">
                <Suspense>
                    <GLTFModel :path="blender" />
                </Suspense>
            </TresMesh>
        </Levioso>
        <Levioso rotation-factor="0.2" speed="3" float-factor="5">
            <TresMesh :position="[6, 0, 2]">
                <Suspense>
                    <GLTFModel :path="unity" />
                </Suspense>
            </TresMesh>
        </Levioso>
        <Levioso rotation-factor="0.2" speed="3" float-factor="5">
            <TresMesh :position="[6, 0, -2]">
                <Suspense>
                    <GLTFModel :path="vue" />
                </Suspense>
            </TresMesh>
        </Levioso>
        <TresAmbientLight :intensity="1" />
        <TresDirectionalLight :intensity="2" :position="[0, 5, 2]" />
        <TresDirectionalLight :intensity="1" :position="[6, -15, -2]" />
        <!-- <TresDirectionalLight :intensity="10" :position="[-6, -3, 2]" /> -->
    </TresCanvas>
    <p class="font-medium text-center mt-5 text-shadow shadow-black text-lg" v-motion-slide-visible-left>Java, Python,
        JavaScript, Blender, Vue, HTML, CSS, Github, C#, Unity
    </p>
    <p class="font-medium text-center mt-5 text-shadow shadow-black text-md" v-motion-slide-visible-left>Typescript,
        React, C, Git, SQL
    </p>
</template>