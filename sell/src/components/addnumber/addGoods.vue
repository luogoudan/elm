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
    <div style="width：100;height:60px;text-align:center;line-height:60px;">添加食品种类</div>
    <div class="tianjia">
         <div class="from">
                <span style="padding-left:40px;padding-right:10px;font-size:13px;padding-top:15px;">食品种类</span>
                <el-select v-model="value" placeholder="请选择" style="width:800px;height:35px;margin-top:10px">
                  <el-option
                  style="z-index=1;"
                    v-for="it in options"
                    :key="it.value"
                    :label="it.name"
                    :value="it.name">
                  </el-option>
                </el-select>
         </div>
      <el-collapse-transition>
        <div v-show="show3">
          <div class="transition-box from1"><span  style="padding-left:40px;padding-right:10px;font-size:13px;padding-bottom:20px;margin-top:10px">食品种类</span><el-input v-model="aname" placeholder="请输入内容" style="width:800px;margin-bottom:20px;height:35px;margin-top:10px" ></el-input><br/>
             <span style="padding-left:40px;padding-right:10px;font-size:13px;padding-bottom:20px;">种类描述</span><el-input v-model="jieshao" placeholder="请输入内容" style="width:800px;margin-bottom:20px;height:35px;"></el-input>
              <el-button type="primary" @click="onSubmit" style="margin-left:130px;margin-bottom:20px;" size="mini">提交</el-button> </div>
        </div>
      </el-collapse-transition>
         <div class="">
             
         </div>

         <div class="from2" style="width：100;height:40px;text-align:center;line-height:40px;font-size:13px;color:gray;margin-bottom:5px;"><el-button style="background: white;
          border:none;" @click="show3 = !show3" class="bbb"><i class="el-icon-caret-top edit_icon"></i>添加食品种类</el-button></div>
    
    </div>

      
          <div style="width：100;height:60px;text-align:center;line-height:60px;">添加食品</div>
        <div class="sss">
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="食品名称" prop="name" >
    <el-input v-model="ruleForm.name" style="width:800px;margin-bottom:20px;height:35px;"></el-input>
  </el-form-item>
  
   <el-form-item label="食品活动" prop="pro">
    <el-input v-model="ruleForm.pro" style="width:800px;margin-bottom:20px;height:35px;"></el-input>
  </el-form-item>
   <el-form-item label="食品详情" prop="chian">
    <el-input v-model="ruleForm.chian" style="width:800px;margin-bottom:20px;height:35px;"></el-input>
  </el-form-item>
 
 <el-form-item label="上传食品头像" prop="region">
<el-upload
  class="avatar-uploader"
  action="https://elm.cangdu.org/v1/addimg/food"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon" ></i>
</el-upload>
</el-form-item>
  <el-form-item label="食品特点" :label-width="formLabelWidth">
       <el-select v-model="value7" multiple placeholder="请选择">
    <el-option
      v-for="item in op"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>
  <div></div>
    <el-form-item label="食品规格" prop="region">
   <el-radio v-model="radio" label="1" @change="qqq"> 单规格</el-radio>
  <el-radio v-model="radio" label="2" @change="qqq">多规格</el-radio>
</el-form-item>

<div class="dan" v-if="isshow" >
 <el-form-item label="包装费" prop="region">
 <el-input-number v-model="num" @change="handleChange" :min="1" :max="100" label="描述文字"></el-input-number>
 </el-form-item>
 <el-form-item label="价格" prop="region">
 <el-input-number v-model="num1" @change="handleChange" :min="1" :max="100" label="描述文字"></el-input-number>
 </el-form-item>
<el-form-item>
    <el-button type="primary" @click="Submit">确认添加食品</el-button>

  </el-form-item>
    </div>


    <div class="duo" v-else >
      <el-button type="primary"  @click="innerVisible = true">添加规格</el-button>
                 <el-dialog
            width="50%"
            title="添加规格"
            :visible.sync="innerVisible"
            append-to-body>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="规格" prop="gui" >
            <el-input v-model="ruleForm.gui" ></el-input>
            </el-form-item>

            <el-form-item label="包装费" prop="region">
            <el-input-number v-model="num" @change="handleChange" :min="0" :max="100" label="描述文字"></el-input-number>
            </el-form-item>
            <el-form-item label="价格" prop="price">
            <el-input-number v-model="num1" @change="handleChange" :min="1" :max="100" label="描述文字"></el-input-number>
            </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
            <el-button @click="innerVisible = false">取消</el-button>
            <el-button type="primary" @click='que()' >确定</el-button>
            </div>
            </el-dialog> 
     <el-table
    :data="table"
    style="width: 100%">
    <el-table-column
      label="规格"
      width="80">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="包装费"
      width="80">
      <template slot-scope="scope">
      <span style="margin-left: 10px">{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="价格"
      width="80">
      <template slot-scope="scope">
      <span style="margin-left: 10px">{{ scope.row.address }}</span>
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

   <el-button type="primary" @click="Submit">确认添加食品</el-button>
    </div>
</el-form>
</div>
    <div>
  </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      outerVisible: false,
      innerVisible: false,
      dialogVisible: false,
      ruleForm: {
        gui: "",
        num: 0,
        num1: 20
      },
      isshow: true,
      data: "",
      table: [
        {
          date: "默认",
          name: 0,
          address: 20
        }
      ],
      show3: true,
      value: "",
      num1: "",
      num: "",
      formLabelWidth: "120px",
      radio: "1",
      imageUrl: "",
      tableData: [],
      dialogImageUrl: "",
      ruleForm: {
        region: "",
        pro:'',
        chain:''
      },
      jieshao: "",
      aname: "",
      op: [
        {
          value: "新品",
          label: "新品"
        },
        {
          value: "招牌",
          label: "招牌"
        }
      ],
      options: [],

      value5: [],
      value7: [],
      rules: {
        name: [
          { required: true, message: "请输入店铺名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        address: [{ required: true, message: "请输入详细地址" }],
        phone: [{ required: true, message: "请输入联系电话" }],

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
  mounted() {
     if(this.$route.query.id){
         console.log(this.$route);
    let qqq = this.$route.query.id;
    console.log(qqq);
    Axios.defaults.withCredentials = true;
    Axios.get(
      "https://elm.cangdu.org/shopping/getcategory/" + this.$route.query.id
    ).then(it => {
      console.log(it.data.category_list);
      this.options = it.data.category_list;
    });
     }else{
    this.zhe()
     }
      
  },
  methods: {
    zhe(){
          this.$confirm('添加食品需要选择一个商铺，先去就去选择商铺吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          
        }).then(() => {
          this.$router.push({name:'shopList'}),
          this.$message({
            type: 'success',
            message:'确定'

          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消添加'
          });          
        });
    },
    que() {
      this.innerVisible = false;
      let obj = {
        date: this.ruleForm.gui,
        name: this.num,
        address: this.num1
      };
      this.table.push(obj);
      console.log(this.ruleForm.gui);
      console.log(this.num);
      console.log(this.num1);
    },
    ttt() {
      Axios.post("https://elm.cangdu.org/v1/addimg/food").then(ee => {
        console.log(ee);
      });
    },
    onSubmit(row) {
      console.log(row)
      let data = {
        description: this.jieshao,
        name: this.aname,
        restaurant_id: this.$route.query.id
      };
      Axios.post("https://elm.cangdu.org/shopping/addcategory", data).then(
        yy => {
          console.log(yy);
        }
      );
      // console.log("submit!");
    },
    Submit() {
      console.log(this.$route.query.id,)
      let data = {
        activity: this.ruleForm.name,
        attributes: [],
        category_id:this.$route.query.id,
        description:this.ruleForm.pro,
        image_path:this.imageUrl,
        name:this.ruleForm.chian,
        restaurant_id:this.$route.query.id,
        specs: [{ specs: "默认", packing_fee: 0, price: 20 }]
      };
      Axios.post("https://elm.cangdu.org/shopping/addfood",data).then(res => {
        console.log(res)
      });
    },
    qqq() {
      console.log(this.radio);
      if (this.radio == 1) {
        this.isshow = true;
      } else {
        this.isshow = false;
      }
    },
    handleChange(value) {
      console.log(value);
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
    }
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
  .tianjia {
    border-radius: 5px;
    margin-left: 200px;
    width: 1000px;
    border: 1px solid #eaeefb;
    .from {
      width: 100%;
      height: 80px;
    }
    .from1 {
      background: #f9fafc;
    }
    .from2:hover {
      background: #f9fafc;
      color: lightblue;
    }
    .bbb {
      background: #f9fafc;
    }
  }
}
.demo-ruleForm {
  width: 500px;
  text-align: center;
  //    margin-left:200px;
  margin-top: 50px;
}
h4 {
  text-align: center;
  padding: 20px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
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
.tian {
  width: 1000px;
  margin-left: 200px;
  border: 1px solid #000;
}
.sss {
  width: 1000px;
  margin-left: 200px;
  border-radius: 5px;
  border: 1px solid #eaeefb;
}
</style>