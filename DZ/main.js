function inverse(arr, excludeCount = 0) {
    const a = Math.min(Math.max(excludeCount, 0), arr.length);
    const b = Math.max(Math.min(excludeCount, 0) + arr.length, 0);

    const result = [];
    for (let i = 0; i < a; i++) {
        result.push(arr[i]);
    }

    for (let i = b - 1; i >= a; i--) {
        result.push(arr[i]);
    }

    for (let i = b; i < arr.length; i++) {
        result.push(arr[i]);
    }

    return result;
}
function sort(arr) {
    return arr.map(String).sort()
}
console.log(sort(["hello", 123, "321", "world"]))
//console.log(sort([a, g, b, 4]));
//console.log(inverse([ a, g, b, 4 ], 1));