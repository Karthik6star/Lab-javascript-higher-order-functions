//Function #1: Array Slice
const  foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
var modifiedfood = foods.slice(1,4);
console.log(modifiedfood)
//Function #2: Array Splice
var modifiedfood1 = foods.splice(2,0,"noodles","icecream");
console.log(foods)
//Function #3: Filter
const numberArray = [12,324,213,4,2,3,45,4234];
function isEven(arr){
  return arr.filter(num=>num%2===0);
}
    
    console.log(isEven(numberArray))

//prime numbers
function isPrime(arr){
    list=[];
    arr.filter(num=>{
        var flag=false;
        if(num>2){
            for(var i=2;i<num;i++){
                if(num%i==0){

                    flag=true;
                }
            }
        }
        if(flag==false){
            list.push(num)
        }
    })
    return(list)
}
console.log(isPrime(numberArray))
//Function #4: Reject

function isnonPrime(arr){
    list=[];
    arr.filter(num=>{
        var flag=false;
        if(num>2){
            for(var i=2;i<num;i++){
                if(num%i==0){

                    flag=true;
                }
            }
        }
        if(flag==true){
            list.push(num)
        }
    })
    return(list)
}
console.log(isnonPrime(numberArray))
//Lambda
isEven=()=>{
 even=numberArray.filter(numberArray=>numberArray%2==0);
}
isEven();
console.log(even);
//Map
const myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfnumbers(myArray){
    return myArray*myArray
}
var result=myArray.map(findSquareOfnumbers)
console.log(result)
//reduce
const Array=[2, 3, 5, 10];
function multiply(Array){
    var product=Array.reduce(function(intial,item){
        return intial*item;
    },1)
return(product)
}
console.log(multiply(Array))
