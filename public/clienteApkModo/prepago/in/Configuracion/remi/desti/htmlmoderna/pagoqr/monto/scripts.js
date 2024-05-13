
var visor = document.getElementById("visor");


var backButton = document.getElementById("back");

// Agregar un evento de clic al botón
backButton.addEventListener("click", function() {
	volverAlias();	
});

function VolverFisico(){
	volverAlias();				
}

var resett = document.getElementById("numberInput");


resett.addEventListener("click", function() {
	resetInput();
	
});


function resetInput(){	
	resett.value=""
	var minWidth = 40; // Ancho mínimo del input
	var charWidth = 45; // Ancho aproximado de un carácter
    var newWidth = Math.max(minWidth, charWidth);
	resett.style.width = newWidth + "px";	
	SizeCantidad();
	document.getElementById("boton").removeAttribute("onclick");
	document.getElementById("boton").src = 'btn_0.jpg';
	
    
    visor.textContent = "0";
}


function updateInputSize() {
	
	var input = document.getElementById("numberInput");
	var value = input.value.trim();
	var numberOfDigits = value.replace(/[^\d]/g, '').length;
	
	
	
    
    formatNumberWithSeparator(value);
	SizeCantidad();
	
	
} 


//Poner separador de mil
function formatNumberWithSeparator(number) {
	//eliminamos el punto si es que lo trae 
	var number = number.replace(/\./g, "");
	
	
	var input = document.getElementById("numberInput");
	input.value = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	
	if (input.value === "") {
	    document.getElementById("visorCont").style.color  = "gray"; 
		animateBounce(visor, 300, 1.5);  
		
		visor.textContent = "0";
		document.getElementById("boton").removeAttribute("onclick");
		document.getElementById("boton").src = 'btn_0.jpg';
		
		} else {
		
		document.getElementById("visorCont").style.color  = "black"; 
		visor.textContent = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");	  	
		document.getElementById("boton").src = 'btn_1.jpg';
		document.getElementById("boton").setAttribute("onclick", "siguiente(event)");
	}
	
	if (input.value === "00") {		
		visor.textContent = "0";
		input.value = ""		
	}
	
	
    
}




//REBOTE DEL CERO
function animateBounce(element, duration, scale) {
    const start = performance.now();
    const originalScale = 1;
    const scaleFactor = scale || 1.2; // Escala de rebote
	
    function step(timestamp) {
        const progress = (timestamp - start) / duration;
        if (progress < 1) {
            const scaleValue = originalScale + (scaleFactor - originalScale) * Math.sin(progress * Math.PI);
            element.style.transform = `scale(${scaleValue})`;
            requestAnimationFrame(step);
			} else {
            element.style.transform = `scale(1)`; // Restaurar el tamaño original
		}
	}
	
    requestAnimationFrame(step);
}

visor.addEventListener("click", function () {
    animateBounce(visor, 300, 1.5);  	
});






//tamaño letra segun cantidad de caracteres
function SizeCantidad(){
	var visor = document.getElementById("visor");
	
	var signoVisor = document.getElementById("signoVisor");
	
	
	var input = document.getElementById("numberInput");
	var value = input.value.trim();
	var numberOfDigits = value.replace(/[^\d]/g, '').length;
	
	
	if(numberOfDigits>5){
		visor.style.fontSize  = "55px";
		signoVisor.style.fontSize  = "30px"; 
		
		}else{
		visor.style.fontSize  = "75px";
		signoVisor.style.fontSize  = "38px";  
		
	}
	
	if(numberOfDigits==9){
		visor.style.fontSize  = "75px";
		signoVisor.style.fontSize  = "38px"; 
		visor.textContent = "0"; 
		input.value = "";
		
		
	} 
	
	
}



document.getElementById("numberInput").addEventListener("keydown", function (event) {
	if (event.key === "." || event.key === "Decimal") {
		event.preventDefault(); // Evitar que se escriba el punto en el input
		document.getElementById("numberDecimal").focus(); // Dar foco al siguiente input
	}
	
	
	
});




// AVANZAR CON ENTER
const numberInput = document.getElementById("numberInput"); 

numberInput.addEventListener('keyup', function(event) {
	
	if (event.keyCode === 13) {
		
		document.getElementById("boton").click();
		
	}
});

// AVANZAR CON ENTER
const numberDecimal = document.getElementById("numberDecimal");

numberDecimal.addEventListener('keyup', function(event) {
	
	if (event.keyCode === 13) {    
		document.getElementById("boton").click();
	}
});




// VOLVER A ALIAS
document.getElementById("atras").addEventListener("click", function () {
    volverAlias();	
});

function volverAlias(){
	window.history.back();
}


function setFoc(){
    document.getElementById("numberInput").focus();	
}



document.getElementById("content2").addEventListener("click", function() {
    document.getElementById("numberInput").focus();	
});









function handleClick(event) {
    const img = document.getElementById("boton");
    const imgRect = img.getBoundingClientRect();
    const clickX = event.clientX - imgRect.left;
    const clickY = event.clientY - imgRect.top;
    const imgWidth = imgRect.width;
    const imgHeight = imgRect.height;
	
    if (clickY >= 0.8 * imgHeight) {
        document.getElementById("numberInput").focus();	
		} else {
		console.log("asd");
	}
}





