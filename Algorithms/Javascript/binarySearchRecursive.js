
let binary_search = function(arr,left, right,target) {
    if (left > right) {
        console.log(`Not found ${target}\n`);
        return;
    }

    let mid = (left + right) / 2;
    mid = Math.floor(mid);
    if (arr[mid] === target) {
        console.log(`Found ${target} at index ${mid}\n`);
        return;
    } else if (arr[mid] < target) {
        binary_search(arr, mid + 1, right, target);
    } else {
        binary_search(arr, left, mid - 1, target);
    }
}


let arr = [1, 2, 3, 4, 5, 6];
let len = arr.length;
binary_search(arr, 0, len - 1, 3);
binary_search(arr, 0, len - 1, 7);
return 0;

