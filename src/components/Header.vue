<template>
     <header>
        <div class="px-3 py-2 text-bg-dark border-bottom">
          <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <p class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none h4">
                sung project
              </p>
    
              <ul class="nav col-12 col-lg-auto col-md-auto col-sm-auto my-2 justify-content-center my-md-0 text-small" style="cursor: pointer;">
                <li>
                  <router-link
                  class="nav-link text-white" to="/">
                    <svg class="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                    홈
                  </router-link>
                </li>
               
                <li>
                  <router-link class="nav-link text-white" to="/showList">
                    <svg class="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                    쇼핑
                  </router-link>
                </li>
                <li>
                  <router-link  class="nav-link text-white" to="/contackUs">
                    <svg class="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                    contact us
                  </router-link>
                </li>
                <li>
                  <router-link  class="nav-link text-white" to="boardList">
                    <svg class="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                    게시판
                  </router-link>
               </li>
               </ul>
            
            </div>
          </div>
        </div>
            <div class="px-3 py-2 border-bottom mb-3">
                <div class="container d-flex flex-wrap justify-content-end">
            
    
                    <div class="text-end" v-if="!user.email">
                        <button type="button" class="btn btn-light text-dark me-2" @click="btnLoginForm">로그인</button>
                        <button type="button" class="btn btn-primary btnSignupForm" @click="btnSignupForm">회원가입</button>
                    </div>
                    <div class="text-end" v-else>
                      <button type="button" class="btn btn-warning"><span class="text-body-secondary" ></span>{{user.name}}님</button>
                      <button @click="logOut" class="btn btn-primary mx-3">로그아웃</button>
                    </div>
                </div>
            </div>
      </header>
       
</template>
<script>
export default {
    name: 'HeaderComponent',
    data() {
      return {
        
      }
    },
    computed: {
      user() {
        
        return this.$store.state.user;
      }
    },

    methods: {
      btnLoginForm(){
        this.$router.push({ path: '/login'});
      },
      btnSignupForm(){
        this.$router.push({ path: '/register'})
      },
      async logOut(){
        this.$store.commit("user",{});
        // try{
        //   const response = await this.$api({ path:'/api/logout'})
        //   return response.data;
        // }catch(error){
        //   console.error("API Error", error);
        // }
      }

    }
}
</script>
<style>
    
</style>