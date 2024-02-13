<script setup>
import TensorFlow from '/Logos/Tensorflow.svg'
import Scratch from '/Logos/Scratch.png'
import First from '/Logos/First.png'
import Ubuntu from '/Logos/Ubuntu.png'
</script>

<template>
    <v-app class="bg-transparent ml-8 mr-8">
            <v-timeline class="" line-color="white" line-thickness="3">
                <v-timeline-item class="" size="large" dot-color="#1A1644">
                    <template v-slot:icon>
                        <img :src="TensorFlow" v-motion-pop />
                    </template>
                    <v-card tile="" v-motion-slide-visible-right>
                        <v-row align="start" class="bg-foreground shadow-2xl">
                            <v-col>
                                <h1 class=" text-white font-bold text-4xl text-center pt-4 text-shadow shadow-black">AI Club
                                    Vice President</h1>
                                    <div class=" text-white font-semibold p-6">
                                        <li>
                                            Assisted in the organization of lessons that covered topics including machine learning,
                                            artificial intelligence, and Python
                                        </li>
                                        <li>
                                            Trained YoloV5 ML model by labeling and categorizing data, setting weights and biases to
                                            differentiate dogs and cats in a photo
                                        </li>
                                        <li>
                                            Helped create a chatbot w/ GUI utilizing open AI whisper and Chat-GPT API to convert
                                            verbal input into text in several languages
                                        </li>
                                    </div>
                                    <v-card-subtitle class='bg-slate-500 text-white'>2021-2023</v-card-subtitle>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-timeline-item>
                    <v-timeline-item size="large" dot-color="#1A1644" v-motion-fade>
                        <template v-slot:icon>
                            <img :src="First" v-motion-pop />
                        </template>
                        <v-card tile="" v-motion-slide-visible-right>
                            <v-row align="start" class="bg-foreground">
                                <v-col>
                                    <h1 class=" text-white font-bold text-4xl text-center pt-4 text-shadow shadow-black">Robotics
                                        Software Co-lead</h1>
                                        <div class=" text-white font-semibold p-6">
                                            <li>
                                                Collaborated with team to build and program robot in order to compete in the FTC
                                                robotics
                                                competition
                                            </li>
                                            <li>
                                                Assisted new members with computer science concepts in Java including OOD principles and
                                                set
                                                up for the robot
                                            </li>
                                            <li>
                                                Utilized color detection to automate parking and picking up cones for the FTC
                                                competition
                                            </li>
                                        </div>
                                        <v-card-subtitle class='bg-slate-500 text-white'>2022-2023</v-card-subtitle>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-timeline-item>
                        <v-timeline-item size="large" dot-color="#1A1644" v-motion-fade>
                            <template v-slot:icon>
                                <img :src="Scratch" v-motion-pop />
                            </template>
                            <v-card class="mb-2" tile="" v-motion-slide-visible-right>
                                <v-row align="start" class="bg-foreground">
                                    <v-col>
                                        <h1 class=" text-white font-bold text-4xl text-center pt-4 text-shadow shadow-black">CS Summer
                                            Camp Tutor</h1>
                                            <div class=" text-white font-semibold p-6">
                                                <li>
                                                    Tutored 10 kids ages 5-10 in basic computer science concepts including debugging,
                                                    variables,
                                                    and conditionals
                                                </li>
                                                <li>
                                                    Utilized various tools to improve computer science understanding including Scratch,
                                                    Edblocks, and Edscratch
                                                </li>
                                                <li>
                                                    Helped organize activities for kids to program Edison robots for various activities
                                                    including soccer, battles, and maze traversal
                                                </li>
                                            </div>
                                            <v-card-subtitle class='bg-slate-500 text-white'>2022</v-card-subtitle>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-timeline-item>
                            <v-timeline-item size="large" dot-color="#1A1644" v-motion-fade>
                                <template v-slot:icon>
                                    <img :src="Ubuntu" v-motion-pop />
                                </template>
                                <v-card tile="" v-motion-slide-visible-right>
                                    <v-row align="start" class="bg-foreground">
                                        <v-col>
                                            <h1 class=" text-white font-bold text-4xl text-center pt-4 text-shadow shadow-black">Coding Club Co-lead</h1>
                                                <div class=" text-white font-semibold p-6">
                                                    <li>
                                                        Inventoried and recorded problems with 15 laptops including defective hard drives, motherboards, batteries, and RAM
                                                    </li>
                                                    <li>
                                                        Repaired computers by replacing parts, and installing Ubuntu operating system to improve system performance
                                                    </li>
                                                </div>
                                                <v-card-subtitle class='bg-slate-500 text-white'>2021</v-card-subtitle>
                                            </v-col>
                                        </v-row>
                                    </v-card>
                                </v-timeline-item>
                        </v-timeline>
                    </v-app>
                </template>
                
                
                