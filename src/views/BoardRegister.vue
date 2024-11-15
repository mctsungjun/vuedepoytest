<template>
      <div class="container">
                
                <div class="row d-flex justify-content-center">
                    <h2 class="col-xl-6 text-bg-primary text-center m-5">게시글 작성</h2>
                    <div class="col-xl-6">
                        <form class="form-group" name="frmBoard" method="POST" enctype="multipart/form-data">
                        <label>아이디</label>
                        <input class="form-control" type="text" name="id" th:value="${session.id}" readonly><br/>
                        <label>제목 </label>
                        <input class="form-control" type="text" name="subject"><br/>
                        <textarea class="doc form-control" name="doc" rows="10"></textarea><br/>
                        <label>파일첨부</label>
                        <input class="form-control btnAtt" type="file" name="files" multiple><br/>
                    </form>
                    <div class="btnZone">
                        <div class="d-flex justify-content-end">

                            <button type="button" class="btn btn-outline-dark btnRegisterR">작성</button>
                            <button type="button" class="btn btn-outline-dark btnList mx-1">취소</button>
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
</template>
<script>
export default {
    name: "boardRegister"
}
</script>
<style>
    
</style>