class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(value) {
        this.items.push(value);
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.items.shift();
    }


    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.items[0];
    }
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(23);
queue.enqueue(10);
console.log(queue);
console.log(queue.peek());
console.log(queue.dequeue()); 
console.log(queue.isEmpty()); 
console.log(queue);