let num = 100;
const stack = [];

while(num > 0) {
    stack.push(num % 2);
    num = Math.floor(num / 2);
}

for(let i = stack.length - 1; i >= 0; i--) {
    console.log(stack[i]);
}