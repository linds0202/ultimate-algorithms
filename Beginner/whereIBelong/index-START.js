/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/


//using for loop
function whereIBelong(arr, num) {
   arr.sort((a, b) => a - b)

   for(let i = 0; i < arr.length; i++) {
      if(arr[i] >= num) {
         return i
      }
   }

   return arr.length
}

//using for loop to find # of lesser values FASTEST BY A LOT
function whereIBelong(arr, num) {
   let counter = 0

   arr.sort((a, b) => a - b)

   for (let i = 0; i < arr.length; i++) {
      if(arr[i] < num) {
         counter++
      }
   }

   return counter
}

//using a while loop
function whereIBelong(arr, num) {
   arr.sort((a, b) => a - b)
   let counter = 0

   while (arr[counter] < num) {
      counter++
   }

   return counter
}

//using indexOf() & push()
function whereIBelong(arr, num) {
   arr.push(num)
   arr.sort((a, b) => a - b)
   return arr.indexOf(num)
}

module.exports = whereIBelong