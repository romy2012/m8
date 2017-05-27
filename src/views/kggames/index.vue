<template>
<div>
    <Public-Nav :paramslink="paramsLink" :navname="kgganmes"></Public-Nav>
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
          kgganmes:'kgganmes'
        }
    },
    created () {
      //分发头部
    },
  }
</script>
