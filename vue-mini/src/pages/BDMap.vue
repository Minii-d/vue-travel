<template>
  <div class="dbmap">
    <DetailHeader title="景点地图"/>
	<div id="container"></div>
	<div class="title">
		<strong>{{detail.title}}</strong><span>{{detail.type}}</span>
	</div>
  </div>
</template>

<script>
	import DetailHeader from "../components/DetailHeader.vue"
	export default {
		data(){return {
			 detail:{}
		}},
		components:{
			DetailHeader
		},
		mounted(){
			this.detail = JSON.parse(localStorage.getItem("detail")) ;
			this.map = new BMap.Map("container");
			this.point=new BMap.Point(this.detail.coordinate.x,this.detail.coordinate.y);
			this.map.centerAndZoom(this.point, 14);  // 初始化地图,设置中心点坐标和地图级别
			this.map.enableScrollWheelZoom(true);
			let marker = new BMap.Marker(this.point);  // 创建标注
			this.map.addOverlay(marker); 
			marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画			
		},
		updated(){},
		methods:{}
	}
</script>

<style scoped lang="scss">
  .dbmap{
	  #container{
		  height: 9rem;
	  }
	  .title{
		  position: absolute;
		  // z-index: 1;
		  bottom: .4rem;	
		  font: 700 .32rem/2 "";
		  background: #fff;
		  border: .02rem solid #ddd;
		  border-radius: .1rem;
		  box-shadow: 0 0 .2rem #ddd;
		  color: #000;
		  width: 92%;
		  padding: .1rem;
		  margin: 0 .2rem;
		  
		  span{
			  display: inline-block;
			  font: .24rem/.28rem "";
			  background: #00bcd4;
			  color: #fff;
			  padding: .02rem .1rem;
			  margin: 0 .1rem;
		  }
	  }
  }
</style>
