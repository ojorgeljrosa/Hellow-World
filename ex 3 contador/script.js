function calcular(){
    let inicio = parseInt(window.document.getElementById('inicio').value)
    let fim = parseInt(window.document.getElementById('fim').value)
    let pulo = parseInt(window.document.getElementById('passo').value)
    let resultado = window.document.getElementById('divResultado')
    //let soma = inicio
    // Removed unused variable 'soma'


resultado.innerHTML = 'Contando...'

if (inicio < fim){
    for (let soma = inicio; soma <= fim; soma += pulo){
        if(soma<fim){
            resultado.innerHTML += `${soma} ➡`
            } else {resultado.innerHTML += `${soma} fim!`
            }
    }
} else {
    for (let soma = inicio; soma >= fim; soma -= pulo){
   
        if(soma>fim){
        resultado.innerHTML += `${soma} ➡`
        } else {resultado.innerHTML += `${soma} fim!`
        }
    }
}  
}


/*else {
    for (let soma = inicio; soma >= fim; soma -= pulo){
   
        if(soma>fim){
        resultado.innerHTML += `${soma} ➡`
        } else {resultado.innerHTML += `${soma} fim!`
        }
    }*/ 

