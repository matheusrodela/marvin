

function primo(x){
    
    y=[]
    
    for (i=0;i<=x;i++){
        if (Number.isInteger(x/i))
        y.push(i)
    }
    if (y.length>2)
    return "Não"
    else
    return "Sim"
}