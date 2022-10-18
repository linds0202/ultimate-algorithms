/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/


//using set()
function mergeArrays(...arrays) {

    let jointArray = []
    
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    });

    return [...new Set([...jointArray])]

    
}

//using filter() is FASTEST
function mergeArrays(...arrays) {

    let jointArray = []
    
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    });

    const uniqueArr = jointArray.filter((item, index) => jointArray.indexOf(item) === item) 

    return uniqueArr    
}

//using reduce()
function mergeArrays(...arrays) {

    let jointArray = []
    
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    });

    const uniqueArr = jointArray.reduce((newArr, item) => {
        if(newArr.includes(item)) {
            return newArr
        } else {
            return [...newArr, item]
        }
    }, [])

    return uniqueArr
}


module.exports = mergeArrays