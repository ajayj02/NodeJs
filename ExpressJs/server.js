const express = require('express')
const app = express()

app.get("/", function(req,res){                //this is called middleware
    res.send('Hello folks')
})

app.listen(3000, ()=> {
    console.log("server started at 3000");
});  //starts servers at 3000 port


//127.0.0.1 == localhost