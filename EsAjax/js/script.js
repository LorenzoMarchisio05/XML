$("#first button").on("click", function () {
    $(this).siblings(".container").load("src/test.html");
});

$("#second button").on("click", function () {
    $(this).siblings(".container").load("src/test.html #hint");
});

$("#third button").on("click", function () {
    const container = $(this).siblings(".container");
    $.get(
        "src/compositori.json",
        function (dati) {
            const json = JSON.parse(dati);

            console.log(json.compositori);

            container.text(dati);
        },
        "text"
    );
});

$("#fourth button").on("click", function () {
    $("#fourth ul li").each((i, li) => {
        alert(this.innerText);
        $(this).text(`${li.getAttribute("class")} nr. ${i}`);
    });
});

$("#fifth button").on("click", function () {
    const arrayEnum = Object.freeze(["first", "second", "third", "fourth"]);

    const ul = $("<ul></ul>");
    const div = $("<div></div>");

    div.insertAfter($("#fifth h2")).append(ul);

    $.each(arrayEnum, (i, value) => ul.append(`<li id="id${i}">${value}</li>`));
});

$("#sixth button").on("click", function () {
    const tbody = $(this).siblings("table").children("tbody").html("");
    $.get(
        "src/compositori.json",
        function ({ compositori }) {
            $.each(compositori, (i, compositore) => {
                const { nome, data_nascita, data_morte, epoca } = compositore;

                $("<tr></tr>")
                    .html(
                        `
                    <td>${nome}</td>
                    <td>${data_nascita}</td>
                    <td>${data_morte}</td>
                    <td>${epoca}</td>
                `
                    )
                    .appendTo(tbody);
            });
        },
        "json"
    );
});
