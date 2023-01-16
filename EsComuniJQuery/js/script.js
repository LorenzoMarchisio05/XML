// "https://api.pollo.host/istat-api/?query=regioni"

// https://api.pollo.host/istat-api/?query=comunidiprovincia&provincia=province"

// "https://api.pollo.host/istat-api/?query=provincediregione&regione=regione"

const btnSeleziona = $("button[choose='address']");
const preDomain = "https://cors.mb-srv.tk/";

btnSeleziona.on("click", function () {
    $(this).hide(2000, () =>
        readJSONFile(
            {
                query: "regioni",
            },
            0
        )
    );
});

function readJSONFile(param = {}, index) {
    const url = preDomain + "https://api.pollo.host/istat-api";

    const label = $("form label").eq(index);
    const select = label.find("select");

    const field = label.text().trim().toLowerCase();

    $.ajax({
        data: param,
        url,
        dataType: "json",
    })
        .done((data) => {
            const key = Object.keys(data)[field == "provincia" ? 1 : 0];
            select.slice(index).html("<option>---------------------</option>");
            $.each(data, (_, value) =>
                $("<option></option>").text(value[key]).appendTo(select)
            );
        })
        .fail(console.error);

    label.slideDown(2000);
}

function regioni(regione) {
    readJSONFile(
        {
            query: "provincediregione",
            regione,
        },
        1
    );
    window.localStorage.setItem("regione", regione);
}

function province(provincia) {
    readJSONFile(
        {
            query: "comunidiprovincia",
            provincia,
        },
        2
    );
    window.localStorage.setItem("provincia", provincia);
}

function comuni(comune) {
    const address = `${localStorage.getItem(
        "regione"
    )} - ${localStorage.getItem("provincia")}`;
}
