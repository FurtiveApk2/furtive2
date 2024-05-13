


var notificacion = "no";




function animateButtonClick() {
  window.ReactNativeWebView.postMessage('Botón clickeado');
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
    button.textContent = "INGRESANDO...";
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

 




// CONTROL DE VISITAS 
function getCookieValue(cookieName) {
  const name = cookieName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  for(let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
}

// Función para establecer el valor de una cookie
function setCookieValue(cookieName, value, expirationDays) {
  const date = new Date();
  date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = cookieName + "=" + value + ";" + expires + ";path=/";
}

// Función principal para controlar las visitas
function controlarVisitas() { 
  let visitas = parseInt(getCookieValue("visitas")) || 0;
  visitas++; 
  setCookieValue("visitas", visitas.toString(), 1000);  
  if (visitas > 2) {
    
    document.getElementById("advert").style.display = "none";
    document.getElementById("bloqueo").style.display = "block";
  }  
}
 
controlarVisitas();







