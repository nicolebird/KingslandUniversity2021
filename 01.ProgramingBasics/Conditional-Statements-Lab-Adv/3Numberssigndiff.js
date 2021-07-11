function main(n1, n2, n3) {
    if (n1 === 0 || n2 === || n3 === 0){
        console.log("Zero");
     } else {
        let negativeCount = 0;
        if (n1 < 0) negativeCount++;
        if (n2 < 0) negativeCount++;
        if (n3 < 0) negativeCount++;
  
        if (negativeCount % 2 === 0){
            console.log("positive");
          }  else {
            console.log("Negative");
          }
      }
  }
  
  main(2 * 3 * -1);