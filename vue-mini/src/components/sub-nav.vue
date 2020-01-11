<template>
  <div class="sub-nav">  
	
	<div class="sub-nav-left">
		<div class="sub-nav-score">
			<div class="sub-nav-t">
				<span>4.9</span>分
			</div>
			<div class="sub-nav-b">
				<span>90629</span>条评论
			</div> 
		</div>
		<div class="sub-nav-go">&gt;</div>
	</div>
	<div class="sub-nav-right">
		<div class="sub-nav-score">
			<div class="sub-nav-t">
				景点简介
			</div>
			<div class="sub-nav-b">
				开放时间、贴士
			</div> 
		</div>
		<div class="sub-nav-go">&gt;</div>
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

<style scoped lang="scss">
  .sub-nav{
	  .sub-nav-left{
		  display:flex;
		  justify-content:space-between;
		  align-items:center;
		  width:47%;
		  border-right:.01rem solid #eee;
	  }
	  .sub-nav-right{
		  display:flex;
		  justify-content:space-between;
		  align-items:center;
		  width:47%;
	  }
	  
	  // height:0;
	  // padding-bottom:20%;
	  
	  display:flex;
	  justify-content:space-between;
	  align-items:center;
	  // background:#999;
	  .sub-nav-score{
		  .sub-nav-t{
				font-size: .28rem;
				color: #ff8300;
				line-height: .48rem;
				span{
				  font-size: .44rem;
				  color: #ff8300;
				  line-height: .44rem;
				}
		  }
		  .sub-nav-b{
			  font-size: .24rem;
			  color: #9e9e9e;
			  line-height: .32rem;
			  margin-right: .2rem;
		  }
	  }
	  
	.sub-nav-go{
		height:100%;
		font: 700 .14rem/1 "宋体";
		color: #9e9e9e;
		margin-right:.3rem;
	}
  }
</style>
