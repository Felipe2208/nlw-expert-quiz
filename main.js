const perguntas = [
    {
        pergunta: "Qual é a sintaxe correta para comentários de uma única linha em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "/* Este é um comentário */",
            "' Este é um comentário",
        ],
        correta: 0
    },
    {
        pergunta: "Qual destes NÃO é um tipo de dado em JavaScript?",
        respostas: [
            "String",
            "Boolean",
            "Number",
        ],
        correta: 2
    },
    {
        pergunta: "O que o operador '===' faz em JavaScript?",
        respostas: [
            "Compara o valor e o tipo de dois operandos",
            "Compara apenas o valor de dois operandos",
            "Atribui um valor a uma variável",
        ],
        correta: 0
    },
    {
        pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
        respostas: [
            "print()",
            "console.log()",
            "write()",
        ],
        correta: 1
    },
    {
        pergunta: "Como se declara uma variável em JavaScript?",
        respostas: [
            "variavel nomeVariavel;",
            "var nomeVariavel;",
            "let nomeVariavel;",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do operador '+' em JavaScript?",
        respostas: [
            "Concatenação de strings",
            "Subtração",
            "Atribuição de valores",
        ],
        correta: 0
    },
    {
        pergunta: "O que é um loop 'for' em JavaScript?",
        respostas: [
            "Uma estrutura condicional",
            "Um tipo de função",
            "Uma estrutura de repetição",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o valor inicial do índice em um array em JavaScript?",
        respostas: [
            "1",
            "0",
            "-1",
        ],
        correta: 1
    },
    {
        pergunta: "O que o método 'push()' faz em JavaScript?",
        respostas: [
            "Remove um elemento de um array",
            "Adiciona um elemento ao final de um array",
            "Ordena os elementos de um array",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o método usado para obter o comprimento de uma string em JavaScript?",
        respostas: [
            "length()",
            "size()",
            "length",
        ],
        correta: 2
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
        

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)
}