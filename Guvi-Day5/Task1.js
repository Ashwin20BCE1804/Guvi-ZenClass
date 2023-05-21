//For the given json iterate over all 
//for loops(for,for in,for of,forEach)
//for loop:
var mark=[80,95,98,78,75];
for(var i=0;i<5;i++){
    console.log(mark[i]);
}

//for in loop:
var bike = {"name":"royal enfield","model":2020}
for(var i in bike){
    console.log(i,bike[i]);
}

//for of loop:
var exammark=[20,40,60,80,90];
for(var i of exammark){
    console.log(i);
}

//for each loop:
var test=[11,22,33,44,55,66,77,88,99];
test.foreach(function(value,index){
    console.log(value,index);
})

