// Declare a Class, the Object factory is open! Plz order some objects. Nobody has ordered yet. :( 
    class Rectangle {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
    }
    // An object order mas been placed to the class aka object factory above! Lets make a new object where the key height is 10 and key width is 20.
    // The new object has been named someRectangle, lets give it the value of the object we made! 
    let someRectangle = new Rectangle(10,20);
    
    // Make a new variable, and assign the value to a new Class
    
    let RectangleTwo = class Rectangle2 { // resolve to a new Object factory
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
    };
    
    let secondRectangle = new RectangleTwo(20, 42);
    console.log(secondRectangle);
    
    let someJSObject = { 
      height: 10, 
      width: 20 
    };
    
    class Student {
      constructor(name,grade) {
        this.name = name;
        this.grade = grade;
      }
    }
    
    let Bran = new Student("Bran", "A");
    console.log(Bran);
    