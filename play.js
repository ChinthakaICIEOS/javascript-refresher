let name_ = "Chinthaka";
let age = 24;
let isMarried = true;

const userFunction = function(userName,userAge,userMarried){
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