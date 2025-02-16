document.addEventListener("DOMContentLoaded", function () {
    // Floating Bubbles
    for (let i = 0; i < 25; i++) {
        let bubble = document.createElement('div');
        bubble.classList.add('bubble');
        document.querySelector('.floating-bubbles').appendChild(bubble);
        bubble.style.left = Math.random() * 100 + "vw";
        bubble.style.animationDuration = Math.random() * 5 + 3 + "s";
        bubble.style.width = bubble.style.height = Math.random() * 30 + 20 + "px";
    }

    // Floating Glow Effects
    for (let i = 0; i < 10; i++) {
        let glow = document.createElement('div');
        glow.classList.add('glow');
        document.body.appendChild(glow);
        glow.style.left = Math.random() * 100 + "vw";
        glow.style.top = Math.random() * 100 + "vh";
        glow.style.animationDuration = Math.random() * 5 + 3 + "s";
    }
});
