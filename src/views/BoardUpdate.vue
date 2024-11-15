<template>
     <div class="container">
                
                <div class="row d-flex justify-content-center">
                    <h2 class="col-xl-6 text-bg-primary text-center m-5">게시글 수정</h2>
                    <div class="col-xl-6">
                        <form class="form-group" name="frmBoard" method="POST" enctype="multipart/form-data">
                        <label>아이디</label>
                        <input class="form-control writeId" type="text" name="id" readonly th:value="${bo.id}"><br/>
                        <label>제목 </label>
                        <input class="form-control" type="text" name="subject" th:value="${bo.subject}"><br/>
                        <textarea class="doc form-control" name="doc" rows="10" th:text="${bo.doc}"></textarea><br/>
                        <label>파일첨부</label>
                        <input class="form-control btnAtt" type="file" name="files" multiple><br/>
                        <fieldset>
                            <legend>이미 첨부됨</legend>
                            <th:block th:each="att : ${attFiles}">
                                <label><input type="checkbox" name="delFiles"  th:value="${att.sysFile}" >[[${att.oriFile}]]</label><br/>
                            </th:block>
                        </fieldset>
                        <input type="hidden" class="deleteId" th:value="${session.id}">
                        <input type="hidden" name="sno" class="updateSno" th:value="${bo.sno}"/>
                        <input type="hidden" name="grp" th:value="${bo.grp}"/>
                        <input type="hidden" name="seq" th:value="${bo.seq}"/>
                        <input type="hidden" name="deep" th:value="${bo.deep}"/>
                    </form>
                    <div class="btnZone">
                        <div class="d-flex justify-content-end">

                            <button type="button" class="btn btn-outline-dark btnUpdateR">수정</button>
                            <button type="button" class="btn btn-outline-dark btnuList mx-1" id="btnGoList">취소</button>
                        </div>
                    </div>
                    
                    </div>
                </div>
                
            </div>
</template>
<script>
export default {
    name: 'boardUpdate',
}
</script>
<style>
    
</style>