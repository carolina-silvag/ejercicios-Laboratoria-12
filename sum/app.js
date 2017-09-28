/*crear una funcion que me de un arreglo con todos los numeros de rango*/

function rango(start, end){
	var arreglo = []
	for(var i = start; i<=end; i++){
		arreglo[i-1]= i
	}
	return arreglo
}

function sum(arreglo){
	var sumar = 0
	for (var i= 0; i<arreglo.length; i++){
		sumar += arreglo[i]
	}
	return sumar
}

console.log(sum(rango(1, 10)))
