let name_ = "Chinthaka";
let age = 24;
let isMarried = true;

const userFunction = (userName,userAge,userMarried) => {
    return (
        "I am " + 
        userName + 
        ", I am " + 
        userAge + 
        " and Married is " +
         userMarried
    );
}

const getSum = (a,b) => a + b;

const addOne = a => a + 1;

console.log(userFunction(name_,age,isMarried));
console.log(getSum(3,4));
console.log(addOne(7));