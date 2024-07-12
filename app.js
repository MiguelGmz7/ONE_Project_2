
let user_num;

let counter = document.querySelector("#counter"); // obtenemos el counter (ahora 0)


let list = [];

let play_num = genNumSecreto();

let boton = document.querySelector("#nuevo");

function play(){ // funcion principal
    user_num = parseInt(document.querySelector("#valor_usuario").value); // obtenemos el valor del input
    console.log(play_num); //revisar el contenido de la lista
    console.log(list); 

    if (user_num > 10 || user_num < 1 || !user_num) { // revisamos si esta en nuestro rango

        // si no lo esta, borramos este numero, por lo tanto no existe
        const input  = document.querySelector("#valor_usuario");
        input.value = "";
        alert("Ingresa un numero valido entre 1 y 10");

    } else {
        // aqui comprobamos si el numero secreto es igual al numero de usuario

        if (user_num == play_num){
            printParagraph("Felicidades, atinaste el numero", "gold");
            printDrawnNumbers();
            boton.setAttribute('disabled','true');
        } else if (user_num > play_num){
            printParagraph("Lo siento, el numero es menor", "red");
            //counter.textcontent nos permite modificar el contador (ahora 0) y sumarle un intento mas
            counter.textContent = parseInt(counter.textContent) + 1;

        } else {
            printParagraph("Lo siento, el numero es mayor", "blue");
            counter.textContent = parseInt(counter.textContent) + 1;
        }
    }
}

function erase(){
    // esta opcion reinicia el juego 
    alert("El numero secreto ha sido cambiado")
    const input  = document.querySelector("#valor_usuario");
    input.value = "";
    counter.textContent = 0;
    printParagraph("Indica un número secreto entre 1 y 10", "white");
    play_num = genNumSecreto();
    boton.removeAttribute('disabled');
}

function genNumSecreto(){
    let secret_num = Math.floor((Math.random() * 10)) + 1; // tenemos un valor aletorio entre 1 y 10
    if (list.includes(secret_num)) {
        return genNumSecreto();
    } else {
        list.push(secret_num);
        return secret_num;
    }
}

function printDrawnNumbers(){
    let drawnlist = document.querySelector("#list");
    let string = "";
    
    for (i = 0; i < list.length; i++){
        string += list[i].toString() + ", ";
    }
    drawnlist.textContent = string;
}

function printParagraph(string, color){
    let p = document.querySelector(".texto__parrafo");
    p.textContent = string;
    p.style.color = color; //nos ayuda a cambiar el color 
}