let secret_num = Math.floor((Math.random() * 10)) + 1;
let user_num;

function play(){ // funcion principal
    user_num = parseInt(document.querySelector("#valor_usuario").value); // obtenemos el valor del input

    if (user_num > 10 || user_num < 1 || !user_num) { // revisamos si esta en nuestro rango
        // si no lo esta, borramos este numero, por lo tanto no existe
        const input  = document.querySelector("#valor_usuario");
        input.value = "";
        alert("Ingresa un numero valido entre 1 y 10");

    } else {
        // alert(user_num);
        if (user_num == secret_num){
            alert("Felicidades, atinaste el numero");
        } else if (user_num > secret_num){
            alert("Lo siento, el numero es menor");
        } else {
            alert("Lo siento, el numero es mayor")
        }
    }
}

function erase(){
    secret_num = Math.floor((Math.random() * 10)) + 1;
    alert("El numero secreto ha sido cambiado")
    const input  = document.querySelector("#valor_usuario");
    input.value = "";
}
