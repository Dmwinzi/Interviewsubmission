class Stack {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items[this.items.length - 1];
    }
}

const stack = new Stack();
stack.push(5);
stack.push(10);
stack.push(23);
stack.push(10);

console.log(stack.isEmpty());
console.log(stack);  
console.log(stack.peek());
console.log(stack.pop());  
console.log(stack); 
