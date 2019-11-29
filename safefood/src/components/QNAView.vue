<template>
    <div>
        <table class="table table-hover">
            <tr>
                <td>제목</td>
                <td v-html="qna.title"></td>
            </tr>

            <tr>
                <td>작성자</td>
                <td v-html="qna.writer"></td>
            </tr>
            <tr>
                <td>내용</td>
                <td v-html="qna.content"></td>
            </tr>
            <tr>
                <td>조회수</td>
                <td v-html="qna.hit"> </td>
            </tr>
            <tr v-for="(ans, index) in answers" :key="index">
                <td>답변 : </td>
                <td v-html="ans.content"></td>
            </tr>
        </table>
        <form>
        <input tyep="text" class="form-control" v-model="comment">
        <button type="submit" @submit.prevent="addComment"> 추가 </button>
        </form>
        <button @click="deleteQNA"> QNA 삭제 </button>
    </div>
    
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import http from "../http-common";
    export default {
        name:"qnaview",
        props:["no"],
        data(){
            return{
                qna:{},
                answers:[],
                loading:true,
                errored:false,
                comment:null
            };
        },mounted(){
            http
                .get("/qnano/"+this.no)
                .then(response => (this.qna = response.data))
                .catch(() => {this.errored = true;})
                .finally(() => (this.loading = false));
            http
                .get("/comment/"+this.no)
                .then(response => (this.answers = response.data))
                .catch(() => {this.errored = true;})
                .finally(() => (this.loading = false));
        },methods:{
            addComment(){
                http
                .put("/insertcomment",this.comment)
                .then(response => {
                    if(response.data==true){
                        alert("덧글 입력");
                    }else{
                        alert("덧글 입력 실패");
                    }
                })
                .catch(() => {this.errored = true;})
                .finally(() => (this.loading = false));
            },
            deleteQNA(){
                http
                .delete("/deleteqna/",this.no)
                .then(response => {
                    if(response.data==true){
                        alert("삭제 완료");
                    }else{
                        alert("삭제 실패");
                    }
                    location.href="/";
                })
                .catch(() => {this.errored = true;})
                .finally(() => (this.loading = false));
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>