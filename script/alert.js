function alertar(texto) {
    setTimeout(()=>{
        let alert = document.querySelector('.ocupar-tudo')
        let msg = document.querySelector('.ocupar-tudo .alert p')
    
        alert.style.display = 'flex'
        msg.innerText = texto

    },500 )

}
function ok(){
    let alert = document.querySelector('.ocupar-tudo')
    alert.style.display = 'none'

}