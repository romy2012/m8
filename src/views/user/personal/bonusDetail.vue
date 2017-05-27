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

      <div class="jiangjin_thead">
        <a href="javascript:;" @click="activeHead(0)" :class="{active:headActives[0]}">高频彩</a>
        <a href="javascript:;" @click="activeHead(1)" :class="{active:headActives[1]}">KENO</a>
        <a href="javascript:;" @click="activeHead(2)" :class="{active:headActives[2]}">11选5</a>
        <a href="javascript:;" @click="activeHead(3)" :class="{active:headActives[3]}">3D/P3</a>
        <a href="javascript:;" @click="activeHead(4)" :class="{active:headActives[4]}">快乐彩</a>
        <a href="javascript:;" @click="activeHead(5)" :class="{active:headActives[5]}">PK10</a>
        <a href="javascript:;" @click="activeHead(6)" :class="{active:headActives[6]}">快三</a>
      </div>

      <div class="user_tbody">

        <div class="bar_tip" style="margin:0;">
          <span><i class="icon_tip icon_normal"></i> 时时彩、十一选五、快乐彩、PK10最高限红30万，3D/P3最高限红15万</span>
        </div>

        <div class="tbody_operate table_data">

          <div class="user_table clearfix">
            <table class="o_table_rowspan">
              <thead>
              <tr>
                <th>玩法</th>
                <th>奖级</th>
                <th>基本奖金</th>
                <th>单挑奖金</th>
                <th>返点</th>
                <th>状态</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td rowspan="6">五星直选</td>
                <td>直选复式</td>
                <td>180000.000</td>
                <td>2000.000</td>
                <td>0</td>
                <td class="grey">启动</td>
              </tr>
              <tr>
                <td>直选单式</td>
                <td>180000.000</td>
                <td>2000.000</td>
                <td>0</td>
                <td class="grey">启动</td>
              </tr>
              <tr>
                <td>五星组合－一等奖－五星</td>
                <td>180000.000</td>
                <td>2000.000</td>
                <td>0</td>
                <td class="grey">启动</td>
              </tr>
              <tr>
                <td>五星组合－二等奖－四星</td>
                <td>180000.000</td>
                <td>2000.000</td>
                <td>0</td>
                <td class="grey">启动</td>
              </tr>
              <tr>
                <td>五星组合－三等奖－三星</td>
                <td>180000.000</td>
                <td>2000.000</td>
                <td>0</td>
                <td class="grey">启动</td>
              </tr>
              <tr>
                <td>五星组合－四等奖－二星</td>
                <td>180000.000</td>
                <td>2000.000</td>
                <td>0</td>
                <td class="grey">启动</td>
              </tr>
              </tbody>
              <tbody>
              <tr>
                <td rowspan="4">五星直选</td>
                <td>直选复式</td>
                <td>180000.000</td>
                <td>2000.000</td>
                <td>0</td>
                <td class="grey">启动</td>
              </tr>
              <tr>
                <td>直选复式</td>
                <td>180000.000</td>
                <td>2000.000</td>
                <td>0</td>
                <td class="grey">启动</td>
              </tr>
              <tr>
                <td>直选复式</td>
                <td>180000.000</td>
                <td>2000.000</td>
                <td>0</td>
                <td class="grey">启动</td>
              </tr>
              <tr>
                <td>直选复式</td>
                <td>180000.000</td>
                <td>2000.000</td>
                <td>0</td>
                <td class="grey">启动</td>
              </tr>
              </tbody>
              <tbody>
              <tr>
                <td rowspan="2">五星组选</td>
                <td>直选复式</td>
                <td>180000.000</td>
                <td>2000.000</td>
                <td>0</td>
                <td class="grey">启动</td>
              </tr>
              <tr>
                <td>直选复式</td>
                <td>180000.000</td>
                <td>2000.000</td>
                <td>0</td>
                <td class="grey">启动</td>
              </tr>
              </tbody>
            </table>
          </div>

          <div class="clear_dot"></div>

          <div class="o_page">

            <div class="page_record">共有42条记录，第{{current}}页</div>

            <pagination
              :total="total"
              :myCurrentPage="current"
              :skin="skin"
              :pagenum="pageNum"
              :pagegroup="pagegroup"
              @change="pagechange"
            ></pagination>

          </div>

        </div>

      </div>

    </div>


  </div>


</template>
<script>
  import pagination from '../../../components/public/PublicPage.vue'
  export default {
    components: {
      pagination
    },
    props: {

    },
    data (){
      return{
        actives: [false, false, false, false, true],
        headActives: [true, false, false, false, false, false],
        total: 100,     // 记录总条数   默认空，如果小于pageNum则组件不显示   类型Number
        pageNum: 10,    // 每页显示条数,默认10                              类型Number
        current: 2,     // 当前页数，   默认为1                             类型Number
        pagegroup:5,     // 分页条数     默认为5，需传入奇数                  类型Number
      }
    },
    computed:{

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
      activeHead: function(index) {
        this.headActives = this.headActives.map(function(v, i) {
          return i === index;
        });
      },
      pagechange:function(current){     // 页码改变传入新的页码，此处做回调
        console.log(current);
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

