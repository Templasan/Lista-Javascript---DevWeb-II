let Questao = Number(prompt("Por favor digite um número de 1 a 6, para selecionar a funcionalidade."));

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
        if (Idade >= 0 & Idade < 15){
          alert("Criança")
        } else if (Idade >= 15 & Idade < 30){
          alert("Jovem")
        } else if (Idade >= 30 & Idade < 60){
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
        break;
    case 4:
        alert("Você escolheu a opção 4.");
        break;
    case 5:
        alert("Você escolheu a opção 5.");
        break;
    case 6:
        alert("Você escolheu a opção 6.");
        break;
    case 7:
        alert("Você escolheu a opção 7.");
        break;

    default:
        alert("Opção inválida.");
        break;
}
