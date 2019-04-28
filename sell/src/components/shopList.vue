<template>
<div class="box2">
    <div class="login">首页/数据管理/用户列表</div>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column type="expand">
      <template scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="店铺名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="店铺介绍">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="店铺 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="联系电话">
            <span>{{ props.row.phone }}</span>
          </el-form-item>
          <el-form-item label="评分">
            <span>{{ props.row.rating }}</span>
          </el-form-item>
          <el-form-item label="销售量">
            <span>{{ props.row.rating_count }}</span>
          </el-form-item>
          <el-form-item label="分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="店铺名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="店铺地址"
      prop="address"
      >
    </el-table-column>
     <el-table-column
      label="商品介绍"
      prop="description">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
           <el-button plain type="small">添加商品</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="block">
<el-pagination
@size-change="handleSizeChange"
@current-change="handleCurrentChange"
:current-page.sync="currentPage1"
:page-size="100"
background
layout="total,prev, pager, next"
:total="458"
></el-pagination>
</div>
</div>
</template>
<script>
import Axios from 'axios'
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
},
created() {
Axios.get("https://elm.cangdu.org/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset=0&limit=20").then((item)=>{
console.log(item.data)
this.tableData=item.data
})

},
beforeCreate(){
Axios.get("https://elm.cangdu.org/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset=0&limit=20").then((item) => {
console.log(item);
});
},
methods: {
handleSizeChange(val) {
console.log(`每页 ${val} 条`);
},
handleCurrentChange(val) {
console.log(`当前页: ${val}`);
}
}
};
</script>
<style>
#box2 {  
background: white;
width: 100%;
height: 800px;
overflow-y: scroll;
}
  .login{
               width:100%;
               height:60px;
               background: #EFF2F7;
               line-height:60px;
               font-size:15px;
               padding-left:15px;
               color: lightgrey;
               margin-bottom:15px;
           }
          
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .block{
               background: white;
               
           }
</style>
