const output = document.getElementById("output")
const sec = document.getElementById("sec")
const conc = document.getElementById("conc")

function log(msg){
    output.textContent += msg + "\n"
}

function tarea(nombre,tiempo){
    return new Promise(res => {
        log( `El alumno ${nombre} inicia su tarea`);
        setTimeout(() => {
            log(`El alumno ${nombre} termino su tarea en ${tiempo/1000}s`)
            res();
        },tiempo
        )
    })
}

sec.onclick = async () => {
    output.textContent = "";
    log("Ejemplo secuencial");

    const inicio = performance.now();
    await tarea("Rodrigo",3000);
    await tarea("Manuel",2000);

    log(`Tiempo total de ejecución: ${((performance.now() - inicio)/1000).toFixed(3)}s`)
}

conc.onclick = async () => {
    output.textContent = "";
    log("Ejemplo concurrente");
    const inicio = performance.now();

    await Promise.all(
        [
            tarea("Denisse",3000),
            tarea("Enrique",1000)
        ]
    )

    log(`Tiempo total de ejecución: ${((performance.now() - inicio)/1000).toFixed(3)}s`)

}