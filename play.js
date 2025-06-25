const user = {
    name : "chinthaka",
    age : 24,
    greet(){
        console.log("Hey...");
    }
}

const objDeStructuring = ({ name, age }) => {
    console.log(name,age);
}

objDeStructuring(user);

const { name, age } = user;
console.log(name);
console.log(age);



const hobbies = ["Cooking","Sport","Movie"];

const [ hobby1, hobby2, hobby3 ] = hobbies;
console.log(hobby1,hobby2,hobby3);