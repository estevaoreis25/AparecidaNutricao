var addPaciente = document.querySelector("#adicionar-paciente");
addPaciente.addEventListener("click", (event)=>{
  event.preventDefault();

  var ulErros = document.querySelector("#mensagens-erro");
  ulErros.textContent='';
  
  var form = document.querySelector("#form-adiciona");
  var paciente = obtemPacienteFormulario(form);
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");

  var erros = validaPaciente(paciente);

  if(erros.length > 0){
    exibeMensagensErro(erros, ulErros);
    form.reset();
  } 
  else{

    tabela.appendChild(pacienteTr);
  
  } 
  
  form.reset();
  return;

});

function obtemPacienteFormulario(form){
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  
  return paciente;
}

function montaTr(paciente){
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild( montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe){
  var td = document.createElement("td");
  td.classList.add(classe);
  td.textContent = dado;

  return td;
}

function validaPaciente(paciente){

    var erros = [];
    if(!validaPeso(paciente.peso)){
      erros.push("Peso inválido");
    }
    if(!validaAltura(paciente.altura)){
      erros.push("Altura inválida");
    }
    return erros;
}

function exibeMensagensErro(erros, ulErros){
  erros.forEach(erro => {
    var liErro = document.createElement("li");
    liErro.textContent = erro;
    ulErros.appendChild(liErro);
  });
}
