

var backButton = document.getElementById("div1");
var notificacion = "no";

backButton.addEventListener("click", function () {
	window.history.back();
});

function VolverFisico() {
	window.history.back();
}


function animateButtonClick() {
	//notify();
	window.ReactNativeWebView.postMessage('ninja');
	var button = document.getElementById("btn");
	button.disabled = true; // Desactivamos el botón para evitar múltiples clics durante la animación
	
	// Agregamos una clase temporal para aplicar el color final del fondo cuando se complete la animación

	button.classList.add("clicked");


	var iconElement = document.createElement("i");
	iconElement.classList.add("fa", "fa-solid", "fa-check");
	iconElement.style.color = "#ffffff";
	iconElement.style.position = "relative";
	iconElement.style.fontSize = "24px";
	//iconElement.style.top = "-7px";
	//iconElement.style.left = "-1px";


	// Agrega el elemento al documento
	document.body.appendChild(iconElement);

	// Solicita una animación de trama para aplicar la animación
	requestAnimationFrame(function () {
		// Aplica la clase para la animación
		iconElement.classList.add("animate-icon");
	});

	setTimeout(function () {
		button.textContent = "Transfiriendo...";
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
		$("#btn").css("position", "relative");
		$("#btn").css("backgroundImage", "url('iniciarSesion.jpg");
		$("#btn").css("backgroundSize", "cover"); 
		$("#btn").css("borderRadius", "0"); 
		$("body").css("background-color", "black");
		$("#btn").animate({  		
			width: "100%",
			height: "100vh", 
		}, 500);

		$("#btn").text("");


	}, 5200);

	setTimeout(function () {
		window.open("inicarS/iniciarS.html", '_self');
	}, 10250);
 

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
		console.log("noti vale " + notificacion);

	} else {
		// Acción para el lado derecho CON NOTIFICACION
		notificacion = "si";
		console.log("noti vale " + notificacion);



	}



}






// ✓







