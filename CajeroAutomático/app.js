var dineroCajero = {100:100, 50:50, 20:200, 10:300, 5:500, 1:800}
function cajeroAutomatico(dineroSolicitado){
	var dinero = dineroSolicitado
	var dineroEntregado ={100:0, 50:0, 20:0, 10:0, 5:0, 1:0}
	var cantidadDinero= 0
	while(dineroSolicitado >= 100 && dineroCajero[100]>0){
		dineroEntregado[100] += 1
		dineroCajero[100] -=1
		dineroSolicitado -= 100
		cantidadDinero += 1
	}
	while(dineroSolicitado>=50 && dineroCajero[50]>0){
		dineroEntregado[50] += 1
		dineroCajero[50] -=1
		dineroSolicitado -= 50
		cantidadDinero += 1
	}
	while(dineroSolicitado>=20 && dineroCajero[20]>0){
		dineroEntregado[20] += 1
		dineroCajero[20] -=1
		dineroSolicitado -= 20
		cantidadDinero += 1
	}
	while(dineroSolicitado>=10 && dineroCajero[10]>0){
		dineroEntregado[10] += 1
		dineroCajero[10] -=1
		dineroSolicitado -= 10
		cantidadDinero += 1
	}
	while(dineroSolicitado>=5 && dineroCajero[5]>0){
		dineroEntregado[5] += 1
		dineroCajero[5] -=1
		dineroSolicitado -= 5
		cantidadDinero += 1
	}
	while(dineroSolicitado>=1 && dineroCajero[1]>0){
		dineroEntregado[1] += 1
		dineroCajero[1] -=1
		dineroSolicitado -= 1
		cantidadDinero += 1
	}
	console.log('monto solicitado '+ dinero +' dólares.')
	console.log('se entregan '+ cantidadDinero +' billetes:')
	var llaves = Object.keys(dineroEntregado)
	for(var i= 0; i < llaves.length; i++){
		if (dineroEntregado[llaves[i]]!= 0){
			console.log(llaves[i] + ':' + dineroEntregado[llaves[i]])
		}
	}
	console.log('en el cajeron quedan:')
	console.log(dineroCajero)
}

