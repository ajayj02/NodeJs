function download(url){
    return new Promise((resolve,reject)=> {

        if(!url.startsWith("http")){
            reject(new Error("Url is invalid"))
        } 
        else {
            console.log("Start download: ");
            setTimeout(()=>{  //fake 5 sec download task
                let fileName = url.split("/").pop
                resolve(fileName);
            },5000)
        }
    })

}


function resize(fileName){
    return new Promise((resolve,reject)=> {

        if(!fileName.endsWith('.png')){
            reject(new Error("Only PNG files are supported"));
        }
        else {
            console.log("Start resize: ");
            setTimeout(()=>{  //fake 5 second resizing task
                let resizedFile = fileName.split(".")[0] + "-resized.png";
                resolve(resizedFile);
            }, 5000)
        }
    })
}

function upload(resizedFileName) {
    return new Promise((resolve,reject)=>{
        console.log("Start upload: ");
        setTimeout(()=> {   //fake 3 sex upload
            let uploadedUrl = "http://imgur.com/" + resizedFileName;
            resolve(uploadedUrl)
        },3000)
    })
}

download('http://ajay.pg')
.then(resize)
.then(upload)
.then(function(uploadedUrl){
    console.log("Resized file is at " + uploadedUrl)
})
.catch(function(err){

    console.log(err);
})