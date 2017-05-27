<template>
  <ul v-if="this.person[0].name == navname">
    <li>
      <router-link v-for="item in user[0].person" :to='{ name: item.name}'>{{item.groupName}}</router-link>
    </li>
  </ul>
  <ul v-else-if="this.games[0].name == navname">
    <li>
      <router-link v-for="item in user[1].games" :to='{ name: item.name}'>{{item.groupName}}</router-link>
    </li>
  </ul>
</template>


<script>
  import * as content from '../../constants/contentTypes';
  import * as interfaces from '../../constants/interfaceTypes';
  export default {
    props:{
      navname:{
        type: String,
        default: ""
      }
    },
    data () {
      return {
        //小游戏
        Game:[],
        gameKg:[],
        user:[{
          person:[
            {groupName:"我的账户", name:"myAccount"},
            {groupName:"银行卡管理", name:"userBank"}],name:"person"
        },{
          funds:[
            {groupName:"我要充值", name:"userRecharge"}],name:"funds"
        },{
          games:[
            {groupName:"投注记录", name:"betRecode"},],name:"games"
        },{}]
      }
    },
    created () {
        console.log(this.games[0].name)
    },
    methods :{

    },
  }
</script>
