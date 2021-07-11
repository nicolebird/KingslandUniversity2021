//PASSED THE hw GRADER. WAITING FOR A RESPONSE. 
//Task: Write a Company class, which supports the describe functionality below. 
class Company {
    //The constructor (empty) should have 1 property: departments - empty array
    constructor() {
        this.departments = [];
    }
 
    //this section adds employees (username, salary, position, department)
    addEmployee(username, salary, position, department) {
        //if one of the passed parameters is empty string(""), undefined/null, this fx should throw an error "Invalid input!"
        if (!username || !position || !department) {
            throw "Invalid input!";
        //ELSE if salary is less than 0, this fx should throw an error "Invalid input!"
        } else if (salary < 0) {
            throw "Invalid input!";
    }
        //tried to somehow combine the if-else if statement above, without breaking the code. Was not successful.  Was trying to shorten the code 
    
        //Now declare addEmployee but we need to also add username, salary(as a number), and position they have.
        const addEmployee = {
            username: username,
            salary: Number(salary),
            position: position
        };
 
        //If the newEmployee is successfully hired, you should add him/her into the departments array (created earlier) and return `New employee is hired.  Name {name}.  Position: {position}`
        if (!this.departments[department]) {
            this.departments[department] = [];
        }
        this.departments[department].push(addEmployee);
        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }
 
    //Now lets get petty.  What is the best department.  This fx should print the departments with the highest average salary and its employees sorted by their salary by descending and by name in the format displayed in the PDF. 
    bestDepartment() {
        //declare the department as a string. 
        let department = '';
        //declare the max salary starts at 0.  This means it cannot be negative. 
        let maxSalary = 0;
        //Our object (bestDepartment) is then split by departments and for each will be the key and their value
        Object.entries(this.departments).forEach(([key, value]) => {
            //declare salary can be no less than 0
            let salary = 0;
            //take the value of each salary
            value.forEach(e => {
            // the salary is equal to the salary plus the element.salary
                salary += e.salary;
            });
            //salary is then equal to salary divided by the given value.length
            salary = salary / value.length;
            if (salary > maxSalary) {
                department = key;
                maxSalary = salary;
            }
        });

        if (department != '') {
            let result = `Best Department is: ${department}\nAverage salary: ${maxSalary.toFixed(2)}\n`;
            Object.values(this.departments[department]).sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username)).forEach(e => {
                result += `${e.username} ${e.salary} ${e.position}\n`;
            });
            return result;
        }
    }
}

let c = new Company();
c.addEmployee(`Stanimir`,  2000, "engineer", "Construction" );
c.addEmployee(`Pesho`,  1500, "electrical engineer", "Construction" );
c.addEmployee(`Slavi`,  500, "dyer", "Construction" );
c.addEmployee(`Stan`,  2000, "architect", "Construction" );
c.addEmployee(`Stanimir`,  1200, "digital marketing manager", "Marketing" );
c.addEmployee(`Pesho`,  1000, "graphical designer", "Marketing" );
c.addEmployee(`Gosho`,  1350, "HR", "Human resources" );
console.log(c.bestDepartment());

// Best Department is: Construction
// Average salary: 1500.00
// Stan 2000 architect
// Stanimir 2000 engineer
// Pesho 1500 electrical engineer
// Slavi 500 dyer

// try {     
//     let c = new Company();     
//     c.addEmployee("Stanimir", -10, "engineer", "Construction"); 
// } catch(e) {     
//     console.log(e);
// }
