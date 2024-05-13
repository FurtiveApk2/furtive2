// inciar sesion
var usuarioInput = document.getElementById('usuarioInput');
usuarioInput.addEventListener('focus', function () {
	document.getElementById("aviso").style.display = "none";
	document.getElementById("div3").style.display = "none";
	document.getElementById("aceptar").style.background = "#1e4bff";
	 
});

usuarioInput.addEventListener('blur', function () {
	setTimeout(function () {
		document.getElementById("aceptar").style.background = "rgb(213, 213, 213)";
		document.getElementById("aviso").style.display = "block";
		document.getElementById("div3").style.display = "block";
		document.getElementById("aviso").textContent = 'La cuenta "' + usuarioInput.value + '" no existe. Realiza el pago para obtener tu usuario y contraseña.';

	}, 2000);

});

var textarea = document.getElementById('passwordTextArea');

textarea.addEventListener('input', function () {
	var hiddenText = '';
	for (var i = 0; i < this.value.length; i++) {
		hiddenText += '*'; // Reemplazar cada caracter ingresado con un asterisco
	}
	this.value = hiddenText; // Asignar el texto oculto de nuevo al textarea
});

 