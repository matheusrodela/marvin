

function pares(num1,num2){
    var x1 = num1 / 2;
    var x2 = num2 / 2;
    if (x1 == Math.round(x1) && x2 == Math.round(x2)) {
        return "Os n�meros s�o pares";
    }
    else {
        return "Os n�meros n�o s�o pares";
    }
}
