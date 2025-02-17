const prompt = require('prompt-sync')();

let saldobancario = 1000;
let saldonobolso = 50;
let opcao

do{
    console.log("=== Menu ===");
    console.log("1. Ver Saldo");
    console.log("2. Sacar");
    console.log("3. Depositar");
    console.log("4. Sair");

    opcao = prompt("Escolhe sua opção de 1-4:")

    switch(opcao){

    case "1":
    console.log(saldobancario)
    break;

    case "2":
    
        let quantosacar = parseInt(prompt("Quanto vc quer sacar?"))
        if(saldonobolso > 0){
        saldobancario -= quantosacar;
        saldonobolso += quantosacar;
        console.log("voce sacou " + quantosacar)
    }else{
        console.log("operacao invalida")
    }
    break;

    case "3":

        let quatdepo = parseInt(prompt("quanto vc quer depositar?"))
        if(quatdepo>0){
            saldobancario += quatdepo;
            saldonobolso += quatdepo;
        console.log("vc depositou "+ quatdepo)
    }else{
        console.log("operacao invalida")
    }
    break;

    case "4":
        console.log("saia imediatamente seu verme imundo")
    break;

    default:
    console.log("operacao invalida");
    break;
}
}while(opcao !== "4");
