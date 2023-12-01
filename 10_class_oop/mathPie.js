const descriptor = Object.getOwnPropertyDescriptor(Math , "PI")

//  console.log(descriptor);


const coffee ={
    name:'masala chai',
    price:500,
    isAvailable:true
}

console.log(Object.getOwnPropertyDescriptor(coffee,'name'));

Object.defineProperty(coffee,'name',{
    writable:false,
    enumerable:true
})