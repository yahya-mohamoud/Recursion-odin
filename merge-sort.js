const merge = (left, right) => {
    let sortedArr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }

    return [...sortedArr, ...left, ...right]
}

const mergeSort = (arr) => {
    if (arr.length < 2) return arr;
    
    let middle = Math.floor(arr.length / 2);
    let leftList = arr.slice(0, middle)
    let rightList = arr.slice(middle) 



    return merge(mergeSort(leftList),(mergeSort(rightList)))
}


console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
