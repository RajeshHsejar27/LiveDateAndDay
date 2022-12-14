const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");

app.get("/",function(req,res){

   var today=new Date();
    
   var options={
       weekday:"long",
       day:"numeric",
       month:"long"
   };
   var day=today.toLocaleDateString("en-US",options);
    res.render("list",{kindOfDay:day});

});


app.listen(process.env.PORT || 3000,function(){
    console.log("server started at port 3000");
});