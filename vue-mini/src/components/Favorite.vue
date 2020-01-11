<template>
  <div class="favorite">
	  <div class="fav-icon">
		<img src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
		<span class="fav-title">猜你喜欢</span>		  
	  </div>
    
	
  </div>
</template>

<script>
  export default {
    data(){return {}},
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .favorite{
	  margin-top:.2rem;
	   background: #fff;
  }
  .fav-icon{
	  height: .44rem;
	  line-height: .44rem;
	  padding: .24rem 0;
	  font-size: .32rem;
	  background: #fff;
  }
  .fav-icon img{
	  width: .3rem;
	  height: .3rem;
	  vertical-align: top;
	  margin: 0 .08rem 0 .2rem;
  }
</style>
