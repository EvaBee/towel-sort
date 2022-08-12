module.exports = function towelSort (matrix) {

    let newArr = [];
    for (let i = 0; i < matrix.length; i++) {
        const arr = matrix[i];
        newArr = newArr.concat(i % 2 ? [...arr].reverse() : arr);
        if (!matrix.length){
           return []
        }
    }
    return newArr;
}


