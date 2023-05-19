//Print odd numbers in an array
var oddpos = function (arr) {

    for(var i=0;i<arr.length;i++)
    {
    if(i%2!=0)
    {
    console.log(arr[i-1]);
    }
    }
 };
      
oddpos([2,3,4,5,1,7]);

//Convert all the strings to title caps in a string array
var strarr = function (arr) {

for(var i=0;i<arr.length;i++)
{
	console.log(arr[i].toUpperCase());
}
 };
      
strarr(['Ashwin','guvi','master','coding','javascript']);

//Sum of all numbers in an array

var sumarr = function (arr) {
var sum=0;
for(var i=0;i<arr.length;i++)
{
sum+=arr[i];
}
console.log(sum);
 };
      
sumarr([5,5,5,5,5]);
sumarr([0,0,0,10,10,0]);

//Return all the prime numbers in an array
var primenos = function (array) {

    for (var i = 0; i < array.length; i++) {
        var isPrime = true;
        if (array[i] == 1)
            isPrime = false;
        else {
            
            for (var j = 2; j <= array[i] / 2; j++) {
                if (array[i] % j == 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        
        if (isPrime){
            if (array[i] == 0){}
            else {
                console.log(array[i]) ;
            }
    }}

 };

primenos([2,3,5,7,9,1,11,10]); 
  
//Return all the palindromes in an array
var palindrme = function (arr) {

for(var i=0;i<arr.length;i++)
{
	var revstr=arr[i].split("").reverse().join("");
  if(revstr==arr[i])
  	console.log(arr[i]+" is a palindrme")
  else if(revstr!=arr[i])
    console.log(arr[i]+" is not a palindrme")
}
 };
      
palindrome(['appa','malayalam','guvi','ashwin']);

//Return median of two sorted arrays of the same size.

function median(ar1, ar2, n)
{
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
    for (count = 0; count <= n; count++)
    {
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
 
    return (m1 + m2)/2;
}
 
var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
    console.log("Median is "+ median(ar1, ar2, n1));
else
    console.log("arrays of unequal size");

  //Remove duplicates from an array
  function arrduplicate(arr, n)
{
    var temp = new Array(n);
    var j = 0;
    for (var i=0; i<n-1; i++)
        if (arr[i] != arr[i+1])
            temp[j++] = arr[i];
        temp[j++] = arr[n-1];
        for (var i=0; i<j; i++)
            arr[i] = temp[i];
 
    return j;
}
 
var arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
    var n = arr.length;
    n = arrduplicate(arr, n);

    for (var i=0; i<n; i++)
       console.log( arr[i]);
 
 //Rotate an array by k times

  const rotatearr = function(nums, k) {

  for (var i = 0; i < k; i++) {
      nums.unshift(nums.pop());
  }

  console.log(nums);
}
rotatearr([1,2,3,4,5],2);
  