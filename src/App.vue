<template>
  <div id="app">
    <public-head></public-head>
    <!--中间部分-->
    <router-view></router-view>
    <!--底部-->
    <public-foot></public-foot>
  </div>
</template>

<script>
  import PublicHead from './components/public/PublicHead.vue'
  import PublicFoot from './components/public/PublicFoot.vue'
  import "./css/global.css"
  import "./css/module.css"
  import "./css/user.css"
export default {
  components: {
    PublicHead,
    PublicFoot
  },
}
</script>


