// Animation de départ
gsap.from(".title", { y: -100, opacity: 0, duration: 1 });
gsap.from(".question", { opacity: 0, duration: 2, delay: 0.5 });

// Bouton NON qui fuit
function moveButton() {
    const button = document.querySelector(".no");
    const x = Math.random() * 400 - 200;
    const y = Math.random() * 400 - 200;
    button.style.transform = `translate(${x}px, ${y}px)`;
}

// Bouton OUI
function yesClick() {
    const message = document.getElementById("message");

    // 1️⃣ Afficher la section avant animation
    message.style.display = "flex";
    message.classList.remove("hidden");

    // 2️⃣ Scroll vers le message
    message.scrollIntoView({ behavior: "smooth" });

    // 3️⃣ Animation GSAP
    gsap.from(message, { opacity: 0, scale: 0.8, duration: 1 });

    // 4️⃣ Confettis 🎉
    confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });

    // 5️⃣ Pluie de cœurs ❤️
    setInterval(() => {
        confetti({
            particleCount: 6,
            spread: 60,
            origin: { x: Math.random(), y: Math.random() - 0.2 },
            shapes: ["heart"],
            colors: ["#ff4d6d", "#ff1744", "#ff758f"]
        });
    }, 300);
}
