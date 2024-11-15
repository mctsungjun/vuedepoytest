<template>
            <div class="container"  >
                    <!-- <script type="module">
                        import {list} from "./js/board.js"
                        let ls = list();
                        window.ls = ls;
                        console.log(ls);
                    </script> -->
                <h2>게시판</h2>
                <div>총 건수 :[[${map.page.totSize}]] <span ></span></div>
                <form class="form-inline d-flex justify-content-end" method="POST">
                    <div class="form-group mx-sm-3 mb-2">
                        
                        <input type="text" class="form-control findStr" id="searchText" th:value="${session.findStr}">
                    </div>
                    <button type="submit" class="btn btn-light mb-2 boardSearch">검색</button>
                    <button type="button" class="btn btn-light mb-2 boardRegister" @click="boardRegister">쓰기</button>
                </form>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col-1">번호</th>
                            <th scope="col-5">제목</th>
                            <th scope="col-2">작성자</th>
                            <th scope="col-2">작성일</th>
                            <th scope="col-2">조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr th:each="list: ${map.lists}" th:onclick="ls.boardDetail([[${list.sno}]]);">
                            <td th:text="${list.sno}">Mark</td>
                            <td th:utext="${list.subject}">Otto</td>
                            <td th:text="${list.id}">홍길동</td>
                            <td th:text="${list.nal}">홍길동</td>
                            <td th:text="${list.hit}">홍길동</td>
                        </tr>
                    </tbody>
                </table>
                <div class="container d-flex justify-content-center">
                    <nav aria-label="페이지 네비게이션">
                    <ul class="pagination">
                        <li class="page-item Prev" th:class="${(map.page.nowPage>1)? 'Prev btnEnabled':'Prev btnDisabled'}">
                            <a href="#" class="page-link btnPrev" >이전</a>
                        </li>
                       
                        <li class="page-item Next" th:class="${(map.page.totSize>map.page.endNo)?'Next btnEnabled':'Next btnDisabled'}">
                            <a href="#" class="page-link btnNext"  >다음</a>
                        </li>
                    </ul>
                </nav>
              
                </div>
                
            </div>
</template>
<script>


export default {
    name: "boardList",
    methods: {
        boardRegister() {
            this.$router.push( {path: "/boardRegister"});
        }
    }
    
}
</script>
<style>
    
</style>