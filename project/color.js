 let dy =document.querySelector("body"); 
 let bt = document.querySelectorAll(".bu");  

bt.forEach(function(b){
    
   b.addEventListener("click",function(e){
    
     if (e.target.id==="gray" ){
        dy.style.backgroundColor="gray"
     }
     if (e.target.id==="white" ){
        dy.style.backgroundColor="white"
     }
     if (e.target.id==="black" ){
        dy.style.backgroundColor="black"
     }
     if (e.target.id==="yellow" ){
        dy.style.backgroundColor="yellow"
     }
     if (e.target.id==="green" ){
        dy.style.backgroundColor="green"
     }
   })
 });

