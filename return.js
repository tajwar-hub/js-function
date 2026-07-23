// return

function cutHalf(number) {
    const half = number /2;
    return half;
    console.log('after return', half);
}

function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}


console.log('~~~~~~~~~~~~~~~~~~~~~~~~~')

const result = cutHalf(100);
console.log('value of the result', result);

const number2 = cutHalf(80);
console.log('value of the number2', number2);


const total1 = add(12, 16)
console.log('value of total1', total1)

const total2 = add(result, number2);
console.log('value of total2', total2);
