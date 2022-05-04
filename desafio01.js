
function reverse(number) {
    const numberInStringArray = String(number).split('')
    return parseInt(numberInStringArray.reverse().join(''));
    
}

function main() {
    const result = [];
    for(let number = 10; number < 1000000; number++) {
       if((number + reverse(number)) % 2 !== 0) {
           
           result.push(number);
       }
    }
    result.forEach(x => console.log(x));
}

main();