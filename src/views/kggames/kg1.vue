<template>
  <div id="kg" @click="add">
   我是kg 游戏1
  </div>
</template>
<script>
  export default {
    created () {
    },
    methods :{
      add:function() {
        console.log(1);
        $('#kg').css('color','#ff0000')
      }
    }
  }
</script>
