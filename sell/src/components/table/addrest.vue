<template>
    <div>
      <div class="header">

      </div>
      <div class="content5">
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <el-form-item label="店铺名称"  class="inp">
            <el-input v-model="formLabelAlign.name" ></el-input>
          </el-form-item>
          <!--<el-form-item label="详细地址"   class="inp">-->
            <!--<el-input v-model="address"></el-input>-->
            <!--<p>当前城市:</p>-->
          <!--</el-form-item>-->
          <el-select
            v-model="value"
            filterable
            remote
            reserve-keyword
            placeholder="请输入关键词"
            :remote-method="remoteMethod"
            :loading="loading">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-form-item label="联系电话"   class="inp">
            <el-input v-model="formLabelAlign.type" ></el-input>
          </el-form-item>
          <el-form-item label="店铺介绍"   class="inp">
            <el-input v-model="formLabelAlign.info" ></el-input>
          </el-form-item>
          <el-form-item label="店铺标语"   class="inp">
            <el-input v-model="formLabelAlign.title" ></el-input>
          </el-form-item>
          <el-form-item label="店铺分类" prop="region" class="inp">
            <el-select v-model="ruleForm.region" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="即时配送" prop="delivery">
            <span>品牌保证<el-switch v-model="ruleForm.delivery"></el-switch></span>
            <span>蜂鸟专送<el-switch v-model="ruleForm.delivery1"></el-switch></span>
            <span>新开店铺<el-switch v-model="ruleForm.delivery2"></el-switch></span>
          </el-form-item>
          <el-form-item  prop="delivery">
            <span>外卖保<el-switch v-model="ruleForm.delivery3"></el-switch></span>
            <span>准时达<el-switch v-model="ruleForm.delivery4"></el-switch></span>
            <span>开发票<el-switch v-model="ruleForm.delivery5"></el-switch></span>
          </el-form-item>
        </el-form>
        <p class="inp1"><span >配送费</span><el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number></p>
        <p class="inp1"><span >起送价</span><el-input-number v-model="num2" @change="handleChange" :min="1"  label="描述文字"></el-input-number></p>
        <p class="time">
          <span>营业时间</span>
          <span><el-time-select placeholder="起始时间" v-model="startTime" :picker-options="{ start: '08:30', step: '00:15', end: '18:30' }"></el-time-select></span>
          <span><el-time-select placeholder="结束时间" v-model="endTime" :picker-options="{ start: '08:30',  step: '00:15',  end: '18:30',  minTime: startTime}"></el-time-select></span>
        </p>




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

        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="优惠活动" prop="region" class="inp">
          <el-select v-model="ruleForm.region" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        </el-form>




        <div class="list">
          <el-table :data="tableData" style="width: 100%" >
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
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑
              </el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除
              </el-button>
            </el-table-column>
          </el-table>
        </div>
        <div class="button">
          <el-button type="primary">立即创建</el-button>
        </div>
      </div>
    </div>
</template>

<script>
	export default {
		name: "addrest",
    data() {
      return {
        //详细地址
        address:'',
        options: [],
        value: [],
        list: [],
        loading: false,
        states: ["Alabama"],
        //配送时间
        startTime: '',
        endTime: '',
        //配送费默认值
        num1:5,
        num2:20,
        //表格右对齐属性
        labelPosition: 'right',
        //图片上传格式
        imageUrl: '',
        imageUrl1: '',
        imageUrl2: '',


        //最下面的表格
        tableData: [{
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],


          formLabelAlign: {
          name: '',
          region: '',
          type: '',
          info:'',
          title:'',
        },


        ruleForm: {
          region: '',
          delivery:'',
          delivery1:'',
          delivery2:'',
          delivery3:'',
          delivery4:'',
          delivery5:'',
        },
      };
    },
    mounted(){
      this.list = this.states.map(item => {
        return { value: item, label: item };
      });
    },
    methods: {
      handleChange(value) {
        console.log(value);
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

      handleAvatarSuccess1(res, file) {
        this.imageUrl1 = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload1(file) {
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

      handleAvatarSuccess2(res, file) {
        this.imageUrl2 = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload2(file) {
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
      //详细地址
      remoteMethod(query) {
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
    watch:{
      address(){
        let a=this.address;
        console.log(a);
        this.axios.get("https://elm.cangdu.org/v1/pois?type=search&city_id=51&keyword="+a).then((res)=>{
          if(res){}
          console.log(res);
        })
      }
    }
	}
</script>

<style scoped lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  .header{
    width: 100%;
    height: 50px;
    background-color: #eff2f7;
  }

  .content5{

    padding: 20px  200px  20px 200px;
    .inp{
      padding-top: 20px;
    }
    .inp1{
      padding-top: 20px;
      padding-left: 20px;
      font-size: 14px;
      span{
        color: #606266;
        margin-right: 15px;
      }
    }
    .time{
      margin-top: 20px;
      span:nth-of-type(1){
        color: #606266;
        font-size: 14px;
        margin-left: 5px;
        margin-right: 10px;
      }
      span:nth-of-type(2){
        margin-right: 15px;
      }
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
    .list{
      button{
        width: 50px;
        height: 25px;
      }
    }
    .button{
      width: 100%;
      text-align: center;
      button{
        width: 150px;
        height: 35px;
      }
    }
  }
</style>
