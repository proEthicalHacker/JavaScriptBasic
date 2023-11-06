//java main compaier me kuch pre defind syntax hai jis se usko pta chalta hai ki wo kis category ka hai eg
//const[fix],let[value change hoti hai],var[] aye to ye memory me asign kr do [M name or value] ke liye use hoga
//console.log type ke keyword mile toh screen par output do 



const accountId = "1223344"

let accountEmail = "denny@gmail.com" //{comman use scope proble solve} 

var accountPassword = "123454"//use nhi karte hai kyu ke {scope} ka proble tha same name par value change krne kar sabhi value change hoti thi 

let accontState; //value undefind aayega


accontCity = "kota" //bina let var likhe bi variable likh skate hai but ye sahi nhi hai

//accountId=2 not allow

/*
issue in block scoope and functional scope
*/

accountEmail = "hdfc@gmai.com"

accountPassword = "1112222333"
accontCity = "jaipur"

console.log(accountEmail);
console.table([accountEmail, accountId, accountPassword, accontCity, accontState]);