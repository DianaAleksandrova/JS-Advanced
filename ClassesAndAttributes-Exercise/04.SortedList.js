class SortedList {
    constructor() {
        this.size = 0;
        this.numbers = [];
    }

    add(number) {
        this.numbers.push(number);
        this.size += 1;
        this.numbers.sort((a, b) => a - b);
    }

    remove(index) {
        this.invalid(index);
        this.numbers.splice(index, 1);
        this.size -= 1;
    }

    get(index) {
        this.invalid(index);
        return this.numbers[index];
        
    }

    invalid(index) {
        if(index < 0 || index >= this.numbers.length){
            throw new Error('Invalid index');
        }
    }
}

let list = new SortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list.size);