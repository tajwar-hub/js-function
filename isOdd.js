function isOdd(number){

    if(number %2 === 1){
        return true;
    }
    else {
        return false;
    }
}

const result = isOdd(78);
console.log('The Number is odd? ',result)

const result2 = isOdd(89);
console.log('The Number is odd? ',result2)