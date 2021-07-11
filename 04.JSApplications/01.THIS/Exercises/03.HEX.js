class Hex{
    constructor(value){
        this.value = value;
    }

    //This fx should return the value property of the hex class
    valueOf(){
        return this.value;
    }

    //This fx will show its hexadecimal value starting with `0x`
    toString(){
        return `0x${this.value.toString(16).toUpperCase()}`;
    }

    //This fx should add a number or Hex obj and return a new Hex obj
    plus(number){
        return new Hex(this.value + number.valueOf());
    }

    //This fx should subtract a number or Hex obj and return a new Hex obj
    minus(number){
        return new Hex(this.value - number.valueOf());
    } 

    //Create a parse class method that can parse Hexacimal numbers and convert them to standard decimal numbers
    parse(string){
        return parseInt(string, 16);
    }
    //The radix parameter is used to specify which numeral system to be used, for example, a radix of 16 (hexadecimal) indicates that the number in the string should be parsed from a hexadecimal number to a decimal number. ... If the string begins with any other value, the radix is 10 (decimal)

}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256; //VS code warns about this but the code functions fine. 
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');