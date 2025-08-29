
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando você assiste um anime, o que mais te prende na história?",
        alternativas: [
            {
                texto: "A evolução dos personagens e as batalhas épicas que mostram seu crescimento.",
                afirmacao: "Fã de shonen e ação, que curte aventura, superação e emoção nas lutas."
            },
            {
                texto:  "Os dilemas morais, reviravoltas e a complexidade psicológica dos personagens.",
                afirmacao: "Fã de animes psicológicos e sombrios, que gosta de pensar sobre as escolhas dos personagens e explorar temas profundos."
            }    
           
        ]
    },
    {
       
            enunciado: "Você costuma assistir animes durante o dia ou a noite?",
            alternativas: [
                {
                    texto: "Durante o dia",
                    afirmacao: "Você é uma raposa como o Naruto, proavelmente é extrovertido/a e tem tempo de sobra,"
                },
                {
                    texto:  "Durante a noite",
                    afirmacao: "Você é um/a coruja da noite, proavelmente é introvertido/a e tem muitos afazere durante o dia,"
                }    
               
            ]
        },
        {
            enunciado: "Você é do lado o herói ou do vilão?",

            alternativas: [
                {
                    texto: "Herói",
                    afirmacao: "Tenho certeza que você é uma pessoa justa, certa e odeia injustiças."
                },
                {
                    texto:  "Vilão",
               
                    afirmacao: "Bom... de duas uma, ou você se identifica com o vilão ou você é do contra mesmo."
                }    
               
            ]
        },
        {
            enunciado: "Que estilo de anime você mais gosta?",

            alternativas: [
                {
                    texto: "Suspense, aventura e ação",
                    afirmacao: "Você é uma pessoa de personalidade forte e de bom gosto."
                },
                {
                    texto:  "Romance e cotidiano",
               
                    afirmacao: "Você é uma pessoa fofa ou... alguém que sonha em vier o que assite no anime."
                }    
               
            ]
        },
]
   
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();