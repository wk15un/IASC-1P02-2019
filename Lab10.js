function add() {
    var x = Number(document.getElementById('x').value);
    var y = Number(document.getElementById('y').value);

    document.getElementById('result').innerHTML = x+y;
    return false;
}

function subtract(){
    var x = Number(document.getElementById('x').value);
    var y = Number(document.getElementById('y').value);

    document.getElementById('result').innerHTML= x-y;

}

function multiply(){
    var x = Number(document.getElementById('x').value);
    var y = Number(document.getElementById('y').value);

    document.getElementById('result').innerHTML= x*y;
}

function divide(){
    var x = Number(document.getElementById('x').value);
    var y = Number(document.getElementById('y').value);

    document.getElementById('result').innerHTML= x/y;
}

document.getElementById('go').addEventListener('click', add);
document.getElementById('no').addEventListener('click', subtract);
document.getElementById('do').addEventListener('click', multiply);
document.getElementById('so').addEventListener('click', divide);
