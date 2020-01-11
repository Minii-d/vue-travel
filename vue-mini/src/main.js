import Vue from 'vue'
import App from '@/layouts/App.vue'
import router from './plugins/router.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'  //轮播
import 'swiper/dist/css/swiper.css'  //轮播样式
import { Loading  } from 'vant'
import { Skeleton } from 'vant'//骨架屏
import { SubmitBar } from 'vant';
import { Button } from 'vant';

Vue.use(VueAwesomeSwiper)	//安装轮播
Vue.use(Loading) 
Vue.use(Skeleton)
Vue.use(SubmitBar);
Vue.use(Button);

Vue.config.productionTip = false

// import './assets/css/public.css';
import './assets/css/normal.css';
import './assets/css/iconfont.css';//字体图标的引入


//引入axios插件的配置
import './plugins/axios'

//引入模板变量配置
import './config/template'


let vm = new Vue({
  render: h => h(App),
  router,
  data:{
    bLogin:true,
	bLoading:false,
	bFooter:true
	
  }
}).$mount('#app')

export default vm;