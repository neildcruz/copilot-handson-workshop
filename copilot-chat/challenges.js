// Challenge 1: Debug the recursive function
// This function has a bug. Use Copilot Chat to help find and fix it
function fibonacci(n) {
    if (n < 2) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Challenge 2: Optimize the sorting algorithm
// This implementation is inefficient. Use Copilot Chat to help optimize it
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
