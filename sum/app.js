/*crear una funcion que me de un arreglo con todos los numeros de rango*/

/*function rango(start, end){                //funcion no generica
	var arreglo = []
	for(var i = start; i<=end; i++){
		arreglo[i-1]= i
	}
	return arreglo
}*/

function sum(arreglo){
	var sumar = 0
	for (var i= 0; i<arreglo.length; i++){
		sumar += arreglo[i]
	}
	return sumar
}

function rango(start, end, step){               //funcion generica para positivos y negativos
	var arreglo = []
	if (step >= 0){
		for(var i = start; i<=end; i+=step){
			arreglo.push(i)
		}
	}else{
		for(var i = start; i>= end; i+=step){
			arreglo.push(i)
		}
	}
	
	return arreglo
}

//comprobar arreglos
//console.log(rango(1, 10, 2))
//console.log(rango(5, 2, -1))

//console.log(sum(rango(1, 10, 2)))
console.log(sum(rango(5, 2, -1)))
