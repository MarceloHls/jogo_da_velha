function mostraQuemJoga(){
    let jogador1 = document.querySelector('.jogador-1')
    let jogador2 = document.querySelector('.jogador-2-PC')
    if(vez == 'jogador-1'){
        adicionarClasse('vez',false,false,jogador2)
        removerClasse('vez',false,false,jogador1)
    }else {
        adicionarClasse('vez',false,false,jogador1)
        removerClasse('vez',false,false,jogador2)
    }
}