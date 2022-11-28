// first
$("#first button").on("click", function () {
    const img = $(this).siblings("p").children("img");

    img.css("position", "relative");

    img.animate(
        {
            left: "40vw",
        },
        600
    );
});

// second
$("#second button").on("click", function () {
    const box = $(this).siblings(".box");

    box.animate(
        {
            left: "30vw",
            width: 300,
            opacity: 0.5,
        },
        600
    );
});

// third
$("#third button").on("click", function () {
    const box = $(this).siblings(".box");

    const duration = 600;

    box.animate(
        {
            width: 300,
        },
        duration
    )
        .animate(
            {
                left: "30vw",
            },
            duration
        )
        .animate(
            {
                opacity: 0.5,
            },
            duration
        );
});

// fourth
$("#fourth button").on("click", function () {
    const box = $(this).siblings(".box");

    box.animate({
        width: "+=50",
    });
});

// fifth
{
    const box = $("#fifth .box");

    box.css({
        width: "80%",
        height: "100px",
        aspectRatio: "unset",
    });

    $("#fifth button").on("click", function () {
        box.animate(
            {
                width: "toggle",
            },
            600
        );
    });
}

// sixth
{
    const text = $("#sixth #testoDaAnimare");

    $("#sixth button:first").on("click", function () {
        text.animate({
            "font-size": "46px",
        }).animate({
            "border-width": "30px",
        });
    });

    $("#sixth #reset").on("click", function () {
        text.removeAttr("style");
    });
}

// seventh
$("#seventh button").on("click", function () {
    const h1 = $(this).siblings("h1");

    const p = $(this).siblings("p");

    h1.text("brava ziah").fadeOut("slow");

    p.text("").fadeOut("slow");
});

// eigth
$("#eigth button").on("click", function () {
    $(this).siblings("p").slideToggle("slow");
    alert("tua mamma");
});

// ninth
$("#ninth button").on("click", function () {
    $(this)
        .siblings("p")
        .slideToggle("slow", () => alert("tua mamma"));
});

// tenth
$("#tenth button").on("click", function () {
    $(this)
        .siblings("p, h1")
        .slideToggle("slow", () => alert("tua mamma"));
});
