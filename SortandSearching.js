//intialize the functions
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        // we compare element
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr [j + 1] = current;
    }
    return arr;
}

//example
const array = [8, 3, 5, 7, 4, 2, 1];
const sortedArray = insertionSort(array);
console.log(sortedArray);