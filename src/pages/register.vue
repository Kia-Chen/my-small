<template>
	<div class="login-wrap">
		<el-form :model="ruleForm" status-icon:rules="rules2" ref="ruleForm"
			 label-width="100px" class="demo-ruleForm login-container">
			<h1 style="text-align: center;">用户注册</h1>

			<el-form-item prop="tel" label="账号" style="width: 100%">
				<el-input auto-complete="off" placeholder="请输入账号" v-model="ruleForm.tel"></el-input>
			</el-form-item>

			<el-form-item prop="pass" label="密码" style="width: 100%">
				<el-input type="password" placeholder="请输入密码" v-model="ruleForm.pass" auto-complete="off"></el-input>
			</el-form-item>

            <el-form-item prop="checkPass" label="确认密码" style="width:100%">
                <el-input type="password" placeholder="请再次输入密码" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
            </el-form-item>

			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')" style="width:100%;">注册</el-button>
				<el-row>
					<el-col :span="12">
						<div class="grid-content bg-purple-dark">
							 <el-link type="success" @click="toLogin">用户登录</el-link>
						</div>
					</el-col>
				</el-row>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				ruleForm:{
					tel:'',
					pass:'',
					checkPass:''
				},
				rules2: {
					pass: [{ validator: validatePass, trigger: 'change' }],
					checkPass: [{ validator: validatePass2, trigger: 'change' }],
				},
			};
			// <!--验证密码-->
			let validatePass = (rule, value, callback) => {
				if (value === "") {
					callback(new Error("请输入密码"))
				} else {
					if (this.ruleForm2.checkPass !== "") {
						this.$refs.ruleForm2.validateField("checkPass");
					}
					callback()
				}
			}
			// <!--二次验证密码-->
			let validatePass2 = (rule, value, callback) => {
				if (value === "") {
					callback(new Error("请再次输入密码"));
				} else if (value !== this.ruleForm2.pass) {
					callback(new Error("两次输入密码不一致!"));
				} else {
					callback();
				}
			};
		},
		methods:{
			// <!--提交注册-->
			submitForm(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					setTimeout(() => {
						alert('注册成功')}, 400);
					} else {
						console.log("error submit!!");
						return false;
					}
				})
			},
			toLogin(){
				this.$router.push({
					path:'/Login'
				});
			}
		}
	}
</script>

<style scoped>
.login-wrap {
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	padding-top: 10%;
	background-repeat: no-repeat;
	background-position: center right;
	background-size: 100%;
}
.login-container {
	border-radius: 10px;
	margin: 0px auto;
	width: 450px;
	padding: 30px 35px 15px 35px;
	background: #fff;
	border: 1px solid #eaeaea;
	text-align: left;
	box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
}
.title {
	margin: 0px auto 40px auto;
	text-align: center;
	color: #505458;
}
</style>