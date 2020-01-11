<template>
  <div class="noPage">
    <LoginHeader/>
	<img src="../../public/images/order_login.png" >
	<p class="notice">啊噢~走丢了~<br><a href="/">返回首页</a></p>
  </div>
</template>

<script>
	import LoginHeader from "../components/DetailHeader.vue"
	export default {
		data(){return {}},
		components:{
			LoginHeader
		},
	}
</script>

<style scoped lang="scss">
  .noPage{
	  text-align: center;
	  padding-bottom: 50%;
	  img{
		  margin-top: 10%;
	  }
	  .notice{
		  font: .16rem/3 "";
		  color: #666; 
	  }
  }
</style>
