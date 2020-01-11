<template>
  <div class="login-btn">
    <input class="btn1" type="button" :value="value"/>
  </div>
</template>

<script>
  export default {
    data(){return {}},
	props:{
		value:{
			type:String,
			default:"按钮"
		}
	},
    components:{},
    methods:{}
  }
</script>

<style scoped lang="scss">
	$bg-light:#85d1db;
	$bg-dark:#25a4bb;	
  .login-btn{
	  text-align: center;
	  .btn1{		  
		  width: 90%;
		  color: #fff;
		  font: .36rem/1rem "microsoft yahei";
		  background: $bg-light;
		  border-radius: .03rem;
	  }
  }
</style>
