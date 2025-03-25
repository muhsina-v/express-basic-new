const express=require('express')
const app=express()

app.use(logger)

app.get('/',(req,res,)=>{
    console.log("first")
     res.send('hello 1')

})
app.get('/admin',(req,res)=>{
    console.log("adminnn");
    res.send('hello admin')
})

app.get('/userr',auth,(req,res)=>{
    console.log(`user is ${req.admin}`);
    console.log("userrr")
    res.send('user page')
})


function logger(req,res,next){
    console.log()
    next()
}
function auth(req,res,next){
    if(req.query.admin==="true"){
        req.admin=true
        next()
    }else{//in the case there is no else case we shuold add retutn here other wise it goes loop 
    console.log("please loginn")
    }
}
app.listen(3000,()=>{
    console.log("working on 3000")
})
