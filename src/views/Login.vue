<template>
    <div class="container">
        <div class="login" id="loginPage">
            <div class="container col-xl-4 col-lg-5 col-md-6 col-sm-8">
                <div class="row m-5 text-center  ">
                    <h3 class="text-primary">로그인</h3>
                </div>
            <form class="loginfrm" name="loginfrm">
                <div class="row form-floating">
                    <input type="text" class="form-control" id="inputId" name="id" placeholder="아이디" v-model="userId" >
                    <label for="inputId">아이디</label>
                </div>
                <div class="row form-floating mt-4">
                    <input type="password" class="form-control" id="password" name= "password" placeholder="비밀번호" v-model="userPassword">
                    <label for="inputPwd">비밀번호</label>
                </div>
                <div class="row mt-1">
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >
                            <label class="form-check-label" for="flexCheckChecked">
                            아이디 저장
                            </label>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="breadcrumb-container mx-5">
                            <nav aria-label="breadcrumb" >
                                <ol class="breadcrumb">
                                <li class="breadcrumb-item" id="findIdPwd" ><router-link to="findIdPassword">아이디/비밀번호 찾기</router-link></li>
                                
                                <li class="breadcrumb-item"><router-link to="register">회원가입</router-link></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    
                    <div class="row mt-5">
                        <button type="button" class="btn btn-danger" id="loginBtn" @click="getLogin">로그인</button>
                    </div>
                    
                </div>
            
            </form>
            </div>
        
        </div>
    </div>
</template>
<script>
export default {
    name: "loginComponent",
    data() {
        return {

            userId: "",
            userPassword:"",
        }
    },
    methods: {
        async getLogin() {
            
            if (this.userId !="" && this.userId != null && this.userPassword !="" && this.userPassword !="null") {
                let res = await this.$api("/api/signUp", {param:[{"user_id":this.userId},{"password":this.userPassword}]})
                if (res) {
                    this.$store.commit("user",res[0]);
                    console.log(res[0]);
                    this.login(res[0]);
                    this.$router.push({path: "/"})
                }else{
                    alert("아이디/비밀번호를 확인해주세요")
                }
            }else{
                alert("아이디/비밀번호를 확인해주세요")
            }
        },
        async login(res){
            
            this.$api("/api/login",{
                param:{"email":res.email, "name":res.name}
            });
        }
    
    }

}
</script>
<style>
    
</style>