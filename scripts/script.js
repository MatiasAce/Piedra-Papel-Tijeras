
var computerChoose;


let computerPlay = () =>{
    var chosse = Math.floor((Math.random() * (3 - 1 + 1)) + 1);
    if (chosse == 1){
        return computerChoose = "Piedra";
    }else if(chosse == 2){
        return computerChoose = "Papel";
    }else if(chosse ==3){
        return computerChoose = "Tijera";
    }
}

var computer = computerPlay();

//var consta = document.getElementById("Player").value;*/
var jugada;

let playerPlay = (a) => {
    a = a.toLowerCase();

    if (a === "piedra"){
        return jugada = "Piedra";
    }

    if (a === "papel"){
        return jugada = "Papel";
    }

    if (a === "tijera"){
        return jugada = "Tijera";
    }

}

var playerSelection = jugada;

let play = () => {
    if (jugada === computerChoose){
        console.log("Es un empate");
    } else if (jugada != computerChoose){
        if (jugada === "Papel" && computerChoose === "Piedra"){
            console.log("Ganaste la computadora elijio: " + computerChoose);
        } else if (jugada === "Papel" && computerChoose === "Tijera"){
            console.log("Perdiste la computadora elijio: " + computerChoose);
        } else if (jugada === "Piedra" && computerChoose === "Tijera"){
            console.log("Ganaste la computadora elijio: " + computerChoose);
        } else if (jugada === "Piedra" && computerChoose === "Papel"){
            console.log("Perdiste la computadora elijio: " + computerChoose);
        } else if (jugada === "Tijera" && computerChoose === "Piedra"){
            console.log("Perdiste la computadora elijio: " + computerChoose);
        } else if (jugada === "Tijera" && computerChoose === "Papel"){
            console.log("Ganaste la computadora elijio: " + computerChoose);
        }
        

    }

    
}