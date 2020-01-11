<template>
	 <div class="wrapper">
		<swiper :options="swiperOption">
		<swiper-slide v-for='item of data' :key='item._id'>
			<img class='swiper-img' :src='$baseUrl + item.imgUrl'>
		</swiper-slide>
		    
	    <!-- Optional controls -->
	    <!-- 如果需要分页器 -->
	    <div class="swiper-pagination"  slot="pagination"></div>
	    <!-- 如果需要导航按钮 -->
	    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
	    <div class="swiper-button-next" slot="button-next"></div> -->
	  </swiper>
	</div>
</template>

<script>
	export default{
		name:'HomeSwiper',
		props:{
			data:{
				type:Array,
				default:[]
			}
		},		//待配置
		data(){
			return {
				swiperOption:{ //默认为空
					pagination:'.swiper-pagination',  //需要加点，分页圆点
					loop:true,	 //轮播循环
					autoplay:3000	//自动轮播
				},
				
				// swiperList:[
				// 	{id:1,imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/083c708a3949958bcbca0fcc0ea3d57f.jpg_750x200_e47acfc7.jpg'},
				// 	{id:2,imgUrl:'https://h-des-activity-fecp.qunarzz.com/h_des_activity_fe_h_des_activity_fe/8c54576e74c6d4ea0062c9a664035262.jpg_750x200_9a39efd3.jpg'},
				// 	{id:3,imgUrl:'@/assets/img/swiper2.jpg'},
				// 	{id:4,imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/fd8b0bd3839c89f319efae4271d5eecb.jpg_750x200_98b9a5fb.jpg'},
				// ]
			}
		},
		
	}
</script>

<style scoped>
	.wrapper >>> .swiper-pagination-bullet-active{	/*强制穿透设置样式*/
	    background:#fff;
			
	}
	.wrapper{
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 26.67%;/*图片宽高比*/
	}	
	.swiper-img{
		width: 100%;
		
	}
	
</style>
