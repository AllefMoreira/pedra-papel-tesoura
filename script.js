var elementos = document.querySelectorAll('.player-option div > img')
const enemyOption = document.querySelectorAll('.enemy-option div')
var playerOpt = ""
var inimigoOpt = ""

function validarVitoria(){


    let vencedor = document.querySelector('.vencedor')

    if(playerOpt == inimigoOpt){
        
        vencedor.innerHTML = 'Empate'
    } else{

        if(playerOpt == 'scisor'){
            if(inimigoOpt == 'paper'){
                vencedor.innerHTML = 'Jogador Venceu'
            }
            else{
                vencedor.innerHTML = 'Computador Venceu'
            }
        } else if(playerOpt == 'rock'){
            if(inimigoOpt == 'scisor'){
                vencedor.innerHTML = 'Jogador Venceu'
            } else {
                vencedor.innerHTML = 'Computador Venceu'
            }
        } else if(playerOpt == 'paper') {
            if(inimigoOpt == 'rock'){
                vencedor.innerHTML = 'Jogador Venceu'
            } else{
                vencedor.innerHTML = 'Computador Venceu'
            }
        }
    }
}

function resetEnemy(){
    for(var i = 0; i < enemyOption.length; i++){
        enemyOption[i].childNodes[0].style.opacity = 0.3
    }
}

function inimigoJogar(){
    let rand = Math.floor(Math.random() * 3)
    
    resetEnemy()
    for(var i = 0; i < enemyOption.length; i++){
        if(i == rand){
            enemyOption[i].childNodes[0].style.opacity = 1
            inimigoOpt = enemyOption[i].childNodes[0].getAttribute('opt')
        }
    }
}



function resetOpacityPlayer(){
    for(var i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.3;
    }
}
    

for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click', (t)=>{
        resetOpacityPlayer()
        t.target.style.opacity = 1
        playerOpt = t.target.getAttribute('opt')

        inimigoJogar()
        validarVitoria();
    })
}