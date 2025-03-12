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
