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

const btnEstrella = document.getElementById('btnEstrella');

btnEstrella.addEventListener('click', () => {
    cielo.innerHTML += '⭐'; 
});