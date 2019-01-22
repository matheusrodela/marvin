

function por42(x,y){
    x= (Math.floor(x/42)+1)*42+42
    
    if (x<=y){
        return x
    }
    else{
        console.log ("Não encontrado")
        return false
    }
}
