<template>

  <div v-if="navname == 'user'" class="M8_nav_level_2 num5s">
  <ul>
    <router-link tag="li" v-for="item in user" :to='{ name: item.name}'><a href="javascript:;">{{item.groupName}}</a></router-link>
  </ul>
  </div>

  <div v-else class="M8_nav_level_2">

    <ul v-if="navname == 'smallgames'" class="clearfix">
      <li v-for="item in Game" :style="{ width: widths + 'px' }" :class="{active:paramslink.groupId == item.id}">
        <span style="cursor:pointer;"><i class="i_l"></i><i class="i_m">{{item.groupName}}</i><i class="i_r"></i></span>
        <cite>
          <router-link v-for="items in item.gameType" :to='{ name: item.id,params:{gameId:items.id,groupId:item.id,gameName:items.name}}'>{{items.name}}</router-link>
        </cite>
      </li>
    </ul>

    <ul v-else-if="navname == 'kgganmes'">
      <li  v-for="item in gameKg">
        {{item.groupName}}
      </li>
    </ul>

  </div>

</template>


<script>
  import * as content from '../../constants/contentTypes';
  import * as interfaces from '../../constants/interfaceTypes';
  export default {
    data () {
      return {
        //小游戏
        Game:[],
        gameKg:[],
        user:[
          {groupName:"个人中心",name:"person"},
          {groupName:"资金管理",name:"funds"},
          {groupName:"游戏记录",name:"games"},
          {groupName:"消息管理",name:"msg"},
          {groupName:"代理中心",name:"agent"}
        ],
        widths:'',
      }
    },
    props:{
      paramslink: Object,
      default: function () {
        return undefined
      },
      navname:{
        type: String,
        default: ""
      }
    },
    created () {
      //分发头部
      this.getGameType()
      this.getGameKgType()
      console.log(this.navname);
    },
    methods :{
      //获取小游戏彩种
      getGameType:function() {
        this.$http.get(content.API + interfaces.INTERFACE_GAMETYPES).then(response => {
          if(response.data.success){
            this.Game = response.data.result;
            this.widths = 1200/this.Game.length;
          }else{
          }
        }, response => {
        });
      },
      //获取kg游戏彩种
      getGameKgType:function() {
        this.$http.get(content.API + interfaces.INTERFACE_GAMETYPESKG).then(response => {
          if(response.data.success){
            this.gameKg = response.data.result;
          }else{
          }
        }, response => {
        });
      },
    },
  }
</script>
