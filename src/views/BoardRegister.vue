<template>
      <div class="container">
                
                <div class="row d-flex justify-content-center">
                    <h2 class="col-xl-6 text-bg-primary text-center m-5">게시글 작성</h2>
                    <div class="col-xl-6">
                        <form class="form-group" name="frmBoard" method="POST" enctype="multipart/form-data">
                        <label>아이디</label>
                        <input class="form-control" type="text" name="id" :value="user" readonly><br/>
                        <label>제목 </label>
                        <input class="form-control" type="text" name="subject" v-model="title"><br/>
                        <textarea class="doc form-control" name="doc" rows="10" v-model="doc"></textarea><br/>
                        <label>파일첨부</label>
                        <input class="form-control btnAtt" type="file" ref="fileInput" multiple @change="fileUpload($event.target.files, 3)"><br/>
                    </form>
                    <div class="btnZone">
                        <div class="d-flex justify-content-end">

                            <button type="button" class="btn btn-outline-dark" @click="boardUpload">작성</button>
                            <button type="button" class="btn btn-outline-dark btnList mx-1" @click="cancel">취소</button>
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
</template>
<script>
export default {
    name: "boardRegisterComponent",
    data() {
        return {
            user: this.$store.state.user.user_id,
            title: '',
            doc:'',
            selectfiles:[],
        }
    },
    methods: {
        fileUpload(files) {
            this.selectfiles = Array.from(files); // 선택된 파일을 배열로 저장
        },
        cancel() {
            this.$router.push({path:'/boardList'})
        },
        async boardUpload() {
            try{
                const res = await this.$api("/api/boardAdd",{param:[this.user,this.title,this.doc]});
                console.log("boardAdd:", res.data);
            if (this.selectfiles.length != 0) {
                const formData = new FormData();
                this.selectfiles.forEach((file) => {
                    formData.append("files", file);
                });
                const response = await this.$api("/fileUpload",formData,{
                    headers: {
                        "Content-Type": "multipart/form-data",
                        },
                });
                if (response === 'ok'){
                    console.log("response:",response);
                    this.$swal('등록 되었습니다.');
                    this.user = this.$store.state.user.user_id;
                    this.title = '';
                    this.doc='';
                    this.clearFileInput();
                }
                
            }
            await this.$router.push({path:'/boardList'})


            }catch(error){
                console.error('파일 업로드 실패:', error);
                this.$swal('파일 업로드 실패했습니다.');
            }

        },
        clearFileInput() {
            this.$refs.fileInput.value = '';
        },
   


    }

}
</script>
<style>
    
</style>