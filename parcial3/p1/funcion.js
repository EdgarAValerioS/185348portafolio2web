function multi(){
	var num; 
	num=prompt('Ingresa un numero(1-10)','');
	num=parseInt(num);
	var x=1;
	for (x=1;x<=10;x++){
		tabla=num*x;
		document.write(num," x ",x," = ",tabla," <br>");
	}
}
