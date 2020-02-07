<template>
  <div class="updatestudent">
    <h1>编辑学生</h1><br>
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
    
  </div>
</template>

<script>
export default {
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
        this.$axios.post("/api/update",{
            Name:this.demo.Name,
            Sex:this.demo.Sex,
            Chinese:this.demo.Chinese,
            Math:this.demo.Math,
            English:this.demo.English
        }).then(res=>{
            if(res.data.errno){
              alert("没有该学生信息!")
              return
            }
            alert("编辑成功,快去页面看看吧~")
        })
      }
    }
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