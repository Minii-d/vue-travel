<template>
  <div id="app">
	<!-- <Header/> -->
	<div class="loading">
		<van-loading type="spinner" color="#1989fa" v-show="this.$root.bLoading"/>
	</div>
	<!-- <Loading /> -->
	<router-view></router-view>
	<Footer v-show="this.$root.bFoot"/>
  </div>
</template>

<script>
	import Header from './Header.vue';
	// import Home from '@/pages/Home.vue';
	// import Detail from '@/pages/Detail.vue';
	import Footer from './Footer.vue';
	import Loading from '../components/Loading.vue';

export default {
  name: 'app',
  components: {
	Header,Footer,Loading
  },
  
  //路由监听|属性检测|数据观测
  watch:{
    $route:{
      handler(nextValue,PrevValue){
        // console.log('path变化',nextValue.path);
        
        let path = nextValue.path;//路由路径  /follow
        //修改集中式的数据
        
        if(/login|Reg|OrderForm|BDMap|NoPage/.test(path)){
          this.$root.bFoot=false;
        }
        if(/home|column|detail/.test(path)){
          this.$root.bFoot=true;
        }
        // if(path.includes('user')){
        //   this.$root.bNav=false;
        //   this.$root.bFoot=true;
        // }
      },
      immediate:true
    }
  },
  
  
}
</script>

<style lang="scss" scoped>
	#app{
		position: relative;		
		.loading{			
			position:absolute;
			text-align: center;
			z-index: 999999;
			top: 50%;
			// bottom: 0;
			left: 50%;
			// right: 0;
			// margin: auto;
			.van-loading{
			}
		}
	}

</style>
