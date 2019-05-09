<template>
  <div id="visitor">
     <div class="login">首页/数据管理/用户列表</div>
      <div id="chartmain" style="width:900px; height: 450px;margin-left:50px"></div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {};
  },
  //   mounted() {
  //     this.on();
  //      this.initData()
  //   },
  mounted() {
    this.on(); //走势图 事件
  },
  created() {
Axios.get("https://elm.cangdu.org/v1/user/city/count").then((item)=>{
console.log(item.data)
this.tableData=item.data
})

},
  methods: {
    on() {
      let aaa = this.$echarts.init(document.getElementById("chartmain"));
      aaa.setOption({
        title : {
        text: '用户分布',
        // subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['北京','上海','深圳','杭州','其他']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:5412, name:'北京'},
                {value:2333, name:'上海'},
                {value:2575, name:'深圳'},
                {value:1379, name:'杭州'},
                {value:13335, name:'其他'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
        ]
      });
    }
  }
};
</script>


<style scope lang="scss">
.visitor {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
}
.login {
  width: 100%;
  height: 60px;
  background: #eff2f7;
  line-height: 60px;
  font-size: 15px;
  padding-left: 15px;
  color: lightgrey;
}
</style>
