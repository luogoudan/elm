<template>
  <div id="box1">
    <div class="home">
      <el-breadcrumb
        separator="/"
        style="height:50px;line-height:50px;text-indent:10px;"
      >
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          ><a href="javascript:;">数据管理</a></el-breadcrumb-item
        >
        <el-breadcrumb-item>商家列表</el-breadcrumb-item>
      </el-breadcrumb>
      <img src="https://elm.cangdu.org/img/default.jpg" />
    </div>

    <el-table :data="tableData" style="width: 100%">
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
              <span>{{ props.row.description }}</span>
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
              <span>{{ props.row.recent_order_num }}</span>
            </el-form-item>
            <el-form-item label="分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>

      <el-table-column label="商品名称" prop="name"> </el-table-column>
      <el-table-column label="店铺地址" prop="address"> </el-table-column>
      <el-table-column label="店铺介绍" prop="description"> </el-table-column>
      <el-table-column label="操作">
        <span
          style="display:inline-block;width:40px;heihgt:25px;border:1px solid #000;border-radius:4px;font-size:10px;line-height:25px;text-align:center;"
        
          >
              <el-button type="text" @click="centerDialogVisible = true">编辑</el-button>

<el-dialog
  title="修改店铺信息"
  :visible.sync="centerDialogVisible"
  
  width="50%"
  center>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="店铺名称" prop="name" >
    <el-input v-model="ruleForm.name" ></el-input>
  </el-form-item>
  <el-form-item label="详细地址" prop="address" >
<el-select
          v-model="ruleForm.options"
        filterable
        remote
        reserve-keyword
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading">

<el-option
v-for="item in options"
:key="item.value"
:label="item.name"
:value="item.name">
</el-option>
</el-select>
</el-form-item>
 <el-form-item label="联系电话" prop="phone">
    <el-input v-model="ruleForm.phone"></el-input>
  </el-form-item>
   <el-form-item label="店铺简介" prop="pro">
    <el-input v-model="ruleForm.pro"></el-input>
  </el-form-item>

   <el-form-item label="店铺分类" prop="region">
    <el-select v-model="ruleForm.region" placeholder="满减优惠">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>

  <div class="update">
          <p>
            <span>上传店铺头像</span>
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </p>
</div>

    


</el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
          </span
        

        >
        <span
          style="display:inline-block;width:70px;heihgt:25px;border:1px solid #000;border-radius:4px;font-size:10px;line-height:25px;text-align:center;"
          >添加食品</span
        >
        <span
          style="display:inline-block;width:40px;heihgt:25px;border:none;border-radius:4px;font-size:10px;line-height:25px;text-align:center;color:#fff;background:#FF4949"
          >删除</span
        >
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
        :total="1000"
      ></el-pagination>
    </div>
<!-- <div class='zhe' v-show='bsy'></div> -->
 
  </div>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    return {
        centerDialogVisible: false,
     options: [{
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
      tableData: [],
      currentRow: null,
      list: "",
      currentPage1: 1,
      activeNames: ["1"],
      num: 0,
      bsy:false,
      data:[],
        imageUrl: '',
        options: [],
        value: [],
        list: [],
        loading: false,
        states: [],
              tableData: [  ],
           num: 5,
           num1:20,
          dialogImageUrl: '',
        dialogVisible: false,
        ruleForm: {
          name: '',
          region: '',
          phone:'',
          address:'',
          
        },
        rules: {
          name: [
            { required: true, message: '请输入店铺名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          address:[
            { required: false, message: '请输入详细地址',}
          ],
          phone:[
            { required: true, message: '请输入联系电话',}
          ],
        }
    };
  },
  components: {},
  created() {
    Axios.get( "https://elm.cangdu.org/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset=0&limit=20"
    ).then(item => {
      // console.log(item.data)
      this.tableData = item.data;
    });
  },

  methods: {
    submit(){
       Axios.post('https://elm.cangdu.org/shopping/updateshop').then((res)=>{
        console.log(res.data)
      })
    },
    fnBj() {
      Axios.get( "https://elm.cangdu.org/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset=0&limit=20"
    ).then(res => {
      console.log(res.data)
      this.tableData = res.data;
    });
      this.bsy=!this.bsy
    },

    centerDialogVisible(){
     Axios.get('https://elm.cangdu.org/shopping/v2/restaurant/category').then((res)=>{

     })
    },
 

  //上传头像
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },

    handleChange(val) {
      console.log(val);
    },
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.num = val - 1;
      Axios.get(
        "https://elm.cangdu.org/v1/users/list?offset=" +
          this.num * 20 +
          "4&limit=20"
      ).then(item => {
        console.log(item);
        this.data = item.data;
      });
    },
    remoteMethod(query) {
  Axios.get(' https://elm.cangdu.org/v1/pois?type=search&city_id=3&keyword='+query).then((res)=>{
    this.options=res.data
     console.log(this.options)
})
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options = [];
        }
      }
    },
       mounted() {
      this.list = this.states.map(item => {
        return { value: item, label: item };
      });
  }
};
</script>
<style lang='scss' scoped>
#box1 {
  background: white;
  width: 100%;
  height: 100%;
  margin-left: 10px;
  .home {
    font-size: 10px;
    width: 100%;
    height: 50px;
    background: #eff2f7;
    line-height: 50px;
    img {
      height: 40px;
      width: 40px;
      position: absolute;
      right: 10px;
      top: 5px;
      border-radius: 50%;
    }
  }
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
  position: relative;
  bottom: 0;
  left: 50px;
  z-index: 10;
}
.zhe{
  width:100%;
  height:786px;
  position:fixed;
  top:0;
  background: #555;
  opacity: 0.5;
}
 .update{
      p{
        margin-top: 20px;
        span{
          float: left;
          font-size: 14px;
          color: #606266;
          margin-left: -20px;
          margin-right:100px;
        }
      }
      p:nth-of-type(3){
        span{
          margin-right: 56px;
        }
      }
      .avatar-uploader{
        width: 178px;
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      .avatar-uploader:hover {
        border-color: #409EFF;
      }
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
      }
      .avatar {
        width: 178px;
        height: 178px;
        display: block;
      }
    }
</style>
