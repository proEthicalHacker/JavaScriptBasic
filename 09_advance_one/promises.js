const promiseOne = new Promise(function(resolve, reject){
    // do an async task 
    // Db call crypto, newtork

    setTimeout(function(){
        console.log('Async task is compelete')
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyce Task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async task 2 resole ");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"cofee", email:"cofeewala.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);

})

const promiseFour = new  Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false 
        if (!error) {
            resolve({username:"Denny", password:"123"})
        }else {
            reject('ERROR: Someting went wronge ')
        }
    }, 1000)
})

const username = promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(()=> console.log("The promise i s either resolve or rejected"))



const promiseFive =new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false 
        if (!error) {
            resolve({username:"JAva Scricpt", password:"12333333"})
        }else {
            reject('ERROR: JS went wronge ')
        }
    }, 1000)
})
async function consumePromiseFive(){
 try {
    const response =   await promiseFive
 console.log(response);
    
 } catch (error) {
    console.log(error);
 }
}
consumePromiseFive()


//fecth

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  console.log(data);
        
    } catch (error) {
        console.log("E:", error);
    }
}
