const x = 100; 
// x = 10; Error de ejecución

console.log(x); 


// setencias iterativas

// iteraciones
const cielo = document.getElementById('cielo'); 

for (let i = 0; i < 5; i++) {
    cielo.innerHTML += '⭐';
}

// arreglo
const planetas = ["🌍", "🪐", "🌕"]

for(const planeta of planetas) {
    cielo.innerHTML += planeta;
}

let m = 0;
while (m < 5) {
    cielo.innerHTML += '☁';
    m++;
}

let n = 0; 
do {
    cielo.innerHTML += '🚀';
    n++; 
} while (n < 4);

//eventos

const btnEstrella = document.getElementById("btnEstrella");

btnEstrella.addEventListener('click', () => {
    cielo.innerHTML += '⭐'; 

});

const btnPlaneta = document.getElementById('btnPlaneta');

btnPlaneta.addEventListener('dblclick', () => {
    cielo.innerHTML += '🪐'; 
});

const inputEmoji = document.getElementById('inputEmoji');
const btnAgregarEmoji = document.getElementById('btnAgregarEmoji');

btnAgregarEmoji.addEventListener('click', () => {
    var emoji = inputEmoji.value.trim();
    if(emoji) cielo.innerHTML += emoji; 
    inputEmoji.value = ""
});

inputEmoji.addEventListener("keydown", e =>{
    if(e.key==="Escape") cielo.innerHTML="";
})
