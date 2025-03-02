document.addEventListener("DOMContentLoaded", function() {
    const openButton = document.querySelector(".open-button");
    const startScreen = document.querySelector(".start-screen");
    const card = document.querySelector(".card");
    const rabbit = document.querySelector(".rabbit");
    const bouquet = document.querySelector(".bouquet");

    openButton.addEventListener("click", function() {
        // Hide the envelope
        startScreen.classList.add("hidden");

        // Show the rabbit and make it hop
        card.classList.remove("hidden");

        // After bunny finishes hopping (4.5s), remove it and show bouquet
        setTimeout(() => {
            rabbit.classList.add("hidden"); // Hide bunny
            bouquet.style.opacity = "1"; // Show bouquet smoothly
        }, 4500); // Matches animation duration
    });
});
