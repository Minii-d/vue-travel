<template>
	<div class="reg">
		<DetailHeader title="注册"/>
		<div class="login-tab">
			<div class="login-tab-box">
				<a class="active" @click="mobileLog" >手机注册</a>
				<a @click="normalLog">账号注册</a>
			</div>
		</div>
		<div class="form">	
				<!-- 手机方式 -->
			<div class="mobile" v-if="this.$root.bLogin" >
				<InputCell label="手机号" placeholder="请输入手机号码" class="inputCell" v-model="mobile"/>
				<InputCell label="密码" placeholder="请输入密码" class="inputCell" v-model="password" typeVal="password"/>
				<span class="codeBox">
					<InputCell label="验证码" placeholder="请输入验证码" class="inputCell" v-model="iptCode"/>	
					<strong class="getCode" @click="getCode">获取验证码</strong>
				</span>
			</div>
			
			<!-- 账号方式 -->
			<div class="normal" v-else>
				<InputCell label="账号" placeholder="手机号/邮箱/用户名" class="inputCell" v-model="username"/>
				<InputCell label="密码" placeholder="请输入密码" class="inputCell" v-model="password" typeVal="password"/>	
				<InputCell label="图形码" placeholder="请输入图形码" class="inputCell"/>
			</div>						
		</div>
		
	<!-- 	<div class="messBox" @click="toNone">
			<p class="mess">{{mess}}</p>
		</div>	 -->
			<MessBox class="messBox" :mess="mess" v-show="onoff" @click="toNone"/>
		
		<LoginBtn class="loginBtn" value="注册" @click.native="reg"/>
		<p class="protocal">注册即同意去哪儿&nbsp;<a href="https://touch.qunar.com/h5/about?action=rules">用户服务协议</a>&nbsp;和&nbsp;<a href="https://m.qunar.com/zhuanti/20170210_privacy.html?source=touch">隐私政策</a></p>
	</div>
</template>

<script>
	import DetailHeader from "@/components/DetailHeader.vue"
	import InputCell from "@/components/input-cell.vue"
	import LoginBtn from "@/components/login-btn.vue"
	import MessBox from "@/components/mess-box.vue"
	
	export default {
		data(){return {
			username: '',
			password: '',
			mess: '',
			iptCode:'',
			mobile: '',
			onoff:0
		}},
		components:{
			DetailHeader,InputCell,LoginBtn,MessBox
		},
		mounted(){},
		updated(){},
		methods:{
			
			mobileLog(){
				this.$root.bLogin=true;				
			},
			normalLog(){
				this.$root.bLogin=false;
			},
			getCode(){
				axios({
					url:'/api/send-code',
					method: 'get',	
					params:this.mobile									
				}).then(
					res=>{
						this.testCode = res.data.code;
						this.username = this.mobile
					}
				)
			},
			toNone(){
				document.onclick = ()=>{
					this.onoff=0
				}
			},
			
			reg() {	
				// 将数据添加到请求头里
			  let formData = new FormData();
			  formData.append('username',this.username)
			  formData.append('password',this.password)
			  formData.append('mobile',this.mobile)
			  formData.append('email',this.email)
			  console.log(formData)
			  // let file=document.getElementById('file');
			  // formData.append('icon',file.files[0]);
			  
			  this.$axios({
			    url: '/api/reg',
			    method: 'post',
			    data: formData
			  }).then(
			    res => {
					console.log(res)
			      if(res.data.err==0 || this.testCode==this.iptCode){
			        console.log(res.data);
			        this.$router.push('/login')
			      }else{
			        this.mess=res.data.msg
					// let messBox = document.querySelector(".messBox")
					// messBox.style.display="block"
					this.onoff=1
			      }
			    }
			  )
			  
			}
		}
	}
</script>

<style scoped lang="scss">
	$bg-color:#18a9b9;
  .reg{
	  background: #f3f9fc;
	  height: 100%;
	  box-sizing: border-box;
	  padding-bottom: 100%; //背景颜色所占区域
	  position: relative;
	.login-tab{
		height: .9rem;
		background: $bg-color;
		box-sizing: border-box;
		padding: .1rem .2rem;
		.login-tab-box{
			display: flex;
			justify-content: center;
			// box-sizing: border-box;
			// height: .64rem;
			border: .02rem solid #fff;
			border-radius: .03rem;
			overflow: hidden;
			a{
				line-height: .68rem;
				width: 50%;
				font-size: .3rem;
				color: #fff;
				text-align: center;				
				&:hover{
					background: #fff;
					color: $bg-color;
				}				
			}			
		}
	}
	.form{	  
		border-top: .02rem solid #ccc;
		border-bottom: .02rem solid #ccc;
		background: #fff;
		margin: .2rem 0 .3rem;
		.inputCell{
			margin-left: .2rem;
			width: 100%;
			border-bottom: .02rem solid #ddd;
			&:last-child{
				border:0;	
			}
		}
		.codeBox{
			display: block;
			position: relative;
			.getCode{
				position: absolute;
				right: .2rem;
				top: 0;
				bottom: 0;
				margin: auto;
				z-index: 10;
				width: 1.6rem;
				height: .48rem;
				border: .02rem solid #aaa;
				border-radius: .06rem;
				line-height: .48rem;
				font-size: .24rem;
				text-align: center;
				color: #ddd;
			}	
		}
				
	}
	// .messBox{
	// 	position: absolute;
	// 	width: 100%;
	// 	height: 100%;
	// 	top: 0;
	// 	background: rgba($color: #000000, $alpha: .3);
	// 	z-index: 999999;
	// 	display: none;
	// 	.mess{
	// 		width: 6rem;
	// 		height: 2rem;
	// 		border: .02rem solid #aaa;
	// 		background: #fff;
	// 		border-radius: .08rem;
	// 		position: absolute;
	// 		top: 0;
	// 		bottom: 7rem;
	// 		left: 0;
	// 		right: 0;
	// 		margin: auto;
	// 		font: .28rem/2 "";
	// 		text-align: center;
	// 		color: #666;
	// 	}		
	// }
	.loginBtn{
		margin-bottom: .48rem;
	}
	.protocal{
		text-align: center;
		font-size: .12rem;
		color: #9e9e9e;
		a{
			color: #9e9e9e;
			text-decoration: underline;
		}
	}
  }
</style>
