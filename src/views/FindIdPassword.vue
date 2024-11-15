<template>
  <div>
    <div class="container mt-5 col-xl-4 col-lg-5 col-md-6 col-sm-8" >
      <div class="row">
        <div class="h2 text-center"><strong>아이디/비밀번호 찾기</strong></div>
        <div class="h4 text-center">아이디/비밀번호가 생각나지 않으세요?</div>
      </div>
      <!-- Find Account : 아이디 찾기-->
      <div class="row">
        <form name="idsearchForm2" id="idsearchForm2">
          <div class="form-control mt-5">
            <div class="text-bg-info text-center">
              회원가입시 입력하셨던 이름과 이메일을 입력해 주시면 회원정보를
              이메일로 보내드립니다.
            </div>
            <ul class="row">
              <li class="mt-5">
                <label for="name" class="form-label text-bg-info">이름</label
                ><input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                />
              </li>
              <li class="mt-5">
                <label for="email" class="form-label text-bg-info">이메일</label
                ><input
                  type="text"
                  id="email"
                  class="form-control"
                  name="email"
                />
              </li>
            </ul>
            <div class="row d-flex justify-content-center">
              <button
                type="button"
                class="btn btn-outline-danger"
                onclick="idpwSearch();"
              >
                확인
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: "findIdComponent"
};
</script>
<style>
</style>