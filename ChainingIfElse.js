function testSize(num) {
    // Only change code below this line
  if(num<5){
    return "Tiny";
  }
  else if(num<10 && num>=5){
    return "Small";
  }
  else if(num<15 && num>=10){
    return "Medium";
  }
  else if(num>=15 && num<20){
    return "Large";
  }
  else{
    return "Huge";
  }
  
  
    // Only change code above this line
  }
  
  testSize(7);
