import Vue from "vue";
import GlobalTitleArea from '@/views/layouts/Title.vue'
import AdminLayout from '@/views/layouts/AdminLayout.vue'

Vue.component("t-area", GlobalTitleArea);
Vue.component("a-area", AdminLayout);