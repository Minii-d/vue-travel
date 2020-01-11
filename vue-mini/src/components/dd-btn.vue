<template>
  <div class="dd-btn">
	<a href="">
		<p class="price">￥<i>{{perPrice}}</i><span>{{per}}</span></p>
		<input type="button" :value="text" class="pre-btn" v-if="text" />
	</a>
	
  </div>
</template>

<script>
  export default {
    data(){return {}},
    props:{
      text:{
        type:String,
        default:""
      },
	  per:{
		  type:String,
		  default:""
	  },
	  perPrice:{
		  type:Number,
		  default:9999
	  }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped lang="scss">
	$base-Color:#ff9800;
	.dd-btn {
		// width: 1.4rem;
		text-align: center;
		.price{
			display: inline-block;
			margin: 0 auto;
			color: $base-Color;
			font-size: .24rem;
			i{
				font-size: .36rem;
			}
			span{
				color: #666;
			}
		}
		.pre-btn{
			width: 100%;
			height: .48rem;
			color: #fff;
			font-size: .24rem;
			line-height: .48rem;
			border-radius: .05rem;
			background: $base-Color;
			font-weight: 700;
		}

	}
  

</style>
