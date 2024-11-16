document.addEventListener("DOMContentLoaded", function() {
    console.log("Load the page")

    var section = document.getElementById("rectangle");

    var gridLength = 104
    var gridStatePosition = generateArrayStats(gridLength)

    createSmallBoxs(section, gridLength)
    console.log(gridStatePosition)
    
    addClickListenner()
});

function createSmallBoxs(section, amount) {
    for (var i = 0; i <= amount; i++) {
        var div = document.createElement("div");
        div.className = "SubDiv";
        div.id = i
        section.appendChild(div)
    }
}

function generateArrayStats(arraySize) {
    var array = []
    for (var i = 0; i <= arraySize; i++) {
        array.push("false")
    }
    return array
}

function addClickListenner() {
    var divs = document.querySelectorAll(".SubDiv");
    
    divs.forEach(function(div) {
        div.addEventListener("click", function() {
            alert("Div " + this.id + " foi clicada!");
        });
    });
}