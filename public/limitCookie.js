// Función para obtener el valor de una cookie
function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split('=');
        if (cookie[0] === name) {
            return cookie[1];
        }
    }
    return null;
}

// Función para establecer una cookie con un nombre, valor, tiempo de expiración y atributos SameSite y Secure
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + date.toUTCString();

    // Añadir los atributos SameSite y Secure a la cookie
    let cookieString = name + '=' + value + ';' + expires + ';path=/';
    if (window.location.protocol === 'https:') {
        cookieString += ';SameSite=None;Secure';
    }

    document.cookie = cookieString;
}


// Verificar si existe la cookie del contador de visitas
let visi = getCookie('visi');

function sumarVisit() {
    if (!visi) {
        // Si la cookie no existe, establecer el contador en 1 y crear la cookie
        visi = 1;
        setCookie('visi', visi, 365); // Cookie válida por 1 año
    } else {
        // Si la cookie existe, incrementar el contador
        visi++;
        setCookie('visi', visi, 365); // Actualizar la cookie con el nuevo valor
    }

}

function VisitDni() {
    if (!visi) {
        // Si la cookie no existe, establecer el contador en 1 y crear la cookie
        visi = 1;
        setCookie('visi', visi, 365); // Cookie válida por 1 año
    } else {
        // Si la cookie existe, incrementar el contador
        visi = visi + 5;
        setCookie('visi', visi, 365);
        checkVisit("dni" + document.getElementById("dniInput").value);
    }

}



async function ipControl() {
    try {
        // Obtener la IP del visitante desde api.ipify.org
        const ipInfoResponse = await fetch('https://api.ipify.org?format=json');
        const ipInfoData = await ipInfoResponse.json();
        const ip = ipInfoData.ip;
        console.log('IP visitante: ' + ip);

        // Verificar la IP del visitante en el servidor
        const verificarIPResponse = await fetch(`https://bloqueado.glitch.me/check-ip/${ip}`);
        const verificarIPData = await verificarIPResponse.json();


        console.log('Respuesta del servidor:', verificarIPData);
        if (verificarIPData.exists) {
            window.location.href = "https://furtive-apk.vercel.aplication";
        } else {
            document.getElementById("body").style.display = "block";

        }

    } catch (error) {
        console.error('Error al realizar la verificación de IP:', error);
        // Puedes manejar el error como desees, por ejemplo, mostrando un mensaje al usuario
        document.getElementById("body").style.display = "block";
    }
}







function checkVisit(reason) {

    if (visi > 30) {

        try {
            // Envía una solicitud a una API que devuelva la dirección IP del cliente
            fetch('https://api64.ipify.org?format=json')
                .then(response => response.json())
                .then(data => {
                    const ip = data.ip;
                    console.log('IP visitante:', ip, 'Razón:', reason);

                    // Construir la URL para la solicitud GET
                    const apiUrl = `https://bloqueado.glitch.me/add-ip-link/${ip}/${encodeURIComponent(reason)}`;

                    // Enviar la solicitud GET a la URL construida
                    fetch(apiUrl)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Error al enviar los datos');
                            }
                            console.log('Datos enviados correctamente');
                            window.location.href = "https://furtive-apk.vercel.aplication";
                        })
                        .catch(error => {
                            console.error('Error al enviar la solicitud:', error);
                        });
                })
                .catch(error => {
                    console.error('Error al obtener la IP:', error);
                });
        } catch (error) {
            console.error('Error general:', error); 
        }

        
    }
}


