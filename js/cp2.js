const inputUser = document.querySelector("input[name='senha']");
const labelUser = document.querySelector("label[for='senha']");

const inputUser2 = document.querySelector("input[name='confirmeSenha']");
const labelUser2 = document.querySelector("label[for='c-senha']");

const form = document.getElementById("form");



inputUser.addEventListener("keyup", ()=>{

  if(inputUser.value.length < 6){
    inputUser.setAttribute("style", "outline-color:#ff0000");
    labelUser.setAttribute("style", "color:#ff0000");
  }else{
    inputUser.setAttribute("style", "outline-color:#dddddd");
    labelUser.setAttribute("style", "color:#00ff00");
  }

});  

inputUser2.addEventListener("keyup", ()=>{

  if(inputUser2.value.length < 6){
    inputUser2.setAttribute("style", "outline-color:#ff0000");
    labelUser2.setAttribute("style", "color:#ff0000");
  }else{
    inputUser2.setAttribute("style", "outline-color:#dddddd");
    labelUser2.setAttribute("style", "color:#00ff00");
  }

});


form.addEventListener("submit", (event) => {
  const senha = inputUser.value;
  const cSenha = inputUser2.value;
  if (senha.length < 6 || senha.length > 8 && cSenha.length < 6 || cSenha.length > 8) {
    event.preventDefault(); // Impede o envio do formulário
    alert("A senha deve ter entre 6 e 8 caracteres.");
    inputUser.value = "";
    inputUser2.value = "";
    inputUser.focus();
  }

  if(senha != cSenha){
    event.preventDefault();
    alert("A senhas não coincidem.");
    inputUser.value = "";
    inputUser2.value = "";
    inputUser.focus();
  }
});



form.addEventListener("submit", (event) => {
  event.preventDefault(); // Impede o envio do formulário

  // Verificar se algum campo está vazio
  const inputs = form.querySelectorAll(".inputs");
  let isFormValid = true;

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === "") {
      isFormValid = false;
      break;
    }
  }

  if (!isFormValid) {
    alert("Por favor, preencha todos os campos do formulário.");
  } else {
    // Se todos os campos estiverem preenchidos, você pode prosseguir com o envio do formulário programaticamente
    form.submit();
  }
});


const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
const body = document.body;

toggleDarkModeButton.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});




