<template>
    <div class="container col-xxl-3 col-xl-4 col-lg-5 col-md-6 col-sm-8">
            
                <div class="row m-5 text-center  ">
                    <h2 class="text-primary">회원가입</h2>
                </div>
            
            <form class="needs-validation"  novalidate>
            <div class="form-group">
                <label for="exampleInputEmail1" class="form-label mt-4">아이디</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" v-model="userId">
                   
                </div>
				<div class="form-group has-success">
					<label class="form-label mt-4" for="inputValid">비밀번호</label>
					<input type="password" class="form-control" id="inputValid" v-model="userPassWord" required>
					<div class="valid-feedback">비밀번호가 유효합니다.</div>
				</div>

				<div class="form-group has-danger">
					<label class="form-label mt-4" for="inputInvalid">비밀번호 재확인</label> 
					<input type="password" class="form-control" id="inputInvalid" v-model="userPassCheck" required>
					<div class="invalid-feedback">비밀번호가 일치하지 않습니다</div>
				</div>
                <div class="form-group">
                    <label for="exampleInputEmail1" class="form-label mt-4">이름</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" v-model="userName">
                </div>
                
		
                <div class="form-group">
                    <label for="exampleInputEmail1" class="form-label mt-4">이메일</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" v-model="userEmail">
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1" class="form-label mt-4">회원타입</label>
                    <select class="form-select"  v-model="type" placeholder="회원타입">
                    <option value="1">판매자</option>
                    <option value="2">구매자</option>
                    </select>
                    
                </div>
				<div class="d-grid gap-2 mt-4 mb-2">
                    <button class="btn btn-primary btn-lg" type="button" @click="registerUser">가입하기</button>
                </div>

            </form>
        </div>
</template>
<script>
export default {
    name: 'registerComponent',
    data() {
        return {
            userId:"",
            userPassWord:"",
            userPassCheck:"",
            userName:"",
            userEmail:"",
            type:1
        };
    },
    methods: {
        checkPassword() {
            if(this.userPassWord === this.userPassCheck){
                return 'ok';
            }else {
                return '비밀번호다시 설정해줘세요';
            }
        },
        registerUser() {
            var chk = this.checkPassword();
            if (chk ==='ok'){
               let res = this.$api("/api/userRegister", {param:[this.userEmail,this.userId,this.userPassWord,this.userName,this.type]})
               console.log(res);
               if(res){
                this.$router.push({path:"/login"});
                alert("등록되었습니다.");
               }
            }
        }
    }
}
</script>
<style>
    
</style>