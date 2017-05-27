<template>
  <div>
    <Public-Navtwo :navname="funds"></Public-Navtwo>
    <router-view></router-view>
  </div>

</template>
<script>
  import PublicNavtwo from '../../components/public/PublicNavtwo.vue'
  export default {
    components: {
      PublicNavtwo
    },
    data (){
      return{
        funds:'funds'
      }
    },
  }
</script>
