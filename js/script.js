const botaoIniciar = document.querySelector(".botaoIniciar")
botaoIniciar.addEventListener("click",()=>{
    let modalTimer = document.querySelector(".modalTimer")
    let display = window.getComputedStyle(modalTimer).display
    if (display === "none"){
        modalTimer.style.display = "flex"
    }
})

// -------- DAQUI PRA BAIXO SÓ TREVAS E ARREPENDIMENTOS...--------


// let botaoReset = document.querySelector(".botaoReset")


function reset(){

    
    let minutos = 25
    let segundos = 60

    let tempo = document.querySelector(".tempo")
    for (let i = 0; i < 60; i++){
    setTimeout(() => {

        
        tempo.innerHTML = `24:${i}`
        console.log(i)
        }, 1000*i)

        }
    

}
