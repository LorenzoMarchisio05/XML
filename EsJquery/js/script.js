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
$("#sixth button").on("click", function () {});
