const hobbies = ["Cricket","Swim","Dance"];

for(let hobby of hobbies){
    console.log(hobby);
}

hobbies.forEach(hobby => {
    console.log(hobby);
});

const newHobbies = hobbies.map(hobby => "Hobby : " + hobby);

console.log(newHobbies);
console.log(hobbies);

hobbies.push("Cooking");
console.log(hobbies);