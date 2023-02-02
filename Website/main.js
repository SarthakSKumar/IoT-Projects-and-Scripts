const allproject = document.querySelectorAll(".allProjectbtn");
const arduino = document.querySelectorAll(".arduinobtn");
const esp = document.querySelectorAll(".espbtn");
//////////////////////////////////
let data, cards;
fetch("cards.json")
    .then((response) => response.json())
    .then((res) => {
        data = res;
        return data;
    })
    .then((data) => {
        //Compile the handle bars template
        const template = Handlebars.compile(document.querySelector("#card-template").innerHTML);
        //Render the template with the data from the JSON file
        const html = template({ cards: data });

        // Insert the HTML into the page
        document.querySelector(".card-container").innerHTML = html;
        cards = document.querySelectorAll(".card");
        cardFilter();
    });

const cardFilter = function () {
    allproject.forEach(function (e) {
        e.onclick = () => {
            console.log("Clcickck");
            cards.forEach(function (card) {
                card.classList.remove("hide");
            });
        };
    });
    arduino.forEach(function (e) {
        e.onclick = () => {
            cards.forEach(function (card) {
                if (card.classList.contains("espCard")) {
                    card.classList.add("hide");
                }
                if (card.classList.contains("arduinoCard")) {
                    card.classList.remove("hide");
                }
            });
        };
    });
    esp.forEach(function (e) {
        e.onclick = () => {
            cards.forEach(function (card) {
                if (card.classList.contains("arduinoCard")) {
                    card.classList.add("hide");
                }
                if (card.classList.contains("espCard")) {
                    card.classList.remove("hide");
                }
            });
        };
    });
};

//////////////////////////
