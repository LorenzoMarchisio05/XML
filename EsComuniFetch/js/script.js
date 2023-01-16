// "https://api.pollo.host/istat-api/?query=regioni"

// https://api.pollo.host/istat-api/?query=comunidiprovincia&provincia=province"

// "https://api.pollo.host/istat-api/?query=provincediregione&regione=regione"

const btnSeleziona = $("button[choose='address']");
const preDomain = "https://cors.mb-srv.tk";

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
    const url = new URL(`${preDomain}/https://api.pollo.host/istat-api`);
    $.each(param, (key, value) => url.searchParams.append(key, value));

    const label = $("form label").eq(index);
    const select = label.find("select");

    select.html("");

    fetch(url)
        .then((res) => res.json())
        .then((data) =>
            select.append(
                data.map(
                    (obj) =>
                        `<option>${
                            Object.keys(obj).length === 2
                                ? Object.values(obj).join(" - ")
                                : obj[Object.keys(obj)[0]]
                        }</option>`
                )
            )
        )
        .catch(console.error);

    label.slideDown(2000);
}

async function readJSONFileAsync(param = {}, index) {
    const label = $("form label").eq(index);
    const select = label.find("select");
    select.html("");

    const url = new URL(`${preDomain}/https://api.pollo.host/istat-api`);
    $.each(param, (key, value) => url.searchParams.append(key, value));

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`${response.statusText} - ${response.status}`);
        }

        const json = await response.json();

        select.append(
            json.map(
                (obj) =>
                    `<option>${
                        Object.keys(obj).length === 2
                            ? Object.values(obj).join(" - ")
                            : obj[Object.keys(obj)[0]]
                    }</option>`
            )
        );
    } catch (error) {
        console.error(error);
    }

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
    window.localStorage.setItem("provincia", provincia);
    provincia = provincia.substring(provincia.indexOf("-") + 2);

    readJSONFile(
        {
            query: "comunidiprovincia",
            provincia,
        },
        2
    );
}

function comuni(comune) {
    const address = `${localStorage.getItem(
        "regione"
    )} - ${localStorage.getItem("provincia")} - ${comune}`;
    alert(address);
}
