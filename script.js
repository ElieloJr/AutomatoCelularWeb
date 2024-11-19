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

function run() {
    // TODO: Não permitir que itens sejam clicados

    var selectedItens = getSelectedItens()
    for (var z=0; z <= (selectedItens.length-1); z++) {
        marcaOredor(selectedItens[z])
        setColorBoxs()
    }


    // Menos de 2 viznhos - MORRE
    // 2 ou 3 vizinhos - VIVE
    // 3 vizinhos - NASCE
    // Mais de 3 vizinhos - MORRE
}

function rightIsValid(position) {
    var notHaveRight = [14, 29, 44, 59, 74, 89, 104, 119, 134, 149, 164, 179, 194, 209, 224]
    var isValid = true
    for (var i = 0; i<=(notHaveRight.length-1); i++) {
        if (position == notHaveRight[i]) {
            isValid = false
        }
    }
    console.log("rightIsValid " + isValid)
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
    console.log("leftIsValid " + isValid)
    return isValid
}

function upIsValid(position) {
    if (position >= 0 &&  position <= 14) {
        console.log("upIsValid " + false)
        return false
    }
    console.log("upIsValid " + true)
    return true
}

function downIsValid(position) {
    if (position >= 210 && position <= 224) {
        console.log("downIsValid " + false)
        return false
    }
    console.log("downIsValid " + true)
    return true
}

function marcaOredor(x) {
    var endBoxState = []
    // Esquerda | x - 1
    if (leftIsValid(x)) {
        gridStatePosition[x - 1] = true
        console.log(x)
        console.log(gridStatePosition)
        endBoxState.push(true)
    }
    
    // Direita | x + 1
    if (rightIsValid(x)) {
        gridStatePosition[x + 1] = true
        endBoxState.push(true)
    }

    // Cima DIREITA | x - 14
    if (upIsValid(x) && rightIsValid(x)) {
        gridStatePosition[x - 14] = true
        endBoxState.push(true)
    }
    // Cima CENTRO | x - 15
    if (upIsValid(x)) {
        gridStatePosition[x - 15] = true
        endBoxState.push(true)
    }
    // Cima ESQUERDA | x - 16
    if (upIsValid(x) && leftIsValid(x)) {
        gridStatePosition[x - 16] = true
        endBoxState.push(true)
    }

    // Baixo DIREITA | x + 16
    if (downIsValid(x) && rightIsValid(x)) {
        gridStatePosition[x + 16] = true
        endBoxState.push(true)
    }
    // Baixo CENTRO | x + 15
    if (downIsValid(x)) {
        gridStatePosition[x + 15] = true
        endBoxState.push(true)
    }
    // Baixo ESQUERDA | x + 14
    if (downIsValid(x) && leftIsValid(x)) {
        gridStatePosition[x + 14] = true
        endBoxState.push(true)
    }    
}