const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a principal causa do aquecimento global?",
        alternativas: [
            {
                texto: "Desmatamento",
                afirmacao: "afirmação"
            },
            {
                texto: "Uso de energias renováeis",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual é o principal gás reponsável pelo efeito estufa?",
        alternativas: [
            {
                texto: "Oxigênio",
                afirmacao: "afirmação"
            },
            {
                texto: "Dióxido de carbono (CO2)",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual é a melhor prática para reduzir o desperdício e água?",
        alternativas: [
            {
                texto: "Tomar banhos mais longos",
                afirmacao: "afirmação"
            },
            {
                texto: "Fechar a torneira enquanto escova os dentes",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual é uma consequência da poluição do ar",
        alternativas: [
            {
                texto: "Melhora na qualidade do sono",
                afirmacao: "afirmação"
            },
            {
                texto: "Problemas respiratórios",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "O que pode ajudar na preservação da biodiversiade? ",
        alternativas: [
            {
                texto: "Criação de áreas protegidas",
                afirmacao: "afirmação"
            },
            {
                texto: "Expansão das áreas urbanas",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();