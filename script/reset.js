function reinicarPartida() {
    apagarTabuleiro(0)
}
function reinicarJogo() {
    let inicio = document.querySelector('.inicio')
    
    zerarPontuação()
    LimparNomes()
    reinicarPartida()
    animarAparecer(inicio,500,'flex',100,1)
  
}

function zerarPontuação() {
    jogadores.jogador1.pontos = 0
    jogadores.jogador2.pontos = 0
    adicionarPontos()
}

function LimparNomes() {
    jogadores.jogador1.nome = 'Jogador-1'
    jogadores.jogador2.nome = 'Jogador-2'
}