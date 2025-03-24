document.addEventListener("DOMContentLoaded", function () {
    const skills = document.querySelectorAll(".skill");
    skills.forEach(skill => {
        skill.addEventListener("mouseover", () => {
            skill.style.transform = "rotate(5deg)";
        });
        skill.addEventListener("mouseout", () => {
            skill.style.transform = "rotate(0deg)"
        });
    });
});

document.addEventListener("DOMContentLoaded", function(){
    particlesJS.load('particles-js','js/particles.json', function() {
        console.log("Particles.js cargado correctamente!");
    });

let text = "Desarrolladora Web | Creativa en constante aprendizaje";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout (typeWriter, 50);
    }
}
typeWriter();
});

document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.querySelector(".cursor");

    // Movimiento del cursor
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // Detectar cuándo el cursor está sobre un botón o enlace
    const botones = document.querySelectorAll("button, .btn-iniciar, a, .skill");

    botones.forEach((boton) => {
        boton.addEventListener("mouseenter", () => {
            cursor.classList.add("cursor-hover");
        });
        boton.addEventListener("mouseleave", () => {
            cursor.classList.remove("cursor-hover");
        });
    });
});

