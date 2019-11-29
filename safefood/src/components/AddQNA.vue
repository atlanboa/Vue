<template>
    <div>
        <form @submit.prevent="addQNA">
            <table class="table table-hover form-group">
                <tr>
                    <td>제목</td>
                    <td><input type="text" class="form-control" v-model="qna.title" ></td>
                </tr>
                <tr>
                    <td>내용</td>
                    <td><input type="text" class="form-control" v-model="qna.writer"></td>
                </tr>
                <tr>
                    <td>작성자</td>
                    <td><textarea class="form-control" rows="5" v-model="qna.content"></textarea></td>
                </tr>
            </table>
            <button class="btn btn-primary" type="submit">추가</button>
        </form>
    </div>
</template>

<script>
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import http from "../http-common";
    export default {
        name:"addqna",
        data(){
            return{
               qna:{
                   title:null,
                   content:null,
                   writer:null,
                   hit:null,
                   time:null
               }, 
            }
        },
        methods:{
            addQNA(){
                http
                    .put("/updateqna",this.qna)
                    .then(response => {
                        if(response.data == true){
                            alert('등록 됨');
                        }else{
                            alert('등록 실패요');
                        }
                        location.href="/";
                    })
                    .catch(() => {
                    this.errored = true;
                    })
                    .finally(() => (this.loading = false));
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>