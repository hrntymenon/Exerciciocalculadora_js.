// Array que armazenará os alunos
let alunos = [];

// Função principal de cadastro
function cadastrarAluno() {

  // Captura os valores dos campos
  let nome = document.getElementById("nome").value;
  let telefone = document.getElementById("telefone").value;
  let email = document.getElementById("email").value;
  let cpf = document.getElementById("cpf").value;

  // Validações antes de inserir no array
  if (!validarTelefone(telefone)) {
    alert("Telefone inválido!");
    return;
  }

  if (!validarEmail(email)) {
    alert("Email inválido!");
    return;
  }

  if (!validarCPF(cpf)) {
    alert("CPF inválido!");
    return;
  }

  // Criando objeto aluno
  let aluno = {
    nome: nome,
    telefone: telefone,
    email: email,
    cpf: cpf
  };


  // Inserindo no array
  alunos.push(aluno);

  listarAlunos();

  limparCampos();
}


// Função para listar alunos na tela
function listarAlunos() {

  let lista = document.getElementById("listaAlunos");
  lista.innerHTML = ""; // limpa antes de redesenhar

  for (let i = 0; i < alunos.length; i++) {

    let li = document.createElement("li");

    li.textContent =
      alunos[i].nome + " | " +
      alunos[i].telefone + " | " +
      alunos[i].email + " | " +
      alunos[i].cpf;

    lista.appendChild(li);
  }
}


function validarTelefone(telefone) {
  // 1. Remove tudo que não for número (parênteses, espaços, hifens)
  let apenasNumeros = telefone.replace(/\D/g, '');

  // 2. Verifica se sobraram 10 ou 11 números
  // {10,11} significa: mínimo 10, máximo 11
  let regex = /^\d{10,11}$/;

  return regex.test(apenasNumeros);
}

// Validação simples de email
function validarEmail(email) {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}


// Validação simples de CPF (11 números)
function validarCPF(cpf) {
 // Remove pontos e traço
  cpf = cpf.replace(/\D/g, "");
  
  // Verifica se tem exatamente 11 números
  if (cpf.length !== 11) {
    return false;
  }
  return true;
}


// Limpa os campos após cadastro
function limparCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("telefone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("cpf").value = "";
}