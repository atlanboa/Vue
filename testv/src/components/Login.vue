<template>
  <div class="hello">
    ID :
    <input id="id" type="text" />
    PW :
    <input id="pw" type="text" />
    LOGIN :
    <button @click="login()">로그인</button>
    LOGOUT :
    <button @click="logout()">로그아웃</button>
    <hr />
    <div>
      <h2 v-if="valid()">{{this.$session.get('session-id')}} 님이 로그인 되었습니다.</h2>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
import http from "../http-common";
export default {
  name: "login",
  props: {
    msg: String
  },
  data() {
    return {
      id: null,
      pw: null
    };
  },
  methods: {
    login() {
      this.id = document.getElementById("id").value;
      this.pw = document.getElementById("pw").value;
      http
        .post("/login", {
          id: this.id,
          pass: this.pw
        })
        .then(
          response => {
            if (response.status === 200 /*&& "token" in response.body*/) {
              window.console.log("로그인 성공");
              this.$session.start();
              this.$session.set("jwt", response.data);
              // this.$http.headers.common["Authorization"] =
              //   "Bearer " + response.body.token;
              window.console.log(this.$session.getAll());
              

              
            }
          },
          function(err) {
            window.console.log("err", err);
          }
        )
        .finally(() => {
          window.console.log();
          
          
        });
    },
    logout() {
      this.$session.destroy();
      window.console.log("로그아웃");
      
      
      

      
    },
    valid() {
      if (this.$session.exists()) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
