<template>
  <div>
    <div>
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
        <tr v-if="cemp" @click="show_update(cemp.id)">
          <td v-html="cemp.id"></td>
          <td v-html="cemp.name"></td>
          <td v-html="cemp.dept_id"></td>
          <td v-html="cemp.title"></td>
          <td>{{ cemp.salary | salarydecimal }}</td>
        </tr>
      </table>
    </div>
    <div>
      <h2 align="center">{{cemp.name}}의 부하 직원</h2>
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
        <tr v-for="emp in info" :key="emp.id">
          <td v-html="emp.id"></td>
          <td v-html="emp.name"></td>
          <td v-html="emp.dept_id"></td>
          <td v-html="emp.title"></td>
          <td>{{ emp.salary | salarydecimal }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import http from "../http-common";
export default {
  name: "detail",
  props: ["id"],
  data() {
    return {
      info: [],
      loading: true,
      errored: false,
      cid: "",
      cemp: {}
      
    };
  },
  filters: {
    salarydecimal(value) {
      var a = parseInt(value);
      return a.toFixed(2);
    }
  },
  mounted() {
    this.cid = this.id;
    http
      .get("/findEmployeeById/" + this.cid)
      //.get('./emp.json')
      .then(response => (this.cemp = response.data))
      .catch(() => {
        this.errored = true;
      })
      .finally(() => (this.loading = false));

    http
      .get("/findEmployeesByManagerId/" + this.cid)
      //.get('./emp.json')
      .then(response => (this.info = response.data))
      .catch(() => {
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  methods : { 
      show_update(employeeid){
        // alert(employeeid+" 수정 페이지 진입")
          this.$router.push("/update/" + employeeid);
      }
  }
};
</script>

<style lang="scss" scoped>
</style>