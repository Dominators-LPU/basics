//destructuring
// let arr  = ["apple", "mango", "banana"] 

// let a = arr[0]
// 
// let c = arr[2]


// let [x,,z] = arr 

// x = arr[0], y = arr[1], z = arr[2]

// console.log(x,z)


// let obj = {
//     name: "Rahul",
//     age: 20,
//     address: "Delhi"
// }


// let name =  obj.name
// let age = obj.age
// let address = obj.address

// console.log(name,age,address)


// let {name, age, address} = obj 

// console.log(name,age,address)


// let {name:x, age:y, address:z} = obj 

// console.log(x,y,z)

// console.log(name, age, address) // undefined undefined undefined




function details({name, age, address}){
     
    // console.log(obj.name, obj.age, obj.address)

    console.log(name, age, address)
}


details({name:"Rahul", age:20, address:"Delhi"})


