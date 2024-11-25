<template>
      <div class="container">
                
                <div class="row d-flex justify-content-center">
                    <h2 class="col-xl-6 text-success-bg-subtle text-center m-5">댓글 작성</h2>
                    <div class="col-xl-6">
                        <form class="form-group" name="frmBoard" method="POST" enctype="multipart/form-data">
                        <label>아이디</label>
                        <input class="form-control" type="text" name="id" :value="id" readonly ><br/>
                        <label>제목 </label>
                        <input class="form-control" type="text" name="subject" v-model="subject"><br/>
                        <textarea class="doc form-control" name="doc" rows="10" v-model="doc"></textarea><br/>
                        <!-- <input type="hidden" name="sno" :value="{sno}"/> -->
                        <input type="hidden" name="grp" :value="grp"/>

                        <input type="hidden" name="seq" :value="seq" />
                        <input type="hidden" name="deep" :value="deep"/>
                        <!-- <label>파일첨부</label>
                        <input class="form-control btnAtt" type="file" ref="fileInput" multiple @change="fileUpload($event.target.files, 3)"><br/> -->
                       
                    </form>
                    <div class="btnZone">
                        <div class="d-flex justify-content-end">

                            <button type="button" class="btn btn-outline-dark" @click="boardRepUpload">작성</button>
                            <button type="button" class="btn btn-outline-darkmx-1" @click="cancel">취소</button>
                        </div>
                    
                    </div>
                    </div>
                </div>
                
            </div>
</template>
<script>
export default {
    name: "boardReplComponent",
    data() {
        return {
            id: '',
            doc:'',
            subject:'',
            grp:0,
            sno:0,
            seq:0,
            deep:0,
            psno:0,
           
        }
    },
    mounted() {
        const { id, sno, grp, seq, deep,psno} = this.$route.query;
        this.id = id;
        this.sno = sno;
        this.grp = grp;
        this.seq = seq;
        this.deep = deep;
        this.psno = psno
        console.log(grp,seq,deep);
    },
    methods: {
        fileUpload(files) {
            this.selectfiles = Array.from(files); // 선택된 파일을 배열로 저장
        },
        clearFileInput() {
            this.$refs.fileInput.value = '';
        },
        async boardRepUpload() {
            
                if (this.grp==0 && this.seq == 0){
                    
                    const res = await this.$api("/api/boardRep",{param:[this.id,this.subject,this.doc,this.psno,Number(this.seq)+1,this.deep,Number(this.grp)]});
                    console.log("boardRep:", res.data);

                }
                else if( this.grp ==0 && this.seq ==1 && this.deep ==0){
                    const res = await this.$api("/api/boardRep",{param:[this.id,this.subject,this.doc,this.psno,Number(this.seq),Number(this.deep)+1,this.grp]});
                    console.log("boardRep:", res.data);
                }
                else if( this.grp ==0 && this.seq ==1 && this.deep ==1){
                    const res = await this.$api("/api/boardRep",{param:[this.id,this.subject,this.doc,this.psno,Number(this.seq)+1,Number(this.deep)+1,this.grp]});
                    console.log("boardRep:", res.data);
                }
                await this.$router.push({path:'/boardList'})
       
            
        },
        cancel() {
            this.$router.push({path:'/boardList'})
        },

    }
    
}
</script>
<style>
    
</style>