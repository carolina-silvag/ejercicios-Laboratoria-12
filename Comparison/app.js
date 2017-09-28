
/*function comparar(array1, array2){                   //primera manera en como lo pense
	if (array1.length == array2.length){
		var comprobar= 0
		for(var i= 0; i < array1.length; i++){
			if (array1[i]!=array2[i]){
				comprobar += 1
			}
		}
		if (comprobar == 0){
			return true
		}else{
			return false
		}

	}else{
		return false
	}
	
}*/

function comparar(array1, array2){
	var comprobar= 0
	for(var i= 0; i < array1.length; i++){
		if (array1[i]!=array2[i]){
				comprobar += 1
		}
	}
	if (comprobar == 0){
		return true
	}else{
		return false
	}
}
