class user{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}Denny`
    }

    set password(value){
        this._password = value
    }


}

const Denny = new user("Denny@gmail.com",'namo')

console.log(Denny.password);