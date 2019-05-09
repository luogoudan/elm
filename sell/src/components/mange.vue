<template>
<div class="right">
         <div class="login">首页</div>
         <div class="tu">数据管理</div>
         <div class="tu-1">
             <span class="span1">当日数据：</span>
              <span class="span2">{{ newregistereduser}}新增用户</span>
               <span class="span2">{{newindent}} 新增订单</span>
                <span class="span2">{{newAdministrator}} 新增管理员</span>
         </div>
          <div class="tu-2">
             <span class="span1">总数据：</span>
              <span class="span2">{{registereduser}}注册用户</span>
               <span class="span2">{{inden}}订单</span>
                <span class="span2">{{Administrator}}管理员</span>
         </div>

       <div id="chartmain" style="width:900px; height: 450px;margin-top:50px;margin-left:50px"></div>
         
     </div>
</template>
<script>
import time from 'time-formater'
import Axios from "axios";
export default {
      data() {
        return {

            newregistereduser:"",
            newindent:"",
            newAdministrator:"",
            registereduser:"",
            inden:"",
            Administrator:"",
            nowTime:"",


            SxTime:"",
            FeTime:"",
            FrTime:"",
            TeTime:"",
            TwTime:"",
            OnTime:"",

            S1:"",
            S2:"",
            S3:"",
            F1:"",
            F2:"",
            F3:"",

            Fe1:"",
            Fe2:"",
            Fe3:"",

            Te1:"",
            Te2:"",
            Te3:"",
            
            Tw1:"",
            Tw2:"",
            Tw3:"",

            On1:"",
            On2:"",
            On3:"",

            J1:"",
            J2:"",
            J3:"",
        }
   },
//   mounted() {
//     this.on();
//      this.initData()
//   },
 mounted(){

        
        this.nowTimes();//调用时间
        this.on();//走势图 事件

        //总数据
        //用户
        Axios.get("https://elm.cangdu.org/v1/users/count").then((res)=>{
           if(res.data){
               this.registereduser=res.data.count
           }

        }),
        //订单
        Axios.get("https://elm.cangdu.org/bos/orders/count").then((res)=>{
           if(res.data){
               this.inden=res.data.count
           }

        }),
        //管理员
        Axios.get("https://elm.cangdu.org/admin/count").then((res)=>{
           if(res.data){
               this.Administrator=res.data.count
           }

        }),
        this.initData()

    },
  methods: {
      // 封装  axios
        initData(){
            // list 是今天时间
            // 利用插件  获取 今天的时间  和前几天的时间
            // const list=time(new Date()).format('YYYY-MM-DD');
            // const list1=time((new Date()-(24*60*60*1000))).format('YYYY-MM-DD')
            // console.log(list1);
            Promise.all([
                // 今天
                this.sent('user','get',this.nowTime),
                this.sent('order','get',this.nowTime),
                this.sent('admin','get',this.nowTime),
                //前1天
                this.sent('user','get',this.OnTime),
                this.sent('order','get',this.OnTime),
                this.sent('admin','get',this.OnTime),
                //前2天
                this.sent('user','get',this.TwTime),
                this.sent('order','get',this.TwTime),
                this.sent('admin','get',this.TwTime),
                //前3 天
                this.sent('user','get',this.TeTime),
                this.sent('order','get',this.TeTime),
                this.sent('admin','get',this.TeTime),
                //前4天
                this.sent('user','get',this.FrTime),
                this.sent('order','get',this.FrTime),
                this.sent('admin','get',this.FrTime),
                //前5天
                this.sent('user','get',this.FeTime),
                this.sent('order','get',this.FeTime),
                this.sent('admin','get',this.FeTime),
                //前6天
                this.sent('user','get',this.SxTime),
                this.sent('order','get',this.SxTime),
                this.sent('admin','get',this.SxTime),
            ]).then((res)=>{
                console.log(res)
                // 当日数据
                this.newregistereduser=res[0].data.count
                this.newindent=res[1].data.count
                this.newAdministrator=res[2].data.count
                //今天数据
                this.J1=res[0].data.count
                this.J2=res[1].data.count
                this.J3=res[2].data.count
                // 前1天数据
                this.On1=res[3].data.count
                this.On2=res[4].data.count
                this.On3=res[5].data.count
                //前2天数据
                this.Tw1=res[6].data.count
                this.Tw2=res[7].data.count
                this.Tw3=res[8].data.count
                //前3天数据
                this.Te1=res[9].data.count
                this.Te2=res[10].data.count
                this.Te3=res[11].data.count
                //前4天数据
                this.Fe1=res[12].data.count
                this.Fe2=res[13].data.count
                this.Fe3=res[14].data.count
                //前5天数据
                this.F1=res[15].data.count
                this.F2=res[16].data.count
                this.F3=res[17].data.count
                //前6天数据
                this.S1=res[18].data.count
                this.S2=res[19].data.count
                this.S3=res[20].data.count
                 if(this.J3!=""){
                    this.on()
                }
            }).catch(err=>{
                console.log(err)
            })
    },
        sent(val,method,time){
            if(method=="get"){
                return Axios.get("https://elm.cangdu.org/statis/"+val+"/"+time+"/count").then((res)=>{
                    return res
                   
                })
            }
        },

  // 获取本地时间  的 方法
       timeFormate(timeStamp) {
        console.log(timeStamp)
           //年
        let year = new Date(timeStamp).getFullYear();
        //月
      let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
      //日
      let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
      //小时
      let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
      //分钟
      let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();

      this.nowTime = year + "-" + month + "-" + date ;
      this.SxTime= year + "-" + month + "-" + (date-6)
      this.FeTime= year + "-" + month + "-" + (date-5)
      this.FrTime= year + "-" + month + "-" + (date-4)
      this.TeTime= year + "-" + month + "-" + (date-3)
      this.TwTime= year + "-" + month + "-" + (date-2)
      this.OnTime=year + "-" + month + "-" + (date-1)
    },
    nowTimes(){
      this.timeFormate(new Date());

    },



    on() {
      let aaa = this.$echarts.init(document.getElementById("chartmain"));
      aaa.setOption({
        title: {
          text: "走势图"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["新注册用户", "新增订单", "新增管理员"]
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: "none"
            },
            dataView: { readOnly: false },
            magicType: { type: ["line", "bar"] },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "2019-04-22",
            "2019-04-23",
            "2019-04-24",
            "2019-04-25",
            "2019-04-26",
            "2019-04-27",
            "2019-04-28"
          ]
        },
        yAxis: {
          type: "value",
          min: 0,
          max: 200,
          interval: 50,
          axisLabel: {
            formatter: "{value}"
          }
        },
        series: [
          {
            name: "新注册用户",
            type: "line",
            data: [199, 113, 77, 50, 38, 13, 0, 5],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            }
          },
          {
            name: "新增订单",
            type: "line",
            data: [15, 3, 2, 30, 3, 21, 2, 17],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            }
          },
          {
            name: "新增管理员",
            type: "line",
            data: [124, 129, 123, 124, 127, 13, 22],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            }
          }
        ]
      });
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.right {
  width: 83%;
  background: white;
  z-index: 222;
  height: 950px;
  .login {
    width: 100%;
    height: 60px;
    background: #eff2f7;
    line-height: 60px;
    font-size: 15px;
    padding-left: 15px;
    color: lightgrey;
  }
  .tu {
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 30px;
    text-align: center;
  }
  .tu-1 {
    margin-left: 20px;
    width: 100%;
    span {
      display: inline-block;
      width: 250px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background: red;
      margin-left: 20px;
      border-radius: 7px;
    }
    .span1 {
      display: inline-block;
      font-size: 25px;
      font-weight: 700;
      color: white;
      background: #ff9800;
    }
    .span2 {
      display: inline-block;
      background: #e5e9f2;
    }
  }
  .tu-2 {
    margin-top: 20px;
    margin-left: 20px;
    width: 100%;
    span {
      display: inline-block;
      width: 250px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background: red;
      margin-left: 20px;
      border-radius: 7px;
    }
    .span1 {
      font-size: 25px;
      font-weight: 700;
      color: white;
      background: #20a0ff;
    }
    .span2 {
      background: #e5e9f2;
    }
  }
}
</style>