<!-- 猜你喜欢单项 -->
<template>
	<div v-if="productData">
  <div class="d-cell" >
    <div class="d-cell__img">
		<img :src="$baseUrl + productData.cellImg">
	</div>
	<div class="d-cell__right">
		<h3 class="title">{{productData.title}}</h3>
		
		<div class="comment">
			<span class="comment-star">
				<strong class="iconfont" v-for=" item of productData.starNum" :key="item">&#xe7bb;</strong>
				<!-- <span class="iconfont">&#xe7bb;&#xe7bb;&#xe7bb;&#xe7bb;&#xe7bb;</span> -->
			</span>
			<span class="comment-cont"><em>{{productData.commentNum}}</em>条评论</span>
		</div>	
		<div class="price">
			<span class="price-acount">￥<em>{{productData.price}}</em></span>起
			<span class="address">{{productData.address}}</span>
		</div>
		<div class="message">{{productData.message}}</div>
	</div>
  </div>
  </div>
</template>

<script>
  export default {
	  props:{
		  productData:{
			  type:Object,
			  default:function(){
				  return {}
			  }
		  }
	  },
    data(){return {}},
    components:{},
	mounted() {
		// console.log(productData)
	},
    methods:{}
  }
</script>

<style scoped lang="scss">
	$f-color:#616161;
	.d-cell{
		background: #fff;
		display: flex;
		padding: .2rem 0;
		border-bottom: 0.02rem solid #eee;  /*渲染页面需要调整一下*/
		color: $f-color;
		.d-cell__img{
			margin-left: .24rem;
			img{
				width:2rem;
				height:2rem;
			}
		}
	}
	.d-cell__right{
		flex:1;
		margin-left: .2rem;
		.title{
			margin-top: .26rem;
			height: .44rem;
			font-size: .32rem;
			line-height: .44rem;
		}
		.comment{
			margin-top: .14rem;
			height: .34rem;
			.comment-star{
				width: 1.6rem;
				display: inline-block;
				position: relative;
				// color: #ff8300;
				strong{
					// position: absolute;
					color:#ff8300;
					top: 0;
					left: 0;
				}
				// span{
				// 	position: absolute;
				// 	top: 0;
				// 	left: 0;
				// 	z-index: -1;
				// }
			}
			.comment-cont{
				color: $f-color;
				font-size: .24rem;
				line-height: .34rem;
			}
		}
		.price{
			position: relative;
			margin-top: .22rem;
			color: $f-color;		
			font-size: .24rem;
			line-height: .4rem;
			.price-acount{
				color: #ff8300;
			}
			em{
				font-size: .4rem;
			}
			.address{
				position: absolute;
				right: .24rem;
				bottom: 0;
			}
		}
		.message{
			overflow: hidden;
			text-overflow: ellipsis;
			display: inline-block;
			margin-top: .48rem;
			margin-right: .24rem;
			background: #fff9f9;
			padding: .04rem .1rem;
			color: #f55;
			font-size: .24rem;
			line-height: .34rem;
		}
	}
	
	
</style>
