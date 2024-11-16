document.addEventListener("DOMContentLoaded", function() {
    console.log("Load the page")

    var gridLength = 104
    var gridStatePosition = generateArrayStats(gridLength)

    createSmallBoxs(gridLength)
    console.log(gridStatePosition)
    
    addClickListenner()
});

function createSmallBoxs(amount) {
    var section = document.getElementById("rectangle");

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
    var generalClassName = "SubDiv"
    var divs = document.querySelectorAll("." + generalClassName);
    
    divs.forEach(function(div) {
        div.addEventListener("click", function() {
            if (String(this.className).includes("true")) {
                this.className = generalClassName + " false"
            } else {
                this.className = generalClassName + " true"
            }
        });
    });
}