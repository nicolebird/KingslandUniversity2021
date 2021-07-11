class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    set fullName(value) {
        let [first, last] = value.split(' ');

        if (!last) {
            return;
        } else {
            this.firstName = first;
            this.lastName = last;
        }

        //OR
        //if(first && last ){
            //this.firstName = first;
            //this.lastName = last;
        //} else {
        //     return;
        // }
    }
}

let person = new Person("Peter", "Ivanov");
console.log(person.fullName);
person.firstName = "Simon";
console.log(person.fullName);
console.log(person.fullName2());
person.fullName = "Peter";
console.log(person.fullName);
console.log(person.fullName2());