<template>
            <div class="container"  >
                   
                <h2>게시판</h2>
                <div>총 건수 :{{ count }} <span ></span></div>
                <form class="form-inline d-flex justify-content-end" method="POST">
                    <div class="form-group mx-sm-3 mb-2">
                        
                        <input type="text" class="form-control findStr" id="searchText" v-model="searchWord">
                    </div>
                    <button type="button" class="btn btn-light mb-2 boardSearch" @click="search">검색</button>
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
                        <tr :key="board.sno" v-for="board in displayedList" @click="boardDetail(board.sno)" style="cursor: pointer;">
                            <td >{{ board.sno }}</td>
                            <td >{{ board.subject }}</td>
                            <td >{{ board.id }}</td>
                            <td >{{ board.nal }}</td>
                            <td>{{ board.hit }}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="container d-flex justify-content-center">
                    <nav aria-label="페이지 네비게이션">
                    <ul class="pagination" style="cursor: pointer;">
                        <li class="page-item Prev" >
                            <a type="btn" class="page-link btnPrev" :disabled="currentPage===1" @click="prevPage">이전</a>
                        </li>
                       
                        <li class="page-item Next">
                            <a type="btn" class="page-link btnNext" :disabled="currentPage*pageSize >= boards.length" @click="nextPage" >다음</a>
                        </li>
                    </ul>
                </nav>
              
                </div>
                
            </div>
</template>
<script>


export default {
    name: "boardList",
    data() {
        return {
            searchWord:'',
            boards :[],
            count:0,
            currentPage:1, // 현재 페이지
            pageSize: 5 // 페이지당 표시할 목록수
           
        }
    },
    created() {
        this.getBoardList();
    },
    computed:{
        // 현재 페이지에 표시할  목록 계산
     displayedList() {
        const startIndex = (this.currentPage -1)* this.pageSize;
        const endIndex = startIndex + this.pageSize;
        return this.boards.slice(startIndex, endIndex);
     },
     
    },

    methods: {
        boardRegister() {
            this.$router.push( {path: "/boardRegister"});
        },
        async getBoardList() {
            this.boards = await this.$api('/api/boardList',{});
            let cnt = await this.$api('/api/boardCount', {});
            this.count = cnt[0].count
            console.log(this.count);

        },
        //this.$router.push({ path: "/boardView", query: [this.boards[i]] })에서 query에 배열을 직접 전달하는 것은 쿼리 파라미터에 배열을 직접 담을 수 없다는 점에서 문제가 됩니다. Vue Router의 query 파라미터는 항상 문자열, 숫자 또는 배열을 지원하는데, 배열을 그대로 넣으면 배열의 값이 자동으로 문자열로 변환되기 때문에 의도대로 동작하지 않습니다.
        async boardDetail(board) {
            try{

                let result = await this.$api("/api/boardFileSno",{param:{sno:board}});
                await this.$api('/api/addHit',{param:[board]});
                console.log("result: ", result)
                let fileresult = await this.$api("/api/boardFile",{param:{
                    psno:result[0].psno
                }});
                console.log("fileresult:", fileresult);
                this.$router.push({path: "/boardView", query: {
                sno: board,
                subject: result[0].subject,
                id: result[0].id,
                doc: result[0].doc,
                psno:result[0].psno,
                grp : result[0].grp,
                seq:result[0].seq,
                deep:result[0].deep,
                files:  JSON.stringify(fileresult) // 배열이나 객체를 전달하려면 이를 JSON.stringify()로 문자열로 변환
            }});
            } catch (error){
                console.error('페이지를 열수없습니다.', error);
                this.$swal('페이지점검');
            }

        },
        prevPage() {
            if (this.currentPage >1) {
                this.currentPage--;
            }
        },
        nextPage() {
            const lastPage = Math.ceil(this.boards.length / this.pageSize);
            if (this.currentPage < lastPage){
                this.currentPage++;
            }
        },
        async search() {
            this.boards = await this.$api("/api/searchWord", {param:[`%${this.searchWord}%`,`%${this.searchWord}%`]});
            this.count = this.boards.length;
            
        }
    }
    
}
</script>
<style>
    
</style>