
function validar() {
    
 //Datos del vehículo:
 let marca = $("#marca").val();
 let modelo = $("#modelo").val();
 let anio = $("#anio").val();
 let dominio = $("#dominio").val();
 let importado = $("#autoImportado").val();
   
 //Datos personales y de contacto:
 let nombre = $("#nombre").val();
 let apellidos = $("#apellidos").val();
 let edad = $("#edad").val();
 let dni = $("#dni").val();
 let provincia = $("#provincia").val();
 let localidad = $("#localidad").val();
 let tel = $("#tel").val();
 let eMail = $("#eMail").val();

 
    expresion = /\w+@\w+\.+[a-z]/;

    let divErrorEdad = document.getElementById("errorEdad");
    let divErrorEmail = document.getElementById("errorEmail");
    let divErrorTel = document.getElementById("errorTel");
    let divErrorLongTel = document.getElementById("errorLongTel");
    let divErrorNombre = document.getElementById("errorNombre");
    let divErrorApellido = document.getElementById("errorApellido");

    if(marca === "" || modelo ==="" || anio === "" || dominio === "" || apellidos === "" ||
    edad === "" || dni === "" || provincia ==="" || localidad === "" || tel === ""
    || eMail === "" || importado === "") {
    
       swal ( "Error!" ,  "Todos los campos son obligatorios" ,  "error" );
       return false;
    } else if(nombre.length > 30){
        //Se ocultan los resultados
        document.getElementById("resumen").style.display = "none";
        document.getElementById("resultado").style.display = "none";
        divErrorEdad.style.display = "none";
        divErrorEmail.style.display = "none";
        divErrorTel.style.display = "none";
        divErrorLongTel.style.display = "none";
        divErrorApellido.style.display = "none";

        //Se muestra el error
        divErrorNombre.style.display = "block";
        divErrorNombre.innerHTML = `<i class="fas fa-exclamation-triangle"></i>
                                  <h4>Su nombre es muy largo.</h4>
                                  <p>Por favor, ingrese su nombre correctamente.</p>`;
        return false;
    }
    else if(apellidos.length > 80){
        //Se ocultan los resultados
        document.getElementById("resumen").style.display = "none";
        document.getElementById("resultado").style.display = "none";
        divErrorEdad.style.display = "none";
        divErrorEmail.style.display = "none";
        divErrorTel.style.display = "none";
        divErrorLongTel.style.display = "none";
        divErrorNombre.style.display = "none";

        //Se muestra el error
        divErrorApellido.style.display = "block";
        divErrorApellido.innerHTML = `<i class="fas fa-exclamation-triangle"></i>
                                  <h4>Su apellido es muy largo.</h4>
                                  <p>Por favor, ingrese su apellido correctamente.</p>`;
        return false;
    }
    
    else if(tel.length > 11){
       //Se ocultan los resultados
       document.getElementById("resumen").style.display = "none";
       document.getElementById("resultado").style.display = "none";
       divErrorEdad.style.display = "none";
       divErrorEmail.style.display = "none";
       divErrorTel.style.display = "none";
       divErrorNombre.style.display = "none";
       divErrorApellido.style.display = "none";
       

       //Se muestra el error
       divErrorLongTel.style.display = "block";
       divErrorLongTel.innerHTML = `<i class="fas fa-exclamation-triangle"></i>
                                 <h4>Longitud de teléfono incorrecta.</h4>
                                 <p>Por favor, asegurese de haber ingresado su código de área sin cero (0) y su número de celular sin 15.</p>`;
        return false;
    }
    else if(isNaN(tel)){

        //Se ocultan los resultados
        document.getElementById("resumen").style.display = "none";
        document.getElementById("resultado").style.display = "none";
        divErrorEdad.style.display = "none";
        divErrorEmail.style.display = "none";
        divErrorLongTel.style.display = "none";
        divErrorNombre.style.display = "none";
        divErrorApellido.style.display = "none";

        //Se muestra el error
        divErrorTel.style.display = "block";
        divErrorTel.innerHTML = `<i class="fas fa-exclamation-triangle"></i>
                                  <h4>Ingrese un teléfono válido.</h4>
                                  <p>Por favor, asegurese de haber ingresado un número de teléfono válido.</p>`;

        
        return false;
    } 

    else if(!expresion.test(eMail)){

        //Se ocultan los resultados
      document.getElementById("resumen").style.display = "none";
      document.getElementById("resultado").style.display = "none";
        divErrorEdad.style.display = "none";
        divErrorLongTel.style.display = "none";
        divErrorNombre.style.display = "none";
        divErrorApellido.style.display = "none";
        divErrorTel.style.display = "none";

      //Se muestra el error
      divErrorEmail.style.display = "block";
      divErrorEmail.innerHTML = `<i class="fas fa-exclamation-triangle"></i>
                                <h4>Ingrese un e-mail válido.</h4>
                                <p>Asegurese de haber ingresado un e-mail válido.</p>`;

        return false;
    } 

    else if(edad < 18){
     
      //Se ocultan los resultados
      document.getElementById("resumen").style.display = "none";
      document.getElementById("resultado").style.display = "none";
      divErrorEmail.style.display = "none";
      divErrorLongTel.style.display = "none";
      divErrorNombre.style.display = "none";
      divErrorApellido.style.display = "none";
      divErrorTel.style.display = "none";

      //Se muestra el error
      divErrorEdad.style.display = "block";
      divErrorEdad.innerHTML = `<i class="fas fa-exclamation-triangle"></i>
                                <h4>Debe ser mayor de 18 años.</h4>
                                <p>Usted debe tener la mayoría de edad para la contratación del seguro.</p>`;
     
      
       return false;
    } else {
      divErrorEdad.style.display = "none";
      divErrorEmail.style.display = "none";
      divErrorTel.style.display = "none";
      divErrorLongTel.style.display = "none";
      divErrorNombre.style.display = "none";
      divErrorApellido.style.display = "none";
    }
    
    return cotizarSeguro();
    
   


    /*$.ajax({
      url: "https://maxiprez.github.io/tu_clasico_seguro/data/data.json",
      type: "GET",
      dataType: "json",
      success: function(datos){
        
        console.log(Object.values(datos))
        //return false;
         swal("Muy bien!", "Tus datos se han ingresado correctamente!", "success");
        return false;
               },
      error: function(xhr, status, error){

        console.log(xhr);
        console.log(status);
        console.log(error);

      }
     
});*/


}



//Formulario

const DOMstrings = {
    stepsBtnClass: 'multisteps-form__progress-btn',
    stepsBtns: document.querySelectorAll(`.multisteps-form__progress-btn`),
    stepsBar: document.querySelector('.multisteps-form__progress'),
    stepsForm: document.querySelector('.multisteps-form__form'),
    stepsFormTextareas: document.querySelectorAll('.multisteps-form__textarea'),
    stepFormPanelClass: 'multisteps-form__panel',
    stepFormPanels: document.querySelectorAll('.multisteps-form__panel'),
    stepPrevBtnClass: 'js-btn-prev',
    stepNextBtnClass: 'js-btn-next'
 };
  
  
  const removeClasses = (elemSet, className) => {
  
    elemSet.forEach(elem => {
  
      elem.classList.remove(className);
  
    });
  
  };
  
  const findParent = (elem, parentClass) => {
  
    let currentNode = elem;
  
    while (!currentNode.classList.contains(parentClass)) {
      currentNode = currentNode.parentNode;
    }
  
    return currentNode;
  
  };
  
  const getActiveStep = elem => {
    return Array.from(DOMstrings.stepsBtns).indexOf(elem);
  };
  
  const setActiveStep = activeStepNum => {
  
    removeClasses(DOMstrings.stepsBtns, 'js-active');
  
    DOMstrings.stepsBtns.forEach((elem, index) => {
  
      if (index <= activeStepNum) {
        elem.classList.add('js-active');
      }
  
    });
  };
  
  const getActivePanel = () => {
  
    let activePanel;
  
    DOMstrings.stepFormPanels.forEach(elem => {
  
      if (elem.classList.contains('js-active')) {
  
        activePanel = elem;
  
      }
  
    });
  
    return activePanel;
  
  };
  
  const setActivePanel = activePanelNum => {
  
    removeClasses(DOMstrings.stepFormPanels, 'js-active');
  
    DOMstrings.stepFormPanels.forEach((elem, index) => {
      if (index === activePanelNum) {
  
        elem.classList.add('js-active');
  
        setFormHeight(elem);
  
      }
    });
  
  };
  
  const formHeight = activePanel => {
  
    const activePanelHeight = activePanel.offsetHeight;
  
    DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;
  
  };
  
  const setFormHeight = () => {
    const activePanel = getActivePanel();
  
    formHeight(activePanel);
  };
  
  DOMstrings.stepsBar.addEventListener('click', e => {
  
    const eventTarget = e.target;
  
    if (!eventTarget.classList.contains(`${DOMstrings.stepsBtnClass}`)) {
      return;
    }
  
    const activeStep = getActiveStep(eventTarget);
  
    setActiveStep(activeStep);
  
    setActivePanel(activeStep);
  });
  
  DOMstrings.stepsForm.addEventListener('click', e => {
  
    const eventTarget = e.target;
  
    if (!(eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`) || eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`)))
    {
      return;
    }
  
    const activePanel = findParent(eventTarget, `${DOMstrings.stepFormPanelClass}`);
  
    let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(activePanel);
  
    if (eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) {
      activePanelNum--;
  
    } else {
  
      activePanelNum++;
  
    }
  
    setActiveStep(activePanelNum);
    setActivePanel(activePanelNum);
  
  });
  
  window.addEventListener('load', setFormHeight, false);
  
  window.addEventListener('resize', setFormHeight, false);
  
  
  const setAnimationType = newType => {
    DOMstrings.stepFormPanels.forEach(elem => {
      elem.dataset.animation = newType;
    });
  };
  