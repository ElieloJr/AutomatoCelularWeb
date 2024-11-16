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

function run() {
    // TODO: Não permitir que itens sejam clicados
    console.log('funciona')

    // POS | x = 16

    // Esquerda | x - 1
    // Direita | x + 1

    // Cima DIREITA | x - 14
    // Cima CENTRO | x - 15
    // Cima ESQUERDA | x - 16

    // Baixo DIREITA | x + 16
    // Baixo CENTRO | x + 15
    // Baixo ESQUERDA | x + 14

    // Menos de 2 viznhos - MORRE

    // 2 ou 3 vizinhos - VIVE

    // 3 vizinhos - NASCE

    // Mais de 3 vizinhos - MORRE
}

