//Working code
class Rat {
    constructor(name) {
      this.name = name;
      this.unitedRats = [];
    }
  
    unite(otherRat) {
      if (otherRat instanceof Rat) {
        this.unitedRats.push(otherRat);
      }
    }
  
    getRats() {
      return this.unitedRats;
    }
  
    toString() {
      return `${this.name}\n${this.unitedRats.map(x => `##${x.name}\n`).join('')}`.trim();
    }
}
  
  // Don't copy the code below in judge, you won't get any points, just the code above
  let firstRat = new Rat("Peter");
  console.log(firstRat.toString()); // Peter
   
  console.log(firstRat.getRats()); // []
  
  firstRat.unite(new Rat("George"));
  firstRat.unite(new Rat("Alex"));
  console.log(firstRat.getRats());
  // [ Rat { name: 'George', unitedRats: [] },
  //  Rat { name: 'Alex', unitedRats: [] } ]
  
  console.log(firstRat.toString());
  // Peter
  // ##George
  // ##Alex
// Rats are uniting.Create a class ​Rat​, which holds the functionality to unite with other objects of the same type. 
// Make it so that theobject holds all the other objects it has connected to.The class should have a ​name​, which is a ​string​, and it should be ​initialized with it​.
//The class should also hold a function ​unite(otherRat)​, which unites the ​first object​ with the ​given one​. An objectshould store all of the objects it has united to. The function should only add the object if it is an object of the classRat​. In any other case it should ​do nothing​.//
//The class should also hold a function ​getRats()​ which returns all the rats it has united to, in a list.Implement functionality for ​toString()​ function... which returns a string representation of the object and all ofthe objects it's united with, each on a new line.
// On the first line put the object’s name and on the next several linesput the united objects’ names, each with a padding of “​##​”.ExampleUNITY.jslet ​firstRat ​= ​new ​Rat(​"Peter"​);console​.​log​(​firstRat​.​toString​()); ​// Peterconsole​.​log​(​firstRat​.​getRats​()); ​// []firstRat​.​unite​(​new ​Rat(​"George"​));firstRat​.​unite​(​new ​Rat(​"Alex"​));console​.​log​(​firstRat​.​getRats​());// [ Rat { name: 'George', unitedRats: [] },//  Rat { name: 'Alex', unitedRats: [] } ]console​.​log​(​firstRat​.​toString​());// Peter// ##George// ##Alex
//What to submit?You are only required to submit the ​Rat class​. No need to include the codes from the example above.Class Signature:   class ​Rat4.Length LimitCreate a class ​Stringer​, which holds a ​single string​ and a ​length​ property. The class should be initialized with astring​, and an ​initial length. ​The class should always keep the ​initial state​ of its ​given​​string​.Name the two properties ​innerString​ and ​innerLength​.There should also be functionality for increasing and decreasing the initial ​length​ property.Implement function ​increase(length)​ and ​decrease(length)​, which manipulate the length property with thegiven value​.The length property is ​a numeric value​ and should not fall below ​0​. It should not throw any errors, but if an attemptto decrease it below 0 is done, it should be automatically set to ​0​. 
