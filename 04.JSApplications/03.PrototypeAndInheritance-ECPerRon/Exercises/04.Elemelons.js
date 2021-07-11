// One test passed after I wrote the "morph" method in another way, // the other one after fixing the index for the elements that take the types from the "arrayMelon" array // and made in "toString" all "Element index" to be "Element Index"

function main() {
    class Melon {
        constructor(weight,melonSort) {
            if (new.target === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }
            this._weight = weight;
            this._melonSort = melonSort;
            this.arrayMelon = ["Water","Fire","Earth","Air"];
        }
        get weight() {
            return this._weight;
        }
        get melonSort() {
            return this._melonSort;
        }
        toString() {
            return `Sort: ${this.melonSort}\n`;
        }
    }
 
    class Watermelon extends Melon {
        constructor(weight,melonSort) {
            super(weight,melonSort);
        }
        get elementIndex() {
            return this.weight * this.melonSort.length;
        }
        toString() {
            return `Element: ${this.arrayMelon[0]}\n`+ super.toString() + `Element Index: ${this.elementIndex}`; // Index started w/ a lowercase letter
        }
    }
 
    class Firemelon extends Melon{
        constructor(weight,melonSort) {
            super(weight,melonSort);
        }
        get elementIndex() {
            return this.weight * this.melonSort.length;
        }
        toString() {
            return `Element: ${this.arrayMelon[1]}\n`+ super.toString() + `Element Index: ${this.elementIndex}`; // Index started w/ a lowercase letter
        }
    }
    class Earthmelon extends Melon{
        constructor(weight,melonSort) {
            super(weight,melonSort);
        }
        get elementIndex() {
            return this.weight * this.melonSort.length;
        }
        toString() {
            return `Element: ${this.arrayMelon[2]}\n`+ super.toString() + `Element Index: ${this.elementIndex}`; // Index started w/ a lowercase letter
        }
    }
    class Airmelon extends Melon {
        constructor(weight,melonSort) {
            super(weight,melonSort);
        }
        get elementIndex() {
            return this.weight * this.melonSort.length;
        }
        toString() {
            // Instead of this.arrayMelon [3] was written by the 2nd index
            return `Element: ${this.arrayMelon[3]}\n`+ super.toString() + `Element Index: ${this.elementIndex}`; // Idex започваше с малка буква
        }
    }
 
// Here I did it differently because I know it will work without delaying the answer // and the last test passed after I fixed it
    class Melolemonmelon extends Watermelon {
        constructor(weight,melonSort) {
            super(weight,melonSort);
            this.counter = 0;
            this.arr = ['Water', 'Fire', 'Earth', 'Air'];
            this.element = 'Water';
        }
 
        morph() {
            this.arr.push(this.arr.shift());
            this.element = this.arr[0];
            return this;
        }
 
        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
 
 
    }
 
    return { Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon };
}

//test one
try {  
    let test = new Melon(100, "Test"); 
} 
catch(e) {     
    console.log(e.message);
}

//test two
let watermelon = new Watermelon(12.5, "Kingsize"); 
console.log(watermelon.toString());  
let firemelon = new Firemelon(12.5, "Kingsize"); 
console.log(watermelon.toString());  
let earthmelon = new Earthmelon(12.5, "Kingsize"); 
console.log(watermelon.toString());  
let airmelon = new Airmelon(12.5, "Kingsize"); 
console.log(watermelon.toString());

