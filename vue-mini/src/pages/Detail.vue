<template>
	<!-- 判断是否已经有数据了 -->
	<div class="detail" v-if="detail.detail">
		<DetailHeader :title="detail.title"/>
		<DetailBanner :bannerData="detail"/>
		<div class="sub-navs">
			<SubNav/>	
			<div class="address" @click="getMap">
				<i class="icon-local">!</i><span>{{detail.detail.detailAddress}}</span><i class="icon-right">&gt;</i>
			</div>
		</div>
		
		<router-link v-for="(item,index) of arrList" :key="index" :index="index" @click.native="book" :to="`/OrderForm/${index}`">
			<div class="prev">
				<PrevCell class="prev-cell" text="预订" :objList="item" :type="'obj'"/>
			</div>
			<!-- <PrevCell class="prev-cell" text="查看" /> -->
		</router-link>
		<div class="scenic">
			<DetailScenic class="detail-scenic" title="入园参考" :objDetail="objDetail"/>
			<DetailScenic class="detail-scenic" title="特色玩法" :objDetail="objDetail"/>
		</div>		
		
	</div>
	<!-- 骨架屏 -->
	<van-skeleton title avatar :row="10" v-else />
</template>

<script>
  import DetailHeader from '../components/DetailHeader.vue'
  import DetailBanner from '../components/DetailBanner.vue'
  import SubNav from '../components/sub-nav.vue'
  import PrevCell from '../components/prev-cell.vue'
  import DetailScenic from '@/components/detail-scenic/detail-scenic.vue'
  

  export default {
	name:"detail",
	// props:{
	//   productData:{
	// 	  type:Object,
	// 	  default:function(){
	// 		  return {}
	// 	  }
	//   }
	// }, 
    data() {
      return {
		detail:{},
		arrList:[],
		objDetail:{}
      }
    },
    components: {
      DetailHeader,DetailBanner,SubNav,PrevCell,DetailScenic
    },
    
    mounted() {
		// 详情接口值拿一条数据
      this.$axios({
        url: '/api/' + this.$route.query.dataName + '/' + this.$route.params._id,
      }).then(
        // res => this.detail = res.data.data
		(res)=>{
			this.detail = res.data.data;
			// console.log(res.data.data)
			this.arrList = res.data.data.list;	
			// console.log(this.arrList)
			this.objDetail = res.data.data.detail;
			// console.log(this.objDetail)
		}
      )
	  
    },
    updated() {},
    methods: {
		getMap(){
			this.$router.push('/BdMap');
			if(this.detail){	
			let detail = JSON.stringify(this.detail);
			localStorage.setItem("detail",detail)
			}
			// console.log(this.detail)
		},
		book(){
			if(this.detail){
				let objList = JSON.stringify(this.arrList);
				localStorage.setItem("objList",objList)
				
			// this.$router.push('/OrderForm');
			// console.log(objList)
			}
		}
	}
  }
  
</script>

<style scoped lang="scss">
	.detail{
		overflow: hidden;
		.sub-navs{
			position: relative;
			padding: .2rem .2rem 0 .2rem;
			background: #fff;
			border-radius: .1rem .1rem 0 0;
			.address{
				font-size: .24rem;
				padding: .2rem 0;
				margin: .1rem .2rem;
				line-height: .36rem;
				color: #212121;
				border-top: .01rem solid #eee;
			}
		}
		.prev{
			background: #fff;
			// margin: .12rem 0 ;
			.prev-cell{
				background: #fff;
				padding: .12rem;
				margin-left: .12rem;
				border-top: .01rem solid #eee;	
				color: #323232;
			}
		}
		.scenic{
			// margin-top: .12rem;
			.detail-scenic{
				margin-top: .12rem;	
			}
		}
		
	}
	

</style>
