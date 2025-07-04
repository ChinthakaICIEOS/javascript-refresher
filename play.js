// Async code
const fetchData = () => {
    const promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Done!");
        },1500);
    })
    return promise;
};

setTimeout(() => {
    console.log("Timer is done!");
    fetchData()
        .then(text1 => {
            console.log("Hey1");
            console.log(text1);
            return fetchData();
        })
        .then(text2 => {
            console.log("Hey2");
            console.log(text2);
        });
},2000);

// Sync code
console.log("Hey Sync 01");
console.log("Hey Sync 02");