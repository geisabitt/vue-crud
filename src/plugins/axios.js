import axios from 'axios';
import Vue from 'vue';

axios.defaults.baseURL = "/api";

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios;
  },
});
