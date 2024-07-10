const secret_num = Math.floor((Math.random() * 10)) + 1;
let user_num;

function play(){ // funcion principal
    user_num = parseInt(document.querySelector("#valor_usuario").value); // obtenemos el valor del input

    if (user_num > 10 || user_num < 1 || !user_num) { // revisamos si esta en nuestro rango
        erase(); // si no lo esta, borramos este numero, por lo tanto no existe
        alert("Ingresa un numero valido entre 1 y 10");

    } else {
        alert(user_num);
    }
}

function erase(){
    const input  = document.querySelector("#valor_usuario");
    input.value = "";
}
