// Array para armazenar os dados dos alunos
let alunos = [];


// Máscara de CPF: 000.000.000-00
document.getElementById("cpf").oninput = (e) => {
    let v = e.target.value.replace(/\D/g, ""); // Remove o que não é número
    v = v.replace(/(\d{3})(\d)/, "$1.$2");    // Ponto após 3 dígitos
    v = v.replace(/(\d{3})(\d)/, "$1.$2");    // Ponto após 6 dígitos
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Hífen antes dos últimos 2
    e.target.value = v;
};

// Máscara de Telefone: (00) 00000-0000
document.getElementById("telefone").oninput = (e) => {
    let v = e.target.value.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); // Parênteses no DDD
    v = v.replace(/(\d{5})(\d)/, "$1-$2");    // Hífen no número
    e.target.value = v;
};

// --- 2. VALIDAÇÕES SEPARADAS ---

// Valida se o CPF é  real (
function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
    let soma = 0, resto;
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf[i-1]) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf[9])) return false;
    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf[i-1]) * (12 - i);
    resto = (soma * 10) % 11;
    return (resto === 10 || resto === 11 ? 0 : resto) === parseInt(cpf[10]);
}

// Valida se o nome tem pelo menos Nome e Sobrenome
function validarNome(nome) {
    return nome.trim().split(" ").length >= 2;
}

// funções

function cadastrarAluno() {
    // pega valores dos inputs
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const email = document.getElementById("email").value;
    const tel = document.getElementById("telefone").value;

    // Aplica as validações e para se houver erro
    if (!validarNome(nome)) return alert("Erro: Digite o nome completo.");
    if (!validarCPF(cpf)) return alert("Erro: CPF inválido.");
    if (!email.includes("@")) return alert("Erro: E-mail inválido.");

    // Adiciona o aluno ao array 
    alunos.push({ nome, cpf, email, tel });

    listarAlunos();
    limparCampos();
}



    // Adiciona cada aluno na tela
    alunos.forEach(aluno => {
        const li = document.createElement("li");
        li.textContent = $`{aluno.nome} | CPF: ${aluno.cpf} | Tel: ${aluno.tel}`;
        lista.appendChild(li);
    });



// Limpa os campos após cadastro
function limparCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("telefone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("cpf").value = "";
}
