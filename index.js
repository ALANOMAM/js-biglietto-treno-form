

let age = document.querySelector("#userAge")
let distance = document.querySelector("#userDistance")
let button = document.querySelector("#btn")

 let price;


 button.addEventListener("click",
 function(){
    let fullPrice = distance.value*0.21
    let price;
 
    if(age.value < 18){
        price = fullPrice - ((20/100) * fullPrice);
        console.log(price);
    } else if(age.value > 65){
       price = fullPrice - ((40/100) * fullPrice);
       console.log(price);
       
    } else{
      price = fullPrice;
       console.log(price);
    } 
    
 }
 )

   
 