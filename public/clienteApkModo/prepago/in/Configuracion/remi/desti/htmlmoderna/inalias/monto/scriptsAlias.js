 
document.getElementById("data").addEventListener("click", function () {
	const aliasPantalla = document.getElementById('content');
	const montoPantalla = document.getElementById('content2');
	if (aliasPantalla.style.display === 'block') {
		// Si está visible, ocúltala
		aliasPantalla.style.display = 'none';
		// Muestra la pantalla de Monto
		montoPantalla.style.display = 'block';
		
		} else {
		// Si no está visible, oculta la pantalla de Monto
		montoPantalla.style.display = 'none';
		// Muestra la pantalla de Alias
		aliasPantalla.style.display = 'block';
	}
	
});

