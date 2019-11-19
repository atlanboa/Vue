<template>
  <div>
    <form action method="POST" name="frmForm" id="_frmForm" @submit.prevent="addEmployee">
      <table class="content_table">
        <colgroup>
          <col style="width:30%" />
          <col style="width:70%" />
        </colgroup>
        <tr>
          <th>이름</th>
          <td>
            <input type="text" name="name" id="_name" size="30" v-model="cname" />
          </td>
        </tr>
        <tr>
          <th>이메일</th>
          <td>
            <input type="text" name="mailid" id="_mailid" size="20" v-model="cmailid" />
          </td>
        </tr>
        <tr>
          <th>고용일</th>
          <td>
            <input type="date" name="start_date" id="_start_date" size="30" v-model="cstart_date" />
          </td>
        </tr>
        <tr>
          <th>관리자</th>
          <td>
            <select name="manager_id" v-model="cmanager_id">
              <option
                v-for="(emp, index) in info"
                v-bind:value="emp.id"
                v-bind:key="index"
              >{{emp.id}} : {{emp.name}}</option>
            </select>
          </td>
        </tr>
        <tr>
          <th>직책</th>
          <td>
            <select name="title" v-model="ctitle">
              <option
                v-for="(emp, index)  in titles"
                v-bind:value="emp.title"
                v-bind:key="index"
              >{{emp.title}}</option>
            </select>
          </td>
        </tr>
        <tr>
          <th>부서</th>
          <td>
            <select name="dept_id" v-model="cdept_id">
              <!--  -->
              <option
                v-for="(dept,  index) in depts"
                v-bind:value="dept.dept_id"
                v-bind:key="index"
              >{{dept.dept_id}} : {{dept.name}}</option>
            </select>
          </td>
        </tr>
        <tr>
          <th>월급</th>
          <td>
            <input type="number" name="salary" id="_salary" size="30" v-model="csalary" min="0" />
          </td>
        </tr>
        <tr>
          <th>커미션</th>
          <td>
            <input
              type="number"
              name="commission_pct"
              id="_commission_pct"
              size="30"
              v-model="ccommission_pct"
              min="0"
            />
          </td>
        </tr>
        <tr>
          <td colspan="2" style="height: 50px; text-align: center;">
            <button type="submit" name="button">사원 추가</button>
          </td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
import http from "../http-common";
export default {
  name: "add",
  data() {
    return {
      info: [],
      loading: true,
      errored: false,
      cname: "",
      cmailid: "",
      ctitle: "",
      cstart_date: "",
      csalary: 0,
      cmanager_id: 0,
      cdept_id: 0,
      ccommission_pct: 0,
      depts: null,
      titles: null
    };
  },
  filters: {
    salarydecimal(value) {
      return value.toFixed(2);
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
    http
      .get("/findAllDepartments")
      .then(response => (this.depts = response.data))
      .catch(() => {
        this.errored = true;
      })
      .finally(() => (this.loading = false));
    http
      .get("/findAllTitles")
      .then(response => (this.titles = response.data))
      .catch(() => {
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  methods: {
    addEmployee() {
      if (this.cname == "") {
        alert("아이디를 입력하세요");
        return;
      }
      if (this.cdept_id == "") {
        alert("부서를 선택하세요");
        return;
      }
      if (this.cmailid == "") {
        alert("메일주소를 선택하세요");
        return;
      }
      if (this.cmanager_id == "") {
        alert("관리자를 선택하세요");
        return;
      }
      if (this.csalary == "") {
        alert("월급을 입력하세요");
        return;
      }
      if (this.cstart_date == "") {
        alert("입사일을 선택하세요");
        return;
      }
      if (this.ctitle == "") {
        alert("직책을 선택하세요");
        return;
      }
      if (this.ccommission_pct == "") {
        alert("commission을 입력하세요");
        return;
      }
      http
        .post("/addEmployee", {
          commission_pct: this.ccommission_pct,
          dept_id: this.cdept_id,
          mailid: this.cmailid,
          manager_id: this.cmanager_id,
          name: this.cname,
          salary: this.csalary,
          start_date: this.cstart_date,
          title: this.ctitle
        })
        .then(function(response) {
          if (response.data == true) {
            alert("사원 추가되었습니다");
            location.href = "/";
          } else {
            alert("사원 추가 실패");
            location.href = "/";
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>