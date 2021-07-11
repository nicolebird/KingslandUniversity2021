//THIS PASSES IN VS CODE BUT FAILED THE HW GRADER.  WAITING FOR A RESPONSE TO WHY.  


// You have been tasked to create several classes for balloons.

//Implement a class Balloon, which is initialized with a color (String) and gasWeight(Number).  These two args should be public members.  

//Implement another class PartyBalloon, which inherits the Balloon class and is initialized w/ 2 additional parameters - ribbonColor (String) and ribbonLength(Number).  

//The PartyBalloon class should have a property ribbon, which is an obj w/ color and length - the ones given upon initialization.  The ribbon property should have a getter.  

//Implement another class BirthdayBalloon, which inherits the PartyBalloon class and is initialized w/ 1 extra parameter - text (String).  The text should be a property and should have a getter.

//HINTS:  First, we need to create a fx, which will hold our classes.  We create a simple fx and we add the first class, the base class for all Balloons to it. 

//Now that we have our base class, we can create the first child class - the PartyBallon, which extends the base Balloon class.  

//Upon inheriting the Balloon class, the constructor of the PartyBallon class will require the use of the super() method, to initialize the Balloon base constructor.

//We also need to add the ribbon obj property in the constructor of the PartyBalloon class.  This one is for you to do. 



function main() {
    //----------- BASE CLASS -----------
    class Baloon {
      constructor(color, gasWeight) {
        this.color = color;
        this.gasWeight = gasWeight;
      }
    }
  
    //----------- CHILD CLASS -----------
    class PartyBaloon extends Baloon {
      constructor(color, gasWeight, ribbonColor, ribbonLength) {
        super(color, gasWeight);
        this.ribbonColor = ribbonColor;
        this.ribbonLength = ribbonLength;
        this._ribbon = {
            ribbonColor: ribbonColor, 
            ribbonLength: ribbonLength
        };
      }
  
      get ribbon() { 
          return this._ribbon; 
      }
    }
  
    //----------- CHILD CLASS -----------
    class BirthdayBaloon extends PartyBaloon {
      constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
        super(color, gasWeight, ribbonColor, ribbonLength);
        this._text = text;
      }
  
      get text() { 
        return this._text;
     }
    }
  
    return { 
        Baloon, 
        PartyBaloon: PartyBaloon, 
        BirthdayBaloon: BirthdayBaloon 
    };
}
  
  // Don't copy the code below in judge, you won't get any points, just the code above
  let balloonClasses = main();
  let partyBalloon = new balloonClasses.PartyBaloon('red', 10, 'white', 5);
  let birthdayBalloon = new balloonClasses.BirthdayBaloon('orange', 100, 'black', 15, 'Happy Birthday');
  
  console.log(partyBalloon.ribbon);
  console.log(birthdayBalloon.ribbon);
  console.log(birthdayBalloon.text);
// let m = main(); 
// let bday = new m.BirthdayBaloon('red', 10, 'yellow', 50, 'Happy Birthday'); 
// console.log(bday.text); 
// console.log(bday.ribbon);