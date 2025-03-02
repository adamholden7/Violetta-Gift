document.addEventListener("DOMContentLoaded", function() {
    const openButton = document.querySelector(".open-button");
    const startScreen = document.querySelector(".start-screen");
    const card = document.querySelector(".card");
    const rabbit = document.querySelector(".rabbit");
    const bouquet = document.querySelector(".bouquet");

    openButton.addEventListener("click", function() {
        // Hide the envelope
        startScreen.classList.add("hidden");

        // Show the rabbit and start hopping
        card.classList.remove("hidden");
        setTimeout(() => {
            rabbit.classList.add("hidden"); // Hide rabbit after it hops
            bouquet.classList.remove("hidden"); // Show bouquet after rabbit disappears
        }, 3000); // Wait for rabbit animation to finish
    });
});
