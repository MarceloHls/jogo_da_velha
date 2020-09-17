const jogadores = {
    jogador1: {
        nome: '',
        pontos: 0,
        simbolo: 'X'
    },
    jogador2: {
        nome: '',
        pontos: 0,
        simbolo: 'O'
    }
}

function salvarNomes(pc) {
    const playerOne = document.querySelector('.playerOne input').value
    const playerTwo = document.querySelector('.playerTwo input').value

    jogadores.jogador1.nome = playerOne || 'Jogador-1'
    jogadores.jogador2.nome =  pc || playerTwo || 'Jogador-2'

    adicionarDados()
}

function adicionarDados() {
    const playerOneNome = document.querySelector('.jogador-1 .nome')
    const playerTwoNome = document.querySelector('.jogador-2-PC .nome')
    const playerOnesimbolo = document.querySelector('.jogador-1 .simbolo')
    const playerTwosimbolo = document.querySelector('.jogador-2-PC .simbolo')

    playerOneNome.innerText = jogadores.jogador1.nome
    playerTwoNome.innerText = jogadores.jogador2.nome
    playerOnesimbolo.innerText = jogadores.jogador1.simbolo
    playerTwosimbolo.innerText = jogadores.jogador2.simbolo




}

const playerOneSimbolos = document.querySelectorAll('.simbolo')

playerOneSimbolos.forEach(elemento => {
    let atributo = elemento.getAttribute('adicionar')
    elemento.onclick = () => {
        simbolo(elemento, atributo, 'p2')
    }

})

function simbolo(elemento, atributo) {
    removerClasse('selecionado', '.simbolo', true)
    adicionarClasse('selecionado', false, false, elemento)
    adicionarClasse('selecionado', `[valor=${atributo}]`, false)

    adicionarSimbolo(elemento, atributo)
}

function adicionarSimbolo(elemento,atributo) {
    let valor = elemento.getAttribute('valor')

    if (valor == 'p1-x' || valor == 'p1-o') {
        let jogador2 = document.querySelector(`[valor=${atributo}]`)
        jogadores.jogador2.simbolo = jogador2.innerText
        jogadores.jogador1.simbolo = elemento.innerText
        
      
    }else{
        let jogador1 = document.querySelector(`[valor=${atributo}]`)
        jogadores.jogador1.simbolo = jogador1.innerText
        jogadores.jogador2.simbolo = elemento.innerText
    }

    adicionarDados()
}


function adicionarClasse(classe, seletor, multiplos, ...elementos) {
    if (seletor) {
        if (multiplos) {
            let elementos = document.querySelectorAll(seletor)
            elementos.forEach(elemento => {
                elemento.classList.add(classe)
            })
        } else {
            let elemento = document.querySelector(seletor)
            elemento.classList.add(classe)
        }
        return
    }
    elementos.forEach(elemento => {
        elemento.classList.add(classe)

    })

}
function removerClasse(classe, seletor, multiplos, ...elementos) {
    if (seletor) {
        if (multiplos) {
            let elementos = document.querySelectorAll(seletor)
            elementos.forEach(elemento => {
                elemento.classList.remove(classe)
            })
        } else {
            let elemento = document.querySelector(seletor)
            elemento.classList.remove(classe)
        }
        return
    }
    elementos.forEach(elemento => {
        elemento.classList.remove(classe)

    })

}