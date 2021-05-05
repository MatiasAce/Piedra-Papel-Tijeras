let computerPlay = () =>{
    var chosse = Math.floor((Math.random() * (3 - 1 + 1)) + 1);
    if (chosse == 1){
        console.log("Piedra");
    }else if(chosse == 2){
        console.log("Papel");
    }else if(chosse ==3){
        console.log("Tijera")
    }
}