//Print odd numbers in an array
oddnos = (arr) => {
    for(var i=0;i<arr.length;i++)
    {
    if(i%2!=0)
    {
    console.log(arr[i-1]);
    }
    }
    }
    oddnos([2,3,1,4,5,9])

//Convert all the strings to title caps in a string array

strarr = (arr) => {
    for(var i=0;i<arr.length;i++)
    {
        console.log(arr[i].toUpperCase());
    }
    }
    strarr(['Ashwin','guvi','master','coding','javascript']);

//Sum of all numbers in an array
sumarr = (arr) => {
    var sum=0;
    for(var i=0;i<arr.length;i++)
    {
    sum+=arr[i];
    }
    console.log(sum);
    }
          
    sumarr([5,5,5,5,5]);
    sumarr([0,0,0,10,10,0]);
    
//Return all the prime numbers in an array

primenos = (array) => {
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
    
    }
          
    primenos([2,3,5,7,9,1,11,10]); 

//Return all the palindromes in an array
palindrome = (arr) => {
for(var i=0;i<arr.length;i++)
{
	var revstr=arr[i].split("").reverse().join("");
  if(revstr==arr[i])
  	console.log(arr[i]+" is a palindrme")
  else if(revstr!=arr[i])
    console.log(arr[i]+" is not a palindrme")
}

}
      
palindrome(['appa','malayalam','guvi','ashwin']);