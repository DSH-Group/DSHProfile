let count = 0;
let deckCount = 0

function cc(card) {

 if (card >= 2 && card <= 6){
    count = count++;
    
  }
  if (card >= 7 && card <= 9) {
    count = count;
    
  }
  switch (card) {
    case 10:
    case 'J': 
    case 'Q':
    case 'K': 
    case 'A':
    count = count--;
    break;
  }

var holdBet

if (count >= 4 && count >= 5){
  holdBet = "Bet Low"
}
if(count >= 6 && count <=8){
  holdBet = "Bet Mid"
}
if (count >= 9){
  holdBet = "Bet High"
}
if (count <= 4 && count >= 2){
  holdBet = " Hold"
}
if (count <= 1){
  holdBet = " Fold or Hold"
}
if (count <= 0){
  holdBet = "Fold"
}

return count + holdBet
  
}

function dc(deckNumber){
  var newCount
  if (deckCount >=1){
    newCount = count / deckCount  
    return newCount
  }

  return newCount
}

