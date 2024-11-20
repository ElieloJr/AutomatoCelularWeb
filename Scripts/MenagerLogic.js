// Função que gera a matriz/array usado para gerenciar o Automato
function generateArrayStats(arraySize) {
    var array = []
    for (var i = 0; i <= arraySize; i++) {
        array.push(false)
    }
    return array
}

// Função que muda o estado dos itens
function setState(position, state) {
    gridStatePosition[position] = state
    console.log(position)
}

// Função que pega apenas os itens selecionados pelo usuário
function getSelectedItens() {
    chosePositions = []
    for (var a = 0; a <= (gridStatePosition.length-1); a++) {
        if (gridStatePosition[a]) chosePositions.push(a)
    }

    return chosePositions
}