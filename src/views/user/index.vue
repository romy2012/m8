<template>
  <div class="user_center_html">
    <Public-Nav :paramslink="paramsLink" :navname="user"></Public-Nav>
    <div class="clearfix"></div>
    <router-view></router-view>
  </div>
</template>
<script>
  import PublicNav from '../../components/public/PublicNav.vue'
  export default {
    components: {
      PublicNav
    },
    data (){
      return{
        paramsLink:{},
        user:'user'
      }
    },
    methods: {


    },
    created () {
      //分发头部
    },
  }
</script>
