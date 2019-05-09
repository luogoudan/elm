<template>
<div class="box3">
    <div class="login">首页/数据管理/用户列表</div>
     <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="user_name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="create_time"
        label="注册日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="city"
        label="地址"
        width="180">
      </el-table-column>
      <el-table-column
        prop="admin"
        label="权限">
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
        :total="1029">
      </el-pagination>
    </div>
</div>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      tableData: [],
      currentRow: null,
      list: "",
      currentPage1: 1
    };
  },
  components: {},
  created() {
    Axios.get(
      "https://elm.cangdu.org/admin/all?offset=0&limit=20"
    ).then(item => {
      console.log(item.data.data);
      console.log(item.data)
      console.log(item)
      this.tableData = item.data.data;
    });
  },
  // beforeCreate() {
  //   Axios.get(
  //     "https://elm.cangdu.org/bos/orders?offset=0&limit=20&restaurant_id=undefined"
  //   ).then(item => {
  //     console.log(item);
  //   });
  // },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.num=(val-1)*20
    Axios.get("https://elm.cangdu.org/admin/all?offset=0"+this.num+"&limit=20").then((item) => {
      console.log(item);
      this.tableData = item.data.data;
    });
    }
  }
};
</script>
<style>
#box3 {
  padding:0;
margin:0;    
box-sizing: border-box;
  background: white;
  width: 100%;
  height: 800px;
  overflow-y: scroll;
}
.login {
  width: 100%;
  /* height: 60px; */
  background: #eff2f7;
  line-height: 60px;
  font-size: 15px;
  padding-left: 15px;
  color: lightgrey;
  /* margin-bottom: 15px; */
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
.block {
  background: white;
}
</style>
