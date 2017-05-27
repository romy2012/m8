// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import VueResource from 'vue-resource'
import $ from 'jquery'

Vue.config.productionTip = false
Vue.use(VueResource);

//激活当前标签
Vue.prototype.chooseActive = function (className){
  var i,  tab;
  tab = document.getElementsByClassName(className);
  for (i = 0; i < tab.length; i++) {
    tab[i].className = tab[i].className.replace(" active", "");
  }
  var target = (event.currentTarget) ? event.currentTarget : event.srcElement;
  target.className += " active";
};

//激活提交按钮
Vue.prototype.disabledBtn = function (className,btnName) {
  var inputsWithValues = 0;
  var _f = document.getElementsByClassName(className);
  for(var i=0; i < _f.length; i++) {
    if (_f[i].value) {
      inputsWithValues += 1;
    }
  }
  if (inputsWithValues == _f.length) {
    document.getElementsByName(btnName)[0].disabled = false;
  } else {
    document.getElementsByName(btnName)[0].disabled = true;
  }
};

//禁止提交表单
Vue.prototype.submitFalse = function(event) {
  return false;
};

//弹窗 开始
Vue.prototype.modalClick = function (modalID){
  var modal = document.getElementById(modalID);
  modal.style.display = "block";
};

Vue.prototype.modalClose = function (modalID){
  if(modalID){
    var modalID = document.getElementById(modalID);
    modalID.style.display = "none";
  }else{
    var modal = document.getElementsByClassName("modal");
    for (var i=0;i<modal.length; i++) {
      modal[i].style.display = "none";
    }
  }
};

window.onclick = function(event) {
  var modal = document.getElementsByClassName("modal");
  for (var i=0;i<modal.length; i++) {
    if (event.target == modal[i]) {
      modal[i].style.display = "none";
    }
  }
}
//弹窗 结束





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
