const form = document.getElementById("form")
const input = document.getElementById("nombre")
const mensaje = document.getElementById("mensaje")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    try {
        if(input.value.trim() === ""){
            throw new Error("El nombre no puede estar vacio.")
        }

        mensaje.textContent = `Bienvenido usuario: ${input.value} a tu sistema de inscripciones`
        mensaje.style.color = "green"
    } catch(error){
        mensaje.textContent = `Something went wrong: ${error.message}`
    }
    }
);