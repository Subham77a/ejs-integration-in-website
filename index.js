import express from "express";
import ejs from "ejs";

const app=express();
const port=3000;

app.get("/",(req,res)=> {
    res.render("index.ejs",{
        title:"ejs tags",
        seconds:new Date().getSeconds(),
        items:["apple","bananna","mango"],
    });
}) 

app.listen(port,()=> {
    console.log("running on port number 3000");
})
