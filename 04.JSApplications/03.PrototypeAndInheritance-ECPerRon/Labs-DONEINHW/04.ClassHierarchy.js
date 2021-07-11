//Write a fx that returns 3 classes - Figure, Circle, Rectangle. (Instructions for each class paired inside of the problem to aid in explaining) NOTE: All parameters passed in the constructors are in centimeters ("cm")
//INPUT/OUTPUT: There will be no input. Your fx should return an object constanting the Figure, Circle and Rectangle 

function main() {

    //Figure should have a property units("m", "cm", "mm") w/ a default value "cm"
    class Figure {
        constructor(defaultValue = 'cm') {
            this.default = defaultValue;
            this.units = {
                m: 0.01,
                cm: 1,
                mm: 10
            };
        }
        //Has method changeUnits that sets different units for that figure
        changeUnits(unit) {
            this.default = unit;
        }

    }
    //Extends reaches into the class named and takes what is needed from it to complete the necessary steps.  
    //*Extends Figure, Has a property radius
    class Circle extends Figure {
        constructor(radius, defaultUnit) {
            //Definition and Usage. The super keyword refers to the parent class. It is used to call the constructor of the parent class and to access the parent's properties and methods.
            super(defaultUnit);
            this.radius = radius;
        }
        // Overrides area getter to return area of the Circle PI * r to the second power
        get area() {
            //another option: 
            return Math.PI * this.radius * this.units[this.default] * this.radius * this.units[this.default];
            //return Math.PI * this.radius * this.radius;
        }
        //toString() - should return a string representation of the figure in the format: Figures units: {type} Area: {area} - radius: {PrintRadius}
        toString() {
            //let PrintRadius = Math.PI * this.radius * this.radius;
            let PrintRadius = this.units[this.default] * this.radius;
            return `Figures units: ${this.default} Area: ${this.area} - radius: ${PrintRadius}`;
        }
    }
    
    //*Extends Figure, Has a property(s) width, height
    class Rectangle extends Figure {
        constructor(width, height, defaultUnit) {
            super(defaultUnit);
            this.width = width;
            this.height = height;
        }
        // Overrides area getter to return area of the Rectangle (width * height)
        get area() {
            //return this.width * this.height;
            //Another option: 
            return this.width * this.units[this.default] * this.height * this.units[this.default];
        }
        //toString() - should return a string representation of the figure in the format: "Figured units: {type} Area: {area} - width: {width}, height: {height}"
        toString() {
            //Individually break up and declare unitValue, width to print (printWidth) and height to print (printHeight)
            let unitValue = this.units[this.default];
            let printWidth = this.width * unitValue;
            let printHeight = this.height * unitValue;
            return `Figures units: ${this.default} Area: ${this.area} - width: ${printWidth}, height: ${printHeight}`;
        }
    }

    //return each class for the final output.  
    return {
        Figure,
        Circle,
        Rectangle
    };
}
//Circle
let m = main(); 
let c = new m.Circle(5); 
console.log(c.area); // 78.53981633974483 
console.log(c.toString());

//Rectangle
let r = new m.Rectangle(3,4,'mm');
console.log(r.area);//1200
console.log(r.toString());//Figuresunits:mmArea:1200-width:30,height:40


