<template>
	<div class="input-cell">
		<label >{{label}}</label>
		<input :type="typeVal" :value="value" :placeholder="placeholder" @input="$emit('input',$event.target.value)"/>
	</div>
</template>

<script>
  export default {
    data(){return {}},
	props:{
	  value:{
	    type:String,
	    default:''
	  },
	  label:{
	    type:String,
	    default:'手机号'
	  },
	  placeholder:{
		type:String,
		default:'请输入...'  
	  },
	  typeVal:{
		  type:String,
		  default:'text'
	  }
	},
    components:{},
  }
</script>

<style scoped lang="scss">
  .input-cell{
	display: flex;
	width: 100%;
	height: .9rem;
	line-height: .9rem;
	font-size: .30rem;	
	label{
		color: #19a9ba;
		box-sizing: border-box;
		width: 1.6rem;
	}
	input{
		flex: 1;
		border: 0;
		width: 100%;
		line-height: 100%;
		font-family: "microsoft yahei";
		vertical-align: bottom;
	}
  }
</style>
