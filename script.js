// Automação do botão resultado

// Carne - 400gr por pessoa + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/água - 1000 ml por pessoa + 6 horas 1500 ml

// crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Caculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);

    resultado.innerHTML = `<br><br><h2 class="result-info"><FONT COLOR = white>Resultado:</h2>`;

    
    resultado.innerHTML += 
    `<div id="meat" class="result-block"><img src="./assets/bbq.png">
    <p>${qdtTotalCarne / 1000} Kg de Carne</p>
    </div>`;

    resultado.innerHTML += 
    `<div class="result-block"><img src="./assets/beer.png">
    <p>${Math.ceil(qdtTotalCerveja / 355)} Latas de Cerveja</p></div>`;

    resultado.innerHTML += 
    `<div id="beer" class="result-block"><img src="./assets/bottle.png">
    <p>${Math.ceil(qdtTotalBebidas / 2000)} Garrafas de 2l de Bebidas</p></div>`;

    resultado.innerHTML +=
    `<div class="result-block" id="infoIcon"><img src="./assets/infoIcon.png">`

    // MODAL
    //  Get modal element
    var modal = document.getElementById('simpleModal');
    // Get open modal button
    var infoIcon = document.getElementById('infoIcon');
    // Get close button
    var closeBtn = document.getElementsByClassName('closeBtn')[0];

    // Listen for open click
    infoIcon.addEventListener('click', openModal);

    // Listen for close click
    closeBtn.addEventListener('click', closeModal);
    // Listen for outside click
    window.addEventListener('click', outsideClick);

    // Function to open modal
    function openModal(){
        modal.style.display = 'block';
    }

    // Function to close modal
    function closeModal(){
        modal.style.display = 'none';
    }

    // Function to close modal if outside click
    function outsideClick(e){
        if(e.target == modal){
        modal.style.display = 'none';
        }
    }
}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function bebidasPP(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}


// POP UP SPOTIFY
document.getElementById('button').addEventListener('click',
function(){
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click',
function(){
    document.querySelector('.bg-modal').style.display = 'none';
});