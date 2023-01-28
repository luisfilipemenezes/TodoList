let contadorLimpar = 0
let tamanhoLista = 0


function limpar (){

    if(contadorLimpar == 0){
        contadorLimpar++
        const limpar  = document.querySelector('ul')
        limpar.innerHTML = ""
    }

}


function adcionar() {
    
    if(tamanhoLista<4){

        tamanhoLista++
            
            ul = document.querySelector("ul")
            let li = document.createElement("li")

            li.innerHTML = document.querySelector(".atividade").value
            texto = document.querySelector(".atividade")

            ul.appendChild(li)
            texto.value = ""
    }else{

        let add =  document.querySelector('.adcionar')
        add.innerHTML = "MAXIMO DE TAREFAS ADCIONADAS"
        
    }
    
}

let limpando = document.querySelector(".clear").addEventListener("click", ()=>{
        contadorLimpar = 0
        limpar()
})

let adcionando = document.querySelector(".atividade").addEventListener("keypress", (e)=>{
    if(e.key == "Enter"){
        adcionar()
    }
})



