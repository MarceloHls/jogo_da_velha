document.onmousemove = e => moverSimbolo(e)

function moverSimbolo(e) {
    let cursor = document.querySelector('.cursor')
  
   if(larguraDatela() >= 920){
    cursor.style.display = 'block'
   }
   else{
    cursor.style.display = 'none'
       return
   }
    if (e) {


        cursor.style.left = `${e.clientX + 20}px`
        cursor.style.top = `${e.clientY + 20}px`
    }

    if (vez == 'jogador-1') {
        cursor.innerText = jogadores.jogador1.simbolo
    } else {
        cursor.innerText = jogadores.jogador2.simbolo
    }

}

function larguraDatela(){
    return window.innerWidth
}