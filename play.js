const sum = (...args) => {
    let sum = 0;
    args.forEach((arg) => {
        sum += arg;
    })
    return sum;
}

console.log(sum(1,2,3,4,5,6));