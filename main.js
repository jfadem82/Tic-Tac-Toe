var turnCount = 0;
var boxes = document.querySelectorAll(".box");

for(var i =0; i < boxes.length; i++){
	boxes[i].addEventListener("click", takeTurn)
}

function takeTurn(){
	if(!this.innerHTML){
			if(turnCount % 2 === 0){
				this.innerHTML = "X";
			} else {
				this.innerHTML = "O";
			}
			turnCount++;
			
		}
}