document.addEventListener("DOMContentLoaded", function () {
    var envelope = document.getElementById("envelope");

    envelope.addEventListener("click", function () {
        envelope.classList.toggle("open");
        envelope.classList.toggle("close");

        if (envelope.classList.contains("open")) {
            document.querySelector(".letter").style.transform = "translateY(-140px)";
            document.querySelector(".letter").style.zIndex = "5"; 
            document.querySelector(".flowers").style.opacity = "1"; // Show flowers

            // Show hearts
            document.querySelectorAll(".heart").forEach((heart) => {
                heart.style.display = "block"; 
                heart.style.opacity = "1";
            });

        } else {
            document.querySelector(".letter").style.transform = "translateY(0)";
            document.querySelector(".letter").style.zIndex = "2"; 
            document.querySelector(".flowers").style.opacity = "0"; // Hide flowers

            // Hide hearts
            document.querySelectorAll(".heart").forEach((heart) => {
                heart.style.display = "none";
                heart.style.opacity = "0";
            });
        }
    });
});
