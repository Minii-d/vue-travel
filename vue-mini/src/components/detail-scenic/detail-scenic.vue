<template>
  <div class="detail-scenice">
    <div class="refer">
		<h3>{{title}}</h3>
		<div class="refer-info" v-if="title=='入园参考'">
			<DetailCell title="开放时间" :info="objDetail.referInfo.time"/>
			<DetailCell title="免费政策" :info="objDetail.referInfo.free"/>
			<DetailCell title="优惠政策" :info="objDetail.referInfo.youhui"/>
		</div>
		<div class="refer-info" v-if="title=='特色玩法'">
			<DetailCell title="特色玩法"/>
		</div>
	</div>
	<div class="more" @click="getMore">展开更多↓</div>
	
  </div>
</template>

<script>
	import DetailCell from "./components/detail-cell.vue"
	export default {
		data(){return {}},
		props:{
			title:{
				type: String,
				default: "标题1"
			},
			objDetail:{
				type:Object,
				default:function(){
					return {}
				}
			}
		},
		components:{
			DetailCell
		},
		
		methods:{
			getMore(){
				let referInfo = document.querySelectorAll(".refer-info");
				let more = document.querySelectorAll(".more");
				for(let i=0;i<referInfo.length;i++){
					referInfo[i].style.height= "auto";
					more[i].style.display = "none";					
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	$blue:#00bcd4;
  .detail-scenice{
	  background: #fff;
	  font-size: .24rem;
	  .refer{		 
		 border-bottom: .01rem solid #eee;		 
		 h3{
			position: relative;
			overflow: hidden;
			height: .9rem;
			line-height: .9rem;
			padding: 0 .34rem;
			font-weight: 700;
			color: #212121;
			border-bottom: .01rem solid #eee;
			&:before{
				content:"";
				display: inline-block;
				height: .28rem;
				width: .05rem;
				background: $blue;
				vertical-align: middle;
				margin: 0 .05rem;
			}
		 } 
		.refer-info{
			height: 1.44rem;
			overflow: hidden;
		}
	  }
	  .more{
		  line-height: .88rem;
		  text-align: center;
	  }
	  
  }
</style>
