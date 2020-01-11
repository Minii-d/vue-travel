<template>
  <div class="detail-cell">
    <h4>{{title}}</h4>
    <div class="cell-info">
<!--    	8:00-22:00；<br/>
    	最晚入园时间21:30。 东方明珠地标乐园-全球奇幻旅行：10:00-21:30 -->
		{{info}}
		<!-- {{titleinfo}} -->
    </div>
  </div>
</template>

<script>
  export default {
    data(){return {}},
	props:{
	  title:{
	    type:String,
	    default:'标题2'
	  },
	  info:{
		 type:String,
		 default:'内容内容内容内容' 
	  },
	  titleinfo:{
		  type:String,
		  default:""
	  }
	},
    components:{},
  }
</script>

<style scoped lang="scss">
  .detail-cell{
	  padding: .1rem .2rem .06rem;
	  line-height: .42rem;
	  h4{		  
		  font-size: .26rem;
		  font-weight: 700;
		  color: #212121;
	  }
	  .cell-info{
		  font-size: .24rem;
		  word-break: break-all;
		  word-wrap: break-word;
		  color: #616161;
	  }
	}
</style>
