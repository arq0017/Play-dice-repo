var scores , roundScore , activePlayer , gamePlayed; 
init();
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlayed){
      //1 . generate the random number
    var dice1 = Math.floor(Math.random()*6)+1;
	var dice2 = Math.floor(Math.random()*6)+1;
    //2. display result 
	displayBlock();
    var diceDon = document.querySelector('#dice-1') ; 
    diceDon.src='dice-'+dice1+'.png' ; 
	
	var diceDon = document.querySelector('#dice-2') ; 
    diceDon.src='dice-'+dice2+'.png' ; 
		
    if(dice1 !== 1 && dice2 !==1)
        {
            // add number to the current
    roundScore+=dice1+dice2; 
    document.querySelector('#current-'+activePlayer).textContent = roundScore ;        
        }
    else
        {
            nextPlayer();
        }   
    }
});
    document.querySelector('.btn-hold').addEventListener('click' , function(){
        if(gamePlayed){
         scores[activePlayer]+=roundScore ; 
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer] ;
        if(scores[activePlayer]>=50){
			displayNone();
            document.querySelector('#name-'+activePlayer).textContent = 'Winner';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gamePlayed = false;
			
        }
        else{
            nextPlayer();
        }    
        }
    });
document.querySelector('.btn-new').addEventListener('click',init );


function init(){
scores = [0,0] ; 
roundScore = 0 ; 
activePlayer = 0 ; 
gamePlayed = true ;
// random number 
displayNone() ; 

document.getElementById('score-0').textContent = '0' ; 
document.getElementById('score-1').textContent = '0' ; 
document.getElementById('current-0').textContent = '0' ; 
document.getElementById('current-1').textContent = '0' ; 
document.querySelector('#name-0').textContent='Player 1';
document.querySelector('#name-1').textContent='Player 2';
	
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');
}
function nextPlayer(){
    roundScore = 0 ;
    activePlayer === 0 ? activePlayer =1 : activePlayer = 0; 
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}



function displayBlock (){
	document.querySelector('#dice-1').style.display = 'block' ; 
	document.querySelector('#dice-2').style.display = 'block' ; 
}
function displayNone()	{
	document.querySelector('#dice-1').style.display = 'none' ; 
	document.querySelector('#dice-2').style.display = 'none' ; 
}












//document.querySelector('#score-' + activePlayer).textContent = dice ; 