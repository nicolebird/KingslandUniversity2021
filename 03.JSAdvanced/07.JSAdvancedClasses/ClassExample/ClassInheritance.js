class Person{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
}

class Teacher extends Person {
    constructor(name,email,subject){
        super(name, email);
        this.subject = subject;
    }
}

let newTeacher = new Teacher(`Mrs. TeacherFace`, `default@gmail.com`, `Full Stack Dev`);
console.log(newTeacher);