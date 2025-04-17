function calcular(){
    let num = parseInt(window.document.getElementById('number').value)
    let selectTabuada = window.document.getElementById('selectTabuada')
    

    selectTabuada.innerHTML = ''
    
    /*
    let numInicial = 0
    while(numInicial<=10){
        let item = document.createElement('option')
        item.text = `${num} x ${numInicial} = ${num*numInicial}`
        selectTabuada.appendChild(item)
        numInicial ++
    }
*/

for (numInicial = 0; numInicial <= 10; numInicial++) {
    let item = document.createElement('option');
    item.text = `${num} x ${numInicial} = ${num * numInicial}`;
    selectTabuada.appendChild(item);
}


//.innerHTML += num + `x` + numInicial + `=` +  <br>
    
}

    
