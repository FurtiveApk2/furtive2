

var backButton = document.getElementById("div1");
var notificacion = "no";

backButton.addEventListener("click", function() {	
	window.history.back();
});

function VolverFisico(){
	window.history.back();				
}


function animateButtonClick() {
	notify(); //se decide si mostrar o no la notificacion
    var button = document.getElementById("btn");
    button.disabled = true; // Desactivamos el botón para evitar múltiples clics durante la animación
	
    // Agregamos una clase temporal para aplicar el color final del fondo cuando se complete la animación
    
	button.classList.add("clicked");
	
	
	var iconElement = document.createElement("i");
	iconElement.classList.add("fa", "fa-solid", "fa-check");
	iconElement.style.color = "#ffffff";
	iconElement.style.position = "relative";
	iconElement.style.fontSize = "24px";
	iconElement.style.top = "-3px";
	iconElement.style.left = "-1px";
	
	
	// Agrega el elemento al documento
	document.body.appendChild(iconElement);
	
	// Solicita una animación de trama para aplicar la animación
	requestAnimationFrame(function () {
		// Aplica la clase para la animación
		iconElement.classList.add("animate-icon");
	});
	
	setTimeout(function () {
		button.textContent = "Procesando tu pago";
	}, 1000);
	
	setTimeout(function () {
		$("#btn").animate({
			width: "40px", //estava en 7vh sin nada en heigt
			height: "40px",
			borderRadius: "60%",
			fontSize: "23px"
		}, 250);
		$("#btn").css("z-index", 9999);
		$("#btn").css("background-image", "none");
		$("#btn").css("background-color", "#00A34D");
		
		$("#btn").text("");
		button.appendChild(iconElement);
	}, 4200);
	
	setTimeout(function () {
		var audio = new Audio('audio.mp3');
		audio.play();
		audio.addEventListener('ended', function () {
			window.open("final/final.html?RemiNombre=" + RemiNombre + "&RemiCuit=" + RemiCuit + "&RemiCbu=" + RemiCbu + "&RemiSaldo=" + RemiSaldo + "&RemiMotivo=" + RemiMotivo + "&DestiNombre1=" + DestiNombre1 + "&DestiNombre2=" + DestiNombre2 + "&DestiAlias=" + DestiAlias + "&DestiCbuDest=" + DestiCbuDest + "&DestiCuit=" + DestiCuit + "&DestiCuenta=" + DestiCuenta + "&DestiTipo=" + DestiTipo + "&DestiImagen=" + DestiImagen + "&monto=" + monto + "&hora=" + hora + "&TresCod=" + TresCod + "&notificacion=" + notificacion, '_self');
		});
	}, 5100);
	
	setTimeout(function () {
		$("#btn").css("position", "absolute");
		$("#btn").animate({
			width: "500vw",
			height: "300vh",
			borderRadius: "100%",
			left: "-220vw",
			top: "-150vh",
		}, 500);
		
		$("#btn").text("");
		
		
	}, 5200);
	
	setTimeout(function () {
		$("#content").hide();
		$("#div3").css("background-color", "#00A34D");
		$("#div4").css("background-color", "#00A34D");
		$("html").css("background-color", "#00A34D");
		
	}, 7250);
	
	
	//por las dudas q el sinido falle
	//   setTimeout(function () {
	//      window.open('final/final.html?titular=' + urlParams.get('titular') + '&micuit=' + micuit + '&cbu=' + cbu + '&nombre=' + nombre + '&dni=' + dni + '&wallet=' + wallet + '&tipo=' + tipo + '&saldo=' + urlParams.get('saldo') + '&motivo=' + urlParams.get('motivo') + '&monto=' + monto, '_self');
	//   }, 7050);
	
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






// ✓







