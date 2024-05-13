function agregarNuevaEntrada(monto, nombre, fecha, imagen, numeroEntrada) {
    // Crear un nuevo elemento div para la nueva entrada
    var nuevaEntrada = document.createElement("div");
    nuevaEntrada.setAttribute("style", "display: flex; justify-content: space-between;align-items: center;margin-bottom: 8%;");
    nuevaEntrada.setAttribute("data-id", numeroEntrada); // Agregar el atributo data-id
	
	
	//obtener inciiales del nombre
	const palabras = nombre.split(' ');
	let iniciales = '';
	
	if (palabras.length > 0) {
		iniciales += palabras[0][0].toUpperCase();
	}
	
	if (palabras.length > 1) {
		iniciales += palabras[palabras.length - 1][0].toUpperCase();
	}
	
	var inicial = iniciales.slice(0, 2);
	
	// Verifica si la cadena termina en un punto
	if (inicial.endsWith('.')) {
		// Si termina en punto, quita el punto y agrega un espacio en blanco
		inicial = " " + inicial.slice(0, -1) + '. ';		
		
	} 
	
	
	
    var partes = fecha.split(" ");
    var fechaCorta = partes[3];
	
    // Contenido de la nueva entrada
	var contenidoNuevo = `
    <div id="izq">
	${imagen !== "no" ? `<img src="${imagen}" alt="" width="44" height="44" style="border-radius: 50%; margin-left: 15px; margin-right: 10px;">` : `
	<span id="ico" style="color: #0c50be;"><b>${inicial}</b></span>`}
	<div id="izqText">
	<b><span>${nombre}</span></b><br>
	<span style="font-size:13px; color:gray;position: relative;top: -3px;">Sin confirmación · ${fechaCorta}</span>
	</div>
    </div>
    <div id="der" style="text-align: right;">
	<div id="izqText">
	<span style="color: red;font-size: 17px;position:relative;top:-5px;">-</span><span style="color: #424040;font-size: 17px;position:relative;top:-5px;">$${monto}</span> 	
	</div>
    </div>
	`;
	
	
	
    // Insertar el contenido en la nueva entrada
    nuevaEntrada.innerHTML = contenidoNuevo;
	
    // Obtener el contenedor de entradas existentes
    var contenedorEntradas = document.getElementById("transferencias");
	
    // Insertar la nueva entrada al principio del contenedor
    contenedorEntradas.insertBefore(nuevaEntrada, contenedorEntradas.firstChild);
	
    // Agregar un controlador de eventos click al elemento de entrada
    nuevaEntrada.addEventListener("click", function () {
		// Obtener el número de entrada almacenado en el atributo data-id
		var numeroEntrada = nuevaEntrada.getAttribute("data-id");
		
		// Obtener la entrada actual del localStorage utilizando el número de entrada
		var entradaJSON = localStorage.getItem("entrada_" + numeroEntrada);
		
		// Comprobar si la entrada existe
		if (entradaJSON) {
			// Convertir la entrada JSON en un objeto JavaScript
			var entrada = JSON.parse(entradaJSON);
			
			// Aquí puedes acceder a los datos de la entrada y realizar acciones con ellos
			console.log("Número de entrada: " + numeroEntrada);
			console.log("Nombre: " + entrada.nombre);
			console.log("Monto: " + entrada.monto);
			
			
			var slidingPanel = document.getElementById('slidingPanel');
			var overlay = document.getElementById('overlay');
			var closeButton = document.getElementById('closeButton');
			
			
			slidingPanel.style.height = '65%';
			overlay.style.display = 'block';
			
			
			
			overlay.addEventListener('click', function () {
				slidingPanel.style.height = '0';
				overlay.style.display = 'none';
			});
			
			
			//INICICALES
			const palabras = entrada.nombre.split(' ');
			let iniciales = '';
			
			if (palabras.length > 0) {
				iniciales += palabras[0][0].toUpperCase();
			}
			
			if (palabras.length > 1) {
				iniciales += palabras[palabras.length - 1][0].toUpperCase();
			}
			
			var inicial = iniciales.slice(0, 2);
			
			// Verifica si la cadena termina en un punto
			if (inicial.endsWith('.')) {
				// Si termina en punto, quita el punto y agrega un espacio en blanco
				inicial = " " + inicial.slice(0, -1) + '. ';		
				
			} 
			
			
			
			// Crea el contenido dinámicamente
			var logo=inicial;
			var nombre = entrada.nombre;
			var fechaCorta = formatearFecha(fecha);
			var importe = entrada.monto;
			var cuentaRemi = entrada.Rcbu;
			var billeteraDesti = entrada.billetera; 			
			var cuentaDesti = entrada.codigo; 
			var Rnombre = entrada.Rnombre;
			var Rcuit = entrada.Rcuit;
			var Rcbu = entrada.Rcbu;
			var nombreComp=entrada.nombreComp;
			var cbu = entrada.cbu;
			var cuit = entrada.cuit;
			var billetera = entrada.billetera;
			var codigo = entrada.codigo;
			var monto = entrada.monto;
			var fechas = entrada.fecha;
			var motivo = entrada.motivo; 
			var aliass = entrada.alias; 
			// Agrega el contenido al elemento
			 
			slidingPanel.innerHTML = `
			<div id="linea-superior"></div>
			<div id="desti">
			<div id="logo"><b><p id="in">${logo}</p></b></div>
			<div id="NombreYfecha"><b><p id="Destiname">${nombre}</p></b><p id="fechaCont">Enviaste dinero · <a>${fechaCorta}</a></p></div>
			<div id="montoContenedor"><a style="color:red">-</a><a>$</a><a>${importe}</a></div>
			</div>
			<img id="SinConfirmacion" src="img/SinConfirmacion.jpg">
			<div id="cuentaRemitente">
			<img id="imagenLogoRemi" src="img/logosWallet/bna.jpg"></img><b><p>De Banco Nación · CA <a>${cuentaRemi}</a></p></b>
			</div>
			<div id="cuentaDestino">
			<img id="imagenLogo" src="img/logosWallet/mp.jpg"></img><b><a>A <a>${billeteraDesti}</a></a><a> · CA </a><a>${cuentaDesti}</a></b>
			</div>
			<div id="fechaComplet"><a>${fecha}</a></div>
			<img id="botonesMov" src="img/mov1.jpg" onclick="AccionBotones(event, '${Rnombre}', '${Rcuit}', '${Rcbu}', '${nombre}', '${nombreComp}', '${cbu}', '${cuit}', '${billetera}', '${codigo}', '${monto}', '${fechas}', '${motivo}','${aliass}')">
			<img id="otrosMov" src="img/mov2.jpg" onclick="AccionOtros(event)">
			<button id="closeButton">Cerrar Solapa</button> 
			`;
			
			ponerLogo(billeteraDesti);
			
			
			
			//cerrar
			var lineaSuperior = document.getElementById('linea-superior');
			var destii = document.getElementById('desti');
			lineaSuperior.addEventListener('touchstart', function () {
				slidingPanel.style.height = '0';
				overlay.style.display = 'none';
			});
			destii.addEventListener('touchstart', function () {
				slidingPanel.style.height = '0';
				overlay.style.display = 'none';
			});
			//window.open('movimientos/comprob/comprob.html?titular=' + titular + '&micuit=' + micuit +'&cbu=' + cbu + '&nombre=' + entrada.nombre + '&dni=' + entrada.cuit + '&wallet=' + entrada.billetera + '&tipo=' + tipo + '&saldo='+ saldo +'&motivo=' + motivo + '&monto=' + entrada.monto + "&fecha=" + entrada.fecha + "&codT=" + entrada.codigo + "&urlImg=" + imagen + "&TresCod=" + TresCod, '_self');	
		}
	});
	
	
	
	
	
}



// Obtener el número máximo de entradas desde el contador
var maxEntradas = localStorage.length;

// Recorrer todas las entradas existentes
for (var i = 1; i <= maxEntradas; i++) {
    // Obtener la entrada actual del localStorage
    var entradaJSON = localStorage.getItem("entrada_" + i);
	
    // Comprobar si la entrada existe (puede haber huecos si se eliminan)
    if (entradaJSON) {
		// Convertir la entrada JSON en un objeto JavaScript
		var entrada = JSON.parse(entradaJSON);
		
		// Llamar a la función para agregar la entrada a la lista
		agregarNuevaEntrada(entrada.monto, entrada.nombre,entrada.fecha,entrada.urlimg, i);
	}
}




function ponerLogo(wallett){
	// LOGOS 
	
	if(wallett == "Mercado Pago"){ 
		document.getElementById("imagenLogo").src = "img/logosWallet/mp.jpg"; 
	}
	if(wallett == "Ualá"){ 
		document.getElementById("imagenLogo").src = "img/logosWallet/ual.jpg"; 
	}
	if(wallett == "LEMON"){ 
		document.getElementById("imagenLogo").src = "img/logosWallet/lem.jpg"; 
	}
	if(wallett == "Prex"){ 
		document.getElementById("imagenLogo").src = "img/logosWallet/pre.jpg"; 
	}
	if(wallett == "Brubank"){ 
		document.getElementById("imagenLogo").src = "img/logosWallet/bru.jpg"; 
	}
	if(wallett == "Reba"){ 
		document.getElementById("imagenLogo").src = "img/logosWallet/re.png"; 
	}
	
	if (wallett.toLowerCase().includes("naranja")) {
		document.getElementById("imagenLogo").src = "img/logosWallet/nar.png"; 
	}  
	
	if (wallett.toLowerCase().includes("santander")) {
		document.getElementById("imagenLogo").src = "img/logosWallet/santander.jpg"; 
	} 
	
}










function agregarActividades() {
	
	
	// Crea un nuevo elemento div
	var newDiv = document.createElement('div');
	
	// Agrega el contenido HTML al nuevo elemento div
	newDiv.innerHTML = `
	
	
	<div style="display: flex; justify-content: space-between;align-items: center;margin-bottom: 8%;">
	<div id="izq">
	<span id="ico" style="color: #0c50be;"><b>ML</b></span>
	<div id="izqText">
	<b><span>Marcos Javier Lopez</span></b><br>
	<span style="font-size:13px; color:gray">Recibiste dinero · Ayer</span>
	</div>
	</div>
	
	<div id="der">
	
	<div id="izqText">
	<span style="color:green;font-size: 17px;position:relative;top:-5px;">+</span><span style="font-size: 17px;position:relative;top:-5px;">$5.500</span>
	</div>
	</div>
	</div>	
	
	
	
	<div style="display: flex; justify-content: space-between;align-items: center;margin-bottom: 8%;">
	<div id="izq">
	<span id="ico" style="color: #0c50be;"><b>RD</b></span>
	<div id="izqText">
	<b><span>Rocio Macarena Díaz</span></b><br>
	<span style="font-size:13px; color:gray">Enviaste dinero · Ayer</span>
	</div>
	</div>
	
	<div id="der">
	
	<div id="izqText">
	<span style="color:red;font-size: 17px;position:relative;top:-5px;">-</span><span style="font-size: 17px;position:relative;top:-5px;">$12.890</span>
	</div>
	</div>
	</div>	
	
	
	
	<div style="display: flex; justify-content: space-between;align-items: center;margin-bottom: 8%;">
	<div id="izq">
	<span id="ico" style="color: #0c50be;"><b>JR</b></span>
	<div id="izqText">
	<b><span>Juan Antonio Rubira</span></b><br>
	<span style="font-size:13px; color:gray">Enviaste dinero · Viernes</span>
	</div>
	</div>
	
	<div id="der">
	
	<div id="izqText">
	<span style="color:red;font-size: 17px;position:relative;top:-5px;">-</span><span style="font-size: 17px;position:relative;top:-5px;">$12.890</span>
	</div>
	</div>
	</div>	
	
	
	<div style="display: flex; justify-content: space-between;align-items: center;margin-bottom: 8%;">
	<div id="izq">
	<span id="ico" style="color: #0c50be;"><b>ML</b></span>
	<div id="izqText">
	<b><span>Marcos Javier Lopez</span></b><br>
	<span style="font-size:13px; color:gray">Recbiste dinero · Jueves</span>
	</div>
	</div>
	
	<div id="der">
	
	<div id="izqText">
	<span style="color:green;font-size: 17px;position:relative;top:-5px;">+</span><span style="font-size: 17px;position:relative;top:-5px;">$4.500</span>
	</div>
	</div>
	</div>	
	
	
	
	`;
	
	// Obtén el elemento en el que deseas insertar el nuevo div
	var parentElement = document.getElementById('transferencias');
	
	// Agrega el nuevo div como hijo del elemento padre
	parentElement.appendChild(newDiv);
	
	
	
}		


function formatearFecha(cadenaFecha) {
	// Obtener el día y el mes del formato dd/mm/aaaa
	const dia = cadenaFecha.substring(0, 2);
	const mesNumero = cadenaFecha.substring(3, 5);
	
	// Mapeo de números de mes a abreviaturas
	const meses = {
		'01': 'ene',
		'02': 'feb',
		'03': 'mar',
		'04': 'abr',
		'05': 'may',
		'06': 'jun',
		'07': 'jul',
		'08': 'ago',
		'09': 'sep',
		'10': 'oct',
		'11': 'nov',
		'12': 'dic'
	};
	
	// Obtener la abreviatura del mes
	const mesAbreviado = meses[mesNumero];
	
	// Formatear el resultado
	const resultado = `${dia} ${mesAbreviado}`;
	
	return resultado;
}




function AccionBotones(event,Rnombre,Rcuit,Rcbu,nombre,nombreComp,cbu,cuit,billetera,codigo,monto,fecha,motivo,alias) {
	const img = document.getElementById('botonesMov');
	const mitadAncho = img.width / 2;
	
	if (event.offsetX < mitadAncho) {
		window.open("inalias/monto/prepago/final/comprobante/comprobante.html?RemiNombre=" + Rnombre + "&RemiCuit=" + Rcuit + "&RemiCbu=" + RemiCbu + "&RemiSaldo=" + RemiSaldo + "&RemiMotivo=" + Rcbu + "&DestiNombre1=" + nombre + "&DestiNombre2=" + nombreComp + "&DestiAlias=" + DestiAlias + "&DestiCbuDest=" + cbu + "&DestiCuit=" + cuit + "&DestiCuenta=" + billetera + "&DestiTipo=" + codigo + "&DestiImagen=" + "no" + "&monto=" + monto + "&fecha=" + fecha + "&hora=" + hora + "&codT=" + "000" + "&TresCod=" + "000" + "&newMensaje=" + "--" + "&newMotivo=" + motivo + "&notificacion=" + "no", '_self');	
		} else {
		window.open("inalias/monto/monto.html?RemiNombre=" + RemiNombre + "&RemiCuit=" + RemiCuit + "&RemiCbu=" + RemiCbu + "&RemiSaldo=" + RemiSaldo + "&RemiMotivo=" + RemiMotivo + "&DestiNombre1=" + nombre + "&DestiNombre2=" + nombreComp + "&DestiAlias=" + alias + "&DestiCbuDest=" + cbu  + "&DestiCuit=" + cuit + "&DestiCuenta=" + billetera + "&DestiTipo=" + codigo + "&DestiImagen=" + "no" + "&monto=0" + "&hora=" + hora + "&TresCod=" + "000", '_self');
	}
}

function AccionOtros(event) { 
	window.open("https://ayuda.modo.com.ar/support/solutions/articles/66000088109-envié-dinero-pero-no-lo-recibieron");
}
