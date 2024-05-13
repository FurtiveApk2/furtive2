

var backButton = document.getElementById("enca");
var notificacion = "no";

backButton.addEventListener("click", function() {	
	window.history.back();
});

 
window.addEventListener('goBack', function () {
	window.history.back();
 	
});

 
function moverCirculo() {
	window.ReactNativeWebView.postMessage('Botón clickeado'); 
	var circulo = document.getElementById('circulo');
	var borde = document.getElementById('borde-latido');
	circulo.style.display = "none";
	borde.style.display = "none";
	var rectanguloRelleno = document.getElementById('rectanguloRelleno');

	$("#rectanguloRelleno").animate({
		height: "100%",
		top: "0%",
		borderTopLeftRadius: "50px",
		borderTopRightRadius: "50px"
	}, 650);

	$("#contenedor").animate({
		top: "0%",
	}, 700);

	$("#rectanguloClaro").animate({
		height: "100%",
		top: "7%",
		borderTopLeftRadius: "50px",
		borderTopRightRadius: "50px"
	}, 200);


	setTimeout(function () {
		$("#rectanguloRelleno").hide();						
		$("#rectanguloClaro").animate({
			height: "0%"
		}, 100);

	}, 1300);

  

		//ocultar todo y mostrasr spinner
		setTimeout(function () {
		
			$("#enca").hide();
			$("#content").hide();
			var content = document.getElementById("loader");
			loader.style.display = "flex";
			splashOk();
			
		}, 2500);   
}
 
 

function splashOk() {
	//ocultar todo y mostrasr spinner
	setTimeout(function () {
		var spin = document.getElementById("spin");
		spin.style.display = "none";
		var explota = document.getElementById("splash");
		explota.style.display = "flex";
	}, 3000);
	
	setTimeout(function () { 
		var explota = document.getElementById("splash");
		explota.style.display = "none";
		checkExplora();
		window.ReactNativeWebView.postMessage('ninja'); 
		audio.play();
	}, 3600);
	
	
}



function checkExplora() {
	
    
	var circuloCheck = document.getElementById("circuloCheck");
	circuloCheck.style.display = "flex";
	var imgCheck = document.getElementById("check");
	imgCheck.style.display = "flex";
	
	var circuloCheck = $("#circuloCheck");
	circuloCheck.animate({
		width: "2000px",
		height: "2000px",
		top:"-500px",
		left:"-800px",
		
		}, {
		duration: 600,
		
	});  
	
	setTimeout(function () { 
        window.open("final/final.html?RemiNombre=" + RemiNombre + "&RemiCuit=" + RemiCuit + "&RemiCbu=" + RemiCbu + "&RemiSaldo=" + RemiSaldo + "&RemiMotivo=" + RemiMotivo + "&DestiNombre1=" + DestiNombre1 + "&DestiNombre2=" + DestiNombre2 + "&DestiAlias=" + DestiAlias + "&DestiCbuDest=" + DestiCbuDest + "&DestiCuit=" + DestiCuit + "&DestiCuenta=" + DestiCuenta + "&DestiTipo=" + DestiTipo + "&DestiImagen=" + DestiImagen + "&monto=" + monto + "&hora=" + hora + "&TresCod=" + TresCod + "&newMotivo=" + newMotivo + "&newMensaje=" + newMensaje + "&notificacion=" + notificacion, '_self');
	}, 1500);
	
}







// Activar notificacion y vibracion
function notify() {
	
	
	var btn = document.getElementById("btn");
	
	
	var x = event.clientX - btn.getBoundingClientRect().left;
	
	var buttonWidth = btn.offsetWidth;
	
	
	if (x < buttonWidth / 2) {
		// Acción para el lado izquierdo SIN NOTIFICACION
		console.log("noti vale " + notificacion );
		
		} else {
		// Acción para el lado derecho CON NOTIFICACION
		notificacion = "si"; 
		console.log("noti vale " + notificacion);
		
		
		
	}
	
	
	
}






// LOGOS 

if(DestiCuenta == "Mercado Pago"){ 
	document.getElementById("imagenLogo").src = "img/logosWallet/mp.jpg"; 
}
if(DestiCuenta == "Ualá"){ 
	document.getElementById("imagenLogo").src = "img/logosWallet/ual.jpg"; 
}
if(DestiCuenta == "LEMON"){ 
	document.getElementById("imagenLogo").src = "img/logosWallet/lem.jpg"; 
}
if(DestiCuenta == "Prex"){ 
	document.getElementById("imagenLogo").src = "img/logosWallet/pre.jpg"; 
}
if(DestiCuenta == "Brubank"){ 
	document.getElementById("imagenLogo").src = "img/logosWallet/bru.jpg"; 
}
if(DestiCuenta == "Reba"){ 
	document.getElementById("imagenLogo").src = "img/logosWallet/re.png"; 
}

if (DestiCuenta.toLowerCase().includes("naranja")) {
	document.getElementById("imagenLogo").src = "img/logosWallet/nar.png"; 
}  

if (DestiCuenta.toLowerCase().includes("santander")) {
	document.getElementById("imagenLogo").src = "img/logosWallet/santander.jpg"; 
} 







