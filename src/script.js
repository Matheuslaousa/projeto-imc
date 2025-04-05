document.getElementById("imc-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio do formulário

  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);

  // Verifica se os campos de peso e altura foram preenchidos
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    alert("Por favor, insira valores válidos para peso e altura.");
    return;
  }

  // Calcula o IMC
  const imc = peso / (altura * altura);

  // Determina a classificação
  let classificacao = "";
  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    classificacao = "Peso normal";
  } else if (imc >= 25 && imc < 29.9) {
    classificacao = "Sobrepeso";
  } else {
    classificacao = "Obesidade";
  }

  // Preenche o resultado na tela
  document.getElementById("resultado-imc").textContent = imc.toFixed(2); // Mostra o IMC com 2 casas decimais
  document.getElementById("classificacao-imc").textContent = classificacao;
});
