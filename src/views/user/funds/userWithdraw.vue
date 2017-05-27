<template>

  <div>

    <div class="wrap_user clearfix user_box">

      <div class="user_menu user_menu_d">
        <ul>
          <li @click="active(0);activeNav();" :class="{active:actives[0]}"><a href="javascript:;" @click="userRecharge">我要充值</a></li>
          <li @click="active(1);activeNav();" :class="{active:actives[1]}"><a href="javascript:;" @click="userWithdraw">我要取款</a></li>
          <li @click="active(2);activeNav();" :class="{active:actives[2]}"><a href="javascript:;" @click="userFunds">资金记录</a></li>
          <li @click="active(3);activeNav();" :class="{active:actives[3]}"><a href="javascript:;" @click="userAccountDetail">帐变明细</a></li>
          <li @click="active(4);activeNav();" :class="{active:actives[4]}"><a href="javascript:;" @click="userDailyWages">彩票工资</a></li>
          <li @click="active(5);activeNav();" :class="{active:actives[5]}"><a href="javascript:;" @click="userContractBonus">契约分红</a></li>
        </ul>
      </div>

      <div class="user_thead h_ext h_none"></div>

      <div class="user_tbody">

        <ul class="tbody_menu_qukuan clearfix">

          <li>
            <cite>彩票平台总额</cite>
            <span>99999999.000</span>
          </li>

          <li class="qukuan_sy">
            <cite>剩余打码额</cite>
            <span>99999999.000</span>
          </li>

        </ul>

        <div class="tbody_operate">

          <form class="form_submit" name="operateForm[withdraw]" @submit.prevent="submitFalse">

            <p>
              <label>提现金额：</label>
              <input type="text" placeholder="请输入充值金额">
              <span> 元</span>
            </p>

            <p>
              <label>提现银行：</label>
              <select>
                <option value="">广州工商银行</option>
                <option value="">杭州网商银行</option>
              </select>
              <span><i class="icon_tip"></i></span>
            </p>

            <p>
              <label>资金密码：</label>
              <input type="password" placeholder="请输入您的资金密码">
              <span><i class="icon_tip"></i></span>
            </p>

            <p class="font_ext"><label></label><font>*</font> <cite>试玩会员不允许提现操作,请先转为正式会员</cite><span></span></p>

            <p><label></label><input type="submit" value="确定提现" class="btn_submit" name="operateSubmit[withdraw]" disabled><span></span></p>

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
        actives: [false, true, false, false, false],
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
        list.getElementsByTagName("li")[1].setAttribute("class", "active");
      },
      userRecharge:function () {
        this.$router.push('/user/userRecharge')
      },
      userWithdraw: function () {
        this.$router.push('/user/userWithdraw')
      },
      userFunds:function () {
        this.$router.push('/user/userFunds')
      },
      userAccountDetail:function () {
        this.$router.push('/user/userAccountDetail')
      },
      userDailyWages:function () {
        this.$router.push('/user/userDailyWages')
      },
      userContractBonus:function () {
        this.$router.push('/user/userContractBonus')
      },

    },

    mounted: function () {
      var list = document.getElementsByClassName("M8_nav_level_2")[0];
      if(list.getElementsByClassName("active")[0]){
        list.getElementsByClassName("active")[0].removeAttribute("class");
      }
      list.getElementsByTagName("li")[1].setAttribute("class", "active");
    },

  }
</script>
