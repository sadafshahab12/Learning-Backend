import express from 'express';

const app = express();
app.use(express.json());
const port = 3000;

app.get("/member", (req,res)=>{
    const members = [
        {id:1,  title : "member", name:"John", age:20},
        {id:2,  title : "member", name:"Jane", age:25},
        {id:3,  title : "member", name:"Bob", age:30},     
    ] 
})
app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`);
})