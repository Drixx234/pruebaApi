const API_URL = "https://retoolapi.dev/Z2SnCg/data"


//funcion que manda a traer el JSON 
async function ObtenerPersonas() {
    //respuesta de servidor 
    const res = await fetch(API_URL); 

    //pasamos el JSON a la respuesta del servidor 
    const data = await res.json();

    //enviamos el JSON que nos manda la API en la funcion que crea la tabla HTML
    mostrardatos(data)
}

function mostrardatos(datos){
    //se llama al tbdoy dentro del elemento con ID "tabla"
    const tabla  = document.querySelector('#tabla tbody')
    tabla.innerHTML = ''; //vaciamos el contenido de la tabla 

    datos.forEach(persona => {
        tabla.innerHTML += `
            <tr>
                <td>${persona.id}</td>
                <td>${persona.Nombre}</td>
                <td>${persona.Apellido}</td>
                <td>${persona.Email}</td>
                <td>${persona.Edad}</td>
                <td>
                    <button>Editar</button>
                    <button>Eliminar</button>
                </td>

            </tr>
        `
    });
}

//llamada inicial para que se carguen los datos que viene del servidor
ObtenerPersonas();