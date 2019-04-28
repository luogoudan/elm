<template>
<div id="box1">
<!-- <Header :list="list"></Header> -->
 <div class="login">首页/数据管理/用户列表</div>
<el-table
ref="singleTable"
:data="tableData"
style="width: 100%"
>
<el-table-column type="index" width="220"> </el-table-column>
<el-table-column property="registe_time" label="注册日期" width="220">
</el-table-column>
<el-table-column property="username" label="用户姓名" width="220">
</el-table-column>
<el-table-column property="city" label="注册地址"> </el-table-column>
</el-table>
<div class="block">
<el-pagination
@size-change="handleSizeChange"
@current-change="handleCurrentChange"
:current-page.sync="currentPage1"
:page-size="100"
background
layout="total,prev, pager, next"
:total="1000"
></el-pagination>
</div>
</div>
</template>
<script>
import Axios from 'axios'
// import Header from "./hear";
export default {
data() {
return {
tableData: [

],
currentRow: null,
list: "",
currentPage1: 1
}; 
},
components: {
// Header
},
created() {
Axios.get("https://elm.cangdu.org/v1/users/list?offset=0&limit=20").then((item)=>{
console.log(item.data)
this.tableData=item.data
})
},
beforeCreate(){
Axios.get("https://elm.cangdu.org/v1/users/list?offset=0&limit=20").then(item => {
console.log(item);
});
},
methods: {
handleSizeChange(val) {
console.log(`每页 ${val} 条`);
},
handleCurrentChange(val) {
console.log(`当前页: ${val}`);
// axios.get("https://elm.cangdu.org/v1/users/list?offset=4&limit=20").then(item => {
// console.log(item);
// });
}
}
};
</script>
<style>
#box1 {
    
background: white;
width: 100%;
height: 100%;
overflow: auto;
/* margin-left:10px; */
}
  .login{
               width:100%;
               height:60px;
               background: #EFF2F7;
               line-height:60px;
               font-size:15px;
               padding-left:15px;
               color: lightgrey;
           }
           .block{
               background: white;
               
           }
</style>
