var addPaciente = document.querySelector("#adicionar-paciente");
addPaciente.addEventListener("click", (event)=>{
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  var paciente = obtemPacienteFormulario(form);
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);
  form.reset();

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
    if(validaPeso(paciente.peso)){
      return true;
    } else return false;
}