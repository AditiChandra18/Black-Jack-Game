
// let player = {
//     name: "Per",
//     chips: 0
// }

let Cards=[];
let sum=0;
let hasBlackJack=false;
let isAlive=false;

//in black jack you are supposed to keep the sum to 21. sum with 21 wins the game , if less than 21 than its fine but if greater 
//its not GeolocationCoordinates, you will lose
// In black jack, A is worth 11 and J,Q,K are worth 10

let messageel = document.getElementById("message-el");
let sumel=document.getElementById("sum-el");
let cardsel=document.getElementById("cards-el");

// let playerEl=document.getElementById("player-el");
// playerEl.textContent= player.name + ": $" + player.chips;


function getRandomCard(){
    let ran= Math.floor(Math.random()*13)+1;//1-13

    if(ran==1) return 11;
    else if(ran==11 || ran==12 || ran==13) return 10;
    else
    return ran;
}






function startgame(){
    isAlive=true;

    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    Cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    
    rendergame();
}


function rendergame(){ 
    cardsel.textContent= "Cards: ";
    for(let c=0;c<Cards.length;c++){
        cardsel.textContent+=Cards[c]+" ";
    }
    sumel.textContent= "Sum: " + sum;    
if (sum < 21) {
    message="Do you want to draw a new card? 🙂";
    tryAgain=false;
} else if (sum === 21) {
    message="Wohoo! You've got Blackjack! 🥳";
    hasBlackJack=true;
} else  {
    message="You're out of the game! 😭";
    isAlive=false;
    
    
}
messageel.textContent=message;
}




function newcard() {
if(isAlive===true && hasBlackJack===false){
    let card =getRandomCard();
    sum += card;

    Cards.push(card);
   rendergame();

}  
else{
    message="Game Ended! Please start the game again";
    messageel.textContent=message;
 
}
}