let array = []

function adicionar(){
    let num = parseInt(window.document.getElementById('number').value)
    let inputNum = window.document.getElementById('number') 
    let selectTabuada = window.document.getElementById('selectTabuada')
    let testeArray = window.document.getElementById('testeArray')
    
if (inputNum.value == ''){
    window.alert("oba")
} else {
    let item = document.createElement('option');
    item.text = `Valor ${num} adicionado`;
    selectTabuada.appendChild(item);
    inputNum.value = ''
    array.push(num)
    testeArray.innerHTML = array
    inputNum.focus()
}

}
function calcular(){

    let soma = 0
    let media = 0
    let tamanho = array.length
    let maior = array[0]
    let menor = array[0]

    testeArray.innerHTML = ''

    for (let i = 0; i < array.length; i++){
            soma += array[i] 
            if (array[i]>maior){
                maior = array[i]}
            if (array[i]<menor){
                menor = array[i]
            }
    }

    media = (soma/array.length).toFixed(2)

    //menor = [...array].sort((a, b) => a - b);

    //maior = [...array].sort((a, b) => b - a);

    testeArray.innerHTML = `O total de números é ${array.length} </br> A soma dos numeros é ${soma}.<br>A média dos numeros é ${media}.<br>O maior dos numeros é ${maior}.<br>O menor dos numeros é ${menor}.<br>`
}

//media = soma/array.length

//Ao todo temos array.length numeros cadastrados

// o maior número informado foi 

// O somatório dos valores foi

// A média dos valores é 


//.innerHTML += num + `x` + numInicial + `=` +  <br>
    

    
