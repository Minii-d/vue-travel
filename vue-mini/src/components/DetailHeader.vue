<template>
	<div class="detail-header">
		<div class="sub-nav">
			<div class='header-left' @click="goBack">
				<span class="iconfont">&#xe624;</span> 
			</div>
			<div class='header-title'>{{title}}</div>
			<div class='header-right' @click="go">{{right}}</div>
		</div>
		<div class="sub-head"></div>
	</div>
</template>

<script>
  export default {
    data(){return {}},
	props:{
		title:{
			type:String,
			default:""
		},
		right:{
			type:String,
			default:""
		}
	},
    components:{},
	methods:{
		go(){
			if(this.right=="注册"){
				this.$router.push('/Reg')				
			}
			if(this.right=="登录"){
				this.$router.push('/Login')	
			}
				
		},
		goBack(){
			this.$router.go(-1)
		}
	}

  }
</script>

<style scoped lang="scss">
	$bg-color:#18a9b9;
	
  .sub-nav{
	   display: flex;
	   justify-content: space-between;
	   height: .86rem;
	   line-height: .86rem;
	   background: $bg-color;
	   color: #fff;
	   font-size: .32rem;
	   width:100%; 
	   position: fixed;
	   z-index: 9999;
	  .header-left{
		  text-align: center;
		  width: .64rem;
		  font-weight: 700;
		  padding: 0 .1rem;
		  .iconfont{
		  	  font-size: .24rem;
		  }
	  }
	   .header-center{
			
	   }
	  .header-right{
		  min-width: 1.04rem;
		  padding: 0 .1rem;
		  text-align: center;
		  font-size: .30rem;
		  color: #75ffff;
	  }
  }
  .sub-head{
	  height: .86rem;
  }

</style>
