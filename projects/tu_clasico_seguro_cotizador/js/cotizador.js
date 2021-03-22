
// El select de los años
const maxYear = new Date().getFullYear(),
      minYear = maxYear - 120;

const selectYears = document.getElementById('anio');
    for(i = maxYear; i > minYear; i--){
        let option = document.createElement('option');
        option.value = i;
        option.innerHTML = i;
        selectYears.appendChild(option)
    }

// Funcion cotizacion del seguro
function cotizarSeguro(){
 let marca = document.getElementById("marca").value;
 let modelo = document.getElementById("modelo").value;
 let anio = document.getElementById("anio").value;
 let plan = document.getElementById("plan").value;
 let origen = document.getElementById("autoImportado").value;

 let divResumen = document.getElementById("resumen");
 let divResultado = document.getElementById("resultado");




let cotizacion = {origen, anio, plan};

divResumen.style.backgroundColor = "#FFF";
divResumen.style.display = "block";

divResumen.innerHTML = `<i class="far fa-check-circle"></i>
                    <h4 class="mb-4">Resumen de la cotización</h4>
                        <ul>
                            <li><strong>Marca:</strong> ${mayuscula(marca)}</li>
                            <li><strong>Modelo:</strong> ${mayuscula(modelo)}</li>
                            <li><strong>Año:</strong> ${anio}</li>
                            <li><strong>Origen:</strong> ${mayuscula(origen)}</li>
                            <li><strong>Plan:</strong> ${mayuscula(plan)}</li>
                        </ul>
                                `;                     

    

let cotizacionFinal = cotizar(cotizacion);
divResultado.style.display = "block";
divResultado.innerHTML = `<p class="text-center"><strong>Precio Final:</strong> $${cotizacionFinal}</p>`;
                


}


// Funcion principal para el calculo del precio seguro
function cotizar (cotizacion) {
 const {origen, anio, plan} = cotizacion;

 let resultado = 3000;

 const diferenciaAnio = diferencia (anio);

 resultado += ((diferenciaAnio*2)*resultado)/100; // se incrementa un 2% a medida que se resta el año

 resultado = calcularOrigen(origen)*resultado;

 const incrementoPlan = obtenerPlan(plan);

 resultado = parseFloat(incrementoPlan*resultado).toFixed(2);

 return resultado;
}

// Esto hace que se incremente un % el precio dependiendo del plan
function obtenerPlan  (plan) {
    let costoPlan;
   switch (plan){
       case 'basico': costoPlan = 1.20; break;
       case 'intermedio': costoPlan = 1.30; break;
       case 'full': costoPlan = 1.40; break;
        default: break;
   } 
return costoPlan;
}

// Este calculo incremente un % dependiente si es o no un auto nacional
function calcularOrigen (origen) {
    let incremento;

    switch (origen){
        case 'nacional': incremento = 1.30; break;
        case 'americano': incremento = 1.40; break;
        case 'europeo': incremento = 1.45; break;

        default: break;
    }
    return incremento;
}



function diferencia  (anio) {
return new Date().getFullYear()-anio;
}



// Para que la primer letra aparezca en mayús
function mayuscula  (palabra) {
    return palabra.charAt(0).toUpperCase()+palabra.slice(1);
 }