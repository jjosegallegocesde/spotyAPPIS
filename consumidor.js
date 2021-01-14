//PASOS PARA CONFIGURAR UN CLIENTE CON JS PURO DE UN API REST
//PASOS PARA CONSUMIR UN API REST UTILIZANDO JS

//1. Conocer la URL(endpoint) del API y almacenarla en una variable
let url = "https://api.spotify.com/v1/artists/2ye2Wgw4gimLv2eAKyk1NB/top-tracks?market=US";

//1.1 Definir variables auxiliares del mensaje si es necesario
//let token = "Bearer BQBzXR5KPdRSyzhjeL_MmxYk9LDAjvbS-zIOXPEyS5ZHnS989gQ3asLe87Y-vedabqpYm9M-HlfN2iawrOOlynA7tQwBJ96VgTghxdLgkfkZ_Dlnh4uXSkpSgp-fmCXHE5uaw7JuDSdBfCfXwbw";

//1.1.1 Identificar la URL del servicio que nos entregara el TOKEN
let urlPOST = "https://accounts.spotify.com/api/token";

//1.1.2 Definimos parametros
let llave1 = "grant_type=client_credentials";
let llave2 = "client_id=237db8249664421f92206f06294930f8";
let llave3 = "client_secret=1a54c8d32ce9458fbab7dafabf02cdf9";

let parametrosPOST = {
    method: "POST",
    headers: { "Content-Type":   'application/x-www-form-urlencoded' },
    body: `${llave1}&${llave2}&${llave3}`
}

//1.1.3 Utilizar fetch para conectarnos con el API
fetch(urlPOST, parametrosPOST)
    .then(respuesta => respuesta.json())
    .then(datos => obtenerToken(datos));

function obtenerToken(datos) {
    let token = datos.token_type + " " + datos.access_token;
    console.log(token);
}


//2. Configurar los parametros de envio
//Objeto de JS que almacene metodoHTTP,headers y body
/*let parametros = {

    method: "GET",
    headers: { Authorization: token }
}*/

//3. Establecer la comunicación con el API utilizando el metodo fetch()
/*fetch(url, parametros)
    .then(respuesta => respuesta.json())
    .then(datos => console.log(datos));*/