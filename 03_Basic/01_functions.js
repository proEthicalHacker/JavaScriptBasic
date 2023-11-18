

function sayMyName() {

    console.log("h");
    console.log("I");
    console.log("T");
    console.log("K");
    console.log("M");
    console.log("N");

}

// sayMyName()


// function addToNumber(number1,num2,num3){
// console.log(number1 + num2 - num3);{


function addToNumber(number1, num2, num3) {

    // let result=number1+num2+num3
    // return result //return ke bad kuch print nhi hota
    return num2 + num3 + number1   //smart code
}

const result = addToNumber(5, 6, 8)

// console.log("Result",result);


function loginUserMessage(username = "denny") {

    if (!username) {
        console.log("plz enter your name ");
        return
    }
    return `${username} just logged in `

}

// console.log(loginUserMessage("Denny"));
// console.log(loginUserMessage("ram"));

function calculaterCartPrice(val1, val2, ...num1) {
    return num1
}


// console.log(calculaterCartPrice(200,100,300,500,600));

const user = {
    username: "Denny",
    price: 100
}
function handleObject(anyobject) {
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "king",
    price: 1999
}) // obj ko aise bhi pass krte h



// arry ko function me aise pass krte hai 

const myNewArray = [100, 200, 300, 80, 90, 70]


function returnSecValue(getArray) {
    return getArray[3]
}

console.log(returnSecValue(myNewArray));