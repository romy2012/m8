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
<i class="icon_aqdj_z"></i>
<cite>安全等级：中</cite>
</span>

        </div>

      </div>

      <div class="user_tbody">

        <div class="tbody_menu_safe">

<span class="icon_ver" @click="activeTab(0);toggleTabs(0)" :class="{active:tabActives[0]}">
<i class="icon_s_dlmm"></i>
<cite>登录密码</cite>
</span>

          <span class="icon_ver" @click="activeTab(1);toggleTabs(1)" :class="{active:tabActives[1]}">
<i class="icon_s_zjmm"></i>
<cite>资金密码设置</cite>
</span>

          <span class="icon_ver" @click="activeTab(2);toggleTabs(2)" :class="{active:tabActives[2]}">
<i class="icon_s_mbsz"></i>
<cite>密保设置</cite>
</span>

          <span class="icon_ver" @click="activeTab(3);toggleTabs(3)" :class="{active:tabActives[3]}">
<i class="icon_s_bdyx"></i>
<cite>绑定邮箱</cite>
</span>

        </div>

        <div class="tbody_operate">

          <form class="form_submit" name="operateForm[0]" v-show="nowIndex===0" @submit.prevent="submitFalse">

            <p>
              <label>输入旧登录密码：</label>
              <input type="password" placeholder="" class="disabledClass" @keyup="disabledBtn('disabledClass','operateSubmit[0]')">
              <span><i class="icon_tip"></i></span>
            </p>

            <p>
              <label>输入新登录密码：</label>
              <input type="password" placeholder="" class="disabledClass" @keyup="disabledBtn('disabledClass','operateSubmit[0]')">
              <span><i class="icon_tip"></i></span>
            </p>

            <p>
              <label>确认新登录密码：</label>
              <input type="password" placeholder="" class="disabledClass" @keyup="disabledBtn('disabledClass','operateSubmit[0]')">
              <span><i class="icon_tip"></i></span>
            </p>

            <p>
              <label>安全等级：</label>
              <cite class="safe_level"><i class="l_d"></i><i class="l_d"></i><i class="l_d"></i><i class="l_z"></i><i class="l_z"></i><i class="l_z"></i><i class="l_g"></i><i class="l_g"></i><i class="l_g"></i></cite>
              <span><i class="icon_tip icon_safe_level_d"></i></span>
            </p>

            <p><label></label><input type="submit" value="确定修改" class="btn_submit" name="operateSubmit[0]" disabled><span></span></p>

          </form>

          <!-- checkform 用于所有输入项目完成后激活按钮的disabled状态 -->

          <form class="form_submit" name="operateForm[1]" v-show="nowIndex===1" @submit.prevent="submitFalse">

            <p>
              <label>登录密码：</label>
              <input type="password" placeholder="">
              <span><i class="icon_tip"></i></span>
            </p>

            <p>
              <label>资金密码：</label>
              <input type="password" placeholder="">
              <span><i class="icon_tip"></i></span>
            </p>

            <p>
              <label>确认资金密码：</label>
              <input type="password" placeholder="">
              <span><i class="icon_tip"></i></span>
            </p>

            <p>
              <label>安全等级：</label>
              <cite class="safe_level"><i class="l_d"></i><i class="l_d"></i><i class="l_d"></i><i class="l_z"></i><i class="l_z"></i><i class="l_z"></i><i class="l_g"></i><i class="l_g"></i><i class="l_g"></i></cite>
              <span><i class="icon_tip icon_safe_level_z"></i></span>
            </p>

            <p><label></label><input type="submit" value="确定设置" class="btn_submit" name="operateSubmit[1]" disabled><span></span></p>

          </form>

          <form class="form_submit" name="operateForm[2]" v-show="nowIndex===2" @submit.prevent="submitFalse">

            <p>
              <label>密保问题1：</label>
              <select>
                <option value="">您母亲的姓名是？</option>
                <option value="">密保问题？</option>
              </select>
              <span><i class="icon_tip"></i></span>
            </p>

            <p>
              <label>密保答案1：</label>
              <input type="text" placeholder="">
              <span><i class="icon_tip"></i></span>
            </p>

            <p>
              <label>密保问题2：</label>
              <select>
                <option value="">您母亲的姓名是？</option>
                <option value="">密保问题？</option>
              </select>
              <span><i class="icon_tip"></i></span>
            </p>

            <p>
              <label>密保答案2：</label>
              <input type="text" placeholder="">
              <span><i class="icon_tip"></i></span>
            </p>

            <p>
              <label>密保问题3：</label>
              <select>
                <option value="">您母亲的姓名是？</option>
                <option value="">密保问题？</option>
              </select>
              <span><i class="icon_tip"></i></span>
            </p>

            <p>
              <label>密保答案3：</label>
              <input type="text" placeholder="">
              <span><i class="icon_tip"></i></span>
            </p>

            <p><label></label><input type="submit" value="确定修改" class="btn_submit" name="operateSubmit[2]"
                                     disabled><span></span></p>

          </form>

          <form class="form_submit" name="operateForm[3]" v-show="nowIndex===3" @submit.prevent="submitFalse">

            <p class="tip"><i class="icon_tip icon_tip_blue"></i> 安全邮箱将用来接受激活邮件，请确保真实有效！</p>

            <p class="tip">您已绑定地址为：****21@qq.com 的邮箱，验证通过之后，就可以通过该邮箱找回密码。</p>

            <p>
              <label>安全邮箱：</label>
              <input type="text" placeholder="">
              <span><i class="icon_tip"></i></span>
            </p>

            <p><label></label><input type="submit" value="验证邮箱" class="btn_submit" name="operateSubmit"> <input type="submit" value="修改邮箱" class="btn_submit" name="operateSubmit[3]" disabled><span></span></p>

          </form>

        </div>

      </div>

    </div>


  </div>


</template>


<script>
  export default {
    data (){
      return{
        actives: [false, false, true, false, false],
        tabActives: [true, false, false, false],
        nowIndex:0,

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
      activeTab: function(index) {
        this.tabActives = this.tabActives.map(function(v, i) {
          return i === index;
        });
      },
      toggleTabs:function(index){
        this.nowIndex=index;
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
