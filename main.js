var boxes = document.querySelectorAll(".box");

for(var i =0; i < boxes.length; i++){
	boxes[i].addEventListener("click", takeTurn)
}

function takeTurn(){
	console.log(this);
	this.innerHTML = "O"
}