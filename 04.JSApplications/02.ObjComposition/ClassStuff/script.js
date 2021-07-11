const objs = [
    {name: 'Peter',age:35},
    {age: 22},
    {name: "Steven"}, {height:180}
  ];
  const delegate = (a, b) => Object.assign(Object.create(a), b); 
  const d = objs.reduceRight(delegate, {});
  console.log(d); // { name: 'Peter', age: 35 } 
  console.log(d.height); // 180
  

//----------------------------------
// let dataArray = [ 
//     { id: "a", score: 1 }, 
//     { id: "b", score: 2 },
//     { id: "c", score: 5 }, 
//     { id: "a", score: 3 }, 
//     { id: "c", score: 2 }, 
//   ]; 
    
//   let res1 = dataArray.reduce((acc, curr, index, array) => {
//     let same = acc.find(e => e.id === curr.id); 
//     if (!same) {
//       acc.push(curr); } 
//     else {
//       same.score += curr.score; 
//     }
//     return acc; 
//   }, []);
//   console.log(res1);
//   //[ { id: 'a', score: 4 }, { id: 'b', score: 2 }, { id: 'c', score: 7 } ]
  

// --------------------
//const departments = [['Engineering', ['secretary', 'director', 'worker ']], ['Accounting', ['director' ,'accountant']]];

// const [[thisName, positions], [thisOtherName, thisOtherPositions]] = departments;

// console.log(thisName, positions);
// console.log(thisOtherName, thisOtherPositions);

//----------------
// const department = {
//     name: "Engineering", 
//     data: {
//         director: {
//             name: "John",
//             position: "Engineering Director"
//         },
//         employees: [],
//         company: "Quick Build"
//     }
// };
// const { data } = department; //now data references the data obj
// // const objList = [ {key: 'value'}, {key: 'value'}, { key: 'value'}];
// const objList = [ {length: '1'}, "Some String", { height: '3'}];

// const [ obj, obj1, obj2 ] = objList; //now each obj can be referenced directly
// console.log(objList, data, department);


//----------------------------------------------
//this code is not seriously something I'd ever do.  Just venturing to see how it works. 
// let student = { 
//     firstName: 'Maria', 
//     lastName: 'Green', 
//     age: 22,
//     locations: { 
//         home:{lat: 42.678, lng: 23.322} },
//         work:{lat: 42.698, lng: 23.322 },
//         space:{ spaceLat: [1, {spaceLong: 42},3]}
//     // hobbies: { sports: { teams: [`Lakers`]}}
// };
// //console.log(student);
// //console.log(student.locations.work.lat);
// console.log(student.locations.space.spaceLat[1].spaceLong);

//-------------------------------------
// let name = "Sofia";
// let population = 1325744;
// let country = "Bulgaria";
// let town = { name, population, country, size: "size" };
// town.location= { lat: 42.698, lng: 23.322 };
// console.log(town);

// town.location.lng = -123.322;
// console.log(town);
// // Object {name: "Sofia", population: 1325744, country: "Bulgaria"}

//-------------------------------------------
// let rect = {
//     width: 10,
//     height: 4,
//     //grow is adding to the original numbers given
//     grow: function(w, h) {
//         console.log("This is", this);
//         this.width += w; 
//         this.height += h;
//     },
    
//     print: function() {
//     console.log(`[${this.width} x ${this.height}]`);
//   } };
  
//   rect.grow(2, 3); 
//   rect.print(); // [12 x 7]

//-------------------------------------------------

// let rect = {
//     width: 10,
//     height: 4,
//     toString: function(){
//         return `rect[${this.width} x ${this.height}]`;
//     }
// };

// console.log(rect.toString());  //Obj {width: 10, height: 4}
// //this will invoke toString() to convert the obj to String
// //console.log("" + rect); //rect[12 x 7]

//--------------------------------

