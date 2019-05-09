<template>
<div class="div1  animated fadeInDown">
<p>elem后台管理系统</p >
<div class="div1-1">
<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-input v-model.number="ruleForm.user" placeholder="用户名" style="margin-top:10px"></el-input>
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="密码" style="margin-top:10px" ></el-input>
    <el-button type="primary" @click="submitForm('ruleForm')" v-if="isShow">登录</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')" v-else disabled>登录</el-button>
     </el-form>
<p>温馨提示:</p >
<span>未登录过的新用户，自动注册</span><br>
<span>注册过的用户可凭账号密码登录</span>
</div>
</div>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      isShow: true,
      ruleForm: {
        pass: "",
        user: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        user: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  
  methods: { 
    setCookie(name,value,day){
      var exp=new Date();
      exp.setDate(exp.getDate()+day);
      document.cookie=name+"="+escape(value)+";exoires="+exp.toGMTString();
    },
    submitForm(formName) {
      this.isShow = false;
      // console.log(this.ruleForm);
      Axios.post("https://elm.cangdu.org/admin/login", {
        user_name: this.ruleForm.user,
        password: this.ruleForm.pass
      }).then(res => {
        console.log(res);
        if (res.data.status == 1) {
          this.$router.push({ name: "detail" });
          this.setCookie("SID",JSON.stringify(res.data),7)
          this.isShow = true;
        } else {
          console.log(res.data.message);
        }
      });
    },
},

};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.div1 {
  width: 100%;
  height: 100%;
  text-align: center;
  margin: 200px auto;
  background: #324057;
}
.div1 p {
  font-size: 35px;
  color: white;
}
.div1-1 {
  margin: 0 auto;
  background: white;
  text-align: center;
  width: 340px;
  height: 290px;
  padding: 20px;
}
.div1-1 input {
  width: 90%;
  height: 30px;
}
.div1-input {
  margin-top: 20px;
}
.div2-input {
  width: 90%;
  margin-top: 20px;
}
.div1-1 button {
  width: 90%;
  background: #20a0ff;
  height: 35px;
  border: none;
  margin-top: 20px;
  border-radius: 10px;
}
.div1-1 p {
  /* margin-top:80px; */
  font-size: 13px;
  color: red;
}
.div1-1 span {
  padding: 0;
  color: red;
  font-size: 13px;
}
.bbb {
  width: 300px;
  position: absolute;
  left: -45px;
}

el-form-item {
  position: relative;
}
.div1-1 div:nth-of-type(3) {
  width: 100%;
}
</style>
