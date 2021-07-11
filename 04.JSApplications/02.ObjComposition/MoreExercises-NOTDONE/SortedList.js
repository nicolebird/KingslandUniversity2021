//Implement a collection, which keeps a list of numbers, sorted in ascending order. It must support the following functionality:  add(element) - adds a new element to the collection  remove(index) - removes the element at position index  get(index) - returns the value of the element at position index  size - number of elements stored in the collection  
//The correct order of the element must be kept at all times, regardless of which operation is called.  Removing amd retrieving elements should't work if the provided index points outside the length of the collection (either throw an error or do nothing).  Note the size of the collection is NOT a fx.  Write your code such that the first fx in your solution returns an instance of your Sorted list. 

//INPUT/OUTPUT:  All fx that expect input as parameters will receive valid data.  Any result expected from a fx should be returned as it's result.  Your main fx should return an object instance w/ the required functionality as it's result. 

//THIS CODE DOESN'T FULLY WORK!!
function main() {
    return {
        elements: [],
        size: 0,
        add(el){
        //add: function (el) {  <- this is the same as on line 10
            this.elements.push(el);
            this.elements.sort((a, b) => a - b);
            this.size++;
        },
        
        get(index){
        //get: function(index){  <- this is the same as on line 16
            if(index < 0 || index >= this.size){
                throw new RangeError('Invalid Index'); //<- throws syntax error
                //return;  <- returns undefined
                //return `throws an error`;
            }

            //return this.elements[index];
            console.log(this.elements[index]);
        },

        set(index){
            //get: function(index){  <- this is the same as on line 16
                if(index < 0 || index >= this.size){
                    throw new RangeError('Invalid Index'); //<- throws syntax error
                    //return;  <- returns undefined
                    //return `throws an error`;
                }
    
                //return this.elements[index];
                console.log(this.elements[index]);
            },

        remove(index){
            //remove: function (index) { <- this is the same as on line 24
                if(index < 0 || index >= this.size){
                    //throw new RangeError('Invalid Index'); <- throws a syntax error
                    //return; <- returns undefined
                    return `throws an error`;
                }
                this.elements.splice(index, 1);
                this.size--;
        }

    };
}

let l = main([2,3,5,6,8,1,4,7,9]); 
console.log(l.list); 
console.log(l.size); 
console.log(l.add(10)); 
console.log(l.remove(9)); 
console.log(l.get(8));