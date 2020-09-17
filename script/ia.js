let esperar

function jogadorVsMaquina(elemento) {
    console.log("jogadorVsMaquina")


    if (!esperar) {

        colocarXeY(elemento)
        adcionarAtributo(elemento, 'responsavel', 'player')
        inteligenciaArtificial()
    }
}

function adcionarAtributo(elemento, atributo, valor) {
    elemento.setAttribute(atributo, valor)

}



function inteligenciaArtificial() {

    console.log("inteligenciaArtificial")
    let tempo = liberar?1000:2500

    esperar = true
    setTimeout(() => {
        let sequencia = fazerSequencia()
        let control = true
        if (sequencia) {
            for (let index = 0; index < sequencia.length && control; index++) {
                let valor = sequencia[index].getAttribute('valor')
                if (valor == 0) {
                    control = false
                    adcionarAtributo(sequencia[index], 'responsavel', 'cpu')
                    colocarXeY(sequencia[index])
                }
            }
        }
        else {
            let elemento = jogarAleatorio()
            colocarXeY(elemento)
        }
        esperar = false
    }, tempo);

}

function jogarAleatorio() {
    let continuar = true
    for (let index = 1; index <= 9 && continuar; index++) {
        let elemento = document.getElementById(`item-${index}`)

        let valor = elemento.getAttribute('valor')
        if (valor == 0) {
            continuar = false
            return elemento
        }
    }
}


function getCombinaçõesemAtributo() {

    let combinações = {
        h1: [items[0], items[1], items[2]],
        h2: [items[3], items[4], items[5]],
        h3: [items[6], items[7], items[8]],
        v1: [items[0], items[3], items[6]],
        v2: [items[1], items[4], items[7]],
        v3: [items[2], items[5], items[8]],
        c1: [items[0], items[4], items[8]],
        c2: [items[2], items[4], items[6]]
    }
    return combinações
}

/////////////// função complexa///////
/// O objetivo é verificar qual sequencia pode ser feita e retornar o items dessa sequencia /////////////////
function fazerSequencia() {

    let combinacoes = getCombinaçõesemAtributo() /// busca sequencia com os itens
    let valoresCombições = Object.values(combinacoes) /// mostra apenas o valores 
    let sequencia //// sequencia que vai ser retornada

    let item1 = false /// item um pode ser usado
    let item2 = false /// item um pode ser usado
    let item3 = false /// item um pode ser usado
    let sequenciaPossivel = item1 && item2 && item3 /// todos o iten podem ser usados

    for (let index = 0; index < valoresCombições.length && !sequenciaPossivel; index++) { /// percorre as sequencias
        item1 = false // seta variaval
        item2 = false // seta variaval
        item3 = false // seta variaval
        sequencia = valoresCombições[index] // armazena sequencia atual 

        for (let index2 = 0; index2 < valoresCombições[index].length; index2++) {  /// percorre itens da sequncia 

            let valor = valoresCombições[index][index2].getAttribute('valor')
            let responsavel = valoresCombições[index][index2].getAttribute('responsavel')

            if (responsavel != 'player') { //// se o jogador já selecionou o item
                if (responsavel == 'cpu' || valor == 0) { /// se o item esta vazio ou pertence ao cpu
                    ////////// ira atribuir verdadeiro nos intens até que seja possivel uma sequencia
                    if (!item1) {
                        item1 = true

                    } else if (!item2) {
                        item2 = true

                    } else if (!item3) {
                        item3 = true

                    }
                }
            } else {
                index2 = 100
            }

            sequenciaPossivel = item1 && item2 && item3
        }

    }

    if (sequenciaPossivel) {
        return sequencia
    } else {
        return false
    }
}