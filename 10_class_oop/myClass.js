// ES^ ke badd vala version

class User{
    constructor(username, email,password){
        this.username = username;
        this.email = email;
        this.password = password
    }
      encryptPassword(){
        return `${this.password}abbcc`
      }

    chamgeusername(){
      return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai","chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.chamgeusername());


// behind the sene

