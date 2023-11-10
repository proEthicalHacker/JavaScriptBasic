//Stack(Primitive) ,Heap(non-Primitive)[jab esse obj ref lene par oregnal value milti hai na ki copy]
//Stack[Num,Boolan,String etc esme jab bi ref lenge toh copy milega]

let myYoutubeName="DennyCool"

let anotherName=myYoutubeName

anotherName="Coffee aur Code"

// console.log(myYoutubeName);


let userOne ={
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo=userOne

userTwo.email="namo@gmail.com"

// console.log(userOne.email);
// console.log(userTwo.email);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack[primitive], heap[non-pri]