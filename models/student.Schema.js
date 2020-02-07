const Mongoose = require("mongoose")

let studentSchema = new Mongoose.Schema({
    Name:String,
    Sex:String,
    Chinese:Number,
    Math:Number,
    English:Number
})
module.exports = Mongoose.model("banji",studentSchema)//给班级设置格式