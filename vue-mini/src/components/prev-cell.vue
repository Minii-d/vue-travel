<template>
  <div class="prev-cell">
	  <!-- 详情页渲染 -->
    <div class="prev-cell__cont" v-if="type=='obj'">
		<h5>{{objList.ticketName}}</h5>
		<p><img src="../../public/images/right.png">{{objList.message}}</p>
		<ul >
			<li v-for="(val,idx) of objList.tips">{{val}}</li>
		</ul>
		<DdBtn class="dd-btn" :text="text" :per="per" :perPrice="objList.perprice" />
	</div>
	
	<!-- 订单页渲染 -->
	<div class="prev-cell__cont" v-if="type=='list'&& objList[this.$route.params._id]" >
		<h5>{{objList[this.$route.params._id].ticketName}}</h5>
		<p><img src="../../public/images/right.png">{{objList[this.$route.params._id].message}}</p>
		<ul >
			<li v-for="(val,idx) of objList[this.$route.params._id].tips">{{val}}</li>
		</ul>
		<DdBtn class="dd-btn" :text="text" :per="per" :perPrice="objList[this.$route.params._id].perprice" />
	</div>
	
  </div>
</template>

<script>
	import DdBtn from "./dd-btn.vue"
	export default {
		props:{
			text:{
				type:String,
				default:''
			},
			per:{
				type:String,
				default:""
			},
			objList:{
				
			},
			index:{
				type:Number,
				default:0
			},
			type:{
				type:String,
				default:"obj"
			}
		},
		data(){return {}},
		components:{
			DdBtn
		},
		mounted(){
			// console.log(this.objList)
			// console.log(this.$route.params._id)
		},
		updated(){},
		methods:{}
	}
</script>

<style scoped lang="scss"> 
  .prev-cell{
	  position: relative;
	  .prev-cell__cont{
		  margin-right: 1.6rem;
		  h5{
			  font-size: .28rem;
			  line-height: .52rem;
			  max-height: 1.04rem;
			  overflow: hidden;
		  }
		  p{
			  height: .32rem;
			  color: #616161;
			  font-size: .2rem;
			  line-height: .32rem;
			  white-space: nowrap;
			  img{
				  width: .2rem;
				  max-height: .32rem;
				  margin-right: .04rem;
				  vertical-align: top;
			  }
		  }
		  ul{
			 display: flex;
			 li{
				 display: inline-block;
				 margin-top: .08rem;
				 padding: 0 .04rem;
				 height: .32rem;
				 color: #00afc7;
				 font-size: .2rem;
				 line-height: .32rem;
				 white-space: nowrap;
			 }
		  }
	  }
	  .dd-btn{
		  position: absolute;
		  top: 25%;
		  right: .1rem;
	  }
  }
</style>
