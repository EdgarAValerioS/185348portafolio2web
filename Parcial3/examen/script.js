// Esta es la función que verifica si una palabra o frase es un palíndromo o no
function palindromo(cadena) {
    // Inicializo la variable resultado con el mensaje que incluye la cadena original
    var resultado = "La frase \"" + cadena + "\"\n";
    
    // Convierto la cadena a minúsculas para hacer la comparación insensible a mayúsculas
    var cadenaOriginal = cadena.toLowerCase();
    
    // Separo la cadena en un array de caracteres
    var letrasEspacios = cadenaOriginal.split("");
    
    // Variable para almacenar la cadena sin espacios
    var cadenaSinEspacios = "";

    // Elimina los espacios de la cadena original
    for (var i in letrasEspacios) {
        if (letrasEspacios[i] !== " ") {
            cadenaSinEspacios += letrasEspacios[i];
        }
    }

    // Separo la cadena sin espacios en un array de caracteres
    var letras = cadenaSinEspacios.split("");
    
    // Creo un array con los mismos caracteres pero en orden inverso
    var letrasReves = cadenaSinEspacios.split("").reverse();
    
    // Variable para determinar si las cadenas son iguales
    var iguales = true;

    // Comparo las letras de la cadena original y la cadena invertida
    for (var i in letras) {
        if (letras[i] !== letrasReves[i]) {
            iguales = false;
            break; // Si encuentro una diferencia, salgo del bucle
        }
    }

    // Si son iguales, es un palíndromo; si no, no lo es
    if (iguales) {
        resultado += " es un palíndromo";
    } else {
        resultado += " no es un palíndromo";
    }

    // Devuelvo el resultado
    return resultado;
}

// Agrega un event listener al formulario para manejar el submit
document.getElementById('palindromo-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
    var frase = document.getElementById('frase').value; // Obtengo el valor del input
    var resultado = palindromo(frase); // Llamo a la función palindromo con la frase ingresada
    document.getElementById('resultado').textContent = resultado; // Muestro el resultado en la página
});

