

var playerChosen = false;
var enemyChosen = false;
var chosenCharacter
var enemy
var chosenEnemy


$(document).ready(function(){

//$(selector).action()
//$(where you want it to go).action(variable)

$(".character").on("click", function() {

	//
	if (playerChosen == false){
		playerChosen = true;

		chosenCharacter = $(this);
		$("#box2").append(chosenCharacter);	

		enemy = $('.character').not(this);
		$("#box3").append(enemy);

	}else if(enemyChosen == false && playerChosen == true){
		enemyChosen = true

		chosenEnemy = $(this);
		$("#box2").append(chosenEnemy);	

	}



}); 
	}); 
 