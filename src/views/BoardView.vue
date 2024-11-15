<template>
        <div class="container">
                
                <div class="row d-flex justify-content-center">
                    <h2 class="col-xl-6 text-bg-primary text-center m-5">게시글 상세보기</h2>
                    <div class="col-xl-6">
                        <form class="form-group" name="frmBoard" method="POST"  enctype="multipart/form-data" >
                        <label>아이디</label>
                        <input class="form-control writeId" type="text" name="id" readonly th:value="${bo.id}"><br/>
                        <label>제목 </label>
                        <input class="form-control" type="text" name="subject" th:value="${bo.subject}" readonly><br/>
                        <textarea class="doc form-control" name="doc" rows="10" th:text="${bo.doc}" readonly></textarea><br/>
                        <fieldset>
                            <legend>첨부파일</legend>
                            <ul>
                                <li th:each="att:${attFiles}" name="files" multiple>
                                    <a th:href="|upload/${att.sysFile}|" th:download="${att.oriFile}">[[${att.oriFile}]]</a>
                                    <!-- <label><input type="checkbox" name="delFiles"  th:value="${att.sysFile}" >[[${att.oriFile}]]</label><br/> -->
                                </li>
                            </ul>
                        </fieldset>
                        <input type="hidden" class="contentSno" name="sno" th:value="${bo.sno}"/>
                        <input type="hidden" name="grp" th:value="${bo.grp}"/>
                        <input type="hidden" name="seq" th:value="${bo.seq}"/>
                        <input type="hidden" name="deep" th:value="${bo.deep}"/>
                        <input type="hidden" class="deleteId" th:value="${session.id}">
                    </form>
                    <div class="btnZone">
                        <div class="d-flex justify-content-end">
                            
                            <button type="button" class="btn btn-outline-dark btnBoardUpdate">수정</button>
                            <button type="button" class="btn btn-outline-dark btnBoardDelete">삭제</button>
                            <button type="button" class="btn btn-outline-dark btnRepl">댓글</button>
                            <button type="button" class="btn btn-outline-dark btnBoardList">취소</button>
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
</template>
<script>
export default {
    name: "boardView",
    
}
</script>
<style>
    
</style>