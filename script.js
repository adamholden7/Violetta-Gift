document.addEventListener("DOMContentLoaded", function() {
    const openButton = document.querySelector(".open-button");
    const startScreen = document.querySelector(".start-screen");
    const card = document.querySelector(".card");
    const rabbit = document.querySelector(".rabbit");
    const bouquet = document.querySelector(".bouquet");

    openButton.addEventListener("click", function() {
        // Hide the start screen (envelope)
        startScreen.classList.add("hidden");

        // Show the card and rabbit
        card.classList.remove("hidden");
        card.style.opacity = "1";  // Make sure the card appears

        // Let the rabbit hop, then hide it and show the bouquet
        setTimeout(() => {
            rabbit.classList.add("hidden"); // Hide bunny
            bouquet.style.opacity = "1"; // Make bouquet fully visible
        }, 4500); // Matches animation duration
    });
});
