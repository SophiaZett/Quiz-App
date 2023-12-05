const button = document.querySelector ('[data-js="button1"]');
const antwort = document.querySelector ('[data-js="antwort1"]');

button.addEventListener("click", () => {
    antwort.innerHTML = "Lösung";
});

const button2 = document.querySelector ('[data-js="button2"]');
const antwort2 = document.querySelector ('[data-js="antwort2"]');

button2.addEventListener("click", () => {
    antwort2.innerHTML = "Lösung";
});

const button3 = document.querySelector ('[data-js="button3"]');
const antwort3 = document.querySelector ('[data-js="antwort3"]');

button3.addEventListener("click", () => {
    antwort3.innerHTML = "Lösung";
});