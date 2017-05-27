<template>
  <div class="owl-carousel owl-theme" id="owl-favorites">
    <div class="item-fav" v-for="item in owldot">
      <a href="#" target="_blank">
        <img :src="item.src">
      </a>
      <a href="#" target="_blank">{{item.message}}</a>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import '../../js/owl.carousel'
  export default {
    data (){
        return {
            owldot:[
              {id:0,message:'重庆时时彩',src:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAQMAAABKLAcXAAAABGdBTUEAALGPC/xhBQAAAANQTFRFHBwcQDBm3AAAABRJREFUOMtjYBgFo2AUjIJRQE8AAAV4AAEpcbn8AAAAAElFTkSuQmCC'},
              {id:1,message:'广州时时彩',src:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAQMAAABKLAcXAAAABGdBTUEAALGPC/xhBQAAAANQTFRFHBwcQDBm3AAAABRJREFUOMtjYBgFo2AUjIJRQE8AAAV4AAEpcbn8AAAAAElFTkSuQmCC'},
              {id:2,message:'北京时时彩',src:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAQMAAABKLAcXAAAABGdBTUEAALGPC/xhBQAAAANQTFRFHBwcQDBm3AAAABRJREFUOMtjYBgFo2AUjIJRQE8AAAV4AAEpcbn8AAAAAElFTkSuQmCC'},
              {id:3,message:'厦门时时彩',src:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAQMAAABKLAcXAAAABGdBTUEAALGPC/xhBQAAAANQTFRFHBwcQDBm3AAAABRJREFUOMtjYBgFo2AUjIJRQE8AAAV4AAEpcbn8AAAAAElFTkSuQmCC'},
              {id:4,message:'杭州时时彩',src:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAQMAAABKLAcXAAAABGdBTUEAALGPC/xhBQAAAANQTFRFHBwcQDBm3AAAABRJREFUOMtjYBgFo2AUjIJRQE8AAAV4AAEpcbn8AAAAAElFTkSuQmCC'},
              {id:5,message:'深圳时时彩',src:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAQMAAABKLAcXAAAABGdBTUEAALGPC/xhBQAAAANQTFRFHBwcQDBm3AAAABRJREFUOMtjYBgFo2AUjIJRQE8AAAV4AAEpcbn8AAAAAElFTkSuQmCC'},
              {id:6,message:'上海时时彩',src:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAQMAAABKLAcXAAAABGdBTUEAALGPC/xhBQAAAANQTFRFHBwcQDBm3AAAABRJREFUOMtjYBgFo2AUjIJRQE8AAAV4AAEpcbn8AAAAAElFTkSuQmCC'},
              {id:7,message:'福建时时彩',src:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAQMAAABKLAcXAAAABGdBTUEAALGPC/xhBQAAAANQTFRFHBwcQDBm3AAAABRJREFUOMtjYBgFo2AUjIJRQE8AAAV4AAEpcbn8AAAAAElFTkSuQmCC'},
            ]
        }
    },
    mounted: function () {
      //首页收藏多图轮播
      $('#owl-favorites').owlCarousel({
        items:5,
        loop:true,
        margin:8,
        nav:true,
        dots:false
      })
    },
  }
</script>
