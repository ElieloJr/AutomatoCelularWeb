// VARIAVEIS GLOBAIS
var gridLength = 224
var generalClassName = "SubDiv"
var gridStatePosition = generateArrayStats(gridLength)

// FUNÇÃO QUE CONTROLA O HTML
document.addEventListener("DOMContentLoaded", function() {
    console.log("Load the page")

    createSmallBoxs(gridLength)
    addClickListenner()
});

// Função que configura ação do botão "Rodar"
function runAutomato() {
    fullAnalise()
}

// Função que configura ação do botão "Limpar"
function runRestart() {
    gridStatePosition = generateArrayStats(gridLength)
    setColorBoxs()
}