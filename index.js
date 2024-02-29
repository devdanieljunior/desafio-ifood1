//Declara variável para nome do herói
let herosName = "Lion ";

//Declara variável para contar XP
let herosXpAmount = 0;

//Matriz com os níveis de acordo com a quantidade de experiência do herói
//Nível, xpMin, xpMax
const level = [
    ["Ferro", 0, 1000],
    ["Bronze", 1001, 2000],
    ["Prata", 2001, 5000],
    ["Ouro", 5001, 7000],
    ["Platina", 7001, 8000],
    ["Ascensdente", 8001, 9000],
    ["Imortal", 9001, 10000],
    ["Radiante", 10001, 10003],
]

/*
console.log("Níveis dos heróis:");
console.log(level[0][0]);
console.log(level[1][0]);
console.log(level[2][0]);
console.log(level[3][0]);
console.log(level[4][0]);
console.log(level[5][0]);
console.log(level[6][0]);
console.log(level[7][0]);
*/

//Apresenta no console nome do herói
console.log("Nome do herói: " + herosName);

////Apresenta no console a string
console.log("Estamos avaliando seu herói! Aguarde...");

//Declara constantes para mensagens de saída
const message1 = "O Herói de nome ";
const message2 = "está no nível de ";
const message3 = "subiu para o nível ";

//loop que varre a matriz "level" do xpMin da linha 0 ao xpMax da linha 7
for(herosXpAmount; herosXpAmount >= level[0][1] && herosXpAmount < level[7][2]; herosXpAmount++) {

    //Verifica se o XP está entre os valores xpMin e xpMax da liha 0 da matriz 
    if(herosXpAmount >= level[0][1] && herosXpAmount < level[0][2]){

        //Apresenta no console o nível do herói de acordo com o range do herosXpAmount
        console.log(message1 + herosName + message2 + level[0][0]); 
    }

    if(herosXpAmount >= level[1][1] && herosXpAmount < level[1][2]){
        console.log(message1 + herosName + message3 + level[1][0]); 
    }

    if(herosXpAmount >= level[2][1] && herosXpAmount < level[2][2]){
        console.log(message1 + herosName + message3 + level[2][0]); 
    }

    if(herosXpAmount >= level[3][1] && herosXpAmount < level[3][2]){
        console.log(message1 + herosName + message3 + level[3][0]); 
    }

    if(herosXpAmount >= level[4][1] && herosXpAmount < level[4][2]){
        console.log(message1 + herosName + message3 + level[4][0]); 
    }

    if(herosXpAmount >= level[5][1] && herosXpAmount < level[5][2]){
        console.log(message1 + herosName + message3 + level[5][0]); 
    }

    if(herosXpAmount >= level[6][1] && herosXpAmount < level[6][2]){
        console.log(message1 + herosName + message3 + level[6][0]); 
    }

    if(herosXpAmount >= level[7][1]){
        console.log(message1 + herosName + message3 + level[7][0]); 
    }
}

