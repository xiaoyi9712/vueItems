<template>
  <div id="box">
    <h1>学生管理系统</h1>
     <el-button type="warning" @click='()=>{this.$router.push("/addstudent")}'>增加学生信息</el-button>
     <el-button type="danger" @click='()=>{this.$router.push("/removestudent")}'>删除学生信息</el-button>
     <el-button type="success" @click='()=>{this.$router.push("/updatestudent")}'>编辑学生信息</el-button>
     <!-- <el-button type="warning" @click='()=>{this.$router.push("/lookstudent")}'>增加学生信息</el-button> -->
    <!-- <router-link to="/addstudent"></router-link> -->
    <!-- <router-link to="/removestudent">删除学生信息</router-link>
    <router-link to="/updatestudent">编辑学生信息</router-link>
    <router-link to="/lookstudent">查看学生信息</router-link> -->
    <el-table :data="user" stripestyle="width: 100%">
      <el-table-column
      type="index"
      width="50">
    </el-table-column>
    <el-table-column prop="Name" label="学生" >
    </el-table-column>
    <el-table-column  prop="Sex" label="性别" >
    </el-table-column>
    <el-table-column prop="Chinses" label="语文">
    </el-table-column>
    <el-table-column prop="Math" label="数学">
    </el-table-column>
    <el-table-column prop="English" label="英语">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      user:[],
    }
  },
  created(){
    this.$axios.get("/api/students").then(res=>{
       if(!res.data.errCode){
         let reasult = res.data.data;
         this.user = reasult.filter(i => i.Name)
       }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #box{
    width:700px;
    margin:100px auto;
}
table{
    width:100%;
    margin-top:20px;
    margin-left:20px;
    border-collapse:collapse;
}
tr,td{
    border:1px solid #000;
}
a{
    padding:10px 20px;
}
</style>
