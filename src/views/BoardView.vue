<template>
        <div class="container">
                
                <div class="row d-flex justify-content-center">
                    <h2 class="col-xl-6 text-bg-primary text-center m-5">게시글 상세보기</h2>
                    <div class="col-xl-6">
                        <form class="form-group" name="frmBoard" method="POST"  enctype="multipart/form-data" >
                        <label>아이디</label>
                        <input class="form-control" type="text" name="id" readonly :value="id" ><br/>
                        <label>제목 </label>
                        <input class="form-control" type="text" name="subject" readonly :value="subject"><br/>
                        <textarea class="doc form-control" name="doc" rows="10" readonly v-model="doc"></textarea><br/>
                        <input type="hidden" name="grp" :value="grp"/>

                        <input type="hidden" name="seq" :value="seq" />
                        <input type="hidden" name="deep" :value="deep"/>
                        <fieldset>
                            <legend>첨부파일</legend>
                            <div v-if="files !=='none'">
                                <ul >
                                    <li v-for="(file,i) in files" :key="i"  name="files">
                                        <a :href="`/fileDownload/${file.sysfile}`" :download="file.orifile">{{ file.orifile }}</a>
                                    
                                    </li>
                                </ul>

                            </div>
                        </fieldset>
                      
                    </form>
                    <div class="btnZone">
                        <div class="d-flex justify-content-end">
                            
                            <button type="button" class="btn btn-outline-dark " @click="BoardUpdate">수정</button>
                            <button type="button" class="btn btn-outline-dark" @click=boardDelete>삭제</button>
                            <button type="button" class="btn btn-outline-dark" @click="repwrite">댓글</button>
                            <button type="button" class="btn btn-outline-dark " @click="cancel">취소</button>
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
</template>
<script>


export default {
    name: "boardViewComponent",
    data() {
        return {
            sno: 0,
            subject:'',
            id: '',
            doc:'',
            files:[],
            psno:0,
            grp:0,
            seq:0,
            deep:0
        }
    },
    mounted() {
        const { sno, subject, id, doc,psno, files,grp,seq,deep} = this.$route.query;
       

        this.sno = sno;
        this.subject = subject;
        this.id = id;
        this.doc = doc;
        this.psno = psno;
        this.files = JSON.parse(files); //다시 json 형태로 변환
        this.grp = grp;
        this.seq = seq;
        this.deep = deep;
        console.log(this.files)
        

    },
    methods: {
    cancel() {
            this.$router.push({path:'/boardList'});
    },
    async boardDelete() {
        if(this.files.length !=0){
                 
            let re = await this.$api("/deleteAllFile", {param:{
                      psno:this.psno,
                      files: JSON.stringify(this.files)
                  }});
                  console.log(re);

              }
            let res = await this.$api("/boardDelete", {param:[this.sno]})
              if (res === 'ok') {
                this.$swal("삭제되었습니다.")
                this.$router.push('boardList',{});
              }
    },
    BoardUpdate() {
        this.$router.push({path:'/boardUpdate',query:{
            sno: this.sno,
            subject: this.subject,
            id : this.id,
            doc: this.doc,
            psno: this.psno,
            files: JSON.stringify(this.files)
        }})
    },
    repwrite() {
        this.$router.push({path:"/boardRepl",query:{
            id : this.id,
            sno: this.sno,
            grp : this.grp,
            seq:this.seq,
            deep:this.deep,
            psno:this.psno
            
        }});
    }
}
    
}
</script>
<style>
    
</style>