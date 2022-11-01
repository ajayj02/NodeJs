function someAsyncFunc(callback) {

    console.log("The function has begun");
    setTimeout(() => {

        console.log("settimout started");
         callback();
    }, 5000);
};  // async function


let asyncPromise = new Promise(function(resolve, reject){
    someAsyncFunc(resolve);
})  //promisification of async function


asyncPromise.then(function(){
      console.log("Promise is fulfilled");
})

