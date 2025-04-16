function calcular(){
    const anoNascimento = parseInt(window.document.getElementById('txtAnoNascimento').value)
    const sexo = window.document.getElementById('radSexo').value
    const resultado = window.document.getElementById('divResultado')
    const dataAtual = Date.getFullYear()
    const idade = dataAtual - anoNascimento

     if (sexo == "Masculino") {
        resultado.innerHTML = `Você tem ${idade} anos e é um homem`
        
        } else if (idade >= 18) {
            resultado.innerHTML = `Você tem ${idade} anos e é uma mulher`
        }
}

    
