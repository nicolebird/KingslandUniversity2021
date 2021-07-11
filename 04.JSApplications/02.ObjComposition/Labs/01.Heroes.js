//Create a fx that RETURNS an OBJ with 2 methods (mage and fighter).  This obj should be able to create heroes (fighters and mages).  Every hero has a state.  
function main() {

   ///Mages also have state (name, health = 100 and mana = 100).  Every mage can cast spells.  When a spell is cast the mage's mana decreases by 1 and the following message is printed on the console: `${mage's name} cast ${spell}`
    return {
        //fx and arg/parameter
        mage(name) {
            //the return obj
            return {
                name: name,
                //name, (this also works)
                health: 100,
                mana: 100,
                cast(spell) {
                    this.mana--;
                    console.log(`${this.name} cast ${spell}`);
                }
            };
        },

       ///Fighters have name, health = 100 and stamina = 100 and every fighter can fight.  When he/she/they fights his/her/their stamina decreases by 1 and the following message is printed on the console:  `${fighter's name} slashes at the foe!`

       //fx and arg/parameter
        fighter(name) {
            //the return obj
            return {
                name: name,
                stamina: 100,
                health: 100,
                //fx and empty arg with specifications with the this.stamina-- that is then console logged
                fight() {
                    this.stamina--;
                    console.log(`${this.name} slashes at the foe!`);
                }
            };
        }
    };

}


let create = main(); 
const scorcher = create.mage("Scorcher"); 
scorcher.cast("fireball"); 
scorcher.cast("thunder"); 
scorcher.cast("light"); 
const scorcher2 = create.fighter("Scorcher 2"); 
scorcher2.fight(); 
console.log(scorcher2.stamina); console.log(scorcher.mana);
