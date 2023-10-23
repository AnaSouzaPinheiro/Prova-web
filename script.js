const horasTrabalhas = document.querySelector(".horasTrabalhas");
const valorHora = document.querySelector(".valorHora");
const percent = document.querySelector(".percent");
const resultHoras = document.querySelector(".resultHoras");
const resultValorHoras = document.querySelector(".resultValorHoras");
const resultSB = document.querySelector(".resultSB");
const resultDesconto = document.querySelector(".resultDesconto");
const resultSL = document.querySelector(".resultSL");
const calcular = document.querySelector(".calcular");
const novoCalculo = document.querySelector(".novoCalculo");
const telaResultado = document.querySelector(".resultado");
const salarioArea = document.querySelector(".salarioArea");
let SB;
let SL;
let PD;
let TD;
let HT;
let VH;

const calculaSalarioBruto = () => {
  HT = horasTrabalhas.value;
  VH = valorHora.value;
  SB = HT * VH;

  resultSB.textContent = SB;
};

const calculaDesconto = () => {
  PD = percent.value;
  TD = (PD / 100) * SB;

  resultDesconto.textContent = TD;
};

const calculaSalarioLiquido = () => {
  SL = SB - TD;

  resultSL.textContent = SL;
};

//limpa os campos
const clear = () => {
  horasTrabalhas.value = "";
  valorHora.value = "";
  percent.value = "";
};

//Apresentar os resultados em duas telas lado a lado, quando a tela for maior que 600px
calcular.addEventListener("click", function () {
  telaResultado.style.display = "flex";
  salarioArea.style.marginRight = "10px";
  calculaSalarioBruto();
  calculaDesconto();
  calculaSalarioLiquido();
  resultHoras.textContent = HT;
  resultValorHoras.textContent = VH;
});

novoCalculo.addEventListener("click", function () {
  telaResultado.style.display = "none";
  clear();
});

//Apresentar os resultados em uma única tela, quando a tela for menor que 600px
const tamanhoTela = window.innerWidth;
if (tamanhoTela < 600) {
  calcular.addEventListener("click", function () {
    salarioArea.classList.add("hide-salarioArea");
    telaResultado.style.display = "flex";
    salarioArea.style.marginRight = "0px";
  });

  novoCalculo.addEventListener("click", function () {
    telaResultado.style.display = "none";
    salarioArea.classList.remove("hide-salarioArea");
    clear();
  });
}
