 const  myNumers = [1,2,3,4,5,6,67,7,89,0]

//  const newNums= myNumers.map( (num)=>{return num + 30})
 


const newNums = myNumers
                  .map( (num)=> num  *20)
                  .map( (num)=> num  +50)
                  .filter( (num)=> num  >=500)

console.log(newNums);

