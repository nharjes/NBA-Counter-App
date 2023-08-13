let countHome = document.getElementById("home-score")
let countGuest= document.getElementById("guest-score")
let homescore= 0
let guestscore= 0

function add1(){
    homescore += 1
    countHome.textContent = homescore
   }
   function add2(){
       homescore += 2
       countHome.textContent = homescore
   }
    function add3(){
       homescore += 3
       countHome.textContent = homescore
   }
   //guestscore
   
   function add1Guest(){
    guestscore += 1
    countGuest.textContent = guestscore
   }
   function add2Guest(){
       guestscore += 2
       countGuest.textContent = guestscore
   }
    function add3Guest(){
       guestscore += 3
       countGuest.textContent = guestscore
   }
   
   function reset (){
    countHome.textContent = 0
    countGuest.textContent = 0
     homescore= 0
     guestscore= 0 
    
    
   }