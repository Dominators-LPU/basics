
// let arr = [10,20,30] 
// arr strores address of first element

// let new_arr = arr // shallow copy

// arr[0] = 100
// new_arr[1] = 200


// console.log(arr, new_arr)


// let a = 10
// let b = a


// deep copy 

// let arr1 = [...arr] 

// arr[0] = 100
// arr1[1] = 200
// console.log(arr, arr1)






let arr = [10,20,30, [40,50], 60,70, [80,90,[100,110],230]]

// let new_arr = [...arr]

// let a = arr[0]
// let b = arr[1]
// let c = arr[2]
// let d = arr[3] // [40,50]



// console.log(arr[3][0])

// arr[3][0] = 400

// console.log("original", arr)
// console.log("new arr",new_arr)


 let new_arr = structuredClone(arr) 

 arr[3][0] = 400

 console.log("original", arr)
console.log("new arr",new_arr)





















