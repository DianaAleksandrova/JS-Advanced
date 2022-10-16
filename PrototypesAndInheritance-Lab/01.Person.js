function createPerson(firstName, lastName) {
    let person = {
        firstName,
        lastName,
        fullName: firstName + ' ' + lastName
    };
    Object.defineProperty(person, 'fullName', {
        get() {
            return this.firstName + ' ' + this.lastName;
        },
        set(value) {
            let [first, second] = value.split(' ');
            if(first != undefined && second != undefined) {
                this.firstName = first;
                this.lastName = second;
            }
        }
    });
    return person;
}

let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
