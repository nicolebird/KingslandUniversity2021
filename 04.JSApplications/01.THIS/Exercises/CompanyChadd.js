
class Company{
    constructor(){
        this.departments = [];
    }
​
    addEmployee(username, salary, position, department) {
        let errorArray = [username, salary, position, department];
        errorArray.forEach( arg => {
            if (arg === '' || arg === undefined || arg === null){ 
                throw 'Invalid input!';
            } else if (salary < 0) {
                throw 'Invalid input!';
            }
        });     
        this.departments.push({
            name: username,
            salary: salary,
            position: position,
            department: department,
        });
        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }
    
    bestDepartment(){
        let result = '';   
        let depArray = this.departments;   
​
        let organize = depArray.reduce((acc, currObj, index, array) => {
            let match = acc.find( employee => employee.department === currObj.department );
            if(!match){   
                acc.push({salary: currObj.salary, divisor: 1, department: currObj.department });
            } else {
                match.salary += currObj.salary;
                match.divisor += 1;
            }
            let sortedSalary = acc.sort((a, b) => b.salary - a.salary);
            return sortedSalary;
        }, []);
​
        organize.forEach( obj => {
            let avgSalary = obj.salary / obj.divisor;
            obj.average = avgSalary;
        });
​
        let bestDepartment = organize.sort((a, b) => b.average - a.average);
        bestDepartment = bestDepartment[0];
        result += `Best Department is: ${bestDepartment.department}\n`;
        result += `Average salary: ${bestDepartment.average.toFixed(2)}\n`;      
        let employeesOfBestArray = [];
​
        depArray.forEach( obj => {
            if (obj.department == bestDepartment.department) { employeesOfBestArray.push(obj); }
        });
​
        employeesOfBestArray = employeesOfBestArray.sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));
​
        employeesOfBestArray.forEach(employee => {
            result += `${employee.name} ${employee.salary} ${employee.position}\n`;
        });
​
        return result;
    } 
}