<template>
    <div>
        <table class="table table-hover">
            <tr>
                <td>글번호</td>
                <td>제목</td>
                <td>작성자</td>
                <td>조회수</td>
                <td>작성시간</td>
            </tr>
            <tr v-for="qna in qnas" :key="qna.no" @click="show_detail(qna.no)">
                <td v-html="qna.no"></td>
                <td v-html="qna.title"></td>
                <td v-html="qna.writer"></td>
                <td v-html="qna.hit"></td>
                <td v-html="qna.time"></td>
            </tr>
        </table>
        <button class="btn btn-primary" @click="addQnA()">글쓰기</button>
    </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import http from "../http-common";
    export default {
        name:"qnalist",
        data(){
            return{
                qnas:[],
                loading:true,
                errored:false
            };
        },mounted(){
                http
                    .get("/qna")
                    .then(response => (this.qnas = response.data))
                    .catch(() => {this.errored = true;})
                    .finally(() => {this.loading = false; window.console.log(this.qnas);
                    });
        },methods:{
            show_detail(no){
                this.$router.push("/qnaview/"+no);
            },
            addQnA(){
                this.$router.push("/addqna");
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>