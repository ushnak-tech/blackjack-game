let sum=0;
let hasblackjack=false;
let isAlive=false;
let message="";
let cardsarray=[]
let player={
    name:'Ushna',
    chips:145
}

let messageEl=document.getElementById("message-el")
// let sumEl=document.getElementById("sum")
let sumEl=document.querySelector("#sum")   //so this isyet another method of getting element(using# to tell the selector is an ID)
let cardsEl=document.getElementById("cards")
let bidEl=document.getElementById("bid")

bidEl.textContent= player.name + "  : $" + player.chips



function renderCard(){
    let randomNumber=Math.floor(Math.random()*13+1)
    if(randomNumber===1){
    return 11
    }
    else if(randomNumber>10){
        return 10
    }
    else{
        return randomNumber
    }

}



function gamestart(){

    isAlive=true
    let firstCard=renderCard(); 
    let secondCard=renderCard();
    sum=firstCard+secondCard
    cardsarray=[firstCard,secondCard]
    rendergame();
}


function rendergame(){
    cardsEl.textContent='Cards: '

   for(let i=0;i<cardsarray.length;i++){
       cardsEl.textContent+=cardsarray[i]+" ";
   }

    sumEl.textContent="Sum: "+ sum


if (sum < 21){
    message="Do you wanna pull another card "
}
else if(sum===21){
    message="You have found a Blackjack "
 hasblackjack=true;
    isAlive=false;
}
else if(sum>21){
    message="Sorry Bud you are out of the game "
    isAlive=false;
}
messageEl.textContent=message;


}


function newcard(){
    console.log("new card was pressed")
    
    if(isAlive || hasblackjack===false){

        let card=renderCard();
    sum+=card;
    cardsarray.push(card)
    rendergame()
}
   if(cardsarray){
       console.log("start the game")
   }

}



