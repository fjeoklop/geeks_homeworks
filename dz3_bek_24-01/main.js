// declaration
// function calcFunction (a, b) {
//     return a+b
// }
// console.log(calcFunction(10, 5))

//expression
//
// let calcFunction = function (a, b) {
//     return a - b
// }
// console.log(calcFunction(100, 50))

//arrow function
// let calc = (a, b) => {
//     console.log(a-b)
// }
// calc(100, 70)


//дз

function minNum(a, b) {
    Number(a, b)
    if(a < b){
        console.log(a)
    } else if ( a === b) {
        console.log("===")
    } else {
        console.log(b)
    }
}
minNum(10, 5)



const calcFunction = prompt('введи что то')
function getString (string){
    return console.log(string.length)
}
getString(calcFunction)


const operator = prompt('Enter operator ( either +, -, * or / ): ');

const number1 = Number(prompt('Enter first number: '));
const number2 = Number(prompt('Enter second number: '));

let result;

function calc(){

    if (operator === '+') {
        result = number1 + number2;
    }
    else if (operator === '-') {
        result = number1 - number2;
    }
    else if (operator === '*') {
        result = number1 * number2;
    }
    else {
        result = number1 / number2;
    }
    return  console.log(`${number1} ${operator} ${number2} = ${result}`);

}
calc()





