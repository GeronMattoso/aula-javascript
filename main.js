//-------------------------------------------------

/*var nome = "Géron Mattoso";
var idade = 29;
var idade2 = 10;

var frase = "japao é o melhor tipo do mundo";

alert("Bem Vindo a página de: " + nome + "\nIdade: " + idade);

alert("Soma das idades: " + (idade + idade2));
alert("Concatena idades: " + idade + idade2);

console.log(nome);
console.log(idade);
console.log(idade2);
console.log(idade+idade2);

console.log(frase.replace("japao","Brasil"));
alert(frase.replace("japao","Brasil"));*/

//-------------------------------------------------
/*var lista = ["maça", "pêra", "laranja"];

lista.push("uva");//coloca no ultimo
lista.pop();//tira o ultimo
//length tamanho
//reverse inverte
//toString vira string
//join coloca separação nos elementos

console.log(lista[1]+"\n\n");

//alert(lista[2]);*/

//-------------------------------------------------

/*var fruta = {nome:"maça", cor:"verde"};

console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);*/

//-------------------------------------------------

/*var frutas = [{nome:"maça", cor:"verde"}, {nome:"uva", cor:"roxa"},{nome:"laranja", cor:"laranja"}];
console.log(frutas[2].nome);*/

//-------------------------------------------------

/*var idade = prompt("Qual sua Idade?");


if (idade >= 18){
    console.log('Maior de Idade \n');
}else{
    console.log('Menos de Idade \n');
}*/

//-------------------------------------------------
/*
var count = 0;

while (count <= 7){
    console.log(count);
    count++;
}

for (let count = 0; count <= 7; count++) {
    console.log(count);
}

var d = new Date();
alert(d.getDay());
*/

//-------------------------------------------------
/*function soma(n1, n2) {
    return n1+n2;
}

function validaIdade(idade) {
    var valida;
    if(idade>=18){
        valida = true;
    }else{valida = false;}
    return valida;
}


var idade = prompt("idade");

console.log(validaIdade(idade));*/
//-------------------------------------------------

function botao(){
    //alert('botao ok');
    document.getElementById("agradecimento").innerHTML = "<b>Github</b>";
    
}

function redirecionar() {
    window.open("https://github.com/GeronMattoso/"); // outra aba
    //window.location.href = "https://github.com/GeronMattoso/"; // mesma aba
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("mouse over");
    elemento.innerHTML ="Obrigado por passar o mouse";
}

function voltar(elemento) {
    //document.getElementById("mouseout").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML ="Passe o mouse";
}
function load() {
   //window.open("https://github.com/GeronMattoso/");
}
function change(elemento) {
    console.log(elemento.value);
}