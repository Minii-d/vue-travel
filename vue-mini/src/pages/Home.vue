<template>
  <div class="home">
	<Header/>
    <Banner :data="swiperList" />
	<router-link to="/column">
		<Icons :iconData="iconList" />		
	</router-link>
	<Favorite/>
	
	<!-- 猜你喜欢渲染 -->
	<router-link 
		v-for="(val,idx) of productData" 
		:key="idx"
		:to="`/detail/${val._id}?dataName=home`"
	>
	
		<DCell :productData="val" />		
	</router-link>
	
	<div class="weekend-title">周末去哪儿</div>
	
	<!-- 周末去哪渲染 -->
	<router-link
	  v-for="(item,index) of cellList"
	  :key="item._id"
	  :to="'/user'"
	>
		<DItem :cellList="item" :index="index"/>
	</router-link>
  </div>
</template>

<script>
	import Header from '@/layouts/Header.vue'
	import Banner from '@/components/Banner.vue'
	import Icons from '@/components/Icons.vue'
	import Favorite from '@/components/Favorite.vue'
	import DCell from '@/components/d-cell.vue'
	import DItem from '@/components/d-item.vue'
	
	let top=0;//存储滚动位置
  export default {
	  name:"home",
    data(){
			return {
			swiperList:[],
			iconList:[],
			cellList:[],
			productData:[]
		}
	},
    components:{
		Banner,Icons,Favorite,DCell,DItem,Header
	},
    mounted(){
		document.documentElement.scrollTop=top;
		this.$axios({
			url:'/api/icons',
			params:{_page:1,_limit:9}
		}).then(
			res=>this.iconList=res.data.data
			// res=>console.log(res.data.data)
		),
		
		this.$axios({
			url:'/api/Banner',
			params:{_page:1,_limit:4}
		}).then(
			res=>this.swiperList=res.data.data
			// res=>console.log(res.data.data)
		)
		// weekend数据
		this.$axios({
			url:'/api/Column',
			params:{_page:1,_limit:4}
		}).then(
			res=>this.cellList=res.data.data
			// res=>console.log(res.data.data)
		)
		
		this.$axios({
			url:'/api/Home',
			params:{_page:1,_limit:8}
		}).then(
			res=>this.productData=res.data.data
			// res=>console.log(res.data.data)
		)		
		
	},
    destroyed(){
      top=document.documentElement.scrollTop;  
      // console.log('destroyed',top);
    },
    methods:{}
  }
</script>

<style scoped lang="scss">
  .home{}
  .weekend-title{
	  line-height: .8rem;
	  background: #eee;
	  text-indent: .2rem;
  }
</style>
