document.querySelector('#calcular2').addEventListener('click', () =>{
    const n1 = parseInt(document.querySelector('#numero1').value);
    const n2 = parseInt(document.querySelector('#numero2').value);
    const op2 = document.querySelector('#op').value;
    let r;
    if(op2 == '+'){
        r = n1 + n2;
    }else if( op2 == '-'){
        r = n1 - n2;
    }else if(op2 == '*'){
        r = n1 * n2;
    }else if(op2 == '/'){
        r = n1 / n2;
    }
    document.querySelector('#r2').innerHTML = r;
});