let Questao = Number(prompt("Por favor digite um número de 1 a 7, para selecionar a funcionalidade."));

switch (Questao) {
    case 1:
        alert("Você escolheu a opção 1.");
        let NomePessoa = prompt("Digite seu nome:");
        let AlturaCm = Number(prompt("Digite sua altura em centímetros:"));
        let Peso = parseFloat(prompt("Digite seu peso:"));
        
        AlturaCm = AlturaCm / 100;  
        let M = Peso / (AlturaCm ** 2);  
        
        let categoria;

        if (M < 16) {
            categoria = "IMC Baixo peso muito grave";
        } else if (M >= 16 && M <= 16.99) {
            categoria = "IMC Baixo peso grave";
        } else if (M >= 17 && M <= 18.49) {
            categoria = "IMC Baixo peso";
        } else if (M >= 18.50 && M <= 24.99) {
            categoria = "IMC Peso normal";
        } else if (M >= 25 && M <= 29.99) {
            categoria = "IMC Sobrepeso";
        } else if (M >= 30 && M <= 34.49) {
            categoria = "IMC Obesidade grau I";
        } else if (M >= 35 && M <= 39.99) {
            categoria = "IMC Obesidade grau II";
        } else if (M >= 40) {
            categoria = "IMC Obesidade grau III";
        }

        alert(`${NomePessoa} possui índice de massa corporal igual a ${M.toFixed(2)}, sendo classificado como: ${categoria}`);
        break;

    case 2:
        alert("Você escolheu a opção 2.");
        let Idade = Number(prompt("Digite sua idade:"))
        if (Idade >= 0 && Idade < 15){
          alert("Criança")
        } else if (Idade >= 15 && Idade < 30){
          alert("Jovem")
        } else if (Idade >= 30 && Idade < 60){
          alert("Adulto")
        } else if (Idade >= 60){
          alert("Idoso")
        } else {
          alert("Idade inválida")
        }
        break;

    case 3:
        alert("Você escolheu a opção 3.");
        let AtvdP = Number(prompt("Digite a nota da Atividade Prática em Laboratório:"))
        let Prova = Number(prompt("Digite a nota da Prova:"))
        let Trabalho = Number(prompt("Digite a nota do Trabalho Teórico:"))

        let MediaP = ((AtvdP * 2) + (Prova * 5) + (Trabalho * 3)) / 10
        let classificacao;

        if (MediaP >= 0 && MediaP < 5){
            classificacao = "F"
        } else if (MediaP >= 5 && MediaP < 6){
            classificacao = "E"
        } else if (MediaP >= 6 && MediaP < 7){
            classificacao = "D"
        } else if (MediaP >= 7 && MediaP < 8){
            classificacao = "C"
        } else if (MediaP >= 8 && MediaP < 9){
            classificacao = "B"
        } else if (MediaP >= 9 && MediaP <= 10){
            classificacao = "A"
        } else {
            alert("Valores inválidos")
        }

        alert(`A média do aluno é = ${MediaP.toFixed(2)} e sua classificação é ${classificacao}`)
        break;

    case 4:
        alert("Você escolheu a opção 4.");

        let rastreio = prompt("Deseja rastreamento? (S/N)").toUpperCase();
        let taxaRastreio = (rastreio === "S") ? 200 : 0;

        let qtdPecas = Number(prompt("Digite a quantidade de peças:"));
        let regiao = Number(prompt("Digite a região: 1-Sudeste | 2-Sul | 3-Centro-Oeste"));
        let distancia = Number(prompt("Digite a distância em quilômetros:"));

        let valorPorPeca, desconto;
        switch (regiao) {
            case 1: // Sudeste
                valorPorPeca = 1.20;
                desconto = 0.12;
                break;
            case 2: // Sul
                valorPorPeca = 1.00;
                desconto = 0.10;
                break;
            case 3: // Centro-Oeste
                valorPorPeca = 1.30;
                desconto = 0.15;
                break;
            default:
                alert("Região inválida!");
                break;
        }

        let fretePecas = 0;
        if (qtdPecas <= 1000) {
            fretePecas = qtdPecas * valorPorPeca;
        } else {
            let excedente = qtdPecas - 1000;
            fretePecas = (1000 * valorPorPeca) + (excedente * (valorPorPeca * (1 - desconto)));
        }

        let precoCombustivel = 5.00;
        let freteCombustivel = distancia * precoCombustivel;

        let totalFrete = taxaRastreio + fretePecas + freteCombustivel;

        alert(
            `Taxa do rastreamento: R$ ${taxaRastreio.toFixed(2)}\n` +
            `Valor do frete pelas peças: R$ ${fretePecas.toFixed(2)}\n` +
            `Valor do frete por quilômetro: R$ ${freteCombustivel.toFixed(2)}\n` +
            `Total do frete: R$ ${totalFrete.toFixed(2)}`
        );
        break;
    case 7:
    alert("Você escolheu a opção 6.");
    var salarioMinimo = parseFloat(prompt("Digite o salário mínimo: "));

    var codigo = parseInt(prompt("Digite o código do funcionário: "));
    var horasTrabalhadas = parseInt(prompt("Digite o número de horas trabalhadas: "));
    var turno = prompt("Digite o turno (M - Matutino, V - Vespertino, N - Noturno): ").toUpperCase();
    var categoriaT = prompt("Digite a categoria (F - Funcionário, G - Gerente): ").toUpperCase();

    var valorHora = 0;

    switch (categoriaT) {
        case "F": 
            switch (turno) {
                case "M":
                    valorHora = salarioMinimo * 0.10;
                    break;
                case "V":
                    valorHora = salarioMinimo * 0.15;
                    break;
                case "N":
                    valorHora = salarioMinimo * 0.12;
                    break;
                default:
                    alert("Turno inválido!");
                    break;
            }
            break;

        case "G": 
            switch (turno) {
                case "M":
                    valorHora = salarioMinimo * 0.20;
                    break;
                case "V":
                    valorHora = salarioMinimo * 0.25;
                    break;
                case "N":
                    valorHora = salarioMinimo * 0.18;
                    break;
                default:
                    alert("Turno inválido!");
                    break;
            }
            break;

        default:
            alert("Categoria inválida!");
            break;
    }

    var salarioInicial = valorHora * horasTrabalhadas;


    var auxilio = 0;
    if (salarioInicial <= (salarioMinimo * 2)) {
        auxilio = salarioInicial * 0.15;
    } else if (salarioInicial <= (salarioMinimo * 4)) {
        auxilio = salarioInicial * 0.10;
    } else {
        auxilio = salarioInicial * 0.05;
    }

    var salarioFinal = salarioInicial + auxilio;

    alert(
        "Código do Funcionário: " + codigo +
        "\nHoras Trabalhadas: " + horasTrabalhadas +
        "\nValor da Hora Trabalhada: R$ " + valorHora.toFixed(2) +
        "\nSalário Inicial: R$ " + salarioInicial.toFixed(2) +
        "\nAuxílio Alimentação: R$ " + auxilio.toFixed(2) +
        "\nSalário Final: R$ " + salarioFinal.toFixed(2)
    );
    break;


    case 6:
        alert("Você escolheu a opção 6.");
        let num1 = Number(prompt("Digite o primeiro número:"));
        let operacao = prompt("Digite a operação (soma ou subtração):").toLowerCase();
        let num2 = Number(prompt("Digite o segundo número:"));

        function calculo(n1, n2, op) {
            if (op === "soma") {
                return n1 + n2;
            } else if (op === "subtração") {
                return n1 - n2;
            } else {
                return "Operação inválida!";
            }
        }

        let resultado = calculo(num1, num2, operacao);
        alert(`O resultado é: ${resultado}`);
        break;

    case 7:
        alert("Você escolheu a opção 7.");
        let data = prompt("Digite a data no formato dd/mm/aaaa:");
        let partes = data.split("/");

        let dia = partes[0];
        let mes = Number(partes[1]);
        let ano = partes[2];

        let meses = [
            "janeiro", "fevereiro", "março", "abril", "maio", "junho",
            "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
        ];

        if (mes >= 1 && mes <= 12) {
            alert(`${dia} de ${meses[mes - 1]} de ${ano}`);
        } else {
            alert("Mês inválido!");
        }
        break;

    default:
        alert("Opção inválida.");
        break;
}
