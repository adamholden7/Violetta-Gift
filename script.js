$(document).ready(function() {
    var envelope = $("#envelope");

    envelope.click(function() {
        envelope.toggleClass("open close");

        if (envelope.hasClass("open")) {
            $(".letter").css("transform", "translateY(-120px)").css("z-index", "5"); // Move letter up
            $(".flowers").css("opacity", "1"); // Show flowers
        } else {
            $(".letter").css("transform", "translateY(0)").css("z-index", "2"); // Reset letter
            $(".flowers").css("opacity", "0"); // Hide flowers
        }
    });
});
