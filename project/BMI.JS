let x =  document.querySelector("form");
x.addEventListener('submit',function(e){
    e.preventDefault()
   let y= parseInt(document.querySelector("#hight").value)
   let z= parseInt(document.querySelector("#weight").value)
   let result = document.querySelector("#result")

  if( y===""|| y<0 || isNaN(y)){
    result.innerHTML=`please enter a valid hight ${y} `
  }
 
   else if( z===""|| z<0 || isNaN(z)){
    result.innerHTML=`please enter a valid weight ${z}`
  }
 
  else{
   let BMI= (z/((y*y)/10000)).toFixed(2);
   result.innerHTML=`<span>${BMI}</span>`
  
   if (BMI<18){
   result.innerHTML+=`   you are under waited`
   }
   if (BMI >= 18.6 && BMI <= 24.9){
  result .innerHTML+=`  you are normal waited`
   }
   if (BMI>25){
   result.innerHTML+=`  you are  overwaited`
   }
  }
})