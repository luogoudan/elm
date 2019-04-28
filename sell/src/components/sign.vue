<template>
<div class="div1">
<p>elem后台管理系统</p >
<div class="div1-1">
<input type="text" v-model="name" placeholder="请输入姓名"><br>
<input type="password" v-model="pass" placeholder="请输入密码" class="div1-input"><br>
<button @click="Login" >登录</button>
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
    return {
      name: "",
      pass: ""
    };
  },
  methods: {
    Login() {
      console.log(this.name,this.pass)
      Axios.post("https://elm.cangdu.org/admin/login",{user_name:this.name,password:this.pass}).then(res => {
        console.log(res.data);
        // if(this.date.status==1){
            this.$router.push({name:'detail'})
        // }else{
            // console.log(this.data.message)
        // }
        
      });
    }
  }
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
  width: 320px;
  height: 210px;
  padding: 20px;
}
.div1-1 input {
  width: 90%;
  height: 30px;
}
.div1-input {
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
  font-size: 13px;
  color: red;
}
.div1-1 span {
  padding: 0;
  color: red;
  font-size: 13px;
}
</style>
