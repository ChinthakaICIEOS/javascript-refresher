var name_ = "Chinthaka";
var age = 24;
var isMarried = true

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