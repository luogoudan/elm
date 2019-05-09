<template>
  <div id="box1">
      <div class='home'>
            <el-breadcrumb separator="/" style='height:50px;line-height:50px;text-indent:10px;'>
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item><a href="javascript:;">添加数据</a></el-breadcrumb-item>
  <el-breadcrumb-item>添加店铺</el-breadcrumb-item>
</el-breadcrumb>
          <img src="https://elm.cangdu.org/img/default.jpg"/>   
  </div>
 
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="店铺名称" prop="name" >
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
   <el-form-item label="详细地址" prop="address">
    <el-select
    v-model="states.value"
    filterable
    remote
    reserve-keyword
    placeholder="请输入关键词"
    :remote-method="remoteMethod"
    :loading="loading">
    <!-- {{states}} -->
    <el-option
      v-for="item in states"
      :key="item.value"
      :label="item.name"
      :value="item.name">
    </el-option>
  
  </el-select><br/>
 <span>当前城市:{{states.name}}</span>
  </el-form-item>
 <el-form-item label="联系电话" prop="phone">
    <el-input v-model="ruleForm.phone"></el-input>
  </el-form-item>
   <el-form-item label="店铺简介" prop="pro">
    <el-input v-model="ruleForm.pro"></el-input>
  </el-form-item>
   <el-form-item label="店铺标语" prop="chian">
    <el-input v-model="ruleForm.chian"></el-input>
  </el-form-item>
   <el-form-item label="店铺分类" prop="region"  >
     <!-- <el-cascader
  :options="o"
  change-on-select

></el-cascader> -->
   <el-select v-model="slt.name"  style="width: 100%">
     <!-- {{slt}} -->
              <el-option v-for="res in slt"
         :key="res.value"
         :label="res.name"
         :value="res.name">
        </el-option>
      </el-select>
  </el-form-item>
   

    <el-form-item label="店铺特点" prop="region">
    <el-form-item label="品牌保证" prop="delivery" style="display:inline-block">
    <el-switch v-model="ruleForm.delivery"></el-switch>
  </el-form-item>
    <el-form-item label="蜂鸟专送" prop="song" style="display:inline-block">
    <el-switch v-model="ruleForm.song"></el-switch>
  </el-form-item>
    <el-form-item label="新开店铺" prop="xin" style="width:10px;display:inline-block">
    <el-switch v-model="ruleForm.xin"></el-switch>
  </el-form-item>
    <el-form-item label="外卖保" prop="bao" style="display:inline-block">
    <el-switch v-model="ruleForm.bao"></el-switch>
  </el-form-item>
    <el-form-item label="准时达" prop="da" style="display:inline-block">
    <el-switch v-model="ruleForm.da"></el-switch>
  </el-form-item>
    <el-form-item label="开发票" prop="piao" style="width:10px;display:inline-block">
    <el-switch v-model="ruleForm.piao"></el-switch>
  </el-form-item>
</el-form-item>
 <el-form-item label="配送费" prop="region">
 <el-input-number v-model="num" @change="handleChange" :min="1" :max="100" label="描述文字"></el-input-number>
 </el-form-item>
 <el-form-item label="起送价" prop="region">
 <el-input-number v-model="num1" @change="handleChange" :min="1" :max="100" label="描述文字"></el-input-number>
 </el-form-item>
  <el-form-item label="营业时间" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
      </el-form-item>
    </el-col>
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

          <p>
            <span>上传营业执照</span>
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess1"
              :before-upload="beforeAvatarUpload1">
              <img v-if="imageUrl1" :src="imageUrl1" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </p>


          <p>
            <span>上传餐饮服务许可证</span>
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess2"
              :before-upload="beforeAvatarUpload2">
              <img v-if="imageUrl2" :src="imageUrl2" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </p>
        </div>


<el-form-item label="优惠活动" prop="region">
    <!-- <el-button  @click="open">满减优惠</el-button> -->
    <el-select v-model="ruleForm.region" placeholder="满减优惠" @change="open">
      
      <el-option label="满减优惠" value="满减优惠" prop>
         <!-- <el-button style="border:none; width:100%" type="text" @click="open">满减优惠</el-button> -->
          <!-- <el-input v-model="num" :min="0" :max="100" label="满减优惠"></el-input> -->
        <!-- <el-button style="border:none; width:100%"  @click="innerVisible = true"  >满减优惠</el-button > -->
      </el-option>

      <el-option label="优惠大酬宾" value="优惠大酬宾">

        <!-- <el-button style="border:none;width:100%" @click="innerVisible = true">优惠大酬宾</el-button> -->
      </el-option>
      <el-option label="新用户立减" value="新用户立减">
        <!-- <el-button style="border:none;width:100%" @click="innerVisible = true">新用户立减</el-button> -->
      </el-option>
      <el-option label="进店领券" value="进店领券">
       <!-- <el-button style="border:none;width:100%" @click="innerVisible = true">进店领券</el-button> -->
      </el-option>
    </el-select>
  </el-form-item>


<el-table
    :data="table"
    style="width: 100%">
    <el-table-column >
    </el-table-column>
    <el-table-column
      label="活动标题"
      >
       <template slot-scope="scope">
        <span style="margin-left: 10px">{{scope.name }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="活动名称"
     >
       <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row}}</span>
      </template>
    </el-table-column>
     <el-table-column
      label="活动详情"
      >
       <template slot-scope="scope">
        <span style="margin-left: 10px">{{  scope.aaa }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
 
  </el-table>
<el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>  
        <!-- <el-dialog
        width="50%"
        title="提示"
        :visible.sync="innerVisible"
        append-to-body>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="请输入活动详情" prop="gui"  style="width:100%;">
          <br/><br/>
        <el-input v-model="ruleForm.gui" ></el-input>
        </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
        <el-button @click="innerVisible = false">取消</el-button>
        <el-button type="primary" @click='que()' >确定</el-button>
        </div>
        </el-dialog>  -->
  </el-form-item>
</el-form>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      // o: [{
      //   value: 'zhinan',
      //   label: '指南',
      //   children: [{
      //     value: 'shejiyuanze',
      //     label: '设计原则',
      //   }]
      // }],
      outerVisible: false,
      innerVisible: false,
      //图片上传格式
      imageUrl: "",
      imageUrl1: "",
      imageUrl2: "",
      num: 5,
      num1: 20,
      table: [],
      dialogImageUrl: "",
      dialogVisible: false,
      options: [],
      // value: [],
      list: [],
      loading: false,
      states: [],
      ruleForm: {
        gui: "",
        name: "",
        region: "",
        phone: "",
        address: "",
        date1: "",
        date2: "",
        delivery: true,
        song: true,
        xin: true,
        bao: true,
        da: true,
        piao: true,
        type: [],
        resource: "",
        desc: "",
        sl: [],
        value: ""
      },
      slt: [],
      rules: {
        name: [
          { required: true, message: "请输入店铺名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        address: [{ required: false, message: "请输入详细地址" }],
        phone: [{ required: true, message: "请输入联系电话" }],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
    // que() {
    //   this.innerVisible = false;
    //   // let obj = {
    //   //   date: this.ruleForm.gui,
    //   //   name: this.name,
    //   //   address: this.num1
    //   // };
    //    let name=this.value
    //       console.log(name)
    //       this.table.push(name);
    //   // this.table.push(obj);
    //   // console.log(this.ruleForm.gui);
    //   // console.log(this.num);
    //   // console.log(this.num1);
    // },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },

    handleAvatarSuccess1(res, file) {
      this.imageUrl1 = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload1(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleAvatarSuccess2(res, file) {
      this.imageUrl2 = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload2(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    //  Axios.get('')
    handleChange(value) {
      console.log(value);
    },
    open(row) {
      console.log(row)
      let aaa=row
      this.table.push(aaa)
      this.$prompt("请输入活动详情", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
        // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        // inputErrorMessage: '邮箱格式不正确'
      })
        .then(({ value }) => {
          // this.$message({
           
          // });
          let name=value
          console.log(name)
          this.table.push(name);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
        console.log(this.ruleForm.region)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    onSubmit() {
      console.log("DDDDDDDsubmit!");
    },

    remoteMethod(query) {
      console.log(query);
      Axios.get(
        "https://elm.cangdu.org/v1/pois?type=search&city_id=undefined&keyword=" +
          query
      ).then(item => {
        console.log(item);
        console.log(item.data);i
        this.states = item.data;
      });
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.list.filter(item => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options = [];
      }
    }
  },
  mounted() {
    Axios.get(`https://elm.cangdu.org/shopping/v2/restaurant/category`).then(
      res => {
        // console.log(res);
        // console.log(res.data);
        this.slt = res.data;
        // console.log(this.slt)
      }
    );
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
  .demo-ruleForm {
    width: 500px;
    text-align: center;
    margin-left: 200px;
    margin-top: 50px;
  }
}

.update {
  p {
    margin-top: 20px;
    span {
      float: left;
      font-size: 14px;
      color: #606266;
      margin-left: -20px;
      margin-right: 100px;
    }
  }
  p:nth-of-type(3) {
    span {
      margin-right: 56px;
    }
  }
  .avatar-uploader {
    width: 178px;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader:hover {
    border-color: #409eff;
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