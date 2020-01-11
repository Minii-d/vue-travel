<template>
    <div class="messBox" >
    	<p class="mess" @click="$emit('click')">{{mess}}</p>
    </div>	
</template>

<script>
  export default {
	props:{
		mess:{
			type:String,
			default:"提示"
		}
	},
    data(){return {}},
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped lang="scss">
  // .mess-box{
	 //  background: #f3f9fc;
	 //  height: 100%;
	 //  box-sizing: border-box;
	 //  padding-bottom: 100%; //背景颜色所占区域
	 //  position: relative;
	 //  display: none;
	  .messBox{
	  	position: absolute;
	  	width: 100%;
	  	height: 100%;
	  	top: 0;
	  	background: rgba($color: #000000, $alpha: .3);
	  	z-index: 999999;
	  	.mess{
	  		width: 5rem;
			padding: .3rem;
	  		height: 1rem;
	  		border: .02rem solid #aaa;
	  		background: #fff;
	  		border-radius: .08rem;
	  		position: absolute;
	  		top: 0;
	  		bottom: 7rem;
	  		left: 0;
	  		right: 0;
	  		margin: auto;
	  		font: .28rem/2 "";
	  		text-align: center;
	  		color: #666;
			}		
		}
  // }
</style>
