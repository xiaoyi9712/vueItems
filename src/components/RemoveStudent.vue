<template>
  <div class="removestudent">
    <h3>删除学生</h3>
     <div style='margin-bottom:15px;'>
           <span style='margin-right:10px;'>姓名:</span><el-input placeholder="请输入姓名" v-model="Name" clearable style="width:200px"></el-input>
      </div>
        <el-button type="success" @click="fn">确认</el-button>
        <el-button type="warning" @click='()=>{this.$router.push("/")}'>点我返回首页</el-button>
  </div>
</template>
    
<script>
export default {
    data(){
      return{
        Name:""
      }
    },
    methods:{
      fn(){
        if(this.Name===""){
          alert("请输入要删除的学生的姓名嗷")
          return
        }
        this.$axios.post("/api/removename",{
          Name:this.Name
        }).then(res=>{
          if(res.data.errno){
            alert("sorry,要删除的人不存在")
            return
          }
          alert("删除成功嗷~")
          this.Name= ''
        })
      }
    }
}
</script>

<style>

</style>