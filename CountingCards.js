var count = 0;

function cc(card) {
  // Only change code below this line
  if(card>=2 && card<=6){
    count = count+1;
  }
  else if(card>6 && card<=9){
    count = count+0;
  }
  else{
    count = count-1;
  }

  if(count>0){
    return count+" Bet";
  }
  else{
      return count +" Hold"
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
