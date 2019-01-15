

function pares(num1,num2){
    var x1 = num1 / 2;
    var x2 = num2 / 2;
    if (x1 == Math.round(x1) && x2 == Math.round(x2)) {
        return "Os números são pares";
    }
    else {
        return "Os números não são pares";
    }
}
