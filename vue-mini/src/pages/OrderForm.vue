<template>
  <div class="order-form">
    <DetailHeader title="订单填写" right="登录"/>
	<PrevCell class="prev-cell" per="/张" :objList="objList" :type="'list'"/>
	<div class="ticketNum">		
		<label class="label">购买数量</label>
		<span class="mess">最多购买<em>5</em>张</span>
		<div class="changeNum">
			<input type="button" class="reduce" value="-" @click="reduce">
			<input type="number" class="num" min=1 max=5 value="1" v-model="iptVal">
			<input type="button" class="add" value="+" @click="add">
		</div>
	</div>
	<van-submit-bar
	  :price="totalPrice"
	  button-text="提交订单"
	/>
  </div>
</template>

<script>
	import DetailHeader from "../components/DetailHeader.vue"
	import PrevCell from "../components/prev-cell.vue"
	export default {
		name: "order-form",
		data(){return {
			objList:[],
			iptVal:1,
			totalPrice:0
		}},
		components:{
			DetailHeader,PrevCell
		},
		mounted(){
			this.objList = JSON.parse(localStorage.getItem("objList"))
			// console.log(this.objList)
			
		},
		methods:{
			reduce(){
				this.iptVal = parseInt(this.iptVal)-1;
				if(this.iptVal<=1) this.iptVal=1
			},
			add(){
				this.iptVal = parseInt(this.iptVal)+1;
				if(this.iptVal>=5) this.iptVal=5
			},
			onSubmit(){
				
			}
		},
		updated() {
			this.totalPrice = parseInt(this.iptVal) * 599 * 100
		}
	}
</script>

<style scoped lang="scss">
	$bg-color:#18a9b9;
	$base-color:#ff9800;
	.order-form{		
		.prev-cell{
			background: #fff;
			padding: .16rem;
		}
		.ticketNum{
			display: flex;
			justify-content: space-between;
			background: #fff;
			margin-top: 0.2rem;
			padding: .3rem .2rem;
			font-size: .28rem;
			
			.label{
				line-height: .54rem;
			}
			.mess{
				line-height: .46rem;
				font-size: .2rem;
				padding-right: 3rem;
				color: #aaa;
			}
			.changeNum{
				border: .04rem solid #eee;
				padding: .02rem;
				input{
					font-weight: 700;
					width: .48rem;
					height: .48rem;
					text-align: center;
					color: #fff;
				}
				.reduce{
					
				}
				.num{
					width: .6rem;
					color: #666;
				}
				.add{
					background-color: $bg-color;
				}
			}
		}
		.van-submit-bar{
				.van-submit-bar__bar{
					position: fixed;
					z-index: 92;
					right: 0;
					bottom: 0;
					left: 0;
					width: 100%;
					background: #fff;
					border: .02rem solid #eee;
					.van-submit-bar__text{
						position: relative;
						font-size: .24rem;
						line-height: 1rem;
						text-indent: .2rem;
						color: $base-color;
						width: 50%;
						text-align: left;
					}
					.van-submit-bar__button{
						background: $base-color;
						border-radius: 0;
						width: 50%;
						height: 100%;
						.van-submit-bar__text{
							font: 500 .36rem/.8rem "";
							color: $base-color;
							text-indent: 0;
							.van-submit-bar__price{
								font-size: .48rem;
								
							}
						}
					}
				}
		}
	}
	
	
</style>

