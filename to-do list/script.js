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

if (    divLista.innerText == "Adicione um item..."){
    divLista.innerHTML= ''
}

    if (inputAdicionar.value.trim() !== '') {
        array.push(inputAdicionar.value);

        let textConcluido = inputAdicionar.value

        let novaLinha = document.createElement('p');
        novaLinha.className = 'linhaItem'
        novaLinha.id = inputAdicionar.value
        novaLinha.value = inputAdicionar.value
        divLista.appendChild(novaLinha);
        
        let novoCheck = document.createElement('input');
        novoCheck.type = 'checkbox'
        novoCheck.className = 'checkbox'
        novoCheck.addEventListener('click', check)
            

        novaLinha.appendChild(novoCheck);

        let novoText = document.createElement('text');
        novoText.className = 'text'
        novaLinha.appendChild(novoText);
        novoText.innerHTML = ' '+inputAdicionar.value;

        let novoBotao = document.createElement('button')
        novoBotao.className = 'rmvButton'
        novoBotao.innerHTML = 'Remover'
        novoBotao.type = 'button'
        novoBotao.addEventListener('click', function() {
            divLista.removeChild(novaLinha);
        })
        novaLinha.appendChild(novoBotao);


    }
    inputAdicionar.value = '';

    inputAdicionar.focus();


}



function check(){
    let textConcluido = this.parentNode.id
    let novaLinha = this.parentNode
    let novoCheck = this
    let novoText = this.nextSibling
    let novoBotao = this.nextSibling.nextSibling
    let divListaConcluida = window.document.getElementById('listaConcluida')
    let divLista = window.document.getElementById('lista')
    

    divLista.removeChild(novaLinha); //remove a linha da lista original
                
    let novaLinhaConcluida = document.createElement('p');
    novaLinhaConcluida.className = 'linhaItem'
    novaLinhaConcluida.id = inputAdicionar.value

    divListaConcluida.appendChild(novaLinhaConcluida);
    
    let novoCheckConcluido = document.createElement('input');
    novoCheckConcluido.type = 'checkbox'
    novoCheckConcluido.className = 'checkbox'
    novoCheckConcluido.checked = true
    novoCheckConcluido.addEventListener('click', function() {
        
        divListaConcluida.removeChild(novaLinhaConcluida);

        let novaLinha = document.createElement('p');
        novaLinha.className = 'linhaItem'
        novaLinha.id = textConcluido
        novaLinha.value = textConcluido
        divLista.appendChild(novaLinha);

        let novoCheck = document.createElement('input');
        novoCheck.type = 'checkbox'
        novoCheck.className = 'checkbox'

        novaLinha.appendChild(novoCheck);

        let novoText = document.createElement('text');
        novoText.className = 'text'
        novoCheck.addEventListener('click', check)

        novaLinha.appendChild(novoText);
        novoText.innerHTML = ' '+textConcluido;

        let novoBotao = document.createElement('button')
        novoBotao.className = 'rmvButton'
        novoBotao.innerHTML = 'Remover'
        novoBotao.type = 'button'
        novoBotao.addEventListener('click', function() {
            divLista.removeChild(novaLinha);
        })
        novaLinha.appendChild(novoBotao);


    })
    novaLinhaConcluida.appendChild(novoCheckConcluido);

    let novoTextConcluido = document.createElement('text');
    novoTextConcluido.className = 'textConcluido'
    novaLinhaConcluida.appendChild(novoTextConcluido);
    novoTextConcluido.innerHTML = ' '+textConcluido;

    let novoBotaoConcluido = document.createElement('button')
    novoBotaoConcluido.className = 'rmvButton'
    novoBotaoConcluido.innerHTML = 'Remover'
    novoBotaoConcluido.type = 'button'
    novoBotaoConcluido.addEventListener('click', function() {
        divListaConcluida.removeChild(novaLinhaConcluida);
    })
    novaLinhaConcluida.appendChild(novoBotaoConcluido);
    }   



