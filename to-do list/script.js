let botaoAdicionar = window.document.getElementById('botaoAdicionar')
let inputAdicionar = window.document.getElementById('inputAdicionar')
//let linhas = window.document.getElementsByClassName('linhaItem')
let divLista = window.document.getElementById('lista')
let divListaConcluida = window.document.getElementById('listaConcluida')

let array = []

botaoAdicionar.addEventListener('click', adicionar)
window.document.body.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionar()
    }
})

function adicionar(){

    if (inputAdicionar.value.trim() !== '') {
        array.push(inputAdicionar.value);

        let novaLinha = document.createElement('p');
        novaLinha.className = 'linhaItem'
        novaLinha.id = inputAdicionar.value
        novaLinha.value = inputAdicionar.value
        divLista.appendChild(novaLinha);
        //window.document.getElementById(inputAdicionar.value).innerText = inputAdicionar.value
        
        let novoCheck = document.createElement('input');
        novoCheck.type = 'checkbox'
        novoCheck.className = 'checkbox'
        novoCheck.addEventListener('click', function() {

            let ui = window.document.getElementById(')
            
            divLista.removeChild(novaLinha); //remove a linha da lista original
                
            let novaLinhaConcluida = document.createElement('p');
            novaLinhaConcluida.className = 'linhaItem'
            novaLinhaConcluida.id = inputAdicionar.value

            divListaConcluida.appendChild(novaLinhaConcluida);
            
            let novoCheckConcluido = document.createElement('input');
            novoCheckConcluido.type = 'checkbox'
            novoCheckConcluido.className = 'checkbox'
            novoCheckConcluido.addEventListener('click', function() {
                //divLista.removeChild(novaLinhaConcluida);
            })
            novaLinhaConcluida.appendChild(novoCheckConcluido);

            let novoTextConcluido = document.createElement('text');
            novoTextConcluido.className = 'text'
            novaLinhaConcluida.appendChild(novoTextConcluido);
            novoTextConcluido.innerHTML = ' '+inputAdicionar.value;

            let novoBotaoConcluido = document.createElement('button')
            novoBotaoConcluido.className = 'rmvButton'
            novoBotaoConcluido.innerHTML = 'Remover'
            novoBotaoConcluido.type = 'button'
            novaLinhaConcluida.appendChild(novoBotaoConcluido);
            })
            

        novaLinha.appendChild(novoCheck);

        let novoText = document.createElement('text');
        novoText.className = 'text'
        novaLinha.appendChild(novoText);
        novoText.innerHTML = ' '+inputAdicionar.value;

        let novoBotao = document.createElement('button')
        novoBotao.className = 'rmvButton'
        novoBotao.innerHTML = 'Remover'
        novoBotao.type = 'button'
      
        novaLinha.appendChild(novoBotao);


    }
    inputAdicionar.value = '';

    inputAdicionar.focus();


}

/*
function adicionar(){
    let item = document.createElement('p')
    let texto = inputAdicionar.value
    let checkbox = document.createElement('input')

    checkbox.type = 'checkbox'
    checkbox.className = 'checkbox'
    checkbox.id = 'checkbox'
    let label = document.createElement('label')
    label.htmlFor = 'checkbox'
    label.innerHTML = texto
    let button = document.createElement('button')
    button.className = 'rmvButton'
    button.innerHTML = 'Remover'
    button.type = 'button'
    item.appendChild(checkbox)
    item.appendChild(label)
    item.appendChild(button)
    let lista = window.document.getElementById('lista')
    lista.appendChild(item)
    inputAdicionar.value = ''
    inputAdicionar.focus()
}
*/
 /*   
  novoBotao.addEventListener('click', function() {
            divLista.removeChild(novaLinha);
            array = array.filter(item => item !== inputAdicionar.value);
        });
*/
