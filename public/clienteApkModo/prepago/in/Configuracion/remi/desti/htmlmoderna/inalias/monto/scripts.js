
var backButton = document.getElementById("back");

// Agregar un evento de clic al botón
backButton.addEventListener("click", function () {
    volverAlias();
});


window.addEventListener('goBack', function () {
    volverAlias();
});

function formatearNumero(numero) {
    // Verifica si el número tiene decimales
    var tieneDecimales = numero % 1 !== 0;

    // Formatea el número con o sin decimales
    if (tieneDecimales) {
        return numero.toLocaleString('es-ES');
    } else {
        return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
}

function actualizarResultado() {
    var resultadoDiv = document.getElementById('resultado');
    var valor = resultadoDiv.textContent;


    // Convierte la cadena a un número, formatea y actualiza el contenido
    resultadoDiv.textContent = formatearNumero(parseFloat(valor.replace(/[^0-9,-]+/g, '')));

    saldoInsuficiente();
}





function borrarUltimoCaracter() {
    var resultadoDiv = document.getElementById('resultado');
    var sig = document.getElementById('signo');
    var comaDiv = document.getElementById('coma');
    var decimalesDiv = document.getElementById('decimales');
    var valor = resultadoDiv.textContent;
    var botonContinuar = document.getElementById('continue-button');

    // Si se está eliminando el último carácter de "resultado"
    if (valor.length === 1 && comaDiv.style.display !== 'inline') {
        resultadoDiv.style.color = '#959595';
        sig.style.color = '#959595';
        botonContinuar.style.background = '#f5f5f5';
        botonContinuar.style.color = '#979494';
        resultadoDiv.textContent = '0';
    } else if (comaDiv.style.display === 'inline' && decimalesDiv.textContent.length > 0) {
        // Si hay caracteres en "decimales", eliminar el último carácter
        decimalesDiv.textContent = decimalesDiv.textContent.slice(0, -1);
    } else if (comaDiv.style.display === 'inline') {
        // Si "decimales" está vacío, ocultar coma y decimales
        comaDiv.style.display = 'none';
        decimalesDiv.textContent = '';
    } else {
        // Si no hay coma, eliminar el último carácter de "resultado"
        resultadoDiv.textContent = valor.slice(0, -1);
    }

    actualizarResultado();
}

function agregarNumero(numero) {
    var resultadoDiv = document.getElementById('resultado');
    var sig = document.getElementById('signo');

    var comaDiv = document.getElementById('coma');
    var decimalesDiv = document.getElementById('decimales');
    var valor = resultadoDiv.textContent;
    var botonContinuar = document.getElementById('continue-button');

    // Si la coma y "decimales" están presentes, agregar el número a "decimales"
    if (comaDiv.style.display === 'inline') {
        decimalesDiv.textContent += numero;
    } else {
        // Si no hay coma, agregar el número a "resultado"
        if (valor === '0') {
            resultadoDiv.style.color = 'black';
            sig.style.color = 'black';
            botonContinuar.style.background = "#007bff";
            botonContinuar.style.color = 'white';
            resultadoDiv.textContent = numero;
        } else {
            resultadoDiv.textContent = valor + numero;
        }
    }

    actualizarResultado();
}




function agregarCaracter(caracter) {
    var resultadoDiv = document.getElementById('resultado');
    var comaDiv = document.getElementById('coma');
    var decimalesDiv = document.getElementById('decimales');

    var valor = resultadoDiv.textContent;
    var botonContinuar = document.getElementById('continue-button');

    // Verificar si se presionó la coma y no está presente
    if (caracter === ',' && comaDiv.style.display !== 'inline') {
        comaDiv.style.display = 'inline';
        decimalesDiv.style.display = 'inline';
        return;
    }

    // Verificar si ya hay una coma
    if (comaDiv.style.display === 'inline') {
        // Si la coma está presente, agregar la coma a "decimales"
        decimalesDiv.textContent += caracter;
    } else {
        // Si no hay coma, agregar el carácter a "resultado"
        if (valor === '0') {
            resultadoDiv.style.color = 'black';
            botonContinuar.style.background = "#007bff";
            botonContinuar.style.color = 'white';
            resultadoDiv.textContent = caracter;
        } else {
            resultadoDiv.textContent = valor + caracter;
        }
    }

    actualizarResultado();
}

//SALDO INSUFICIENTE 
function saldoInsuficiente() {
    var resultadoDiv = document.getElementById('resultado');
    var cartelInsuficiente = document.getElementById('saldoInsuficiente');
    if (parseInt(RemiSaldo.replace(/\./g, ''), 10) < parseInt(resultadoDiv.textContent.replace(/\./g, ''), 10)) {
        cartelInsuficiente.style.display = "block";
    } else {
        cartelInsuficiente.style.display = "none";
    }
}



var teclas = document.querySelectorAll('#teclado button');

// Agrega el evento pointerdown a cada tecla
teclas.forEach(function (tecla) {
    tecla.addEventListener('pointerdown', function () {
        tecla.style.backgroundColor = '#ddd'; // Cambia el color de fondo a gris al presionar
    });

    // Agrega el evento pointerup a cada tecla
    tecla.addEventListener('pointerup', function () {
        tecla.style.backgroundColor = '#f5f5f566'; // Cambia el color de fondo a blanco al soltar
    });
});



// USAR TODO EL SALDO
document.getElementById("UsarTodo").addEventListener("click", function () {
    var resultadoDiv = document.getElementById('resultado');
    var sig = document.getElementById('signo');
    resultadoDiv.textContent = RemiSaldo;
    resultadoDiv.style.color = 'black';
    sig.style.color = 'black';

});


// ELEGIR MOTIVO
function mostrarSolapa() {
    var solapa = document.getElementById("solapa");
    var overlay = document.getElementById("overlay");

    solapa.style.display = "block";
    overlay.style.display = "block";
}

function seleccionarMotivo(opcion) {
    var motivoSeleccionado = document.getElementById("motivoSeleccionado");

    if (opcion.length > 11) {
        opcion = opcion.substring(0, 11) + "...";
    }

    motivoSeleccionado.textContent = opcion;

    cerrarSolapa();
}

function cerrarSolapa() {
    var solapa = document.getElementById("solapa");
    var overlay = document.getElementById("overlay");

    solapa.style.display = "none";
    overlay.style.display = "none";
}



// MENSAJE
function actualizarContador() {
    var inputTexto = document.getElementById("texto");
    var contador = inputTexto.value.length;

    var titulo = document.getElementById("titulo");
    titulo.textContent = "Mensaje (" + contador + "/45)";
}





// VOLVER A ALIAS
document.getElementById("atras").addEventListener("click", function () {
    volverAlias();
});

function volverAlias() {
    const montoPantalla = document.getElementById('content2');
    const aliasPantalla = document.getElementById('content');


    if (montoPantalla.style.display === 'block') {

        montoPantalla.style.display = 'none';
        aliasPantalla.style.display = 'block';
    } else {
        window.history.back();
    }


}
var windowHeight = window.innerHeight;

window.addEventListener('resize', function() {
  if (window.innerHeight < windowHeight) {
    // El teclado se ha abierto
    document.getElementById('teclado').style.bottom = 'auto';
  } else {
    // El teclado se ha cerrado
    document.getElementById('teclado').style.bottom = '0';
  }
});















