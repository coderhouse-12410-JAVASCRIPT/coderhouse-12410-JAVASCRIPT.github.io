let baseDatosAutos = [];//Array que suma los autos
let autoInfo = JSON.parse(localStorage.getItem("autoInfo"));
    
//funcion para capturar lo ingresado por el usuario
 function capturar(){

    function Auto(marca, modelo, anio, dominio){
                 
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.dominio = dominio;
        }
  let  marcaNew = $("#marca").val();
  let  modeloNew = $("#modelo").val();
  let  anioNew = $("#anio").val();
  let  dominioNew = $("dominio").val();

  nuevoAuto = new Auto(marcaNew, modeloNew, anioNew, dominioNew); //variable global dentro de la funcion
  console.log(nuevoAuto);
  

  //se guarda en el local storage
  let autoInfo = {
    marca : marcaNew,
    modelo : modeloNew,
    anio : anioNew,
    dominio : dominioNew
};

localStorage.setItem("autoInfo", JSON.stringify(autoInfo));
agregar();

 }

 function agregar(){
    baseDatosAutos.push(autoInfo);
 
     }
