$("#first button").on("click", function () {
    $(this).siblings(".container").load("src/test.html");
});

$("#second button").on("click", function () {
    $(this).siblings(".container").load("src/test.html #hint");
});
