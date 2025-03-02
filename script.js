document.addEventListener("DOMContentLoaded", function() {
    const openButton = document.querySelector(".open-button");
    const startScreen = document.querySelector(".start-screen");
    const card = document.querySelector(".card");
    const rabbit = document.querySelector(".rabbit");
    const bouquet = document.querySelector(".bouquet");

    openButton.addEventListener("click", function() {
        // Hide the envelope immediately on all devices
        startScreen.style.display = "none";

        // Show the card and make sure it's visible
        card.classList.remove("hidden");
        card.style.opacity = "1";

        // Show the rabbit instantly
        rabbit.classList.remove("hidden");

        // Reduce bunny hopping delay (now faster)
        setTimeout(() => {
            rabbit.classList.add("hidden"); // Hide bunny sooner
            bouquet.style.opacity = "1"; // Show bouquet smoothly
        }, 2500); // Reduced from 4500ms for faster reveal
    });
});
