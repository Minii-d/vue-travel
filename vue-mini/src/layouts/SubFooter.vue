<template>
   <div class="sub-footer">
		<div class="foot"></div>
		<div class="sub-footer-nav">
			<div class="sub_footer-nav__sum">
				<span>产品价格</span>
				<i>￥</i><span>360</span>
			</div>
			<div class="sub_footer-nav__submit">
				提交订单
			</div>
		</div>
	
   </div>
</template>

<script>
  export default {
	name:"q-footer",
    data(){return {}},
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style lang="scss" scoped>
	$bg-color:#18a9b9;
	.footer-nav{		
		ul{
			width:100%;
			height: .86rem;
			line-height: .86rem;
			background: #eee;
			color: #212121;
			// border-top:.01rem solid #bbb;
			box-shadow: 0 0 .05rem #666;
			position: fixed;
			bottom: 0;
			z-index:9999;
			display: flex;
			justify-content: space-around;
			width:100%;	
			li.active{
				font-weight: 700;
				color: $bg-color;
			}
		}
		.foot{
			height: .86rem;
		}
	}
	
</style>
