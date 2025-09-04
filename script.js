// 1. Cambiar imagen aleatoria
function cambiarImagen() {
    let imagen = document.getElementById("random-img");
    let randomNum = Math.floor(Math.random() * 1000);
    imagen.src = `https://picsum.photos/600/600?random=${randomNum}`;
}

// 2. Mostrar / Ocultar descripción
function toggleDescripcion(boton) {
    let descripcion = boton.previousElementSibling;
    if (descripcion.style.display === "none") {
        descripcion.style.display = "block";
        boton.innerText = "Ver menos";
    } else {
        descripcion.style.display = "none";
        boton.innerText = "Ver más";
    }
}

// 3. Contador de likes
function like(boton) {
    let contador = boton.nextElementSibling;
    contador.innerText = parseInt(contador.innerText) + 1;
}

// 4. Saludo dinámico según la hora
function saludoDinamico() {
    let hora = new Date().getHours();
    let saludoTexto = "";
    if (hora < 12) {
        saludoTexto = "🌞 ¡Buenos días! ¿Listo para un desayuno con Burger King?";
    } else if (hora < 18) {
        saludoTexto = "🍔 ¡Buenas tardes! Es hora de un almuerzo delicioso.";
    } else {
        saludoTexto = "🌙 ¡Buenas noches! Termina tu día con una hamburguesa.";
    }
    document.getElementById("saludo").innerText = saludoTexto;
}

// Ejecutar al cargar la página
window.onload = saludoDinamico;
