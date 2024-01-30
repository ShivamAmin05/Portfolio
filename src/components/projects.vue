<script setup>
import Tilt from 'vanilla-tilt-vue'
import Unity from '/Logos/Unity.png'
import CS50 from '/Logos/cs50.jpeg'
import TTT from '/Logos/TTT.png'
import Battleship from '/Logos/Battleship.png'

</script>
<template>
    <div class="w-screen h-1/2 flex flex-grid items-center justify-center">


    <div class=" w-50 h-50 m-8 p-8 rounded shadow-2xl bg-charcoal-600 card bg-foreground">
        <Tilt>
            <div class="p-3 rounded shadow-2xl bg-charcoal-600 card bg-white">
                <h1 class="mb-2 text-2xl font-bold">Unity Parkour Game</h1>
                <section class="flex items-center">
                    <img :src="Unity" class="w-8 h-8 mr-4 rounded" />
                    <h2 class="font-2xl">2022-2023</h2>
                </section>
                <li>
                    Collaborated with two team members to create a 3d parkour game using C# in the unity game engine
                </li>
                <li>
                    Rapidly prototyped new iterations for project ideas with team members by utilizing git repositories and version control
                </li>
                <li>
                    Developed character movement abilities and player controls including wall running, jumping, and sliding
                </li>
                <li>
                    Rigged up character model to allow for smooth animation transitions between different movement positions and actions
                </li>
            </div>
        </Tilt>
    </div>
    <div class=" w-50 h-50 m-8 p-8 rounded shadow-2xl bg-charcoal-600 card bg-foreground">
        <Tilt>
            <div class="p-3 rounded shadow-2xl bg-charcoal-600 card bg-white">
                <h1 class="mb-2 text-2xl font-bold">Harvard’s CS50X</h1>
                <section class="flex items-center">
                    <img :src="CS50" class="w-8 h-8 mr-4 rounded" />
                    <h2 class="font-2xl">2022</h2>
                </section>
                <li>
                    Completed an online CS course that covered several topics including C, algorithms, and web design	
                </li>
                <li>
                    Created a stock trading website using python, flask, and SQL, allowed users to buy and sell simulated stocks based on real data
                </li>
                <li>
                    Manipulated pixels in an image by utilizing image algorithms in C to achieve effects including grayscale, blur, and outlines.
                </li>
            </div>
        </Tilt>
    </div>
    
    </div>
    <div class="w-screen h-1/2 flex flex-grid items-center justify-center">


        <div class=" w-50 h-50 m-8 p-8 rounded shadow-2xl bg-charcoal-600 card bg-foreground">
            <Tilt>
                <div class="p-3 rounded shadow-2xl bg-charcoal-600 card bg-white">
                    <h1 class="mb-2 text-2xl font-bold">Tic Tac Toe Bot</h1>
                    <section class="flex items-center">
                        <img :src="TTT" class="w-8 h-8 mr-4 rounded" />
                        <h2 class="font-2xl">2020</h2>
                    </section>
                    <li>
                        Created an interactive, terminal-based tic tac toe game using Java where a player can compete against the computer
                    </li>
                    <li>
                        Utilized minimax algorithm to allow computer to always select the most optimal move, leading to a win or draw every game
                    </li>
                </div>
            </Tilt>
        </div>
        <div class=" w-50 h-50 m-8 p-8 rounded shadow-2xl bg-charcoal-600 card bg-foreground">
            <Tilt>
                <div class="p-3 rounded shadow-2xl bg-charcoal-600 card bg-white">
                    <h1 class="mb-2 text-2xl font-bold">Battleship</h1>
                    <section class="flex items-center">
                        <img :src="Battleship" class="w-8 h-8 mr-4 rounded" />
                        <h2 class="font-2xl">2023</h2>
                    </section>
                    <li>
                        Created terminal-based battleship game utilizing polymorphism to create classes for several separate ship and player types
                    </li>
                    <li>
                        Allowed players to play against a bot and implemented hunt algorithm to improve average performance over random guesses
                    </li>
                </div>
            </Tilt>
        </div>
        
        </div>
</template>
