<template>
  <div class="column">
	  <DetailHeader/>
	  <router-link  v-for="(item,index) of list" 
					:key="index"
					:to="`/detail/${item._id}?dataName=home`"
	>
		  <div class="column-cell">
			<DCell :productData="item"/>
			<div class="column-cell__one" v-for="(val,idx) of item.list" :key="idx">
				<h5>{{val.ticketName}}</h5>
				<span>￥<em>{{val.perprice}}</em></span>
			</div>
		  </div>
	  </router-link>
		
	
  </div>
</template>

<script>
	import DetailHeader from "../components/DetailHeader.vue"
	import DCell from "../components/d-cell.vue"
	
	export default {
		data(){return {
			list:[]
		}},
		components:{
			DetailHeader,DCell
		},
		mounted(){
			axios({
			  url:'/api/columnList',
			  params:{_page:1,_limit:10}
			}).then(
			  res=>this.list=res.data.data
			  // res=>console.log(res.data.data)
			)
		},
		updated(){},
		methods:{}
	}
</script>

<style scoped lang="scss">
  .column{
	  .column-cell{
		  background: #fff;
		  margin-bottom: .14rem;
		  .column-cell__one{
			  position: relative;
			  height: .96rem;
			  margin-left: .2rem;
			  border-bottom: .02rem solid #eee;
			  h5{
				  overflow: hidden;
				  margin-right: 1.4rem;
				  height: .96rem;
				  color: #616161;
				  font-size: .28rem;
				  line-height: .96rem;
				  white-space: nowrap;
				  text-overflow: ellipsis;
			  }
			  span{
				  overflow: hidden;
				  position: absolute;
				  top: 0;
				  right: .2rem;
				  width: 1.2rem;
				  height: .96rem;
				  color: #ff8300;
				  font-size: .2rem;
				  line-height: .96rem;
				  text-align: right;
				  em{
					  font-size: .32rem;
				  }
			  }
		  }
	  }
  }
</style>
