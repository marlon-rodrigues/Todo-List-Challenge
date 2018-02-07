function getMinimumUniqueSum(arr) {
    const arrLenght = arr.length;

    let sum = arr[0];
    let prev = arr[0];

    for(let i = 1; i < arrLenght; i++) {
        let curr = arr[i];

        if (prev >= curr) {
            curr = prev + 1;
        }

        sum += curr;
        prev = curr;
    }

    return sum;
}

function getMinimumUniqueSum2(arr) {
    const arrLenght = arr.length;

    let sum = arr[0];
    let prev = arr[0];

    for(let i = 1; i < arrLenght; i++) {
        let curr = arr[i];

        if (prev >= curr) {
            curr = prev + 1;
        }

        sum += curr;
        prev = curr;
    }

    return sum;
}

let arrSample = [1,2,2]
let a = getMinimumUniqueSum(arrSample);
console.log(a);