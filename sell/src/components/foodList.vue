<template>
  <div class="box">
    <el-table :data="tableData5" :date="list" :date1="list1" style="width: 100%" @expand-change="Open">
        <el-table-column  type="expand" >
          <template slot-scope="props" >
            <el-form label-position="left" inline class="demo-table-expand" >
              <el-form-item label="食品名称">
                <span>{{ props.row.name}}</span>
              </el-form-item>
              <el-form-item label="餐馆名称">
                <span>{{ list.name}}</span>
              </el-form-item>
              <el-form-item label="食品 ID">
                <span>{{ props.row.item_id }}</span>
              </el-form-item>
              <el-form-item label="餐馆 ID">
                <span>{{ props.row.restaurant_id }}</span>
              </el-form-item>
              <el-form-item label="食品介绍">
                <span>{{ props.row.category }}</span>
              </el-form-item>
              <el-form-item label="餐馆地址">
                <span>{{ list.address }}</span>
              </el-form-item>
              <el-form-item label="食品评分">
                <span>{{ props.row.rating }}</span>
              </el-form-item>
              <el-form-item label="食品分类">
                <span>{{ list1.name }}</span>
              </el-form-item>
              <el-form-item label="月销量">
                <span>{{ props.row.month_sales }}</span>
              </el-form-item>
            </el-form>


          </template>
        </el-table-column>

      <el-table-column
        label="食品名称"
        prop="name"
      >
      </el-table-column>


      <el-table-column
        label="食品介绍"
        prop="name">
      </el-table-column>


      <el-table-column
        label="评分"
        prop="rating">
      </el-table-column>


      <el-table-column label="操作">
        <template slot-scope="scope">

          <el-button type="text" size="mini" @click="handleEdit(scope.$index, scope.row)" >编辑</el-button>

          <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="handleClose"
            
            style="z-index:4;background-color: rgba(97, 93, 93, 0.03)"
            >
            <div class="change">
              <div>
                <span>食品名称</span><el-input v-model="aname" placeholder="请输入内容"></el-input>
                <span>食品介绍</span><el-input v-model="jieshao" placeholder="请输入内容"></el-input>
              </div>

              <div>
                <span>食品分类</span><el-select v-model="value" placeholder="请选择">
                  <el-option
                  style="z-index=1;"
                    v-for="item in options"
                    :key="item.value"
                    :label="item.name"
                    :value="item.name">
                  </el-option>
                </el-select>
              </div>

              <div>
                <span>食品图片</span>
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </div>
              <!--//elm.cangdu.org/img/+-->

              <div>

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



             
         <el-button type="primary" @click="innerVisible = true">规格</el-button>
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
            </div>
            </div>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <span @click="sub()"><el-button type="primary" @click="dialogVisible = false">确 定</el-button></span>
  </span>
z
          </el-dialog>



        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除
        </el-button>
        </template>
      </el-table-column>


    </el-table>
    <!-- <div class="v-modal" tabindex="0" style="z-index:0;"></div> -->
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
  name: "Foodlist",
  data() {
    return {
      rules: {
      //  num: [{ trigger: "blur" }],
      //  num1: [{ trigger: "blur" }]
      },
      outerVisible: false,
      innerVisible: false,
      dialogVisible: false,
      date1: [],
      list1: [],
      date: [],
      list: [],
      data: [],
      tableData5: [],
      currentPage1: 1,
      //对话框的表格
      tableData: [{}],
      //对话框
      options: [],
      value: "",
      name: "",
      jieshao: "",
      imageUrl: "",
      //对话框内容
      adata: [],
      aname: "",
      aaaa: "",
      num: "",
      num1: "",
      table:[
        {  date: "默认",
        name:0,
       address:20,}
      ],
      ruleForm: {
        gui: "",
        num:0,
        num1:20,

      }
    };
  },

  mounted() {
    Axios.get(
      "https://elm.cangdu.org/shopping/v2/foods?offset=0&limit=20&restaurant_id=undefined"
    ).then(res => {
      if (res) {
        this.tableData5 = res.data;
      }
    });
    Axios.defaults.withCredentials = true;
  },
  methods: {
    handleChange(){

    },
    que() {
      this.innerVisible = false;
      let obj = {
        date: this.ruleForm.gui,
        name: this.num,
        address: this.num1
      };
      this.table.push(obj);
   console.log(this.ruleForm.gui)
   console.log(this.num)
   console.log(this.num1)
    },   
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      Axios.get(
        "https://elm.cangdu.org/shopping/v2/foods?offset=0" +
          (val - 1) * 20 +
          "&limit=20&restaurant_id=undefined"
      ).then(res => {
        if (res) {
          this.tableData5 = res.data;
        }
      });
    },
    handleEdit(index, row) {
      // console.log(index, row);
      console.log(row);
      this.aname = row.name;
      this.aaaa = row;
      console.log(row);
      this.dialogVisible = true;
      Axios.get(
        "https://elm.cangdu.org/shopping/restaurant/" + row.restaurant_id
      ).then(res => {
        if (res) {
          this.adata = res.data;
          this.imageUrl = "//elm.cangdu.org/img/" + res.data.image_path;
          console.log(this.adata);
        }
      });
      Axios.get(
        "https://elm.cangdu.org/shopping/v2/menu?restaurant_id=" +
          row.restaurant_id +
          "&allMenu=true"
      ).then(res => {
        if (res) {
          console.log(res.data);
          this.options = res.data;
        }
      });
    },
    sub() {
      let data = {
        category_id: this.aaaa.category_id,
        category_name: this.options.value,
        description: this.aaaa.description,
        image_path: this.imageUrl,
        index: 15,
        item_id: this.aaaa.item_id,
        month_sales: this.aaaa.month_sales,
        name: this.aname,
        new_category_id: this.aaaa.category_id,
        rating: this.aaaa.rating,
        restaurant_address: this.aaaa.restaurant_address,
        restaurant_id: this.aaaa.restaurant_id,
        restaurant_name: this.aaaa.restaurant_name,
        specfoods: [{}],
        specs: [
          {
            specs: "",
            packing_fee: "",
            price: ""
          }
        ]
      };
      Axios.post("https://elm.cangdu.org/shopping/v2/updatefood", data).then(
        r => {
          console.log(r.data);
          if (r.data.status == 1) {
            console.log(r.data.success);
          } else {
            console.log(r.data.message);
          }
        }
      );
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    Open(row) {
      Axios.get(
        "https://elm.cangdu.org/shopping/restaurant/" + row.restaurant_id
      ).then(res => {
        if (res) {
          this.list = res.data;
        }
      });
      Axios.get(
        "https://elm.cangdu.org/shopping/v2/menu/" + row.category_id
      ).then(res => {
        if (res) {
          this.list1 = res.data;
        }
      });
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
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

<style scoped>
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
.aa {
  z-index: 3;
  background-color: rgba(97, 93, 93, 0.2);
}
</style>
