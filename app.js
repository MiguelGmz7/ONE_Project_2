let secret_num = Math.floor((Math.random() * 10)) + 1; // tenemos un valor aletorio entre 1 y 10

let user_num;

let counter = document.querySelector("#counter"); // obtenemos el counter (ahora 0)

function play(){ // funcion principal
    user_num = parseInt(document.querySelector("#valor_usuario").value); // obtenemos el valor del input

    if (user_num > 10 || user_num < 1 || !user_num) { // revisamos si esta en nuestro rango

        // si no lo esta, borramos este numero, por lo tanto no existe
        const input  = document.querySelector("#valor_usuario");
        input.value = "";
        alert("Ingresa un numero valido entre 1 y 10");

    } else {
        // aqui comprobamos si el numero secreto es igual al numero de usuario

        if (user_num == secret_num){
            alert("Felicidades, atinaste el numero");
        } else if (user_num > secret_num){
            alert("Lo siento, el numero es menor");
            //counter.textcontent nos permite modificar el contador (ahora 0) y sumarle un intento mas
            counter.textContent = parseInt(counter.textContent) + 1;
        } else {
            alert("Lo siento, el numero es mayor")
            counter.textContent = parseInt(counter.textContent) + 1;
        }
    }
}

function erase(){
    // esta opcion reinicia el juego 
    secret_num = Math.floor((Math.random() * 10)) + 1;
    alert("El numero secreto ha sido cambiado")
    const input  = document.querySelector("#valor_usuario");
    input.value = "";
    counter.textContent = 0;
}
