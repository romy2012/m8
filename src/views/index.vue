<template>
  <div>
    <!-- 奖金池累计提醒 -->
    <div class="bonus_pool">平台累计中奖77724543元 奖金池余</div>
    <!-- M8_banner -->
    <Public-Banner></Public-Banner>

    <!-- 公告模块 最新公告 我的收藏 -->
    <div class="wrap_body clearfix M8_notice">
      <div class="tbox notice_l">
        <div class="thead"><i class="head_icon icon_zxgg"></i> <span>最新公告</span></div>
        <div class="tbody radius_5px">
          <div class="notice_l_t">
            <a href="#" target="_blank"><img src="../images/pic.png" width="100" height="60"></a> 4月30日，“五一”假期第二天，各地迎来客流高峰。图为游客经过李世民亲封的“天下第一名刹”牌坊。
          </div>
          <ul class="notice_l_b">
            <li v-for="item in notice">
              <a :href="item.href" target="_blank">{{item.msg}}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="tbox notice_r">
        <div class="thead"><i class="head_icon icon_wdsc"></i> <span>我的收藏</span></div>
        <div class="tbody radius_5px">
          <Publicfavor-Banner></Publicfavor-Banner>
        </div>
      </div>
    </div>

    <!-- 精彩热门 -->
    <div class="wrap_body clearfix M8_hot">
      <div class="tbox">
        <div class="thead"><i class="head_icon icon_jcrm"></i> <span>精彩热门</span> <span class="txt_hot">HOT</span></div>
        <div class="tbody">
          <ul>
            <li v-for="item in hot">
              <a :href="item.href" target="_blank">
                <span><i class="i_t">{{item.name}}</i><i class="i_m">{{item.num}}人</i><i class="i_b">{{item.time}}</i></span>
                <img src="../images/pic.png">
                <cite><i>{{item.links}}</i></cite>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 视频 -->
    <div class="wrap_body clearfix M8_video">
      <div class="tbox">
        <div class="thead"><i class="head_icon icon_shipin"></i> <span>创领行业之先，打造一流购彩体验</span></div>
        <div class="tbody">
          <video controls id="myvideo" v-for="item in video">
            <source :src="item.src" type="video/mp4">
            <p>你的浏览器过于低端，不支持Html5视频播放，快升级浏览器吧。</p>
          </video>
        </div>
      </div>
    </div>

    <!-- 推荐 -->
    <div class="wrap_body clearfix M8_recommend">
      <div class="tbox">
        <div class="thead"><i class="head_icon icon_pttj"></i> <span>平台推荐</span> <cite><a class="btn_more" href="#" target="_blank">更多+</a></cite></div>
        <div class="tbody">
          <ul>
            <li v-for="items in recommend">
              <a href="#" target="_blank">
                <img src="../images/pic.png">
                <cite><i>{{items.name}}</i><font>{{items.num}}人</font></cite>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 快速导航 -->
    <div class="quick_link">
      <ul>
        <li class="q_l_1"><a href="javascript:;"><i class="icon_s icon_mfzc"></i>免费注册</a></li>
        <li class="q_l_2"><a href="javascript:;"><i class="icon_s icon_bdsj"></i>绑定手机</a></li>
        <li class="q_l_3"><a href="javascript:;"><i class="icon_s icon_bdss"></i>被盗申诉</a></li>
        <li class="q_l_4"><a href="javascript:;"><i class="icon_s icon_zhmm"></i>找回密码</a></li>
        <li class="q_l_5"><a href="javascript:;"><i class="icon_s icon_zhxf"></i>帐号修复</a></li>
        <li class="q_l_6"><a href="javascript:;"><i class="icon_s icon_zxkf"></i>在线客服</a></li>
      </ul>
    </div>

  </div>

</template>

<script>
  import * as content from '../constants/contentTypes';
  import * as interfaces from '../constants/interfaceTypes';
  import PublicBanner from '../components/public/PublicBanner.vue'
  import PublicfavorBanner from '../components/public/PublicfavorBanner.vue'
export default {
  name: 'hello',
  components: {
    PublicBanner,
    PublicfavorBanner
  },
  data () {
    return {
      notice:[
        {id: 0 ,href: "#",msg:"美国圣地亚哥枪手射伤8人后被警方击毙"},
        {id: 1 ,href: "#",msg:"女性穿高跟鞋开车易出“状况” 平底鞋最安全"},
        {id: 2 ,href: "#",msg:"内蒙古大兴安岭北部原始林火场实现合围"},
        {id: 3 ,href: "#",msg:"新疆焉耆：品美食 听花儿 游乡村 逛古城"},
      ],
      hot:[
        {id:0 ,href: "#",name:'重庆时时彩', time:'每10分钟一期',num:'2324',links:"进入游戏" },
        {id:1 ,href: "#",name:'广州时时彩', time:'每20分钟一期',num:'1234',links:"进入游戏" },
        {id:2 ,href: "#",name:'深圳时时彩', time:'每30分钟一期',num:'3244',links:"进入游戏" },
        {id:3 ,href: "#",name:'厦门时时彩', time:'每40分钟一期',num:'6574',links:"进入游戏" },
        {id:4 ,href: "#",name:'北京时时彩', time:'每50分钟一期',num:'2874',links:"进入游戏" },
        {id:5 ,href: "#",name:'上海时时彩', time:'每60分钟一期',num:'3744',links:"进入游戏" }
      ],
      recommend:[
        {id:0 ,name:'重庆时时彩',num:'2324'},
        {id:1 ,name:'重庆时时彩',num:'2324'},
        {id:2 ,name:'重庆时时彩',num:'2324'},
        {id:3 ,name:'重庆时时彩',num:'2324'}
      ],
      video:[
        {id:0,src:"https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"}
      ]
    }
  },
  created () {

  },
  mounted: function () {

  },
  methods :{
      cssso:function() {
          this.$http.get(content.API + interfaces.INTERFACE_ISONLINE).then(response => {
            console.log(response)
            console.log(response.data.result.msg)
          }, response => {
            console.log(2111111111)
          });
      }
  }
}
</script>


