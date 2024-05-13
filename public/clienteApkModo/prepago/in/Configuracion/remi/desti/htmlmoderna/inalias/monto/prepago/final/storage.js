 
 

 
if(hora=="Actual"){
	hora = fechaActual.toLocaleString('es-AR', options); 
}
 

CrearEntrada();


function CrearEntrada(){
	 
	var contadorEntradas = parseInt(localStorage.getItem("contadorEntradas")) || 0;
	
	// Incrementar el contador para la próxima entrada
	contadorEntradas++;
	
	var nuevaEntrada = {
	    
		nombre: DestiNombre1,
		nombreComp: DestiNombre2,
		codigo: DestiTipo, //n cuenta del destinatario.
		alias: DestiAlias,
		monto: monto,
		fecha: fechaFormateada + " a las " + hora,
		cbu: DestiCbuDest,
		cuit: DestiCuit,
		motivo: newMotivo, //Nuevo motivo.
		tipo: DestiTipo, 
		billetera: DestiCuenta,
		urlimg: DestiImagen,
		Rnombre:RemiNombre,
		Rcuit: RemiCuit,
		Rcbu: RemiMotivo // n.cuenta del remitente.
		
	};
	
	
	localStorage.setItem("entrada_" + contadorEntradas, JSON.stringify(nuevaEntrada));
	
	
	localStorage.setItem("contadorEntradas", contadorEntradas.toString());	
	
	
}



