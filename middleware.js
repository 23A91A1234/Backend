import express from'express';
const app=express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("API success");
})
app.post('/add-user',(req,res)=>{
    let data=req.body;
    console.log(data);
    res.send("data success");
})
app.put('/update-user',(req,res)=>{
    let data=req.body;
    console.log(data);
    res.send("data updated");
})
app.listen(5000,()=>{
    console.log("server is running at port 5000");
})