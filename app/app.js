const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const Users = require("../models/student.Schema")
let app = express()
mongoose.connect("mongodb://localhost:27017/student",{
    useNewUrlParser:true,//默认两条配置
	useUnifiedTopology:true
}).then(()=>{
    console.log("数据库连接成功");
    app.listen(3000,()=>{
        console.log("3000端口监听成功");
    })
}).catch(()=>{
    console.log("数据库连接失败");
})

//body-parser默认的两条配置
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json())


app.use("/submit",(req,res)=>{
    let{Name,Sex,Chinese,Math,English}=req.body
   Users.findOne({//数据库查找数据
        Name
    }).then((user)=>{
        if(user){
            res.send({//如果查到了数据向前台发送 0 标识
                errno:0
            })
            return
        }
        res.send({//如果没查到数据向前台发送 1标识,标识
            errno:1
        })
        new Users({//没查到数据就保存该次数据
            Name,
            Sex,
            Chinese,
            Math,
            English
        }).save()
    })
})
app.use("/removename",async (req,res)=>{
    let {Name}=req.body
    console.log(3636555,Name)
    const  user = await Users.findOne({//查找数据库有没有这个人
        Name
    })
        if(user){//有就返回0 标识 同时删除这个人
           await Users.deleteOne({Name:user.Name} )

            res.send({
                errno:0
            })
        }else{
            res.send({//没有就返回 1 标识
                errno:1
            })
        }
   
})
app.use("/update", async (req,res)=>{
    let {Name,Sex,Chinese,Math,English}=req.body
    const user = await Users.findOne({
        Name
    })
        if(user){
           await Users.updateOne({Name},{$set:{Sex,Chinese,Math,English}})
            res.send({
                errno:0
            })
            return
        }
        res.send({
            errno:1
        })
})
app.get("/students",async (req,res)=>{
    let result = await Users.find()
    res.send({
        errCode:0,
        data:result
    })
})