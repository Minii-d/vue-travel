<template>
  <div class="user-cell">
		<span class="textIcon" 
		:style="{
			'background':bgColor,
		}">
			<i class="iconfont">&#xe7bb;</i>
		</span>		
		<span class="text">{{text}}</span>
		<i class="foward">{{foward}}</i>
  </div>
</template>

<script>
  export default {
    data(){return {}},
	props:{
		text:{
			type:String,
			default:"我的xx"
		},
		textIcon:{
			type:String,
			default:"&#xe7bb;"
		},
		bgColor:{
			type:String,
			default:"#ffa21f"
		},
		borderWidth: {
        type: Number,
        default: .01
		},
		foward:{
			type:String,
			default:""
		}
	},
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped lang="scss">
	.user-cell{
		padding: .12rem;
		color: #4d4d4d;
		font-size: .32rem;
		display: flex;
		.textIcon{
			// display: inline-block;
			width: .6rem;
			height: .6rem;
			text-align: center;
			color: #fff;
			border: .02rem solid #fff;
			border-radius: 40%;
			margin-right: .22rem;
			.iconfont{
				font-size: .36rem;
				line-height: .6rem;
			}
		}
		.text{
			flex: 1;
			line-height: .6rem;
			border: .02rem solid #red;
		}
		.foward{
			width: .6rem;
			height: .6rem;
			font: 700 .28rem/.6rem "宋体";
			text-align: center;
			color: #aaa;
		}
		
	}
</style>
