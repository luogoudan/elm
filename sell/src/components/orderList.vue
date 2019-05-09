<template>
<div class="box2">
    <div class="login">首页/数据管理/用户列表</div>
  <el-table
  :d="a" :dd="aa" :ddd="aaa"
    :data="tableData"
   @expand-change='toggleRowSelection'
    style="width: 100%">
    <el-table-column type="expand">
      <template scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="用户名">
            <span>{{aa.username}}</span>
          </el-form-item>
          <el-form-item label="店铺名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="收货地址">
            <span>{{ aaa.address }}</span>
          </el-form-item>
          <el-form-item label="店铺 ID">
            <span>{{a.id}}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ a.address }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="订单 ID"
      prop="id">
    </el-table-column>
    <el-table-column
      label="总价格"
      prop="total_amount"
      >
    </el-table-column>
     <el-table-column
      label="订单状态"
      prop="status_bar.title">
    </el-table-column>
  </el-table>
  <div class="block">
      <span class="demonstration">显示总数</span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="20"
        layout="total, prev, pager, next"
        :total="9574">
      </el-pagination>
    </div>
</div>
</template>
<script>
import Axios from 'axios'
export default {
    data() {
return {
tableData: [],
list: "",
currentPage1: 1,
aa:[],
a:[],
d:[],
dd:[],
aaa:[],
ddd:[]
}; 
},
components: {
},
created() {
Axios.get("https://elm.cangdu.org/bos/orders?offset=0&limit=20&restaurant_id=undefined").then((item)=>{
console.log(item.data)
this.tableData=item.data
})

},
beforeCreate(){
Axios.get("https://elm.cangdu.org/bos/orders?offset=0&limit=20&restaurant_id=undefined").then((item) => {
console.log(item);
});
},
methods: {
  toggleRowSelection(row){
      Axios.get('https://elm.cangdu.org/v1/user/'+row.restaurant_id).then((ee)=>{
       if (ee) {
         console.log(ee)
          this.aa = ee.data
          console.log(this.aa);
        }
      }),
        Axios.get('https://elm.cangdu.org/shopping/restaurant/'+row.restaurant_id).then((e)=>{
       if (e) {
         console.log(e)
          this.a = e.data
          console.log(this.a);
        }
      }),
      Axios.get('https://elm.cangdu.org/v1/addresse/'+row.restaurant_id).then((eee)=>{
       if (eee) {
         console.log(eee)
          this.aaa = eee.data
          console.log(this.aaa);
        }
      })
  },
handleSizeChange(val) {
console.log(`每页 ${val} 条`);
},
handleCurrentChange(val) {
  this.num=(val-1)*20
  Axios.get("https://elm.cangdu.org/bos/orders?offset=0"+this.num+"&limit=20&restaurant_id=undefined").then((item)=>{
console.log(item.data)
this.tableData=item.data
})
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
padding:0;
margin:0;    
box-sizing: border-box;
}
  .login{
               width:100%;
               height:60px;
               background: #EFF2F7;
               line-height:60px;
               font-size:15px;
               padding-left:15px;
               color: lightgrey;
               /* margin-bottom:15px; */
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
