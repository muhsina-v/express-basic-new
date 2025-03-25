const express=require('express');
const app=express();
 app.use(express.urlencoded({extended:true}))

app.post('/register',(req,res)=>{
    console.log(req.body)
    const{name,email}=req.body;
    res.send(`user ${name} ${email} `)
})

app.listen(3000,()=>[
    console.log("workiiii")
])