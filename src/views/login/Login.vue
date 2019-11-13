<!--Lexi -->
<template>
    <div class="login_container">
        <div class="login_box">
            <div class="avatar_box">
                <img src="../../assets/img/logo.png" alt="">

<!--                登录-->
            </div>
            <el-form ref="loginFormRef" :model="loginForm" class="login_form" :rules="loginRules">
                <el-form-item label="用户名" prop="userAccount">
                    <el-input  v-model="loginForm.userAccount" prefix-icon="el-icon-user" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="userPwd">
                    <el-input v-model="loginForm.userPwd" type="password" prefix-icon="el-icon-lock" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item class="btns">
                    <el-button class="loginBtn" type="primary" size="mini" @click="login">登录</el-button>
                    <el-button class="resetBtn" type="info" size="mini" @click="reset">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                loginForm:{
                    userAccount:'',
                    userPwd:""
                },
                loginRules:{
                    // 验证用户名
                    userAccount:[
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
                    ],
                    // 密码验证
                    userPwd: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 2, max: 12, message: '长度在 2 到 12 个字符', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            reset(){
                this.$refs.loginFormRef.resetFields()
            },
            login(){
                this.$refs.loginFormRef.validate(async (valid)=>{
                    if(!valid){
                        return
                    }
                    const {data: res} = await this.$axios.post("http://172.16.2.25:8080/login", this.loginForm);
                    // console.log(res.data[0].userToken);
                    if(res.code != 200) return this.$message.error("登录失败")
                    this.$message.success("登录成功");
                    this.$store.commit('getToken',res.data[0].userToken);
                    this.$router.push("/home")
                })
            }


        }
    }
</script>

<style scoped lang="less">
    .login_container{
        background-color: #32bfb2;
        height: 100%;
    }
    .login_box{
        width: 330px;
        height: 380px;
        background-color: #fff;
        border-radius: 5px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        box-shadow: 0 0 10px #666666;

        .avatar_box{
            position: absolute;
            left: 50%;
            transform: translate(-50%);
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .btns{
        display: flex;
        justify-content: flex-end;
    }
    .login_form{
        position: absolute;
        bottom: 10px;
        left: 0;
        width: 100%;
        padding: 0 30px;
        box-sizing: border-box;

    }
    .loginBtn{
        background-color: #32bfb2;
    }
</style>