var gridLength = 224
var generalClassName = "SubDiv"
var gridStatePosition = generateArrayStats(gridLength)

document.addEventListener("DOMContentLoaded", function() {
    console.log("Load the page")

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
    console.log(position)
}

function setColorBoxs() {
    var divs = document.querySelectorAll("." + generalClassName);

    divs.forEach(function(div) {
        for (var i = 0; i<=(gridStatePosition.length-1); i++) {
            if (gridStatePosition[i] && div.id == i) {
                div.className = generalClassName + " true"
            } else if (!gridStatePosition[i] && div.id == i) {
                div.className = generalClassName + " false"
                setState(div.id, false)
            }
        }
    });
}

function getSelectedItens() {
    chosePositions = []
    for (var a = 0; a <= (gridStatePosition.length-1); a++) {
        if (gridStatePosition[a]) chosePositions.push(a)
    }

    return chosePositions
}

function analiseOnlySelecteds() {
    var selectedItens = getSelectedItens()
    var perimeter
    var analyzed 
    for (var z=0; z <= (selectedItens.length-1); z++) {
        analyzed = selectedItens[z]
        perimeter = evaluatePerimeter(analyzed).length

        if (perimeter < 2) {
            gridStatePosition[analyzed] = false
        } else if (perimeter == 2 || perimeter == 3) {
            gridStatePosition[analyzed] = true
        } else if (perimeter > 3) {
            gridStatePosition[analyzed] = false
        }
    }
    setColorBoxs()
}

function fullAnalise() {
    var newMatriz = []
    
    for (var z=0; z <= (gridStatePosition.length-1); z++) {
        var perimeter = evaluatePerimeter(z).length
        var stateBox = gridStatePosition[z]

        if (perimeter < 2) {
            stateBox = false
        } else if (perimeter == 2) {
            stateBox = gridStatePosition[z]
        } else if (perimeter == 3) {
            stateBox = true
        } else if (perimeter > 3) {
            stateBox = false
        }

        newMatriz.push(stateBox)
    }
    gridStatePosition = newMatriz
    setColorBoxs()
}

function run() {
    // TODO: Não permitir que itens sejam clicados

    fullAnalise()
}

function rightIsValid(position) {
    var notHaveRight = [14, 29, 44, 59, 74, 89, 104, 119, 134, 149, 164, 179, 194, 209, 224]
    var isValid = true
    for (var i = 0; i<=(notHaveRight.length-1); i++) {
        if (position == notHaveRight[i]) {
            isValid = false
        }
    }
    
    return isValid
}

function leftIsValid(position) {
    var notHaveLeft = [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210]
    var isValid = true
    for (var i = 0; i<=(notHaveLeft.length-1); i++) {
        if (position == notHaveLeft[i]) {
            isValid = false
        }
    }
    
    return isValid
}

function upIsValid(position) {
    if (position >= 0 &&  position <= 14) {
        return false
    }
    return true
}

function downIsValid(position) {
    if (position >= 210 && position <= 224) {
        return false
    }
    return true
}

function evaluatePerimeter(x) {
    var endBoxState = []

    // Esquerda | x - 1
    if (leftIsValid(x)) {
        if (gridStatePosition[x - 1]) 
            endBoxState.push(true)
    }
    
    // Direita | x + 1
    if (rightIsValid(x)) {
        if (gridStatePosition[x + 1])
            endBoxState.push(true)
    }

    // Cima DIREITA | x - 14
    if (upIsValid(x) && rightIsValid(x)) {
        if (gridStatePosition[x - 14])
            endBoxState.push(true)
    }
    // Cima CENTRO | x - 15
    if (upIsValid(x)) {
        if (gridStatePosition[x - 15])
            endBoxState.push(true)
    }
    // Cima ESQUERDA | x - 16
    if (upIsValid(x) && leftIsValid(x)) {
        if (gridStatePosition[x - 16])
            endBoxState.push(true)
    }

    // Baixo DIREITA | x + 16
    if (downIsValid(x) && rightIsValid(x)) {
        if (gridStatePosition[x + 16])
            endBoxState.push(true)
    }
    // Baixo CENTRO | x + 15
    if (downIsValid(x)) {
        if (gridStatePosition[x + 15])
            endBoxState.push(true)
    }
    // Baixo ESQUERDA | x + 14
    if (downIsValid(x) && leftIsValid(x)) {
        if (gridStatePosition[x + 14])
            endBoxState.push(true)
    }

    console.log("-> ", endBoxState)
    return endBoxState
}