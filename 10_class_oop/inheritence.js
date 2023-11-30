class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
     addCourse(){
        console.log(`A course was Added by ${this.username}`);
     }

}

const chai =  new Teacher("chai","Tea@gmail.com","123")

chai.addCourse()

