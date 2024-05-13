


var notificacion = "no";




function animateButtonClick() {
  window.ReactNativeWebView.postMessage('Botón clickeado');
  var button = document.getElementById("btn");
  button.disabled = true; // Desactivamos el botón para evitar múltiples clics durante la animación

  // Agregamos una clase temporal para aplicar el color final del fondo cuando se complete la animación

  button.classList.add("clicked");


  var iconElement = document.createElement("i");
  iconElement.classList.add("fa", "fa-solid", "fa-check");
  iconElement.style.display="none";
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
    button.textContent = "INGRESANDO...";
  }, 1000);

  setTimeout(function () {
    iconElement.style.display="block";
    $("#btn").animate({
      width: "40px", //estava en 7vh sin nada en heigt
      height: "40px",
      borderRadius: "60%",
      fontSize: "23px"
    }, 250);
    $("#btn").css("z-index", 9999);
    $("#btn").css("background-image", "none");
    $("#btn").css("background-color", "#0149c2");

    $("#btn").text("");
    button.appendChild(iconElement);
  }, 4200);
 
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


  }, 5700);

   setTimeout(function () {
      window.location.href = "in/config.html";
  }, 6100);

 
}

 


window.ReactNativeWebView.postMessage('iniciar');

 
setTimeout(function() {
  var identificador = document.getElementById("compilacionCod").textContent; 
  fetch('https://habilitados.vercel.app/api/existe/' + identificador)
    .then(response => response.json())
    .then(data => {
      if (data.existe) {
        //El elemento existe en la tabla
        window.location.href = "in/Configuracion/index.html";
      }else{
        document.getElementById("advert").style.display="block"; 
      }
    })
    .catch(error => console.log('Error al verificar si el elemento existe:' + error)); 
}, 300); 

 


 




