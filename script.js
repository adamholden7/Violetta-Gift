document.addEventListener("DOMContentLoaded", function () {
    var envelope = document.getElementById("envelope");

    // Add message at the top dynamically
    var message = document.createElement("div");
    message.classList.add("top-message");
    message.textContent = "C 8 Mapта";
    document.body.prepend(message);

    envelope.addEventListener("click", function () {
        envelope.classList.toggle("open");
        envelope.classList.toggle("close");

        if (envelope.classList.contains("open")) {
            document.querySelector(".letter").style.transform = "translateY(-140px)";
            document.querySelector(".letter").style.zIndex = "5"; 
        } else {
            document.querySelector(".letter").style.transform = "translateY(0)";
            document.querySelector(".letter").style.zIndex = "2"; 
        }
    });
});
