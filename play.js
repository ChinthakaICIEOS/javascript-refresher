const user = {
    name : "Chinthaka",
    age : 24,
    greet : function(){
        console.log("I am " + this.name);
    }
}

console.log(user);
user.greet();