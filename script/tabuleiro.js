const item = document.querySelectorAll('.item').forEach(elemento => {
    elemento.onclick = () => inicioGame(elemento)


})
let vez = 'jogador-1'
let jogadas = 0
let PvsP = true
let ganhador = false
let liberar = true

function inicioGame(elemento) {
    moverSimbolo()
    if (PvsP) {
        colocarXeY(elemento)
    } else {
        jogadorVsMaquina(elemento)
    }
}

function colocarXeY(elemento) {
    if(!liberar){
        return
    }
    
    console.log("colocarXeY")

    let valor = elemento.getAttribute('valor')

    if (valor == 0) {
        switch (vez) {
            case 'jogador-1': {
                elemento.innerText = jogadores.jogador1.simbolo
                elemento.setAttribute('valor', 10)
                vez = 'jogador-2'
                jogadas++
                break
            }
            case 'jogador-2': {
                elemento.innerText = jogadores.jogador2.simbolo
                elemento.setAttribute('valor', 100)
                vez = 'jogador-1'
                jogadas++
                break
            }
        }
       
    }

    mostraQuemJoga()
    verificarCombinações()
}

let items = []
for (let index = 1; index <= 9; index++) {
    let item = document.getElementById(`item-${index}`)

    items.push(item)


}


function getCombinações() {
    console.log("getCombinações")

    let combinações = {
        h1: [items[0].getAttribute('valor'), items[1].getAttribute('valor'), items[2].getAttribute('valor')],
        h2: [items[3].getAttribute('valor'), items[4].getAttribute('valor'), items[5].getAttribute('valor')],
        h3: [items[6].getAttribute('valor'), items[7].getAttribute('valor'), items[8].getAttribute('valor')],
        v1: [items[0].getAttribute('valor'), items[3].getAttribute('valor'), items[6].getAttribute('valor')],
        v2: [items[1].getAttribute('valor'), items[4].getAttribute('valor'), items[7].getAttribute('valor')],
        v3: [items[2].getAttribute('valor'), items[5].getAttribute('valor'), items[8].getAttribute('valor')],
        c1: [items[0].getAttribute('valor'), items[4].getAttribute('valor'), items[8].getAttribute('valor')],
        c2: [items[2].getAttribute('valor'), items[4].getAttribute('valor'), items[6].getAttribute('valor')]
    }
    return combinações
}

function verificarCombinações() {
    
    console.log("verificarCombinações")

    let combinações = getCombinações()
    let valoresCombições = Object.values(combinações)

    let somaValoresCombinações = valoresCombições.map(combinação => somarArray(combinação))


    somaValoresCombinações.forEach(combinação => {
        if (combinação == 300) {
            jogadores.jogador2.pontos++
            ganhador= true
            liberar = false
            alertar(`${jogadores.jogador2.nome} ganhou partida.`)
            adicionarPontos()            
            setTimeout(() => {
                apagarTabuleiro()
            }, 1000)



        } else if (combinação == 30) {
            jogadores.jogador1.pontos++
            ganhador= true
            liberar = false
            alertar(`${jogadores.jogador1.nome} ganhou partida.`)
            
            adicionarPontos()
            setTimeout(() => {
                apagarTabuleiro()
            }, 1000)





        }
    })


    setTimeout(() => {
        empate()
    }, 500);


}

function somarArray(e) {
    return e.reduce((inicio, novo) => Number(inicio) + Number(novo))
}


function apagarTabuleiro(tempo = 500) {
    console.log("apagarTabuleiro")
    ganhador = false
    jogadas = 0
    setTimeout(() => {
        items.forEach(item => {
            item.setAttribute('valor', 0)
            item.setAttribute('responsavel', '')
            item.innerText = ''
            liberar = true
        })

    }, tempo);

}
function adicionarPontos() {
    console.log("adicionarPontos")
    let jogador1 = document.querySelector('.jogador-1 .pontos')
    let jogador2 = document.querySelector('.jogador-2-PC .pontos')

    jogador1.innerText = jogadores.jogador1.pontos
    jogador2.innerText = jogadores.jogador2.pontos
}

function empate() {
    if (jogadas == 9 && !ganhador) {
        alertar('Empate.')
        
        setTimeout(()=>{
            apagarTabuleiro()
            
        },600)
        
        jogadas = 1
    }

}