// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Here we will store the reversed array. 
 let reversedArr = []

//  Here we will put the new array with the calculations done. 
 let newArr = []

//  With this we will check if the number we multiply by 2 is bigger than 9. 
 let check = 0

//  This is the main function. 
const validateCred = array => {

    // console.log(`The original array is: ${array}`)

    // Here we are reversing the array. 
    reversedArr = array.reverse()

    // You can use this console log to view the reversed array. 
    // console.log(`The reversed array is ${reversedArr}.`)

    // This is the first element of the reversed array that we need to drop at first, but we will need it in the last step to add it to the final sum. 
    let firstElement = reversedArr.shift()


    // console.log(`The array without the first element is ${reversedArr}`)

    // Here we are looping from the first element to the last, but only doing the operation on the even indexes, starting from 0 which is even. 
    for (let i = 0; i < reversedArr.length ; i++){
    if (i % 2 === 0){
        check = reversedArr[i]*2
        if (check > 9){
            newArr.push(check - 9)
        } else if (check < 9){
            newArr.push(check)
        }
    } else {
        //   If the current index is not even, then we don't want to perform any operations to it and we will add it to the new array as it is. 
        newArr.push(reversedArr[i])
    }

    }
    //   You can use this console log to see the new array. 
    //  console.log(`The newArr array is ${newArr}.`)

    //  With this function, we will get the sum of all the elements in the new array. 
    const reducer = (previousValue, currentValue) => previousValue + currentValue
    let sumArr = newArr.reduce(reducer)

    // You can use this console log to check the sum of the elements without the first one from the original array. 
    //  console.log(`The sum of elements without the first one is: ${sumArr}`)

    //  Remember we dropped the first element at the beginning? Now we need to add it again so that we can get a final sum. 
    let finalSum = firstElement + sumArr

    // console.log(`The total sum of all the elements in the array is: ${finalSum}`)

    // -----------//

    // Here we apply the logic required to know if a card is valid or not. 
    if (finalSum % 10 === 0){
        console.log(`The card is valid`)
    } else {
        console.log('The card is invalid')
    }

}

valid25 = [5,2,0,4,2,4,5,2,5,0,0,0,1,4,8,8]

validateCred(valid25)




