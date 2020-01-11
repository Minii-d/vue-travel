<template>
  <div class="header">
    <div class="header-nav">
		<div class='header-left' @click="goBack">
			<span class="iconfont">&#xe624;</span> <!--左箭头的16进制码-->
		</div>
		<div class='header-input'>
			<span class="iconfont">&#xe632;</span>
			输入城市/景点/游玩主题
		</div>
		<div class='header-right'>
			城市
			<span class="iconfont">&#xe64a;</span>
		</div>
	</div>
	<div class="head"></div>
  </div>
</template>

<script>
  export default {
	name:"q-header",
    data(){return {}},
    components:{
		name:'Header'
	},
    methods:{
		goBack(){
			this.$router.go(-1)
		}
	}
  }
</script>

<style scoped lang="scss">
	$bg-color:#18a9b9;
	.head{
		height: .86rem;
	}
  .header-nav{
	display: flex;
	 justify-content: space-between;
	 height: .86rem;
	 line-height: .86rem;
	 background: $bg-color;
	 color: #fff;
	 width:100%; 
	 position: fixed;
	 z-index: 9999;
  }
  .header-left{
	  text-align: center;
	  width: .64rem;
	  font-weight: 700;
	  padding: 0 .1rem;
  }
  .header-input{
   	  flex: 1;
   	  height: .6rem;
   	  width: 100rem;
   	  line-height: .6rem;
   	  margin-top: .14rem;
   	  padding-left: .2rem;
   	  background: #fff;
   	  border-radius: .06rem;
   	  color: #eee;   	  
   }
  .header-right{
  	  min-width: 1.04rem;
  	  padding: 0 .1rem;
  	  text-align: center;
  	  color: #fff;
	  
  }
  .header-left .iconfont{
  	  font-size: .12rem;
  }
  .header-right .iconfont{
	  font-size: .12rem;
  }
</style>
