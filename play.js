const name_ = "Chinthaka";
let age = 24;
const isMarried = true

age = 27;

// can't be re-asign to it
// name_ = "Paramee";

function userFunction(userName,userAge,userMarried){
    return (
        "I am " + 
        userName + 
        ", I am " + 
        userAge + 
        " and Married is " +
         userMarried
    );
}

console.log(userFunction(name_,age,isMarried))