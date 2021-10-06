var count = 80;
var countNew = 0;

function button1() {
    var plant = document.getElementById("plant");
    var newStem = document.createElement("div");
    var constantButton = document.getElementById("button1");

    newStem.id = "id" + countNew;

    // newStem.appendChild(constantButton);

    plant.appendChild(newStem);

    document.getElementById("id" + countNew).className = "stem2";
    document.getElementById("id" + countNew).style.top = count + "px";
    count = count + 190;
    countNew++;

    newStem.addEventListener("animationend", function() {
        newStem.appendChild(constantButton);
    })
}