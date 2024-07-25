function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;

        let i = 1;
        while (i < n) {
            for (const element of arr) {
                if (i < n && element[i - 1] > element[i]) {
                    let temp = element[i - 1];
                    element[i - 1] = element[i];
                    element[i] = temp;
                    swapped = true;
                }
                i++;
            }
        }

        n--;
    } while (swapped);

    return arr;
}


let arr = [1, 9, 2, 8, 3, 7, 4, 6, 5];
console.log( bubbleSort(arr));
