
let timer
let pc

document.querySelector('.p-p').onclick = () => inicioPlayer('player')
document.querySelector('.p-m').onclick = () => inicioPlayer('cpu')

const voltar = () => inicioPlayer('voltar')

const jogar = () => {
    const inicio = document.querySelector('.inicio')
    const game = document.querySelector('.game')
    game.style.opacity = 1
    animarDesaparecer(inicio)
    salvarNomes(pc)
    moverSimbolo()
}

function inicioPlayer(origem) {
    let opçoes = document.querySelector('.inicio .container .pages .opçoes')
    let dados = document.querySelector('.inicio .container .pages .dados')
    let playerTwo = document.querySelector('.inicio .container .pages .dados .playerTwo')
    let voltar = document.querySelector('.voltar')

    timer ? clearTimeout(timer) : ''

    switch (origem) {
        case 'player': {
            animarDesaparecer(opçoes, 0.2)
            aparecerElemeto(playerTwo, true)
            animarAparecer(dados, 0.6,'flex',100)
            animarAparecer(voltar,1,'block',100)
            pc = false
            PvsP = true
            break
        }
        case 'cpu': {
            animarDesaparecer(opçoes, 0.2)
            aparecerElemeto(playerTwo)
            animarAparecer(dados, 0.9,'flex',100)
            animarAparecer(voltar,1,'block',100)
            PvsP = false
            pc = 'Computador'
            break

        }
        case 'voltar': {
            animarDesaparecer(voltar, 0.2)
            animarDesaparecer(dados, 0.2)
            animarAparecer(opçoes, 0.9, 'flex',100)
            pc = false
            PvsP = true
            break
        }
    }

}

function aparecerElemeto(player, aparecer) {
    aparecer ? player.style.display = 'block' : player.style.display = 'none'

}

function animarAparecer(elemento, tempo, display, height, opacity) {
    elemento.style.transition = `opacity ${tempo}s,height ${tempo}s`
    elemento.style.display = display || 'block'
    elemento.style.opacity = opacity || 1
    elemento.style.height = height ? `${height}%` : `${50}%`
}

function animarDesaparecer(elemento, tempo = 0.5, display, height, opacity) {
    elemento.style.transition = `opacity ${tempo}s,height ${tempo}s`
    elemento.style.opacity = opacity || 0
    elemento.style.height = height || 0
    timer = setTimeout(() => {
        elemento.style.display = display || 'none'
    }, tempo * 1000)
}