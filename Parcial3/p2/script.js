console.log("hola mundo xd");

function evalua(){
	var cadena = document.getElementById("cadena").value;

	if(cadena==cadena.toUpperCase()){
        document.getElementById("parrafo").innerHTML="la cadena es solo mayusculas";
    }else if(cadena==cadena.toLowerCase()){
        document.getElementById("parrafo").innerHTML="la cadena es solo minusculas";
    }else{
        document.getElementById("parrafo").innerHTML="la cadena es ambas";
    }
}