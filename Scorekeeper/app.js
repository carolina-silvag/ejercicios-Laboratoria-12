var score = {carolina : 0, fernanda : 0}        //crear objeto yo y mi amiga

function sumarPuntaje(nombre, puntos){
	score[nombre] += puntos
}

function totalPuntos(){
	console.log(score)
}
