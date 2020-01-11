<template>
  <div class="icons">
	  <swiper :options="swiperOption">
		  <swiper-slide v-for='(items,index) of pages' :key="index">
			  <div class="icon" v-for="item of items" :key="item.id">
				  <div class="icon-img">
					  <img :src="$baseUrl + item.iconImg">
				  </div>
				  <p class="icon-content">{{item.iconCont}}</p>
			  </div>
		</swiper-slide>	  
	</swiper>
  </div>
</template>

<script>
  export default {
	name:'HomeIcon',
	props:{
		iconData:{
			type:Array,
			default:[]
		}
	},
    data(){
		return {
			swiperOption: {
			  autoplay: false
			},
			// iconList:[
			// 	{id:'01',iconImg:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",iconCont:'景点门票'},
			// 	{id:'02',iconImg:"http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png",iconCont:'上海迪士尼'},
			// 	{id:'03',iconImg:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",iconCont:'一日游'},
			// 	{id:'04',iconImg:"http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",iconCont:'上海海昌'},
			// 	{id:'05',iconImg:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",iconCont:'野生动物园'},
			// 	{id:'06',iconImg:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",iconCont:'景点门票'},
			// 	{id:'07',iconImg:"http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png",iconCont:'上海迪士尼'},
			// 	{id:'08',iconImg:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",iconCont:'一日游'},
			// 	{id:'09',iconImg:"http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",iconCont:'上海海昌'},
			// 	{id:'10',iconImg:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",iconCont:'野生动物园'}
			// ]
		}
	},
	
    components:{},
	computed:{
		pages(){
			let pages = [];//空数组，二维数组
			this.iconData.forEach((val,idx)=>{
				let page = Math.floor(idx/8); //计算页码
				if(!pages[page]){//page为0时，如果不存在
					pages[page] = [];//让pages的元素变为一个空数组
				}
				pages[page].push(val);
				console
			})
			return pages;
			console.log(pages)
		}
	},
    methods:{}
  }
</script>

<style scoped>
  .icons{
	  width: 100%;
	  height: 0;
	  padding-bottom: 50%;
	  background: #fff;
	  text-align: center;
	  overflow: hidden;
  }
  
  .icons .icon{
	  width: 25%;
	  height: 0;
	  padding-bottom: 25%;
	  /* background: #25A4BB; */
	  float: left;
  }
  .icon .icon-img{
	  padding-top: .1rem;
	  
  }
  .icon .icon-img img{
	 /* display: block;
	  margin: 0 auto; */
	  width: 1.1rem;
	  height: 1.1rem;
  }
  .icon .icon-content{
	  height: .44rem;
	  line-height: .44rem;
	  color: #212121;
  }
  
</style>
