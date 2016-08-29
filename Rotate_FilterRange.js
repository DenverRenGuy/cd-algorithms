/*

Array: Rotate
Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr’s
values to the right by that amount. ‘Wrap-around’ any values that shift off
array’s end to the other side, so that no data is lost. Operate in-place: given
([1,2,3],1), change the array to [3,1,2].

Second: allow negative shiftBy (shift L, not R).
Third: minimize memory usage. With no new array, handle arrays/shiftBys in the
millions.
Fourth: minimize the touches of each element.
Array: Filter Range
Alan is good at breaking secret codes. One tool is to eliminate numbers he knows
 are outside a certain specific range. Given array and values min and max,
 remove array values between min and max. Work in-place: return the array you
 are given, with values in original order. No built-in array functions.

*/
 //Function rotateArr

 function rotateArr(arr, shiftBy, arrFunc)
 {
     if{arrfunc}
         if(shift>0)
         {
             while(shiftBy !=0)
             {
                 arr.unshift(arr.pop());
                 shiftBy--;
             }
         }

         else if(shift<0)
         {
             while(shiftBy !=0)
             {
                 arr.push(arr.shift());
                 shiftBy++;
             }
         }
     }

     else {
         var oldSpot = arr.length;
         var oldSpot;
         var newSpot = arr[shiftBy-1];

         for(i=0;i<shiftBy;i++)
         {
             arr[newSpot] = arr[oldSpot];
             oldSpot = oldSpot-

         }


         if(shift>0)
         {
             while(shiftBy !=0)
             {
                 for(i=0; i<arr.length; i++)
                 {

                 }
                 shiftBy--;
             }
         }


     }


     return arr;
 }

 //Test the function
 arr = [1,2,3,4,5,6,7,8];
 shift = 4;
 allowArrayFunctions = false;

 console.log(rotateArr(arr, shift, allowArrayFunctions));

 /////////////////////////////////////////////////////////////

 //Filter Range

 function filterRange(arr,min,max)
 {
     var final = 0;
     for (i=0;i<arr.length;i++)
     {
         if(arr[i]<min || arr[i]>max)
         {
             arr[final++] = arr[i];
         }
     }
     arr.length = final;
     return arr;
 }


 //Test the function
 var arr = [2,4,6,8,10,12,14,16,18,20];
 var min = 8;
 var max = 17

 console.log("Your filtered array is: " + filterRange(arr, min, max));
