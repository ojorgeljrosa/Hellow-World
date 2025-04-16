function calcular(){
    const anoNascimento = parseInt(window.document.getElementById('txtAnoNascimento').value)
    const sexo = window.document.getElementById('radMasculino').value
    const resultado = window.document.getElementById('divResultado')
    const dataAtual = new Date();
    const idade = dataAtual.getFullYear() - anoNascimento
    let img = window.document.getElementById('img')

     if (sexo == "Masculino") {
        resultado.innerHTML = `Você tem ${idade} anos e é um homem`
        img.src = 'https://img.freepik.com/fotos-premium/homem-adulto-consideravel-sorrindo_23-2148563511.jpg'
        
        } else if (idade >= 18) {
            resultado.innerHTML = `Você tem ${idade} anos e é uma mulher`
        }
}

    
