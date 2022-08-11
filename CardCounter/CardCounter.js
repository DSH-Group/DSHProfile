let count = 0;
let newCount = 0;
let holdBet = ""

function cc(card, deckNumber) {

  //The math for counting cards
 for (let i = 0; i < card.length; i++) {
  if (card[i] >= 2 && card[i] <= 6){
    count = count + 1;
    
  } 
  if (card[i] >= 7 && card[i] <= 9) {
    count = count;
    
  }
  switch (card[i]) {
    case 10:
    case 'J': 
    case 'Q':
    case 'K': 
    case 'A':
    count = count - 1;
    break;
  }
 }
 



  // Bet type
  if (count >= 4 && count >= 5){
    holdBet = "Bet Amount: Low"
  }
  if(count >= 6 && count <=8){
    holdBet = "Bet Amount: Mid"
  }
  if (count >= 9){
    holdBet = "Bet Amount: High"
  }
  if (count <= 4 && count >= 2){
    holdBet = "Bet Type: Hold"
  }
  if (count <= 1){
    holdBet = "Bet Type: Fold or Hold"
  }
  if (count <= 0){
    holdBet = "Bet Type: Fold"
  }
  if (deckNumber == undefined){
    holdBet = holdBet
  }




  return holdBet + nc(count, deckNumber)
}

// what to do when you have multiple decks in play
function nc(fCount, deckNum){
  if (deckNum > 1){
    newCount = fCount / deckNum  
  } 
  if (deckNum == undefined){
    return "Please specify the number of decks used."
  } else newCount = fCount
  
  return ", Final Count: " + newCount;
}

console.log(cc([2,2,2,2,3], 1))
