let array = [3,8,5,9,33,5,7];

function merge(array,low, mid, high) {
    // used for merging the divided arrays in sorted manner
    let temp = [];
    let left = low, right = mid + 1;
    while(left <= mid && right <= high) {
        if(array[left] <= array[right]) {
            temp.push(array[left++]);
        } else {
            temp.push(array[right++]);
        }
    }


    while(left <= mid) {
        temp.push(array[left++]);
    }

    while(right <= high) {
        temp.push(array[right++]);
    }
    
    for(let i=low; i<=high;i++) {
        array[i] = temp[i - low];
    }
}

function mergeSort(array,low,high) {
    // used for dividing the arrays into parts till it encounters
    // a single element
    if(low >= high) {
        return;
    }

    let mid = Math.floor(((low + high) / 2));
    mergeSort(array,low,mid);
    mergeSort(array,mid+1, high);
    merge(array,low, mid, high);

}

let low = 0, high = array.length - 1;

mergeSort(array,low,high)

console.log(array);






