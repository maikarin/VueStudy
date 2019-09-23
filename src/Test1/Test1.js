import Vue from "vue";

var vueConfigs = {
  el: "#contents",
  data: {
    contents: "여기는 vue 영역",
    aside: "여기는 aside",
    header: "여기는 header",
    footer: "여기는 footer"
  }
};
var app = new Vue(vueConfigs);
app.$el.style.backgroundColor = "yellow";
