//instancia o objeto botao
const btnTrocaCor = document.getElementById("trocaCor");
let caixaTexto = document.getElementById('caixa');
 
//evento de click
btnTrocaCor.addEventListener("click", () => {

//captura o nome do conteúdo
    let caixaTexto = document.getElementById('caixa');  
   
//valida o nome da cor
if( caixaTexto.className === "verde"){
        caixaTexto.classList.add('amarelo');
        caixaTexto.classList.remove('verde');
 }else{
        caixaTexto.classList.add('verde');
        caixaTexto.classList.remove('amarelo');
 }
   
    //exibe no console
    console.log(caixaTexto.className);
});
 
//troca texto
const btnTrocaTexto = document.getElementById("trocaTexto");
btnTrocaTexto.addEventListener("click", () => {
    if(caixaTexto.innerText === "Banana"){
    document.getElementById("caixa").innerHTML = "Limão";
    }else{document.getElementById("caixa").innerHTML = "Banana"
    }
});
 
//soma dos valores
const btnSoma = document.getElementById("somar");
btnSoma.addEventListener("click", () => {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let soma = parseInt(numero1) + parseInt(numero2);
    console.log(soma);
});
 
//adiciona bolinhas
const btnBolinhas  = document.getElementById("addBolinhas");
let total = 0;
let bolinhas ="";
let bola = '<div class="bolinha"></div>';
 
btnBolinhas.addEventListener("click", () => {
total = total + 1;
bolinhas="";
for (let index = 0; index < total; index++){
bolinhas = bolinhas + bola;
 
}
document.getElementById("agrupaBolinhas").innerHTML = bolinhas;
 
 
});
 
//localização
const btnLocalizar = document.getElementById("localiza");
btnLocalizar.addEventListener("click", () =>{
    //função para exibir a posição
    function showPosition(showPosition) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
 
        console.log( "Latitude: " + latitude + "Longitude: " + longitude);
    }
    let coordenadas = navigator.geolocation.getCurrentPosition(showPosition);
});