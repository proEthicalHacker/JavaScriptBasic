function setUsername(username){
    //complex DB calls
    
    this.username = username
    console.log("call");
}


function createUser(username,email,password){
    setUsername.call(this,username)

    this.email = email
    this.password = password


}

const coffee = new createUser("coffee", "coffee@gmail.com","123")
console.log(coffee);