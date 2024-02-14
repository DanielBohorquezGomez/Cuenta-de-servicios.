function control(){

	let energia = parseInt(document.getElementById("energia").value);
	let alcantarillado = parseInt(document.getElementById("alcantarillado").value);
	let agua = parseInt(document.getElementById("agua").value);
	let telefonia = parseInt(document.getElementById("telefonia").value);
	let otros = parseInt(document.getElementById("otros").value);

	let iva = 0.19;
	telefonia = telefonia + (telefonia * iva);

	if (!(/^[0-9]{3,15}$/.test(energia))) {

		alert("Valor Incorrecto\nDigite Solo Numeros\nMin 3 Max 15")
		return false;
	} else if (!(/^[0-9]{3,15}$/.test(alcantarillado))) {

		alert("Valor Incorrecto\nDigite Solo Numeros\nMin 3 Max 15")
		return false;
	} else if (!(/^[0-9]{3,15}$/.test(agua))) {

		alert("Valor Incorrecto\nDigite Solo Numeros\nMin 3 Max 15")
		return false;
	} else if (!(/^[0-9]{3,15}$/.test(telefonia))) {

		alert("Valor Incorrecto\nDigite Solo Numeros\nMin 3 Max 15")
		return false;
	} else if (!(/^[0-9]{3,15}$/.test(otros))) {

		alert("Valor Incorrecto\nDigite Solo Numeros\nMin 3 Max 15")
		return false;
	} else {
		let resultado = energia + alcantarillado + agua + otros + telefonia;
		alert("¡¡¡Validacion Correcta!!! "+" El total a pagar teniendo en cuenta que telefonia tiene un 19% de iva es de "+ resultado)
		return true;
	}
}
