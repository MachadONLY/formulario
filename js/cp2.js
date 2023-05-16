const form = document.getElementById("form");
const inputName = document.getElementById("p-nome");
const inputSName = document.getElementById("s-nome");
const inputEmail = document.getElementById("email");

const inputSenha = document.querySelector("input[name='senha']");
const labelSenha = document.querySelector("label[for='senha']");

const inputCSenha = document.querySelector("input[name='confirmeSenha']");
const labelCSenha = document.querySelector("label[for='c-senha']");



inputSenha.addEventListener("keyup", ()=>{

  if(inputSenha.value.length < 6 || inputSenha.value.length > 8){
    inputSenha.setAttribute("style", "outline-color:#B00000");
    labelSenha.setAttribute("style", "color:#B00000");
  }else{
    inputSenha.setAttribute("style", "outline-color:#dddddd");
    labelSenha.setAttribute("style", "color:#049200");
  }

});  

inputCSenha.addEventListener("keyup", ()=>{

  if(inputCSenha.value.length < 6 || inputCSenha.value.length > 8){
    inputCSenha.setAttribute("style", "outline-color:#B00000");
    labelCSenha.setAttribute("style", "color:#B00000");
  }else{
    inputCSenha.setAttribute("style", "outline-color:#dddddd");
    labelCSenha.setAttribute("style", "color:#049200");
  }

});


form.addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio do formulário

  // Validação do Primeiro Nome
  const name = inputName.value.trim();
  if (name.length < 5) {
    displayError(inputName, "O nome deve conter pelo menos 5 caracteres.");
    return;
  }

  // Validação do Segundo Nome
  const sName = inputSName.value.trim();
  if (sName.length < 5) {
    displayError(inputSName, "O sobrenome deve conter pelo menos 5 caracteres.");
    return;
  }

  // Validação do Email
  const email = inputEmail.value.trim();
  if (email.length < 5 || !email.includes("@")) {
    displayError(inputEmail, "Por favor, insira um endereço de email válido.");
    return;
  }

  // Validação da Senha
  const senha = inputSenha.value.trim();
  if (senha.length < 6 || senha.length > 8) {
    displayError(inputSenha, "A senha deve ter entre 6 e 8 caracteres.");
    return;
  }

  const confirmacaoSenha = inputCSenha.value.trim();
  if(confirmacaoSenha !== senha){
    displayError(inputCSenha, "As senhas não coincidem.");
    senha.value = "";
    senha.focus();
    return;
  }

  // Se todas as validações passarem, você pode prosseguir com o envio do formulário
  // form.submit();
  alert("Cadastro realizado com sucesso!");
});



inputSenha.addEventListener("keyup", ()=>{

  if(inputSenha.value.length < 6 || inputSenha.value.length > 8){
    inputSenha.setAttribute("style", "outline-color:#B00000");
    labelSenha.setAttribute("style", "color:#B00000");
  }else{
    inputSenha.setAttribute("style", "outline-color:#dddddd");
    labelSenha.setAttribute("style", "color:#049200");
  }

});  

inputCSenha.addEventListener("keyup", ()=>{

  if(inputCSenha.value.length < 6 || inputCSenha.value.length > 8){
    inputCSenha.setAttribute("style", "outline-color:#B00000");
    labelCSenha.setAttribute("style", "color:#B00000");
  }else{
    inputCSenha.setAttribute("style", "outline-color:#dddddd");
    labelCSenha.setAttribute("style", "color:#049200");
  }

});

// Função para exibir mensagem de erro e estilizar o campo
function displayError(input, message) {
  input.classList.add
  ("error");
  alert(message);
}

// Event listeners para remover o estilo de erro ao digitar
inputName.addEventListener("input", function() {
clearError(inputName);
});

inputSName.addEventListener("input", function() {
clearError(inputSName);
});

inputEmail.addEventListener("input", function() {
clearError(inputEmail);
});

inputSenha.addEventListener("input", function() {
clearError(inputSenha);
});

inputCSenha.addEventListener("input", function() {
clearError(inputCSenha);
});

// Função para limpar o estilo de erro de um campo
function clearError(input) {
input.classList.remove("error");
}



const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
const body = document.body;

toggleDarkModeButton.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});




