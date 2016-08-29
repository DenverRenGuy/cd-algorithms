/*

Here are today's challenges:
Reverse array
Given a numerical array, reverse the order of the values. The reversed array
should have the same length, with existing elements moved to other indices so
that the order of elements is reversed. Don’t use a second array – move the values
around within the array that you are given.


Remove negatives
Implement removeNegatives() that accepts an array and removes any negative values from that array.

*/

function reverseArray(arr){
    var temp = 0;

    for(i=0;i<arr.length/2;i++){
        temp = arr[i];
        arr[i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
    }

    return arr;

}

///Test function
var arr = [1,2,3,4,5,6,7,8,9,10];

console.log("Reversed Array is: " + reverseArray(arr));

/////////////////////////////////////////////////////////

//Remove Nagatives

function removeNegatives(arr){
    var i = 0;
    var length = 0;
    iterate = 1;

    while (i+iterate<arr.length)
    {
        if(arr[i] > 0)
        {
            i++;
            length++;
        }
        else
        {
            arr[i] = arr[iterate];
            iterate++;
        }
    }

    arr.length = i;

    return arr;
}

//Test function
var arr = [-1,-2,-3,4,5,6,-7,-8,9];

console.log("Test Array is now: " + removeNegatives(arr));
