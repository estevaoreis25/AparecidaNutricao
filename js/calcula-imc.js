var titulo = document.querySelector(".titulo");
titulo.textContent = "Nutricionais Aparecida :)";

var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(paciente => {
  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;
  
  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;
  
  var tdImc = paciente.querySelector(".info-imc");
  
  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);
  var gorduraValida = validaGordura(gordura);


  if(!pesoValido){
    tdImc.textContent = "Peso inválido";
    paciente.classList.add("paciente-invalido");
  }
  else if(!alturaValida){
    tdImc.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido")
  }
  else {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
});

function validaPeso(peso){
  if(peso > 0 && peso < 1000){
    return true;
  } else return false;
}

function validaAltura(altura){
  if(altura > 0 && altura < 3.0){
    return true;
  } else return false;
}

function validaGordura(gordura){
  if(gordura >= 0 && gordura < 100){
    return true;
  } else return false;
}

function calculaImc(peso, altura){
  var imc = 0;
  imc = peso/(altura*altura);
  return imc.toFixed(2);
}