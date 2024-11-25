<template>
     <div class="container">
                
                <div class="row d-flex justify-content-center">
                    <h2 class="col-xl-6 text-bg-primary text-center m-5">게시글 수정</h2>
                    <div class="col-xl-6">
                        <form class="form-group" name="frmBoard" method="POST" enctype="multipart/form-data">
                        <label>아이디</label>
                        <input class="form-control writeId" type="text" name="id" readonly v-model="id"><br/>
                        <label>제목 </label>
                        <input class="form-control" type="text" name="subject" v-model="subject"><br/>
                        <textarea class="doc form-control" name="doc" rows="10" v-model="doc"></textarea><br/>
                        <label>파일첨부</label>
                        <input class="form-control btnAtt" type="file" ref="fileInput" name="files" multiple @change="fileUpload($event.target.files,3)"><br/>
                        <fieldset>
                            <legend>이미 첨부됨</legend>
                            <div  v-if="files && files.length > 0">
                               <!-- input태그의 checkbox는 값이 참/거짓이므로 다른값을 넣으면 안됨 -->
                                <div class="form-check" v-for="(file,i) in  files" :key="i">
                                <input class="form-check-input" type="checkbox" id="flexCheckDefault" :value=file.sysfile v-model="deleteFiles" @change="deleteFile">
                                <label class="form-check-label" for="flexCheckDefault">
                                    {{ file.orifile }}
                                </label>
                                </div>
                                
                            </div>
                           
                           
                        </fieldset>
                        
                    </form>
                    <div class="btnZone">
                        <div class="d-flex justify-content-end">

                            <button type="button" class="btn btn-outline-dark" @click="boardUpdateR">수정</button>
                            <button type="button" class="btn btn-outline-dark btnuList mx-1" @click="cancel" >취소</button>
                        </div>
                    </div>
                     
                    </div>
                </div>
                
            </div>
</template>
<script>
export default {
    name: 'boardUpdateComponent',
    data() {
        return {
            sno:0,
            subject:'',
            id:'',
            doc:'',
            files:[],
            file:'',
            psno:0,
            selectedFiles:[],
            deleteFiles:[]
        }
    },
    mounted() {
        const { sno, subject, id, doc,psno, files} = this.$route.query;
            this.sno = sno,
            this.subject = subject,
            this.id = id,
            this.doc = doc,
            this.psno = psno,
            this.files = JSON.parse(files)
           
    },
    
    methods: {
        cancel() {
            this.$router.push({path:'/boardList'});
        },
        fileUpload(file) {
            // 배열로 변환
            const fileArray = Array.from(file);
            this.selectedFiles.push(...fileArray);
            console.log(this.selectedFiles);
        
        },
        deleteFile(file) {
            const deleteArray = Array.from(file);
            this.deleteFiles.push(...deleteArray);
            console.log(this.deleteFiles);
        },
        async boardUpdateR() {
            try{
                let re='';
                let res='';
                const result = await this.$api("/boardUpdate", {param:{
                    sno: this.sno,
                    subject: this.subject,
                    id:this.id,
                    doc:this.doc,
                    psno:this.psno
                }
                });
                if(this.deleteFiles.length !=0){
                  
                    re = this.$api("/boardDeleteFile", {param:{
                        files:this.deleteFiles
                    }
                       
                    });

                }
                if(this.selectedFiles.length !=0){
                    // FormData로 파일은 옮김 그냥은 안 전송 빈값으로 전송됨
                    let formData = new FormData();
                    this.selectedFiles.forEach((file) =>{
                        formData.append("files", file);
                    });
                    res = await this.$api("/boardFileUpdate", formData,{
                        headers:{
                            "Content-Type": "multipart/form-data",
                        }
                    
                    });
                   
                }else{
                    this.$swal("수정 오류입니다.");
                }
                if (result !== "ok") {
                    this.$swal("수정 오류입니다.1")
                    }
                if (re !== "ok") {
                    this.$swal("수정 오류입니다.2")
                }
                if (res == "nodata") {
                    this.$swal("수정 되었습니다..3")  
                    }else{
                        this.$swal("수정 되었습니다.")
                    }
                let fileresult = await this.$api("/api/boardFile",{param:{
                    psno:this.psno,
                }});
                console.log('파일목록:',fileresult);
                await this.$router.push({path:'/boardView', query:{
                    sno: this.sno,
                    subject: this.subject,
                    id : this.id,
                    doc: this.doc,
                    psno: this.psno,
                    files: JSON.stringify(fileresult)
                }});
            }catch(error) {
                console.log("수정오류:", error);
                this.$swal("수정 오류입니다.4");
            }
        }
    }
}
</script>
<style>
    
</style>