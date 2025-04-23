import Pergunta from '@/data/model/Pergunta'

const perguntas: Pergunta[] = [
    {
        id: 1,
        enunciado: 'Qual é a função principal de um sistema operacional?',
        opcoes: [
            'Executar comandos de rede',
            'Controlar o hardware e fornecer serviços para softwares',
            'Compilar programas',
            'Gerar interfaces gráficas',
        ],
        resposta: 1,
    },
    {
        id: 2,
        enunciado: 'O que é um algoritmo?',
        opcoes: [
            'Um tipo de linguagem de programação',
            'Um erro em sistemas computacionais',
            'Uma sequência finita de passos para resolver um problema',
            'Uma estrutura de dados',
        ],
        resposta: 2,
    },
    {
        id: 3,
        enunciado: 'Qual estrutura de dados usa a estratégia LIFO (Last In, First Out)?',
        opcoes: ['Fila', 'Árvore binária', 'Lista encadeada', 'Pilha'],
        resposta: 3,
    },
    {
        id: 4,
        enunciado: 'Qual linguagem é amplamente utilizada no desenvolvimento web?',
        opcoes: ['Python', 'JavaScript', 'C++', 'Fortran'],
        resposta: 1,
    },
    {
        id: 5,
        enunciado: 'Qual é a complexidade do algoritmo de ordenação Bubble Sort no pior caso?',
        opcoes: ['O(n)', 'O(log n)', 'O(n log n)', 'O(n²)'],
        resposta: 3,
    },
    {
        id: 6,
        enunciado: 'O que significa "compilar" um programa?',
        opcoes: [
            'Executar o código diretamente',
            'Traduzir o código-fonte para linguagem de máquina',
            'Comprimir o código',
            'Analisar a lógica do programa',
        ],
        resposta: 1,
    },
    {
        id: 7,
        enunciado: 'Qual dos seguintes é um banco de dados relacional?',
        opcoes: ['MongoDB', 'Firebase', 'PostgreSQL', 'Redis'],
        resposta: 2,
    },
    {
        id: 8,
        enunciado: 'O que é uma variável?',
        opcoes: [
            'Um valor fixo no código',
            'Um espaço na memória para armazenar dados',
            'Um tipo de loop',
            'Um operador lógico',
        ],
        resposta: 1,
    },
    {
        id: 9,
        enunciado: 'O que é "recursão" em programação?',
        opcoes: [
            'Um tipo de variável',
            'Uma função que chama a si mesma',
            'Uma forma de armazenamento em banco de dados',
            'Um tipo de estrutura de repetição',
        ],
        resposta: 1,
    },
    {
        id: 10,
        enunciado: 'Qual é o objetivo da normalização em banco de dados?',
        opcoes: [
            'Melhorar a performance da rede',
            'Eliminar redundâncias e inconsistências',
            'Criar gráficos relacionais',
            'Transformar dados em formato binário',
        ],
        resposta: 1,
    },

    {
        id: 11,
        enunciado: 'Qual camada do modelo OSI é responsável pelo roteamento de pacotes?',
        opcoes: ['Camada de Aplicação', 'Camada de Enlace de Dados', 'Camada de Rede', 'Camada de Sessão'],
        resposta: 2,
    },
    {
        id: 12,
        enunciado: 'Qual dos seguintes é um exemplo de sistema de versionamento de código?',
        opcoes: ['Jenkins', 'Git', 'Docker', 'Apache'],
        resposta: 1,
    },
    {
        id: 13,
        enunciado: 'O que é uma "thread" em programação?',
        opcoes: [
            'Um tipo de banco de dados',
            'Uma função que manipula strings',
            'Uma unidade de execução dentro de um processo',
            'Um bug difícil de resolver',
        ],
        resposta: 2,
    },
    {
        id: 14,
        enunciado: 'Qual o principal objetivo da criptografia?',
        opcoes: [
            'Compactar dados',
            'Organizar arquivos',
            'Proteger dados através de codificação',
            'Melhorar a velocidade de acesso ao disco',
        ],
        resposta: 2,
    },
    {
        id: 15,
        enunciado: 'O que é a complexidade "O(log n)"?',
        opcoes: [
            'Uma operação linear',
            'Uma operação constante',
            'Uma operação exponencial',
            'Uma operação que cresce de forma logarítmica',
        ],
        resposta: 3,
    },
    {
        id: 16,
        enunciado: 'Qual das opções abaixo **não** é uma linguagem de programação?',
        opcoes: ['HTML', 'Python', 'Java', 'C#'],
        resposta: 0,
    },
    {
        id: 17,
        enunciado: 'O que significa "API"?',
        opcoes: [
            'Aplicativo Para Internet',
            'Acesso Público Integrado',
            'Interface de Programação de Aplicações',
            'Área de Processamento de Informação',
        ],
        resposta: 2,
    },
    {
        id: 18,
        enunciado: 'Qual dos seguintes dispositivos é considerado uma memória volátil?',
        opcoes: ['HD', 'SSD', 'RAM', 'CD-ROM'],
        resposta: 2,
    },
    {
        id: 19,
        enunciado: 'Qual a finalidade do comando SELECT em SQL?',
        opcoes: [
            'Inserir novos dados em uma tabela',
            'Remover dados de uma tabela',
            'Selecionar e visualizar dados armazenados',
            'Atualizar dados existentes',
        ],
        resposta: 2,
    },
    {
        id: 20,
        enunciado: 'O que é o GitHub?',
        opcoes: [
            'Um sistema operacional',
            'Um compilador de código',
            'Uma plataforma de hospedagem de código com controle de versão',
            'Um protocolo de rede',
        ],
        resposta: 2,
    },

]

export default perguntas
