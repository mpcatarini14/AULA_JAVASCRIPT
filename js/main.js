/*var nome="KUNTA KINTÊ";
var a="olá ";
alert("meu nome é "+nome);
var frase="Pitbull é o cachorro mais bravo do mundo";

console.log(nome);
console.log(a);
console.log(frase.replace("Pitbull", "Pischer"));

var lista=["pedro", "visitou", "o canadá"];
lista.push(" sozinho");
console.log(lista[0]+" "+lista[1]+" "+lista[2]+lista[3]+" em outubro de 2021");
console.log(lista.toString()[4])
console.log(lista.join(" - "));

var lista2=["1", "2", "3"];
lista2.pop();
console.log(lista2)*/
/*
var dicionario = {nome:"xico", cpf:"022.222.222.21"};//isso é uma estrutura do tipo registro
console.log(dicionario.nome+" tem cpf:"+dicionario.cpf);

//legal pra criar cadastros
var cadastro = [{nome:"xico", cpf:"46404444566"}, {nome:"venisha", cpf:"11111444566"}, {nome:"peter", cpf:"4640447776"}];
alert(cadastro[1].nome+" cujo cpf:"+cadastro[1].cpf+" não está em nosso banco de dados");

var idade = prompt("Qual a sua idade?");
if(idade >=18){
    alert("Bem-vido, você já pode ser preso!!!");
}else{
    alert("Você não está autorizado a acessar este conteúdo!!!");
};
*/

/*
var second = 1;
while(second <= 10){
    var answer = prompt("*10 tentativas* 'quanto é 2x2(1+1)/2-1:'");
    if(answer == 3){
        alert("Parabéns você acertou!!!");
        second = 11;
    }else{
        alert("Errouuu, "+ (10-second) +" tentativas restantes");
    }
    second++;
}
*/
/*
for(count = 1; count <=10; count++){
    alert("clique mais "+(10-count)+" vezes para acessar");
};
*/

/*
var data = new Date();
alert("São "+ data.getHours() +"h:"+data.getMinutes()+"min em Manaus");
*/

/* fórmula quadrática
function bhaskara(a, b, c){
    var delta = (b)**2-(4*a*c);
    var Xi = (-b+delta)/2*a;
    var Xii= (-b-delta)/2*a;
    return "x1 = "+Xi+" e x2 = "+Xii;
}
console.log(bhaskara(1, -3, 2));
*/
/*
function setReplace(frase, nome, othernome){
    return frase.replace(nome, othernome);
}
alert(setReplace("VAI voando","voando","andando"));
*/
/*
function validarIdade(idade){
    var validar;
    if(idade >=18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}
idade = prompt("DIGITE SUA IDADE:");
alert(validarIdade(idade));

function radio(frase){ 
    if(frase=='Correta'){
        document.getElementById("resposta").innerHTML = "<b id='certo'>Acertou</b>";
    }else{
        document.getElementById("resposta").innerHTML = "<b id='errado'>ERROU</b>";
    }
}
*/
function botao(){
    document.getElementById("agradecimento").innerHTML = "<b> Obrigado por clicar</b>";
}
function redirecionar(){
    window.open("https://www.google.com/");
}
/* esse aqui funciona com umas falhas sem o uso do this
function trocar(){
    document.getElementById("mousemov").innerHTML = "VC ESTÁ HACKKEADO!!!";
}
function voltar(){
    document.getElementById("mousemov").innerHTML = "passe o mouse aqui";
}
*/
//esse debaixo permite o uso no html sem necessidade do ID
function trocar(elemento){
    elemento.innerHTML = "Voce passou o mouse";
}
function voltar(elemento){
    elemento.innerHTML = "passe o mouse aqui";
}
function load(){
    alert("página carregada");
}