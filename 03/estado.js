let estado = function(a) {
    if (a === "SP" || a === "RJ") {
        return "Acesso permitido para a região."
    } else {
        return "Acesso negado para sua região."
    }
}

module.exports = estado