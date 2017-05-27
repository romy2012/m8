<template>
<div>
    <Public-Nav :paramslink="paramsLink" :navname="smallgames"></Public-Nav>
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
          smallgames:'smallgames'
        }
    },
    created () {
      //分发头部
    },
    //路由钩子函数
    beforeRouteUpdate (to, from, next) {
      this.paramsLink = to.params;
      console.log(this.paramsLink)
      next(true);
    }
  }
</script>
