// ----- Cria as Divs/quadradinhos usados no automato
function createSmallBoxs(amount) {
    var section = document.getElementById("rectangle");

    for (var i = 0; i <= amount; i++) {
        var div = document.createElement("div");
        div.className = generalClassName;
        div.id = i

        section.appendChild(div)
    }
}

// ----- Muda a cor das Divs/quadradinhos usados no automato
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

// ----- Função usada para ouvir o clique, configurar a cor da div e alterar o estado do item
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

// Função que aplica a análise do Automato APENAS NOS ITENS SELECIONADOS
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

// Função que ANALIZA TODAS AS DIVS APLICANDO O AUTOMATO
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