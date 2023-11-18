// singleton constrction se bnega

//obj Literals

const mySym = Symbol("Denny!@#")

const JsUser = {
    name: "Denny",
    "full name": "Denny Cool", // [eska use hota hai ]
    [mySym]: "Denny!@#",
    age: 30,
    location: "Udaipur",
    email: "Denny@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "my11@gmailcom"
// Object.freeze(JsUser)

JsUser.email = "my1231@gmailcom"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS User");
}
JsUser.greetingTwo = function () {
    console.log(`Hello user, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

