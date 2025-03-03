document.addEventListener("DOMContentLoaded", function () {
    var envelope = document.getElementById("envelope");
    var bouquetContainer = document.querySelector(".bouquet-container");
    var heartContainer = document.querySelector(".bouquet-hearts");

    envelope.addEventListener("click", function () {
        envelope.classList.toggle("open");

        if (envelope.classList.contains("open")) {
            document.querySelector(".letter").style.transform = "translateY(-140px)";
            document.querySelector(".letter").style.zIndex = "10"; 

            // Animate bouquet rising from the bottom
            bouquetContainer.style.bottom = "100px";

            // Emit hearts from bouquet
            for (let i = 0; i < 10; i++) {
                let heart = document.createElement("span");
                heart.classList.add("bouquet-heart");
                heart.textContent = "❤️";

                let randomX = Math.random() * 100 - 50; // Spread hearts left & right
                heart.style.left = `calc(50% + ${randomX}px)`;

                heartContainer.appendChild(heart);

                setTimeout(() => {
                    heart.style.opacity = "1";
                    heart.style.transform = `translateY(-600px) rotate(${Math.random() * 20 - 10}deg)`;
                }, i * 300); // Staggered effect

                setTimeout(() => heart.remove(), 5000); // Cleanup hearts
            }

        } else {
            document.querySelector(".letter").style.transform = "translateY(0)";
            document.querySelector(".letter").style.zIndex = "2"; 

            // Reset bouquet position
            bouquetContainer.style.bottom = "-150px";
        }
    });
});
