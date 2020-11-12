// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. 
// Your task will be to return the sum of the numbers that occur only once.
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.
// More examples in the test cases below.

// Good luck!

function singles(arr){
    if (arr === undefined) throw new Error("array is required");
    // Your code here!

    let newArr = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        let numPos = -1;
        let count = 0;
        while ((numPos = arr.indexOf(num, numPos +1)) != -1) {
            count++;
            if (count >= 2) {
                break;
            }
        }
        if (count < 2) {
            newArr.push(num);
        }
    }
    sum = newArr.reduce((pv, cv) => pv + cv, 0);
    return sum;
}

module.exports = {
    singles
};
