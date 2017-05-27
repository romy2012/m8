<template>
  <section class="pages-wrap" v-show="total>pagenum">
    <ul class="page_data_li">
      <li v-if="current > 1" class="pageStart" :class="{'disabled': current == 1}"><a href="javascript:;" @click="clickCurrent(1)">首页</a></li>
      <li v-if="current > 1" class="pagePre" :class="{'disabled': current == 1}"><a href="javascript:;" @click="clickCurrent(current - 1)">‹</a></li>
      <li v-for="p in setList" :class="{'active': current == p.val}" >
        <a href="javascript:;" v-if="current == p.val" @click="clickCurrent(p.val)"> {{ p.text }} </a>
        <a href="javascript:;" v-else  @click="clickCurrent(p.val)"> {{ p.text }} </a>
      </li>
      <li v-if="current < page" class="pageNext" :class="{'disabled': current == page}"><a href="javascript:;" @click="clickCurrent(current + 1)">›</a></li>
      <li v-if="current < page" class="pageEnd" :class="{'disabled': current == page}"><a href="javascript:;" @click="clickCurrent(page)">尾页</a></li>
    </ul>
  </section>
</template>

<script>
  //github.com/cycgit/vue-pagination
  export default {
    props: {
      total: {
        type: Number,
        default: 0
      },
      pagenum: {
        type: Number,
        default: 10
      },
      myCurrentPage: {
        type: Number,
        default: 1
      },
      pagegroup: {
        type: Number,
        default: 5,
        coerce:function(v){
          v = v > 0 ? v : 5;
          return v % 2 === 1 ? v : v + 1;
        }
      },

    },
    data(){
      return {
        current: this.myCurrentPage,
      }
    },
    computed: {
      page:function() {
        return Math.ceil(this.total / this.pagenum);
      },
      currentPage:function(){
        return this.current;
      },
      setList:function(){
        var len = this.page , temp = [], list = [], count = Math.floor(this.pagegroup / 2) ,center = this.current;
        if( len <= this.pagegroup ){
          while(len--){ temp.push({text:this.page-len,val:this.page-len});};
          return temp;
        }
        while(len--){ temp.push(this.page - len);};
        var idx = temp.indexOf(center);
        (idx < count) && ( center = center + count - idx);
        (this.current > this.page - count) && ( center = this.page - count);
        temp = temp.splice(center - count -1, this.pagegroup);
        do {
          var t = temp.shift();
          list.push({
            text: t,
            val: t
          });
        }while(temp.length);
        if( this.page > this.pagegroup ){
          (this.current > count + 1) && list.unshift({ text:'...',val: list[0].val - 1 });
          (this.current < this.page - count) && list.push({ text:'...',val: list[list.length - 1].val + 1 });
        }
        return list;
      },

    },
    methods: {
      clickCurrent: function(idx) {
        this.current = idx;
      }
    },
    mounted: function () {

    },

  }
</script>
