let num1Calculo = ''
let num2Calculo = ''
let operador = ''
let resultado = ''
let ponto = window.document.getElementById('virgula')
let parenDiretito = window.document.getElementById('parenDireto')
let parenEsquerdo = window.document.getElementById('parenEsquerdo')
let limpar = window.document.getElementById('c')
let limparTudo = window.document.getElementById('ce')
let menos = window.document.getElementById('menos')
let mais = window.document.getElementById('mais')
let multi = window.document.getElementById('multiplicacao')
let divisao = window.document.getElementById('divisao')
let igual = window.document.getElementById('igual')
let display = window.document.getElementById('divDisplay')
let teclado = window.document.getElementById('teclado')




teclado.addEventListener('click', digitacao)
limparTudo.addEventListener('click', limparTudoFunc)
igual.addEventListener('click',resultadoFunc)
limpar.addEventListener('click', limparFunc)
ponto.addEventListener('click', virgulaFunc)

function digitacao(event){

if(event.target.classList.contains('numero')){
        const valor = event.target.value
        if (resultado !== ''){
            num1Calculo = valor
            num2Calculo = ''
            operador = ''
            resultado = ''           
            display.innerHTML = num1Calculo + operador + num2Calculo
            
        } else if (operador !== ''){
                num2Calculo += valor
                display.innerHTML = num1Calculo + operador + num2Calculo
                } else {
                num1Calculo += valor
                display.innerHTML = num1Calculo + operador + num2Calculo
                }
            

    } else if (event.target.classList.contains('operador')){
        operador = event.target.value
        if (resultado !== ''){
            num1Calculo = resultado
            resultado = ''
            num2Calculo = ''
            display.innerHTML = num1Calculo + operador + num2Calculo
        } else if (num1Calculo == ''){
            num1Calculo = 0
            display.innerHTML = num1Calculo + operador + num2Calculo
        } else {
            display.innerHTML = num1Calculo + operador + num2Calculo  
        }
        
    }
}

function limparTudoFunc(){
    display.innerHTML = ''
    num1Calculo = ''
    num2Calculo = ''
    num3Calculo = ''
    operador = ''
    resultado = ''  
    display.innerHTML = 0

}

function resultadoFunc(){
    
    let num1Real = Number(num1Calculo)
    let num2Real = Number(num2Calculo)

    if (operador == "+") {
        resultado = num1Real + num2Real
    } else if(operador == "-"){
        resultado = num1Real - num2Real
    } else if (operador == "*"){
        resultado = num1Real * num2Real
    } else if (operador == "/") {
        resultado = num1Real / num2Real
    }
    
    display.innerHTML = resultado
    
}

function limparFunc(){

    if(num2Calculo !== ''){
        num2Calculo = num2Calculo.slice(0, -1);
    } else if (operador !== ''){
        operador = ''
    } else if (num1Calculo !== ''){
        num1Calculo = num1Calculo.slice(0, -1)
    }
    display.innerHTML = num1Calculo + operador + num2Calculo

}

function virgulaFunc(){
    if(num2Calculo !== ''){
        num2Calculo += "."
    } else if (operador !== ''){
        num2Calculo = "0."
    } else if (num1Calculo !== ''){
        num1Calculo += "."
    }
    display.innerHTML = num1Calculo + operador + num2Calculo
}