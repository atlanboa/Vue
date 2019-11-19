<template>
  <div>
    <div class="search_box">
      <select name="id" @change="findById" v-model="cid">
        <option v-for="emp in info" v-bind:value="emp.id" v-bind:key="emp.id">NAME : {{emp.name}}</option>
      </select>
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
      <tr>
        <td v-html="cemp.id"></td>
        <td v-html="cemp.name"></td>
        <td v-html="cemp.dept_id"></td>
        <td v-html="cemp.title"></td>
        <td>{{ cemp.salary | salarydecimal }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import http from "../http-common";
export default {
  name: "id",
  data() {
    return {
      info: [],
      cid: "1",
      cemp: {},
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
        // console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  methods: {
    findById: function() {
      // console.log(this.cid);
      http
        .get("/findEmployeeById/" + this.cid)
        //.get('./emp.json')
        .then(response => (this.cemp = response.data))
        .catch(() => {
          // console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    }
  }
};
</script>

<style lang="scss" scoped>
</style>