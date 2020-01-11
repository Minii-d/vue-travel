<!-- 周末去哪单项 -->
<template>
  <div class="d-item" >
	<div>
		<div class="item-img">
		  <img :src="$baseUrl + cellList.imgUrl" />
		</div>
		<div class="item-info">
			<!-- 溢出隐藏出现省略号 -->
		  <p class="item-info__title ellipsis">{{cellList.title}}</p>
		  <p class="item-info__cont ellipsis">{{cellList.content}}</p>
		</div>
	</div>
  </div>
</template>

<script>
  export default {
    data(){return {}},
	props:{
		cellList:{
			type:Object,
			default:function(){
			  return {}
			}
		}
	},
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .d-item{
	 background: #fff;
  }
  .d-item .item-img{
	  width: 100%;
	  overflow: hidden;
	  height: 0;
	  padding-bottom: 37.45%;
  }
  .d-item .item-img img{
	  width: 100%;
  }
  .item-info{
	  padding: .1rem;
  }
  .item-info .item-info__title{
	  padding-right: 1.4rem; /* 设置宽度，溢出隐藏需要 */
	  line-height: .48rem;
	  font-size: .28rem;
	  color: #212121;
  }
  .item-info .item-info__cont{
	  padding-right: 1.4rem;  /* 设置宽度，溢出隐藏需要 */
	  color: #616161;
	  font-size: .24rem;
	  line-height: .42rem;
}
</style>
