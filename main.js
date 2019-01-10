function removeOddSum(arr, key1, key2) {
    output = arr.slice(0);

    for (i = 0 ; i < arr.length ; i++) {

        if ((arr[i][key1] + arr[i][key2]) % 2 !== 0) {
            output.splice(arr.indexOf(output[i]), 1);
        }
    }
    return output
}

// const result = removeOddSum([ {a: 5, b: 5},
//     {a: 3, b: 4},
//     {a: 2, b: 0},
//     {a: 2, b: 1}], 'a', 'b');

// console.log(result)

module.exports = removeOddSum;
