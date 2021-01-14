//PASOS PARA CONFIGURAR UN CLIENTE CON JS PURO DE UN API REST
//PASOS PARA CONSUMIR UN API REST UTILIZANDO JS

//1. Conocer la URL(endpoint) del API y almacenarla en una variable
let url = "https://api.spotify.com/v1/artists/2ye2Wgw4gimLv2eAKyk1NB/top-tracks?market=US";

//1.1 Definir variables auxiliares del mensaje si es necesario
let token = "Bearer BQBzXR5KPdRSyzhjeL_MmxYk9LDAjvbS-zIOXPEyS5ZHnS989gQ3asLe87Y-vedabqpYm9M-HlfN2iawrOOlynA7tQwBJ96VgTghxdLgkfkZ_Dlnh4uXSkpSgp-fmCXHE5uaw7JuDSdBfCfXwbw";


//2. Configurar los parametros de envio
//Objeto de JS que almacene metodoHTTP,headers y body
let parametros = {

    method: "GET",
    headers: { Authorization: token }
}

//3. Establecer la comunicación con el API utilizando el metodo fetch()
fetch(url, parametros)
    .then(respuesta => respuesta.json())
    .then(datos => console.log(datos));