var pag = "1";


// JavaScript para manejar los eventos
document.getElementById("aliasOpc").addEventListener("click", function () {
	
	document.getElementById("ColorFondoBlanco").style.display = "none";
	document.getElementById("encabeza").style.display = "none";
	document.getElementById("botoneraOpc").style.display = "none";
	document.getElementById("contactos").style.display = "none"; 
	document.getElementById("botonera2").style.display = "none";
	document.getElementById("div3").style.display = "none";
	document.getElementById("back-arrow").style.display = "block";
	document.getElementById("imageInAlias").style.display = "block";
	document.getElementById("account-input").style.display = "block";
	document.getElementById("continue-button").style.display = "block";
	document.getElementById("account-input").focus();
	pag = "2";
});

document.getElementById("hide-form-button").addEventListener("click", function () {
	document.getElementById("ColorFondoBlanco").style.display = "block";
	document.getElementById("encabeza").style.display = "block";
	document.getElementById("botoneraOpc").style.display = "block";
	document.getElementById("contactos").style.display = "block"; 
	document.getElementById("botonera2").style.display = "block";
	document.getElementById("div3").style.display = "block";
	document.getElementById("back-arrow").style.display = "none";
	document.getElementById("imageInAlias").style.display = "none";
	document.getElementById("account-input").style.display = "none";
	document.getElementById("continue-button").style.display = "none";
	pag = "1";
});


var notaDiv = document.getElementById("nota"); 
var textField=document.getElementById("account-input");


document.getElementById("account-input").addEventListener("input", function () {
	const inputValue = this.value;
	const continueButton = document.getElementById("continue-button");
	if (inputValue.length >= 6) {
		continueButton.classList.add("active");
		} else {
		continueButton.classList.remove("active");
	}
	
    if (inputValue.length > 0) {
		document.getElementById("nota").style.display = "block";
		} else {
		document.getElementById("nota").style.display = "none";
	}
	
	
	
	if (/[^A-Za-z0-9.]/.test(inputValue)) {
        notaDiv.style.color = "red";
        notaDiv.textContent = "Algo salió mal. Volvé a intentarlo";
        continueButton.classList.remove("active"); 
		
		} else {
        notaDiv.style.color = ""; 		 
		notaDiv.style.display = "none";
		
        notaDiv.textContent = "";
        if (inputValue.length >= 6) {
            continueButton.classList.add("active");
			} else {
            continueButton.classList.remove("active");
		}
	}
	
});



// Si se cliea la imagen el input toma el foco
document.getElementById("imageInAlias").addEventListener("click", function () { 
	document.getElementById("account-input").focus();
});



const accountInput = document.getElementById("account-input");
const continueButton = document.getElementById("continue-button");
// Agrega un evento click al botón "Continuar"
continueButton.addEventListener("click", function () {
    // Obtén el valor del campo de entrada y conviértelo a minúsculas
    const inputValue = accountInput.value.toLowerCase();
	
    // Convierte el valor de la variable CBU a minúsculas
    const ali = DestiAlias.toLowerCase();
	const cvu = DestiCbuDest;
    // Compara las dos cadenas en minúsculas
    if (inputValue === ali || inputValue === cvu) {
		document.getElementById("imageInAlias").style.display = "none";
		document.getElementById("account-input").style.display = "none";
		continueButton.style.display = "none";
        window.open("monto/monto.html?RemiNombre=" + RemiNombre + "&RemiCuit=" + RemiCuit + "&RemiCbu=" + RemiCbu + "&RemiSaldo=" + RemiSaldo + "&RemiMotivo=" + RemiMotivo + "&DestiNombre1=" + DestiNombre1 + "&DestiNombre2=" + DestiNombre2 + "&DestiAlias=" + DestiAlias + "&DestiCbuDest=" + DestiCbuDest + "&DestiCuit=" + DestiCuit + "&DestiCuenta=" + DestiCuenta + "&DestiTipo=" + DestiTipo + "&DestiImagen=" + DestiImagen + "&monto=0" + "&hora=" + hora + "&TresCod=" + TresCod, '_self');	
		} else { 
		notaDiv.style.display = "block";
		notaDiv.style.color = "red";
        notaDiv.textContent = "Algo salió mal. Volvé a intentarlo";
        continueButton.classList.remove("active"); 
		document.getElementById("account-input").focus();
	}
});

// AVANZAR CON ENTER
accountInput.addEventListener('keyup', function(event) {
	
	if (event.keyCode === 13) {
		
		continueButton.click();
	}
});

 

window.addEventListener('goBack', function () {
	if(pag == "1"){
		window.history.back();
		}else{
		document.getElementById("ColorFondoBlanco").style.display = "block";
		document.getElementById("encabeza").style.display = "block";
		document.getElementById("botoneraOpc").style.display = "block";
		document.getElementById("contactos").style.display = "block"; 
		document.getElementById("botonera2").style.display = "block";
		document.getElementById("div3").style.display = "block";
		document.getElementById("back-arrow").style.display = "none";
		document.getElementById("imageInAlias").style.display = "none";
		document.getElementById("account-input").style.display = "none";
		document.getElementById("continue-button").style.display = "none";
		pag = "1";
	}	
});



function detectarClick(event) {
    // Obtener la posición del clic dentro de la imagen
    const ima = document.getElementById("encabeza");
    const rect = ima.getBoundingClientRect();
    const x = event.clientX - rect.left;
	
    // Determinar si el clic ocurrió en la parte izquierda o derecha de la imagen
    const anchoImagen = rect.width;
    const mitadImagen = anchoImagen / 2;
	
    if (x < mitadImagen) {
		window.history.back();
		} else {
		
		window.open("monto/monto.html?RemiNombre=" + RemiNombre + "&RemiCuit=" + RemiCuit + "&RemiCbu=" + RemiCbu + "&RemiSaldo=" + RemiSaldo + "&RemiMotivo=" + RemiMotivo + "&DestiNombre1=" + DestiNombre1 + "&DestiNombre2=" + DestiNombre2 + "&DestiAlias=" + DestiAlias + "&DestiCbuDest=" + DestiCbuDest + "&DestiCuit=" + DestiCuit + "&DestiCuenta=" + DestiCuenta + "&DestiTipo=" + DestiTipo + "&DestiImagen=" + DestiImagen + "&monto=0" + "&hora=" + hora + "&TresCod=" + TresCod, '_self');
		
	}
}



window.addEventListener('resize', function() {
    var continueButton = document.getElementById('continue-button');
    var windowHeight = window.innerHeight;
    var keyboardHeight = document.documentElement.clientHeight - windowHeight;

    if (keyboardHeight > 50) { // Se abrió el teclado, ajustar la posición del botón
        continueButton.style.bottom = keyboardHeight + 5 + 'px';
    } else { // Se cerró el teclado, restaurar la posición del botón
        continueButton.style.bottom = '5%';
    }
});

// Inicializar la posición del botón "Continuar"
window.addEventListener('load', function() {
    var continueButton = document.getElementById('continue-button');
    continueButton.style.bottom = '5%';
});





