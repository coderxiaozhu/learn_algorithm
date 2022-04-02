var isHappy = function(n) {
    let set = new Set();
    const getSum = (num) => {
        let sum = 0;
        while(num) {
            let i = num % 10;
            sum += i * i;
            num = Math.floor(num / 10);
        }
        return sum;
    }
    while(n !== 1 && !set.has(n)) {
        set.add(n);
        n = getSum(n);
    }
    return n === 1;
};
