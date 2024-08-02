//  function fn(n){
//     if(n===0){
//         return 1;

//     }
//     else{
//        return  n*fn(n-1);
//     }
//  }
//  let n=4
//  console.log(`The factorial of ${n} is ${fn(n)}`);


 function range(start, end){
      if(end<=start){
        return  [];
       
      }else{
       let number= range( start,end -1);
         number.push(end)
         return number
      }
 }
//  console.log(range(0,5))
 
//  function fabonachi(n){
//   if (n===0 || n===1){
//    return n;
//   }else{
//     return  fabonachi(n-1) + fabonachi(n-2)

//   }
//  }
//  console.log(fabonachi(5))

// function palindrom(x){
//     if(x===x ){
//      return true
//     }else{
//         return false
//     }
// }
// console.log(palindrom(10))

// function palindrome(n) {
//     let s = n.toString();
//     if (s.length <= 1) return true;
//     if (s[0] === s[s.length - 1]) {
//       return palindrome(s.slice(1,-1));
//     } else {
//       return false;
//     }
//   }
//   console.log( palindrome(121))


//   function sumOfElements(arr){
//     if(arr.length===1) return arr[0];

//     return arr[0] + sumOfElements(arr.slice(1))
// }

// console.log(`The sum of array:- ${[1,2,4,5,7]} is ${sumOfElements([1,2,4,5,7])}`)
// console.log(`The sum of array:- ${[100,200,45,51,37]} is ${sumOfElements([100,200,45,51,37])}`)


// function arr(x){
   
//     if(x.length===1) return x[0]
//     return  x[0]+ arr(x.slice(1))    
// }
// console.log(arr([1,2,3]))



// function maxElem(arr){
//     if(arr.length===1) return arr[0];
//     let max = arr[0];
    
//     if(maxElem(arr.slice(1))>max){
//         max = maxElem(arr.slice(1));
//         return max;
//     }
//     else{
//         return max;
//     }
// }

// console.log(`The max of ${[100,20,34]} is ${maxElem([100,20,34])}`);
// console.log(`The max of ${[100,20,34]} is ${maxElem([230,920,54])}`);;



// function maxElem() {
//     // Declare the array inside the function
//     let arr = [100, 20, 34];

//     // Helper function to find the maximum element
//     function findMax(arr) {
//         if (arr.length === 1) return arr[0];
//         let max = arr[0];
        
//         if (findMax(arr.slice(1)) > max) {
//             max = findMax(arr.slice(1));
//             return max;
//         } else {
//             return max;
//         }
//     }

//     // Call the helper function with the array
//     return findMax(arr);
// }

// console.log(`The max of the array is ${maxElem()}`);




// function reverse(str){

//     if(str === ""){
//         return "";
//     }else return reverse(str.substr(1)) + str.charAt(0)
// }
// console.log(reverse("hello"))