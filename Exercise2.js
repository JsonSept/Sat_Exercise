//1 Create a function that will calculate the square root of any number
function square(a) {
console.log(Math.sqrt(a));
}
square(16)


// function squareRoot(number) {
//     return Math.sqrt(number);
//   }
//2 create a function that will calculate the power of another number
function power(x , y) {
    console.log(Math.pow(x , y));
    }
    power(3 , 2)
    
//3 create a function that accepts an input and only rounds a number down
function roundDown(input) {
    console.log(Math.floor(input));
    }
    roundDown(6.3)

//4 create a function that accepts a decimal value  and rounds the value up
function roundUp(input) {
    console.log(Math.ceil(input));
    }
    roundUp(6.4)

//5 create a function that will take in 2 numbers and output the largest number between the 2
function greaterThan(a , b) {
    console.log(Math.max(a , b));
    }
    greaterThan(3 , 2)
    
//6 create a function that will take in 2 numbers and output the smallest number between the 2
function smallerThan(a , b) {
    console.log(Math.min(a , b));
    }
    smallerThan(3 , 2)

//7 create a function that will generate a random whole number
function randomNum(input) {
    console.log(Math.random(input));
    }
    randomNum()

//8 Create a function that will calculate the area of a circle when a radius is the entered parameter
function circleArea(radius) {
    let pi = Math.PI;
    let area = pi * radius * radius;
    console.log(area.toFixed(2))
}
circleArea(5)

//9 create a function that accepts a decimal value  and rounds the value
function rounds(input) {
    console.log(Math.round(input));
    }
    rounds(7.6)