<template>
  <div class="m8">
    <!-- 一级导航 -->
    <div class="M8_nav_level_1">
      <div class="level_1 clearfix">
        <ul>
          <li v-for="(item, index) in allNav" @click="getActive(index)" :class="{ active: item.active }">
            <router-link :class="{ active: navlinks }" v-if="item.gameId" :to="{ name: item.link,params:{gameId:item.gameId,groupId:item.groupId,gameName:item.gameName} }" exact>{{ item.name }}</router-link>
            <router-link  v-else :to="{ name: item.link }" exact>{{ item.name }}</router-link>
          </li>
        </ul>
        <cite class="level_1_logo"><a href="javascript:;">M8</a></cite>
        <cite class="level_1_app">
          <i>APP介绍</i>
          <a href="javascript:;" @click="links" onMouseOver="document.getElementById('login_info').style.display='block'">
            <img src="../../images/face.png" class="app_face">
          </a>
          <a class="login_out" v-if="this.username == ''" @click="trial" href="javascript:;">试玩</a>
          <a class="login_out" v-else href="javascript:;">账号:{{username}}</a>
          <a class="login_out" v-if="this.username" @click="loginOut" href="javascript:;">退出</a>
        </cite>

        <div class="login_box" id="login_box" v-if="this.username == ''">
          <p><input id="user_name" placeholder="帐号" v-model="user_name"/></p>
          <p><input id="user_password" v-model="user_password" type="password"  placeholder="密码"/></p>
          <p><input id="user_seccode" v-model="user_seccode" placeholder="验证码"/> <img class="img_seccode" src="../../images/seccode.png"></p>
          <p><input id="user_login" type="button" value="登录" @click="submitLogin()"></p>
          <p class="ripple"><input v-if="this.username == ''" id="user_trial" type="button" value="试玩" @click="trial"><input v-else id="user_trial" type="button" value="退出" @click="loginOut"></p>
        </div>

        <div class="login_info" id="login_info" onMouseOver="this.style.display='block'" onMouseOut="this.style.display='none'">
          <p><i>账户：TTPLK250</i></p>
          <p>钱包总额：9999555878.00</p>
          <p><span>AG余额：9999555878.00</span> <span>PG余额：9999555878.00</span></p>
          <p><span>BG余额：9999555878.00</span> <span>MG余额：刷新获取</span></p>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import * as content from '../../constants/contentTypes';
  import * as interfaces from '../../constants/interfaceTypes';
  export default {
    data () {
      return {
        username:'',
        navlinks : false,
      }
    },
    computed: {
      // 使用对象展开运算符将 getters 混入 computed 对象中
      ...mapGetters([
        'allNav'
      ])
    },
    created () {
      //分发头部
      this.$store.dispatch('getAllNav')
    },
    mounted: function () {
      document.body.addEventListener("click", function(){
        document.getElementById("login_info").style.display='none';
      });

    },
    methods :{
      ...mapActions([
        'getActive'
      ]),
      trial:function() {
        this.$http.post(content.API + interfaces.INTERFACE_RANDOM).then(response => {
            console.log(response.data.success)
          if(response.data.success){
              this.username = response.data.result.userName;
          }else{
          }
        }, response => {
        });
      },
      //登出
      loginOut: function () {
        this.$http.get(content.API + interfaces.INTERFACE_LOGOUT).then(response => {
          if(response){
            this.username = '';
          }else{
          }
        }, response => {
        });
      },
      links: function () {
        this.$router.push('/user/myAccount')
      },
    }
  }
</script>
