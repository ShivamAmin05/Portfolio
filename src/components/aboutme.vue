<script setup>
import Laptop from './laptop.vue'
</script>
<template>
    <div class="w-screen h-screen flex flex-col md:flex-row mt-40 px-5 md:px-10">
        <div class="w-full md:w-1/2 p-5 text-center md:text-left flex flex-col justify-center">
            <h1 class="text-4xl md:text-8xl font-bold mb-6">
                <font-awesome-icon :icon="['fas', 'book-open-reader']" />
                About Me
            </h1>
            <p class="font-mediumtext-lg md:text-lg leading-relaxed">
                I'm a junior at the University of Maryland, College Park, pursuing dual degrees in Computer Science and
                Mathematics. My journey into technology began in high school, and what started as curiosity has grown
                into a genuine passion for using code to solve meaningful problems.
                <br /><br />
                The intersection of mathematics and computer science fascinates me, it's where theoretical concepts meet
                real-world applications. This combination has shaped how I approach challenges, allowing me to think
                logically and analyze problems from multiple angles.
                <br /><br />

                What drives me most is the continuous learning that comes with this field. Every project presents new
                obstacles to overcome and technologies to master. I'm always eager to take on fresh challenges and
                contribute to innovative solutions that make a real impact.
            </p>
        </div>
        <div class="w-full md:w-1/2 p-5 flex items-center justify-center">
            <div class="w-full h-2/3">
                <Laptop />
            </div>
        </div>
    </div>
</template>