class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}


function main(classToExtend) {
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = () => {
        return `I am a ${this.species}. ${this.toString()}`;
    };
    //this is the same thing with one minor change.  I tend to like the arrow function and use it over this option
    // classToExtend.prototype.toSpeciesString = function () {
    //     return `I am a ${this.species}. ${this.toString()}`;
    // };

}

main(Person);
let p = new Person('john doe', 'doe@mail.com');
console.log(p);
console.log(p.toSpeciesString());