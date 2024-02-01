"use strict";

window.addEventListener("load", start);

let guess;

function start() {
    console.log("JS is running");

    document.querySelector("#start").addEventListener("click", startGame);


    guess = generateGuess();
}

function generateGuess() {
    return Math.floor(Math.random() * 99) + 1;
}

function createGuess() {
    guess = generateGuess();
    const list = document.querySelector("#guess-list");
    const html = `
        <li>
            I guessed ${guess} - was that correct? 
            <button id="high">Too high</button> 
            <button id="low">Too low</button> 
            <button id="correct">Correct</button>
        </li>`;
    list.insertAdjacentHTML("beforeend", html);
    document.querySelector("#high").addEventListener("click", () => tooHigh(guess));
    document.querySelector("#low").addEventListener("click", () => tooLow(guess));
    document.querySelector("#correct").addEventListener("click", () => correct(guess));
}
function createButtons(){
    
}

function startGame() {
    document.querySelector("#start-text").classList.add("hide");
    createGuess(); 
}

function tooLow(guess) {
    const list = document.querySelector("#guess-list");
    const html = `<li>I guessed ${guess} - that was too low!</li>`;
    list.innerHTML = html;
    createGuess(); 
}

function tooHigh(guess) {
    const list = document.querySelector("#guess-list");
    const html = `<li>I guessed ${guess} - that was too high!</li>`;
    list.innerHTML = html;
    createGuess(); 
}

function correct(guess) {
    const list = document.querySelector("#guess-list");
    const html = `<li>I guessed ${guess} - that was correct!</li>`;
    list.innerHTML = html; 

    document.querySelector("#high").remove();
    document.querySelector("#low").remove();
    document.querySelector("#correct").remove();
}
