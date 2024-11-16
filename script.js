var gridLength = 104
var generalClassName = "SubDiv"
var gridStatePosition = generateArrayStats(gridLength)

document.addEventListener("DOMContentLoaded", function() {
    console.log("Load the page")

    
    console.log(gridStatePosition)

    createSmallBoxs(gridLength)
    addClickListenner()
});

function createSmallBoxs(amount) {
    var section = document.getElementById("rectangle");

    for (var i = 0; i <= amount; i++) {
        var div = document.createElement("div");
        div.className = generalClassName;
        div.id = i

        section.appendChild(div)
    }
}

function generateArrayStats(arraySize) {
    var array = []
    for (var i = 0; i <= arraySize; i++) {
        array.push(false)
    }
    return array
}

function addClickListenner() {
    var divs = document.querySelectorAll("." + generalClassName);
    
    divs.forEach(function(div) {
        div.addEventListener("click", function() {
            if (String(this.className).includes("true")) {
                this.className = generalClassName + " false"
                setState(this.id, false)
            } else {
                this.className = generalClassName + " true"
                setState(this.id, true)
            }
        });
    });
}

function setState(position, state) {
    gridStatePosition[position] = state
}