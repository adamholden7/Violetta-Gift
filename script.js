let messages = [
    "Ты самая прекрасная! 💕",
    "Ты делаешь этот мир лучше! 🌎",
    "Я благодарен за тебя каждый день! 😊",
    "Пусть твой день будет наполнен радостью и любовью! 💖",
    "💐 Этот букет для тебя! 💐"
];
let pageIndex = 0;

function nextPage() {
    let messageText = document.getElementById("message-text");
    let card = document.getElementById("card-container");

    if (pageIndex < messages.length) {
        card.classList.add("flip");
        setTimeout(() => {
            messageText.innerHTML = messages[pageIndex];
            pageIndex++;
            card.classList.remove("flip");
        }, 800);
    } else {
        showFlowers();
    }
}

function showFlowers() {
    document.getElementById("card-container").style.display = "none";
    let bouquet = document.getElementById("flower-container");
    bouquet.classList.remove("hidden");

    setTimeout(() => {
        document.querySelector(".bouquet").style.opacity = 1;
        document.getElementById("banner").style.opacity = 1;
    }, 500);
}
