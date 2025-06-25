const user = {
    name : "chinthaka",
    age : 24,
    greet(){
        console.log("Hey...");
    }
}

const newUser = {...user};
console.log(newUser);

const hobbies = ["Cooking","Sport","Gaming"];

const newHobbies = [...hobbies];
console.log(newHobbies);