

var playerChosen = false;
var enemyChosen = false;
var chosenCharacter
var enemy
var chosenEnemy


$(document).ready(function(){

//$(selector).action()
//$(where you want it to go).action(variable)

$(".character").on("click", function() {

	//neither character or enemy has been chosen 
	if (playerChosen == false){
		playerChosen = true;

		chosenCharacter = $(this);
		$("#uno").append(chosenCharacter);	

		enemy = $('.character').not(this);
		$("#box3").append(enemy);

	//player is chosen + enemy is not chosen 
	}else if(enemyChosen == false && playerChosen == true){
		enemyChosen = true

		chosenEnemy = $(this);
		$("#tres").append(chosenEnemy);	

	}



}); 
	}); 
 