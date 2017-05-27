<template>
  <div>
    <Public-Navtwo :navname="games"></Public-Navtwo>
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
        games:'games'
      }
    },
  }
</script>
