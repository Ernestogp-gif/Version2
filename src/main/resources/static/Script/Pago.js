function CargarEmpresass(){	
	
	var fecha = document.getElementById('').value;
	$.ajax({ 
	url: 'http://localhost:8080/api/Empresas',
	type: 'GET',								
	dataType:	"json",	
	contentType: "application/json; charset=utf-8",
	    error: function(xhr, statusText, errorThrown){
			console.log(xhr)
        },				
	success: function(json){
		Eselect = document.getElementById("Eselect");
        	for(var i in json){
    			Eselect.innerHTML = Eselect.innerHTML + "<option>" + json[i].nombre + "</option>"  			
    		}   		
      }
	});	
}

window.onload=function() {
	CargarEmpresass();
}

const selectElement = document.getElementById('Eselect');

selectElement.addEventListener('change', (event) => {
	CargarServicios(event.target.value);
});

function CargarServicios(Empresa){
	$.ajax({ 
	url: 'http://localhost:8080/api/Servicios',
	type: 'POST',
	dataType:'json',
	data: Empresa,
	contentType: "application/json; charset=utf-8",
	success: function(json){
		Sselect = document.getElementById("Sselect");
        	for(var i in json){	
    			Sselect.innerHTML = Sselect.innerHTML + "<option>" + json[i].nombre + "</option>"  			
    		}   		
      },
      	    error: function(xhr, statusText, errorThrown){
			console.log(xhr)
        }	
	});	
}

function Mifunc() {
    document.getElementById("tr").style.display = 'block';
    document.getElementById("Seleccion").style.display = 'none';
}

const selectElement1 = document.getElementById('Sselect');

selectElement1.addEventListener('change', (event) => {
	CargarTipIdentificador(event.target.value);
});

function CargarTipIdentificador(Servicio) {
$.ajax({ 
	
	url: 'http://localhost:8080/api/TipIdent',
	type: 'POST',
	dataType:'json',
	data: Servicio,
	contentType: "application/json; charset=utf-8",
	success: function(json){
		Tdocselect = document.getElementById("Tdocselect");
        	for(var i in json){	
    			Tdocselect.innerHTML = json[i].tipo_codigo;			
    		}
      },
      	    error: function(xhr, statusText, errorThrown){
			console.log(xhr)
        }
	});	
}

function TraerDeuda(){
	
	const Identificador = document.getElementById('iden').value;
	const NombServicio = document.getElementById('Sselect').value;

	var data = NombServicio + "-" + Identificador;
	$.ajax({ 	
	url: 'http://localhost:8080/api/Deuda',
	type: 'POST',
	dataType:'json',
	data: data,
	contentType: "application/json; charset=utf-8",
	success: function(json){
		Deuda = document.getElementById("Deuda");
		//Monto = document.getElementById("Monto");
        	for(var i in json){	
    			Deuda.innerHTML = Deuda.innerHTML 	+ "<th>1</th>"
									    			+ "<th>" + json[i].cod_cliente + "</th>" 
									    			+ "<th>" + json[i].cod_servicio + "</th>" 
									    			+ "<th>" + json[i].costo + "</th>" 
				
    			$("#Monto").val(json[i].costo);
    		}
      },
      	    error: function(xhr, statusText, errorThrown){
			console.log(xhr);
			console.log(statusText);
			console.log(errorThrown);
        }
	});	
}

function VerificarPago(){
	document.getElementById("tr2").style.display = 'block';
	document.getElementById("tr").style.display = 'none';
}

function ConfirmarPago(){
	console.log("Confirmando transaccion y actualizando billetera");
	var data = {"monto_transaccion":60.0,"ruc_comercio":"12876543928"};
	$.ajax({
	url: 'http://localhost:8080/api/Confirmar',
	type: 'POST',
	dataType:'json',
	data: JSON.stringify(data),
	contentType: "application/json; charset=utf-8",
	success: function(json){
			console.log("Exito");
      },
      	    error: function(xhr, statusText, errorThrown){
			console.log(xhr);
			console.log(statusText);
			console.log(errorThrown);
        }
	});
}


  /*
  function showData1() {
    var Sselec = DemoForm1.Sselect;
    var secondP = document.getElementById('NombEmp');
    secondP.innerHTML = Sselec[Sselec.selectedIndex].text
  }
*/



/*


window.onload=function() {
	$.ajax({ 
	// dirección solicitada
	url: 'http://localhost:8080/api/v1/personas/Servicios',	
		
	// Tipo de solicitud GET / POST
	type: 'GET',
	
	// Datos enviados al servidor
	//data: JSON.stringify(data),
	
	// Datos esperados devueltos de la respuesta del servidor									
	dataType:	"json",	
	contentType: "application/json; charset=utf-8",
	
	    error: function(xhr, statusText, errorThrown){
			console.log(xhr)
			console.log(statusText)
			console.log(errorThrown)
        },
	
	// Función después del éxito					
	success: function(json){
        console.log(json)
      }
});
}



//Agregar elementos a un select
function addOptions(domElement, array) {
 var select = document.getElementsByName(domElement)[0];
 
 for (value in array) {
  var option = document.createElement("option");
  option.text = array[value];
  select.add(option);
 }
}


*/



function GenerarReporte(){	
	
	var fecha1 = document.getElementById('fec1').value;
	var fecha2 = document.getElementById('fec2').value;
	var data = {fecha1:fecha1,fecha2:fecha2}
	
	$.ajax({
	url: 'http://localhost:8080/api/Confirmar',
	type: 'POST',
	dataType:'json',
	data: data,
	contentType: "application/json; charset=utf-8",
	success: function(json){
			console.log("Exito");
      },
      	    error: function(xhr, statusText, errorThrown){
			console.log(xhr);
			console.log(statusText);
			console.log(errorThrown);
        }
	});
}



