// let x = [100, 200, 300]
// let y = [100, 200, 300]
// let z = y
// console.log(x==y)
// console.log(z==y)
// console.log(z==x)
// console.log(typeof null)
// console.log(typeof undefined)

// const obj = {
//     pqr: 100,
//     abc: 200,
//     xyz: {
//         pqr: 300,
//         abc: 400
//     }
// }

// const {pqr, abc, xyz:{pqr:p}} = obj
// console.log(pqr, abc, p)

// let a = 5;
// console.log(`The value of a is ${a}`)

// let arr = [1, 2, 3, 4, 5]

// console.log(arr)
// const newArr = arr.map((val) => val > 3)
// console.log(newArr)
// const anotherArr = arr.filter((val)=> val > 3)
// console.log(anotherArr)

// function harshit(string){
//     const arr = string.split(' ')
//     let smallestWord = ''
//     let smallestLength = Infinity
//     // for(let i = 0; i < arr.length; i++){
//     //     if(arr[i].length < smallestLength){
//     //         smallestLength = arr[i].length
//     //         smallestWord = arr[i]
//     //     }
//     // }
//     arr.forEach((val)=>{
//         if(val.length < smallestLength){
//             smallestLength = val.length
//             smallestWord = val
//         }
//     })
//     console.log(smallestWord)
// }
// harshit('I am Harshit')

// let arr1 = [100, 200, 300, 500]
// let arr2 = [100, 200, 300, 400]
// console.log(arr1.every((element, index) => element === arr2[index]))

// for(let i = 0; i < arr1. length || i < arr2.length; i++){
//     if(arr1[i] !== arr2[i]){
//         console.log("Nope")
//     }
// }

// const arr = [1, 2, 3, 3, 3, 4, 5, 5]
// let newArr = []
// let currEl = null
// for(let i = 0; i < arr.length; i++){
//     if(currEl === arr[i]){
//         newArr.push(currEl)
//     }else{
//         currEl = arr[i]
//     }
// }

// const uniqueArr = [...new Set(newArr)]
// console.log(arr)
// console.log(newArr)
// console.log(uniqueArr)

// const a1 = [1, 2, 3, 4, 5]
// const a2 = [3, 4, 5, 6, 7, 8]
// const len = a1.length > a2.length ? a1.length : a2.length
// const res = []
// for(let i = 0; i < len; i++){
//     if(a1.includes(a2[i])){
//         res.push(a2[i])
//     }
// }
// console.log(res)