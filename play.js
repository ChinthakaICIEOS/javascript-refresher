// Async code
const fetchData = callback => {
    setTimeout(() => {
        callback("Done!");
    },1500);
};

setTimeout(() => {
    console.log("Timer is done!");
    fetchData(text => {
        console.log(text);
    });
},2000);

// Sync code
console.log("Hey Sync 01");
console.log("Hey Sync 02");