
let userId = document.querySelector("#userIdentity")
let age = document.querySelector("#userAge")
let distance = document.querySelector("#userDistance")
let button = document.querySelector("#btn")
let prezzo = document.querySelector("#result")
let offerta = document.querySelector("#offer")
let identità = document.querySelector("#identity")

age.className="red"
userId.className="red"
distance.className="red"

 button.addEventListener("click",
 function(){
    let fullPrice = distance.value*0.21
    let price;
 
    identità.innerHTML = userId.value
    if(age.value < 18){
        price = fullPrice - ((20/100) * fullPrice);
        prezzo.innerHTML = price.toFixed(2);
        offerta.innerHTML="Ridotto 20%"

    } else if(age.value > 65){
       price = fullPrice - ((40/100) * fullPrice);
       prezzo.innerHTML = price.toFixed(2);
       offerta.innerHTML="Ridotto 40%"
       
    } else{
      price = fullPrice;
       prezzo.innerHTML = price.toFixed(2);
       offerta.innerHTML="Biglietto standard"
    } 
    
 }
 )

   
 