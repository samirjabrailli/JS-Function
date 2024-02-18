// eyer daxil edilen reqem cutdurse retrun cut eks halda retrun tek

function eded(reqem){
    let kod = ""
    if(reqem %2 == 0){
        kod = "Reqem cut ededdir"
    }else{
      
        kod = "Reqem tek ededdir"
    }
    return kod
}

console.log(eded(24));

