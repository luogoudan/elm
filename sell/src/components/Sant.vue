<template>
  <div class="data">
    <div>
      <!-- 头部 -->
      <div class="D-header">
        <p>数据统计</p>
        <div class="D-1">
          <ul>
            <li>当日数据:</li>
            <li>{{ newregistereduser}}新增用户</li>
            <li>{{newindent}}新增订单</li>
            <li>{{newAdministrator}}新增管理员</li>
          </ul>
        </div>
        <div class="D-2">
          <ul>
            <li>总数据:</li>
            <li>{{registereduser}}注册用户</li>
            <li>{{ inden}}订单</li>
            <li>{{Administrator}}管理员</li>
          </ul>
        </div>
      </div>

      <!-- 走势图 -->
      <div class="D-chart" id="Mychart"></div>
    </div>
  </div>
</template>

<script>
import time from 'time-formater'
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

    mounted(){

        //调用时间
        this.nowTimes();

        this.axios.get("https://elm.cangdu.org/v1/users/count").then((res)=>{
           if(res.data){
               this.registereduser=res.data.count
           }

        }),
        this.axios.get("https://elm.cangdu.org/bos/orders/count").then((res)=>{
           if(res.data){
               this.inden=res.data.count
           }

        }),
        this.axios.get("https://elm.cangdu.org/admin/count").then((res)=>{
           if(res.data){
               this.Administrator=res.data.count
           }

        }),
        this.initData()

    },

    methods:{
        // 封装  axios
        initData(){
            // list 是今天时间
            // 利用插件  获取 今天的时间  和前几天的时间
            // const list=time(new Date()).format('YYYY-MM-DD');
            // const list1=time((new Date()-(24*60*60*1000))).format('YYYY-MM-DD')
            console.log(list1);
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
                // 今天数据
                this.newregistereduser=res[0].data.count;
                this.newindent=res[1].data.count;
                this.newAdministrator=res[2].data.count;
                //今天数据
                this.J1=res[0].data.count;
                this.J2=res[1].data.count;
                this.J3=res[2].data.count;
                // 前1天数据
                this.On1=res[3].data.count;
                this.On2=res[4].data.count;
                this.On3=res[5].data.count;
                //前2天数据
                this.Tw1=res[6].data.count;
                this.Tw2=res[7].data.count;
                this.Tw3=res[8].data.count;
                //前3天数据
                this.Te1=res[9].data.count;
                this.Te2=res[10].data.count;
                this.Te3=res[11].data.count;
                //前4天数据;
                this.Fe1=res[12].data.count;
                this.Fe2=res[13].data.count;
                this.Fe3=re[14].data.count;
                //前5天数据
                this.F1=res[15].data.count;
                this.F2=res[16].data.count;
                this.F3=res[17].data.count;
                //前6天数据
                this.S1=res[18].data.count;
                this.S2=res[19].data.count;
                this.S3=res[20].data.count;
                 if(this.J3!=""){
                    this.drawLine()
                }
            }).catch(err=>{
                console.log(err)
            })
    },
        sent(val,method,time){
            if(method=="get"){
                return this.axios.get("https://elm.cangdu.org/statis/"+val+"/"+time+"/count").then((res)=>{
                    return res

                })
            }
        },




        // 获取本地时间  的 方法
       timeFormate(timeStamp) {
        let year = new Date(timeStamp).getFullYear();
      let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
      let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
      let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
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
       drawLine(){


           // 基于准备好的 dom 初始化 echarts 实例
           var mychart=this.$echarts.init(document.getElementById('Mychart'))
           // 绘制图表
           mychart.setOption({
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
        data: [this.SxTime,this.FeTime,this.FrTime,this.TeTime,this.TwTime,this.OnTime,this.nowTime]
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}'
        }
    },

    series: [
        {
            name:'新注册用户',
            type:'line',
            data:[this.S1,this.F1,this.Fe1,this.Te1,this.Tw1,this.On1,this.J1],

            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'新增订单',
            type:'line',
            data:[this.S2,this.F2,this.Fe2,this.Te2,this.Tw2,this.On2,this.J2],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        // this.S1,this.F1,this.Fe1,this.Te1,this.Tw1,this.On1,this.J1
        {
            name:'新增管理员',
            type:'line',
            data:[this.S3,this.F3,this.Fe3,this.Te3,this.Tw3,this.On3,this.J3],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        }
    ]



           })
       },

    },



}
</script>

<style scoped >
</style>
