
// Spread Operator && Rest Operator: 


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 


// let arr1 = [10,20, ...arr,  40,50]


// // console.log(arr1);


// let obj = {
//     name: "Rahul",
//     age: 20,    
//     address: "Delhi"
// }


// let obj1 = { ...obj, name:"Abhishek", country: "India"}

// console.log(obj1)



// Rest Operator: 


function sum( ...args){ // rest
    // console.log(t,args)
    let sum = 0;
    for(let t of args){
        sum = sum+t
    }
    console.log(sum)
}

sum(10,20,30)

sum(10,20)


sum(10,20,30,40,50,60,70,80,90,100)

sum(10)




