import Vue from 'vue'
import Router from 'vue-router'
// import Sign from '@/components/sign'
import Deng from '@/components/deng'
import Detail from '@/components/detail'
import Mange from '@/components/mange'
import UserList from '@/components/userList'
import ShopList from '@/components/shopList'
import FoodList from '@/components/foodList'
import OrderList from '@/components/orderList'
import AdminList from '@/components/adminList'
import AddShop from '@/components/addnumber/addShop'
import AddGoods from '@/components/addnumber/addGoods'
import Visitor from '@/components/table/visitor'
import VueEdit from '@/components/addnumber/vueEdit'
import Qqqq from '@/components/addnumber/qqqq'
Vue.use(Router)

export default new Router({
  routes: [
    //登录页面
    // {
    //   path: '/',
    //   name: 'sign',
    //   component: Sign
    // },
    {
      path: '/',
      name: 'deng',
      component: Deng
    },
    //首页---->
    {
      path: '/detail',
      name: 'detail',
      component: Detail,
      redirect:"detail/mange",
      children:[
        //首页-->start
        {
          path: 'mange',
          name: 'mange',
          component: Mange,
        },
        //用户列表--->
         {
      path: 'userList',
      name: 'userList',
      component: UserList
      },
      {
        path: 'shopList',
        name: 'shopList',
        component: ShopList
        },
        {
          path: 'foodList',
          name: 'foodList',
          component: FoodList
          },
          {
            path: 'orderList',
            name: 'orderList',
            component:OrderList
            },
            {
              path: 'adminList',
              name: 'adminList',
              component:AdminList
              },
              {
                path: 'addShop',
                name: 'addShop',
                component:AddShop
                },
                {
                  path: 'addGoods',
                  name: 'addGoods',
                  component:AddGoods
                  },
              {
                path: 'visitor',
                name: 'visitor',
                component:Visitor
                },
                {
                  path: 'vueEdit',
                  name: 'vueEdit',
                  component:VueEdit
                  },
                  {
                    path: 'qqqq',
                    name: 'qqqq',
                    component:Qqqq
                    }
      ]
    },
   
    
  ]
})
