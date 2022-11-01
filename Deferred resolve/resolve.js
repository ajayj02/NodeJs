function downloadPromise() {
    return new Promise(function(resolve,reject){
        console.log("the download has begun");
        setTimeout(()=>{
              console.log("download running");
              resolve();
        }, 2000)
    });
}

let promiseTest = new downloadPromise();


setTimeout(()=> {
    promiseTest.then(function(){
        console.log("download complete");
})
}, 5000);
