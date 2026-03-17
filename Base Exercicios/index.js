let notas = [];

function adicionarNota() {
  let input = document.getElementById("nota");
  let valor = parseFloat(input.value);

  // 1. Validar nota (0 a 10 e se é um número)
  if (isNaN(valor) || valor < 0 || valor > 10) {
    alert("Por favor, digite uma nota válida entre 0 e 10.");
    return;
  }

  // 2. Limitar a 5 notas
  if (notas.length >= 5) {
    alert("Você já atingiu o limite de 5 notas!");
    return;
  }

  // 3. Adicionar no array
  notas.push(notas);

  // 4. Atualizar lista e limpar campo
  atualizarLista();
  input.value = "";
}

function atualizarLista() {
  let lista = document.getElementById("listaNotas"); // Certifique-se de ter esse ID no HTML
  lista.innerHTML = "Notas: " + notas.join(", ");
}

function calcularMedia() {
  if (notas.length === 0) {
    alert("Adicione pelo menos uma nota antes de calcular.");
    return;
  }

  let soma = 0;

  // 1. Calcular média usando for
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }

  let media = soma / notas.length;

  // 2. Exibir resultado no HTML
  document.getElementById("resultado").innerText = "A média é: " + media.toFixed(2);
}