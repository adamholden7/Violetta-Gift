let messages = [
    "Ты самая прекрасная! 💕",
    "Ты делаешь этот мир лучше! 🌎",
    "Я благодарен за тебя каждый день! 😊",
    "Пусть твой день будет наполнен радостью и любовью! 💖",
    "💐 Этот букет для тебя! 💐"
];
let pageIndex = 0;

function nextPage() {
    let book = document.getElementById("book");
    let messageText = document.getElementById("message-text");
    
    if (pageIndex < messages.length) {
        book.classList.add("turning");
        setTimeout(() => {
            messageText.innerHTML = messages[pageIndex];
            pageIndex++;
            book.classList.remove("turning");
        }, 800);
    } else {
        showFlowers();
    }
}

function showFlowers() {
    document.getElementById("book-container").style.display = "none";
    let bouquet = document.getElementById("flower-container");
    bouquet.classList.remove("hidden");

    setTimeout(() => {
        document.querySelector(".bouquet").style.opacity = 1;
        document.getElementById("banner").style.opacity = 1;
    }, 500);
}
