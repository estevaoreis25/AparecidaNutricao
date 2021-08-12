var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

pacientes.forEach(paciente =>{
  paciente.addEventListener("dblclick", function(){
    this.remove();
  });
});