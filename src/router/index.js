import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    //首页
    {
      path: '/',
      name: 'index',
      component: require('../views/index')
    },
    //kg游戏模块
    {
      path: '/kggames',
      name: 'kggames',
      component: resolve => require(['../views/kggames/index'], resolve)
    },
    //视讯模块
    {
      path: '/vidoinfo',
      name: 'vidoinfo',
      component: resolve => require(['../views/vidoinfo/v1'], resolve),
    },
    //体育游戏
    {
      path: '/sportgames',
      name: 'sportgames',
      component: resolve => require(['../views/sportgames/sGame'], resolve)
    },
    //小游戏
    {
      path: '/smallgames/:gameId/:groupId/:gameName/1',
      name: 'smallgames',
      component: resolve => require(['../views/smallgames/index'], resolve),
      children: [
        {
          path: '/smallgames/:gameId/:groupId/:gameName/1',
          name: '1',
          component: resolve => require(['../views/smallgames/highfreq'], resolve)
        },
        {
          path: '/smallgames/:gameId/:groupId/:gameName/6',
          name: '6',
          component: resolve => require(['../views/smallgames/keno'], resolve)
        },
        {
          path: '/smallgames/:gameId/:groupId/:gameName/2',
          name: '2',
          component: resolve => require(['../views/smallgames/elevenfive'], resolve)
        },
        {
          path: '/smallgames/:gameId/:groupId/:gameName/3',
          name: '3',
          component: resolve => require(['../views/smallgames/dp'], resolve)
        },
        {
          path: '/smallgames/:gameId/:groupId/:gameName/4',
          name: '4',
          component: resolve => require(['../views/smallgames/happycolor'], resolve)
        },
        {
          path: '/smallgames/:gameId/:groupId/:gameName/5',
          name: '5',
          component: resolve => require(['../views/smallgames/pk'], resolve)
        },
        {
          path: '/smallgames/:gameId/:groupId/:gameName/7',
          name: '7',
          component: resolve => require(['../views/smallgames/fasttree'], resolve)
        }
      ]
    },
    //游戏娱乐
    {
      path: '/gamesenter',
      name: 'gamesenter',
      component: resolve => require(['../views/gamesenter/index'], resolve)
    },
    //电子游戏
    {
      path: '/elctrogames',
      name: 'elctrogames',
      component: resolve => require(['../views/elctrogames/index'], resolve)
    },
    //会员中心
    {
      path: '/user',
      name: 'user',
      component: resolve => require(['../views/user/index'], resolve),
      children: [
        {
          path: 'myAccount',
          name: 'person',
          component: resolve => require(['../views/user/personal/myAccount'], resolve)
        },
        {
          path: 'userBank',
          name: 'person',
          component: resolve => require(['../views/user/personal/userBank'], resolve)
        },
        {
          path: 'userSafe',
          name: 'person',
          component: resolve => require(['../views/user/personal/userSafe'], resolve)
        },
        {
          path: 'userInfo',
          name: 'person',
          component: resolve => require(['../views/user/personal/userInfo'], resolve)
        },
        {
          path: 'bonusDetail',
          name: 'person',
          component: resolve => require(['../views/user/personal/bonusDetail'], resolve)
        },
        {
          path: 'userRecharge',
          name: 'funds',
          component: resolve => require(['../views/user/funds/userRecharge'], resolve),
        },
        {
          path: 'userWithdraw',
          name: 'funds',
          component: resolve => require(['../views/user/funds/userWithdraw'], resolve),
        },
        {
          path: 'userFunds',
          name: 'funds',
          component: resolve => require(['../views/user/funds/userFunds'], resolve),
        },
        {
          path: 'userAccountDetail',
          name: 'funds',
          component: resolve => require(['../views/user/funds/userAccountDetail'], resolve),
        },
        {
          path: 'userDailyWages',
          name: 'funds',
          component: resolve => require(['../views/user/funds/userDailyWages'], resolve),
        },
        {
          path: 'userContractBonus',
          name: 'funds',
          component: resolve => require(['../views/user/funds/userContractBonus'], resolve),
        },

        {
          path: 'betRecode',
          name: 'games',
          component: resolve => require(['../views/user/games/betRecode'], resolve),
        },

        {
          path: 'usernewMsg',
          name: 'msg',
          component: resolve => require(['../views/user/msg/usernewMsg'], resolve),
        },

        {
          path: 'userLinks',
          name: 'agent',
          component: resolve => require(['../views/user/agent/userLinks'], resolve),
        },



      ]
    }
  ]
})
