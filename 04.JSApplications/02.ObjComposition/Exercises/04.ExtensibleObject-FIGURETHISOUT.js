//Create an obj that can clone the functionality of another obj into itself. Implement an extend(template) fx that would copy all of the properties of template to the parent obj and if the property is a fx, add it to the objs prototype instead.  
//INPUT/OUTPUT: Your code should return the extensible obj instance.  The extend() fx of your obj will receive a valid obj as input parameter, and has no output.  
function main(){
    let parent = {
        name: `Kingsland`,
        extend (obj){
            Object.keys(obj).forEach(key => {
                this[key] = obj[key];
            });
        }
    };

    let newObject = {
        name: `university`,
        extensionMethod: `world`,
        extensionProperty: `someString`
    };

    return {
        parent,
        newObject
    };
}

let m = main();

m.parent.extend(m.newObject);
console.log(m.parent);