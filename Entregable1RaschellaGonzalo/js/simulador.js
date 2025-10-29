// ---------- Variables y Arrays ----------
const destinos = [
    { nombre: "Brasil", precioBase: 450 },
    { nombre: "Santorini", precioBase: 950 },
    { nombre: "Estambul", precioBase: 700 },
    { nombre: "Limassol", precioBase: 750 },
    { nombre: "Rodas", precioBase: 720 },
    { nombre: "Mykonos", precioBase: 850 },
    { nombre: "Kusadasi", precioBase: 680 },
    { nombre: "Alejandría", precioBase: 900 },
];

let reservas = []; // historial

// ---------- Funciones ----------

function mostrarCotizacion() {
    alert("Bienvenido al simulador de reservas de Cruceros.");

    const destino = seleccionarDestino();
    if (!destino) return;

    const pasajeros = parseInt(prompt("Ingrese la cantidad de pasajeros:"));
    if (isNaN(pasajeros) || pasajeros <= 0) {
        alert("Debe ingresar un número válido de pasajeros.");
        return;
    }

    const total = calcularCosto(destino, pasajeros);
    mostrarResumen(destino, pasajeros, total);

    reservas.push({ destino: destino.nombre, pasajeros, total });

    console.log("----- HISTORIAL DE RESERVAS -----");
    for (let i = 0; i < reservas.length; i++) {
        console.log(
            `${i + 1}. ${reservas[i].destino} - ${reservas[i].pasajeros} pasajeros - ${reservas[i].total} USD`
        );
    }
}


function seleccionarDestino() {
    let destinoElegido = prompt(
        "Ingrese el destino deseado:\n" +
        destinos.map(d => "- " + d.nombre).join("\n")
    );

    const destino = destinos.find(
        d => d.nombre.toLowerCase() === destinoElegido?.toLowerCase()
    );

    if (!destino) {
        alert("El destino ingresado no existe. Intente nuevamente.");
        return null;
    }

    console.log("Destino seleccionado:", destino.nombre);
    return destino;
}

function calcularCosto(destino, pasajeros) {
    let total = destino.precioBase * pasajeros;
    console.log(`Costo base por persona: ${destino.precioBase} USD`);
    console.log(`Cantidad de pasajeros: ${pasajeros}`);
    console.log(`Costo total estimado: ${total} USD`);
    return total;
}

function mostrarResumen(destino, pasajeros, total) {
    alert(
        `RESUMEN DE SIMULACIÓN\n\n` +
        `Destino: ${destino.nombre}\n` +
        `Pasajeros: ${pasajeros}\n` +
        `Total estimado: ${total} USD\n\n` +
        `¡Reservá ya tus próximas vacaciones!`
    );
}
