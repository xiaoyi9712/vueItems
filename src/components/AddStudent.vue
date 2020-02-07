<template>
  <div class="addstudent">
    <h1>增加学生</h1><br>
    <div class="students-input">
      <div>
           <span>姓名:</span><el-input placeholder="请输入姓名" v-model="demo.Name" clearable style="width:200px"></el-input>
      </div>
    <div>
     <span> 性别:</span><el-input placeholder="请输入性别" v-model="demo.Sex" clearable style="width:200px"></el-input>
    </div>
    <div>
     <span> 语文分数:</span><el-input placeholder="请输入语文分数" v-model="demo.Chinese" clearable style="width:200px"></el-input>
    </div>
    <div>
    <span>  数学分数:</span><el-input placeholder="请输入数学分数" v-model="demo.Math" clearable style="width:200px"></el-input>
    </div>
    <div>
      <span> 英语分数:</span><el-input placeholder="请输入英语分数" v-model="demo.English" clearable style="width:200px"></el-input>
    </div>
    
    
   
    </div>
    <el-button type="success" @click="fn">确认</el-button>
    <el-button type="warning" @click='()=>{this.$router.push("/")}'>点我返回首页</el-button>
    
    <!-- 学生:<input type="text" v-model="demo.Name" id="name"><br>
    性别:<input type="text" v-model="demo.Sex" id="sex"><br>
    语文:<input type="text" v-model="demo.Chinese" id="chinese"><br>
    数学:<input type="text" v-model="demo.Math" id="math"><br>
    英语:<input type="text" v-model="demo.English" id="english"><br>
    <input type="submit" id="btn" @click="fn"><a href="/">点我返回首页</a> -->
  </div>
</template>

<script>
export default {
    name:"AddStudent",
    data(){
     return {
       demo:{
         Name:"",
         Sex:"",
         Chinese:"",
         Math:"",
         English:""
       }
     }
    },
    methods:{
      fn(){
        if(!this.demo.Name){
          alert("请输入学生姓名")
          return
        }
        if(this.demo.Sex !== "男" && this.demo.Sex !== "女"){
          alert("请输入性别'男'或'女'")
          return
        }
        this.$axios.post("/api/submit",{
          Name:this.demo.Name,
          Sex:this.demo.Sex,
          Chinese:this.demo.Chinese,
          Math:this.demo.Math,
          English:this.demo.English
        }).then((res)=>{
            if(res.data.errno){
              alert("添加学生成功哦~")
              return
            }
            alert("已经添加过啦~")
        })
      }
    },
}
</script>

<style scoped>
.students-input > div{
  margin:5px 0;
}
.students-input > div span{
  margin-right:10px;
}
  
</style>