const botaoIniciar = document.querySelector(".botaoIniciar");
botaoIniciar.addEventListener("click", () => {
  let modalTimer = document.querySelector(".modalTimer");
  // let display = window.getComputedStyle(modalTimer).display
  // if (display === "none"){
  modalTimer.style.display = "flex";
});

// -------- DAQUI PRA BAIXO SÓ TREVAS E ARREPENDIMENTOS...--------

// let botaoReset = document.querySelector(".botaoReset")

const botaoIniciarTimer = document.querySelector(".botaoIniciarTimer");

botaoIniciarTimer.addEventListener("click", () => {

    let tempo = 1500;

let minutos = Math.floor(tempo/60)
let segundos = tempo % 60

const intervaloSegundos = setInterval(() => {
  tempo--;
  console.log("Passou 1 segundo!", tempo);
  
  if(tempo <=0){
    clearInterval(intervaloSegundos)
  }

}, 1000);


const intervaloMinutos = setInterval(()=>{
    minutos --
    console.log(minutos)

    if(minutos <= 0){
        clearInterval(intervaloMinutos)
    }
},60000)

});
