function sum(arr, n) {
    // Only change code below this line
    var s=0;
    if(n<=0){
      return 0;
    }
    else if(n==1){
      return arr[0];
    }
    else{
      return sum(arr,n-1) + arr[n-1];
    }
    return s;
    // Only change code above this line
  }
