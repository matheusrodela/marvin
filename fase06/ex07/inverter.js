

function inverter (x){
    y= ""
     if (typeof(x)=="string"){
        for (i=0;i<x.length;i++)
          y+=x[x.length-i-1]
        return y}
    else 
        return x.reverse()
}
