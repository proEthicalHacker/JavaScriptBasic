//Redus js

// const myArr =[1,2,3,4,5]

// const myTotal=myArr.reduce(function(acc,current){
//     console.log(`acc: ${acc} and current value: ${current}`);
//     return acc + current
// }, 0)

// const myTotal= myArr.reduce( (acc, curr)=> acc+curr, 0)

// console.log(myTotal);

const ShoppingCart=[
     {
    itemName:"java course",
    Price:200
},
 {
    itemName:"python course",
    Price:500
},
 {
    itemName:"C++ course",
    Price:600
},
 {
    itemName:"cude course",
    Price:700
},

]

const PriceToPay = ShoppingCart.reduce( (acc,item)=>acc+item.Price,0)

console.log(PriceToPay);