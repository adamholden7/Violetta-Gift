document.addEventListener("DOMContentLoaded", function () {
    var envelope = document.getElementById("envelope");
    var flowerExplosion = document.querySelector(".flower-explosion");

    // Generate 1000 flowers dynamically for a massive explosion
    for (let i = 0; i < 1000; i++) {
        let flower = document.createElement("span");
        flower.classList.add("flower");
        flower.textContent = ["🌸", "🌹", "🌼", "🌺", "💐", "🌷"][Math.floor(Math.random() * 1)];
        flowerExplosion.appendChild(flower);
    }

    envelope.addEventListener("click", function () {
        envelope.classList.toggle("open");
        envelope.classList.toggle("close");

        if (envelope.classList.contains("open")) {
            document.querySelector(".letter").style.transform = "translateY(-140px)";
            document.querySelector(".letter").style.zIndex = "10"; 
            flowerExplosion.style.opacity = "1"; // Trigger explosion

            // Get letter dimensions to avoid overlap
            let letterBox = document.querySelector(".letter").getBoundingClientRect();

            // Make flowers explode and fill the screen while avoiding the letter
            document.querySelectorAll(".flower").forEach((flower, index) => {
                setTimeout(() => {
                    let x, y;
                    let attempts = 0;
                    do {
                        x = Math.random() * window.innerWidth - window.innerWidth / 2;
                        y = Math.random() * window.innerHeight - window.innerHeight / 2;
                        attempts++;
                    } while (
                        attempts < 10 &&
                        x > letterBox.left - 50 && x < letterBox.right + 50 &&
                        y > letterBox.top - 50 && y < letterBox.bottom + 50
                    );

                    flower.style.opacity = "1";
                    flower.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random() * 360}deg) scale(${Math.random() * 1.5 + 0.5})`;
                }, index * 5);
            });

        } else {
            document.querySelector(".letter").style.transform = "translateY(0)";
            document.querySelector(".letter").style.zIndex = "2"; 
            flowerExplosion.style.opacity = "0"; // Reset explosion

            // Reset flower positions
            document.querySelectorAll(".flower").forEach((flower) => {
                flower.style.opacity = "0";
                flower.style.transform = "translate(0, 0) rotate(0deg) scale(1)";
            });
        }
    });
});
