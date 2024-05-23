function genera_rfc() {
    var nombre = document.getElementById("nombre").value.charAt(0).toUpperCase();
    var paterno = document.getElementById("ap").value.substring(0,2).toUpperCase();
    var materno = document.getElementById("am").value.charAt(0).toUpperCase();
    var anio = document.getElementById("anio").value.substring(2,4);
    var mes = document.getElementById("mes").value.substring(0,2);
    var dia = document.getElementById("dia").value.substring(0,2);

    var rfc=paterno + materno + nombre + anio + mes + dia;
     document.getElementById("resultado").value = rfc;
}