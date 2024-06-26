const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a capital do Brasil? ",
        alternativas: [
            {
                texto: "Brasília",
                afirmacao: "afirmação"
            },
            {
                texto: "Rio de Janeiro" ,
                afirmacao: "afirmação" 
            }

        ]
    },
    {
        enunciado: "Qual a capital do Paraná?",
        alternativas: [
            {
                texto: "São José dos Pinhais",
                afirmacao: "afirmação"
            },
            {
                texto: "Curitiba",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "qual a capital do Amazonas?",
        alternativas: [
            {
                texto: "Manaus",
                afirmacao: "afirmação"
            },
            {
                texto: "Lábrea",
                afirmacao: "afirmação"
            }

        ]
    },
    {
        enunciado: "Qual a capital de Santa Catarina?",
        alternativas: [
            {
                texto: "Joinville",
                afirmacao: "afirmação"
            },
            {
                texto: "Florianópolis",
                afirmacao: "afirmação"
            }


        ]
    },
    {
        enunciado: "Qual a capital de São Paulo?",
        alternativas: [
            {
                texto: "São Paulo",
                afirmacao: "afirmação"
            },
            {
                texto:"Campinas",
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

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal +=afirmacoes + " ";
    atual++; 
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Isso comprova seus conhecimentos geográficos";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();
