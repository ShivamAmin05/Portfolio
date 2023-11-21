<script setup>

</script>

<template>
    <v-app>
        <v-timeline class=" bg-mountain p-10">
            <v-timeline-item v-for="n in 4" :key="n" size="large" dot-color="#1A1644" v-motion-fade>
                <template v-slot:icon>
                    <v-avatar image="/Logos/Tensorflow.svg" v-motion-pop></v-avatar>
                </template>
                <v-avatar slot="icon">
                    <img src="/Logos/Tensorflow.svg">
                </v-avatar>
                <span class=' bg-red-400' slot="opposite">Tus eu perfecto</span>
                <v-card class="mb-2" tile="" v-motion-slide-visible-right>
                    <v-row align="start">
                        <v-col class="shrink">
                            <v-img src="//placehold.it/80x120" max-width="80" class="ml-3"></v-img>
                        </v-col>
                        <v-col>
                            <v-card-title class="pa-0">AI Club Vice President</v-card-title>
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
                            <v-card-subtitle>2021-2023</v-card-subtitle>
                        </v-col>
                    </v-row>
                </v-card>
            </v-timeline-item>
        </v-timeline>
    </v-app>
</template>


