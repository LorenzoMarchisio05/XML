$("#first button").on("click", function () {
    $(this).siblings(".container").load("src/test.html");
});

$("#second button").on("click", function () {
    $(this).siblings(".container").load("src/test.html #hint");
});

$("#third button").on("click", function () {
    $.get(
        "src/compositori.json",
        function (dati) {
            alert(dati);
        },
        "text"
    );
    $(this).siblings(".container");
});
