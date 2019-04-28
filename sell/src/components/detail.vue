<template>
<div class="div2">
    <div class="left">
    <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
     background-color="#545c64" 
      text-color="#fff"
      active-text-color="#ffd04b">
       <el-menu-item index="2" class="www" @click="detail">
        <i class="el-icon-menu"></i>
        <span slot="title" >首页</span>
      </el-menu-item>
      <el-submenu index="1" class="www">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span class="www">数据管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" @click="userList">用户列表</el-menu-item>
          <el-menu-item index="1-1" @click="shopList">商家列表</el-menu-item>
          <el-menu-item index="1-2" @click="foodList">商品列表</el-menu-item>
          <el-menu-item index="1-2" @click="orderList">订单列表</el-menu-item>
          <el-menu-item index="1-2" @click="adminList">管理员列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="2" class="www">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span class="www">添加数据</span>
        </template>
        <el-menu-item-group>
           <el-menu-item index="1-1">添加商品</el-menu-item>
          <el-menu-item index="1-1">添加店铺</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="3" class="www">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span class="www">图表</span>
        </template>
        <el-menu-item-group>
           <el-menu-item index="1-1">用户分布</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="4" class="www">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span class="www">编辑</span>
        </template>
        <el-menu-item-group>
           <el-menu-item index="1-1">文本编辑</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
        <el-submenu index="5" class="www">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span class="www">设置</span>
        </template>
        <el-menu-item-group>
           <el-menu-item index="1-1">管理员设置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       
       <el-submenu index="6" class="www">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span class="www">说明</span>
        </template>
        <el-menu-item-group>
           <el-menu-item index="1-1">说明</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
     </div> 
     <div class="right">
          <router-view> </router-view>
     </div>
</div>
     
</template>


<script>
import Axios from "axios";
export default {
  data() {
    return {
    };
  },
  mounted(){
      this.on()
  },
   methods: {

       userList(){
        this.$router.push({name:'userList'})
       },
       detail(){
        this.$router.push({name:'detail'})
       },
       shopList(){
        this.$router.push({name:'shopList'})
       },
        foodList(){
        this.$router.push({name:'foodList'})
       },
        orderList(){
        this.$router.push({name:'orderList'})
       },
       adminList(){
        this.$router.push({name:'adminList'})
       },
      on(){
          let aaa= this.$echarts.init(document.getElementById("chartmain"))
          aaa.setOption({
               title: {
        text: '走势图',
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['新注册用户','新增订单','新增管理员']
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['2019-04-22','2019-04-23','2019-04-24','2019-04-25','2019-04-26','2019-04-27','2019-04-28']
    },
    yAxis: {
        type: 'value',
         min: 0,
            max: 200,
            interval: 50,
        axisLabel: {
            formatter: '{value}'
        }
    },
    series: [
        {
            name:'新注册用户',
            type:'line',
            data:[199, 113, 77, 50, 38, 13, 0,5],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
        },
        {
            name:'新增订单',
            type:'line',
            data:[15, 3, 2, 30, 3, 21, 2,17],
            markPoint: {
                data: [
                      {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
          
        },
              {
            name:'新增管理员',
            type:'line',
            data:[124, 129, 123, 124, 127, 13, 22],
            markPoint: {
                data: [
                      {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
           
        }
    ]
          })
      },



      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }


};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .div2{
      width:100%;
      height:950px;
      display: flex;
      background:white;
      .left{
          width:17%;
          height:950px;
          background: #324057;
          .www{
              width:330px;
               background: #324057;
          }
      }
      .right{
           width:83%;
           background:white;
           z-index: 222;
           height:950px;
           overflow-y:auto;
           .login{
               width:100%;
               height:60px;
               background: #EFF2F7;
               line-height:60px;
               font-size:15px;
               padding-left:15px;
               color: lightgrey;
           }
        .tu{
            width:100%;
            height:60px;
            line-height:60px;
            font-size:30px;
            text-align:center;
        }
        .tu-1{
            margin-left:20px;
            width:100%;
            span{
                display: inline-block;
                width:250px;
                height:40px;
                line-height:40px;
                text-align:center;
                background: red;
                margin-left:20px;
                border-radius:7px;
            }
            .span1{
                 display: inline-block;
                font-size:25px;
                font-weight:700;
                color: white;
               background: #FF9800;
            }
            .span2{
                 display: inline-block;
                  background: #E5E9F2;
                 
            }

        } 
        .tu-2{
            margin-top:20px;
            margin-left:20px;
            width:100%;
            span{
                display: inline-block;
                width:250px;
                height:40px;
                line-height:40px;
                text-align:center;
                background: red;
                margin-left:20px;
                border-radius:7px;
            }
            .span1{
                 font-size:25px;
                font-weight:700;
                color: white;
               background: #20A0FF;
            }
            .span2{
                  background: #E5E9F2;
            }

        }
      }
  }
</style>
