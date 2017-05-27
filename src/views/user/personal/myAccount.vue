<template>
  <div>
    <div class="wrap_user clearfix user_box">

      <div class="user_menu">
        <ul>
          <li @click="active(0);activeNav();" :class="{active:actives[0]}"><a href="javascript:;" @click="myAccount">我的账户</a></li>
          <li @click="active(1);activeNav();" :class="{active:actives[1]}"><a href="javascript:;" class="row5text" @click="userBank">银行卡管理</a></li>
          <li @click="active(2);activeNav();" :class="{active:actives[2]}"><a href="javascript:;" @click="userSafe">安全设置</a></li>
          <li @click="active(3);activeNav();" :class="{active:actives[3]}"><a href="javascript:;" @click="userInfo">个人信息</a></li>
          <li @click="active(4);activeNav();" :class="{active:actives[4]}"><a href="javascript:;" @click="bonusDetail">奖金详情</a></li>
        </ul>
      </div>

      <div class="user_thead">

        <div class="thead_face">
          <img src="../../../images/face.png">
          <span><i>昵称：草原上的奶牛</i> <i>账户：TTUP520</i></span>
          <span><cite>上次登录时间：2017-04-20 15:44:23</cite></span>
          <span><cite>上次登录IP：192.168.0.154</cite></span>
        </div>

        <div class="thead_mingxi">
          <span><i>返点明细</i></span>
          <span><cite>彩票游戏返点：1.000</cite> <cite>AG视讯返点：1.000</cite></span>
          <span><cite>电子游戏返点：1.000</cite> <cite>BB体育返点：1.000</cite></span>
        </div>

        <div class="thead_other">

<span class="icon_ver">
<i class="icon_mbwsz"></i>
<cite>密保未设置</cite>
</span>

          <span class="icon_ver">
<i class="icon_yxyrz"></i>
<cite>邮箱已认证！</cite>
</span>

          <span class="icon_ver">
<i class="icon_aqdj_d"></i>
<cite>安全等级：低</cite>
</span>

        </div>

      </div>

      <div class="user_tbody">


        <div class="tbody_2s lock_rel clearfix">

          <div class="lock_yue"><i></i></div>

          <div class="tbody_block">
            <span class="icon_block icon_qbzye"></span>
            <span class="block_txt">
            <cite>钱包总余额：</cite>
            <i>99999999.000</i>
        </span>
            <span class="block_ext"><input type="button" value="刷新余额" class="btn"></span>
          </div>

          <div class="tbody_block">
            <span class="icon_block icon_cpptye"></span>
            <span class="block_txt">
            <cite>彩票平台余额：</cite>
            <i class="font_blue">99999999.000</i>
        </span>
            <span class="block_ext"><input type="button" value="确定修改" class="btn"></span>
          </div>

        </div>

        <div class="tbody_4s clearfix">

          <div class="tbody_block">
            <span class="icon_block"><img src="../../../images/pic.png"></span>
            <span class="block_ext"><cite>AG游戏平台</cite><input type="button" value="点击开通" class="btn grey"></span>
          </div>

          <div class="tbody_block">
            <span class="icon_block"><img src="../../../images/pic.png"></span>
            <span class="block_ext"><cite>AG游戏平台</cite><input type="button" value="点击开通" class="btn grey"></span>
          </div>

          <div class="tbody_block">
            <span class="icon_block"><img src="../../../images/pic.png"></span>
            <span class="block_ext"><cite>AG游戏平台</cite><input type="button" value="点击开通" class="btn grey"></span>
          </div>

          <div class="tbody_block">
            <span class="icon_block"><img src="../../../images/pic.png"></span>
            <span class="block_ext"><cite>AG游戏平台</cite><input type="button" value="无权开通" class="btn dark"></span>
          </div>

        </div>


        <div class="tbody_operate clearfix">

          <div class="convert_l" style="padding-top:55px;">
            <select class="select">
              <option value="">我的钱包</option>
              <option value="">AG平台</option>
              <option value="">BBIN平台</option>
              <option value="">MG平台</option>
              <option value="">PT平台</option>
            </select>
            <i class="icon_convert"></i>
            <select class="select">
              <option value="">AG平台</option>
              <option value="">我的钱包</option>
              <option value="">BBIN平台</option>
              <option value="">MG平台</option>
              <option value="">PT平台</option>
            </select>
          </div>

          <div class="convert_r">

            <p>转换金额：<input type="text" placeholder="请输入转换金额" class="text"> 元</p>
            <p>资金密码：<input type="password" placeholder="请输入您的资金密码" class="text"></p>
            <p><input type="button" value="额度转换" class="btn"></p>

          </div>

        </div>

      </div>

    </div>
</div>


</template>
<script>
  export default {
    data (){
      return{
        actives: [true, false, false, false, false]
      }
    },
    methods: {
      active: function(index) {
        this.actives = this.actives.map(function(v, i) {
          return i === index;
        });
      },
      activeNav: function () {
        var list = document.getElementsByClassName("M8_nav_level_2")[0];
        list.getElementsByTagName("li")[0].setAttribute("class", "active");
      },
      myAccount:function () {
        this.$router.push('/user/myAccount')
      },
      userBank: function () {
        this.$router.push('/user/userBank')
      },
      userSafe:function () {
        this.$router.push('/user/userSafe')
      },
      userInfo:function () {
        this.$router.push('/user/userInfo')
      },
      bonusDetail:function () {
        this.$router.push('/user/bonusDetail')
      },

    },
    mounted: function () {
      var list = document.getElementsByClassName("M8_nav_level_2")[0];
      if(list.getElementsByClassName("active")[0]){
        list.getElementsByClassName("active")[0].removeAttribute("class");
      }
      list.getElementsByTagName("li")[0].setAttribute("class", "active");
    },


  }
</script>
