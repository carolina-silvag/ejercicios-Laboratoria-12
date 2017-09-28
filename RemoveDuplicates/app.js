
function remove(array){
	var arrayModificado=[]
	for(var i = 0; i < array.length; i++){
		if(array.indexOf(array[i]) != -1 && arrayModificado.indexOf(array[i]) == -1){
			arrayModificado.push(array[i])
		}
	}
	console.log(arrayModificado)
}
