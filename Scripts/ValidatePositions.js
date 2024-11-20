// OBS: As regras aplicadas abaixo estão definidas no arquivo Readme

// ----- Funções que avalia se as posições são válidas -----
// Avalia se a Direita é válida
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

// Avalia se a Esquerda é válida
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

// Avalia se as posições de cima são válidas
function upIsValid(position) {
    if (position >= 0 &&  position <= 14) {
        return false
    }
    return true
}

// Avalia se as posições de baixo são válidas
function downIsValid(position) {
    if (position >= 210 && position <= 224) {
        return false
    }
    return true
}

// ---------------------------------------------------------

// ----- Função que avalia o quadrante ao redor do item analizado -----

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

// --------------------------------------------------------------------