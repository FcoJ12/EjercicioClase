
//componente mejorado

const productos = [{nombre:"PS5", precio:20000, img:"https://i5.walmartimages.com/asr/20785f28-4770-431e-a43f-626f79505c31.5804d76023f90d099f6d3ecd476948eb.jpeg"},
    {nombre:"Videojuego", precio:200, img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTJw-e6JSHrZpheY04_OPgN9c5RdMMaI40ONyPhDbXryW0fiWheujvs8im7JiSYEoFsxEeL5KikwlcnI6LkVdwj9jrHCMrwbXtKbuAD0jmwak7Yukvt9hG8"},
];

const contenedor = document.getElementById('contenedor');

productos.forEach(prod => {
    const card = document.createElement("div")
    card.className="card";

    card.innerHTML += `
        <img src="${prod.img}" alt="${prod.nombre}">
        <h3>${prod.nombre}</h3>
        <p>${prod.precio}</p>
        <button>Agregar</button>
    `;

    contenedor.appendChild(card);
});