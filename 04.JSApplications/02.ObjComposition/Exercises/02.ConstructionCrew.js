//Pleases the HW Gods

//Write a program that receives a worker obj as a parameter and modifies its properties.  Workers have the following structure: {weight: Number, experience: Number, levelOfHydrated: Number, dizziness: Boolean}
//Weight is in kilograms, experoemce in years and levelOfHydrated in milliliters.  IF you receive a worker whose dizziness property is set to true it means he needs to intake some water in order to be able to work correctly.  The required amount is 0.1 ml per kilogram per year of experience.  The required amount must be added to the existing amount.  Once the water is administered, change the dizziness property to false.  
//Workers who do not have dizziness should not be modified in any way.  Return them as they were.
//INPUT: will receive a valid obj as a parameter
//OUTPUT: Return the same obj that was passed in, modified as necessary. 

//used worker as the parameter for this problem since it is about the worker as a whole
function main(worker){
    if(worker.dizziness){
        //declare the required amount of water by multiplying the worker's experience, worker's weight, and required water amount ( 0.1 per kg /per yr of experience)
        let requiredWater = 0.1 * worker.experience * worker.weight;
        //worker.leveOfHydrated = worker.levelOfHydrated + requiredWater;
        worker.levelOfHydrated += requiredWater;
        worker.dizziness = false;
    }else{
        worker.dizziness = true;
    }
    //problem will run without the else added to the code but for good measure added it to visually see the else that automatically plays out in the background

    return worker;
}

console.log(main({weight: 120, experience: 20, levelOfHydrated: 200, dizziness: true}));


//Input  Do not put in the homework grader

main({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true});

main({ weight: 120, experience: 20, levelOfHydrated: 200, dizziness: true });

main({ weight: 95, experience: 3, levelOfHydrated: 0, dizziness: false});