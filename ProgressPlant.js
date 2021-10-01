var count = 80;
var countNew = 0;

function button1() {
    var plant = document.getElementById("plant");
    var newStem = document.createElement("div");
    var constantButton = document.getElementById("button1");

    newStem.id = "id" + countNew;

    newStem.appendChild(constantButton);

    plant.appendChild(newStem);

    document.getElementById("id" + countNew).style.cssText = "width: 45px;height: 300px;background-color: #7FED0C;position: absolute;border-radius: 64% 36% 52% 48% / 61% 24% 76% 39%;left: -30px;"
    ;
    document.getElementById("id" + countNew).style.top = count + "px";
    count = count + 160;
    console.log(count);

    countNew++;
}