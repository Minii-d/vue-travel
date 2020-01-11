<template>
	<div class="reset">
		<DetailHeader/>
		<div class="loading">
			<van-loading color="#1989fa" />
		</div>
	</div>
</template>

<script>
	import DetailHeader from "../components/DetailHeader.vue"
	export default {
		data(){return {}},
		components:{
			DetailHeader
		},
		mounted(){},
		updated(){},
		methods:{}
	}
</script>

<style scoped lang="scss">
  .reset{
	  .loading{
		  padding-bottom: 100%;
		  text-align: center;
		  .van-loading{
			  top: 2rem;
		  }
	  }
  }
</style>
