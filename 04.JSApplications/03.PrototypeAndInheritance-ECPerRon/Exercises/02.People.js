//Code fully works and passes the homework grader.  I had a couple of basic syntax errors to correct.  Mainly a variable misspell and spacing

//Define several classes, that represent a company's employee records.  Every employee has a name and age, a salary and a list of tasks, which every position has specific properties not present in the others.  Place all common functionality in a parent abstract class.  Follow the diagram in the PDF:

//Every position has different tasks.  In addition to all common properties, the manager position has a divided he can collect along with his salary.  

//"use strict";
function main() {
    //----------- BASE/ABSTRACT CLASS -----------
    class Employee {
      constructor(name, age) {
        if (new.target == Employee) {
          throw new Error("Cannot make instance of abstract class Employee.");
        }
  
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.task = [];
      }
  
      work() {
        let currentTask = this.task.shift();
        console.log(`${this.name} ` + currentTask);
        this.task.push(currentTask);
      }
  
      collectSalary() {
        console.log(`${this.name} received ${this.getSalary()} this month.`);
      }
  
      getSalary() {
        return this.salary;
      }
    }
  
    //----------- CHILD CLASS -----------
    class Junior extends Employee {
      constructor(name, age) {
        super(name, age);
        this.task.push(" is working on a simple task.");
      }
    }
  
    //----------- CHILD CLASS -----------
    class Senior extends Employee {
      constructor(name, age) {
        super(name, age);
        this.task.push(" is working on a complicated task.");
        this.task.push(" is taking time off work.");
        this.task.push(" is supervising junior workers.");
      }
    }
  
    //----------- CHILD CLASS -----------
    class Manager extends Employee {
      constructor(name, age) {
        super(name, age);
        this.dividend = 0;
        this.task.push(" scheduled a meeting.");
        this.task.push(" is preparing a quarterly report.");
      }
  
      getSalary() {
        return super.getSalary() + this.dividend;
      }
    }
  
    return { 
      Employee, 
      Junior, 
      Senior, 
      Manager 
    };
  }
  
//not for the HW grader
  let m = main(); 
  junior = new m.Junior('Bob', 21); 
  senior = new m.Senior('John', 25); 
  manager = new m.Manager('Jane', 25);  
  console.log('Junior', junior.task); 
  console.log('Senior', senior.task); 
  console.log('Manager', manager.task);
  
//   junior.work();
//   senior.work();
//   manager.work();
  
//   junior.collectSalary();
//   senior.collectSalary();
//   manager.collectSalary();
  
//   console.log(junior.getSalary());
//   console.log(senior.getSalary());
//   console.log(manager.getSalary());