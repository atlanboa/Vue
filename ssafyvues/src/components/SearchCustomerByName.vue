<template>
  <div>
    <div class="search_box">
      이름으로 찾기 :
      <input type="text" name="name" @keyup="findByName" v-model="cname" />
    </div>
    <table class="list_table">
      <col width="10%" />
      <col width="20%" />
      <col width="20%" />
      <col width="20%" />
      <col width="10%" />
      <tr>
        <th>사원 아이디</th>
        <th>사원명</th>
        <th>부서</th>
        <th>직책</th>
        <th>연봉</th>
      </tr>
      <tr v-for="emp in info" v-bind:key="emp.id">
        <td v-html="emp.id"></td>
        <td v-html="emp.name"></td>
        <td v-html="emp.dept_id"></td>
        <td v-html="emp.title"></td>
        <td>{{ emp.salary | salarydecimal }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import http from "../http-common";
export default {
  template: "#add",
  data() {
    return {
      info: [],
      cname: "",
      loading: true,
      errored: false
    };
  },
  filters: {
    salarydecimal(value) {
      if (value) return value.toFixed(2);
    }
  },
  mounted() {
    http
      .get("/findAllEmployees")
      //.get('./emp.json')
      .then(response => (this.info = response.data))
      .catch(() => {
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  methods: {
    findByName: function() {
      http
        .get("/findLikeEmployees/" + this.cname)
        //.get('./emp.json')
        .then(response => (this.info = response.data))
        .catch(() => {
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    }
  }
};
</script>

<style lang="scss" scoped>
</style>