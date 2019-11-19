<template>
  <div>
    <form action method="POST" name="frmForm" id="_frmForm" @submit.prevent="updateEmployee">
      <table class="content_table">
        <colgroup>
          <col style="width:30%" />
          <col style="width:70%" />
        </colgroup>
        <tr>
          <th>이름</th>
          <td>
            <input type="text" name="name" id="_name" size="30" v-model="cemp.name" />
          </td>
        </tr>
        <tr>
          <th>이메일</th>
          <td>
            <input type="text" name="mailid" id="_mailid" size="20" v-model="cemp.mailid" />
          </td>
        </tr>
        <tr>
          <th>고용일</th>
          <td>
            <input
              type="date"
              name="start_date"
              id="_start_date"
              size="30"
              v-model="cemp.start_date"
            />
          </td>
        </tr>
        <tr>
          <th>관리자</th>
          <td>
            <select name="manager_id" v-model="cemp.manager_id">
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
            <select name="title" v-model="cemp.title">
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
            <select name="dept_id" v-model="cemp.dept_id">
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
            <input type="number" name="salary" id="_salary" size="30" v-model="cemp.salary" min="0" />
          </td>
        </tr>
        <tr>
          <th>커미션</th>
          <td>
            <input type="number" name="commission_pct" id="_commission_pct" size="30" v-model="cemp.commission_pct" min="0"/>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="height: 50px; text-align: center;">
            <button type="submit" name="button">업데이트</button>
          </td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
import http from "../http-common";
export default {
  name: "update",
  props: ["id"],
  data() {
    return {
      info: [],
      loading: true,
      errored: false,
      cemp: {
        name: "",
        mailid: "",
        title: "",
        start_date: "",
        salary: 0,
        manager_id: 0,
        dept_id: 0,
        commission_pct: 0
      },

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
    // alert(this.id+" id값이 넘어왔능가")
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
    // , (this.cmailid = response.data.mailid), (this.ctitle = response.data.title)
    // , (this.cstart_date = response.data.start_date), (this.csalary = response.data.salary), (this.cmanager_id = response.data.manager_id),
    // (this.cdept_id = response.data.dept_id), (this.ccommission_pct = response.data.commission_pct)
    http
      .get("/findEmployeeById/" + this.id)
      .then(response => (this.cemp = response.data))
      .catch(() => {
        this.errored = true;
      })
      .finally(() => (this.loading = false));
    // alert(this.cemp)
  },
  methods: {
    updateEmployee() {
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
      window.console.log(this.cemp);
      http
        .put("/updateEmployee", {
          id : this.cemp.id,
          commission_pct: this.cemp.commission_pct,
          dept_id: this.cemp.dept_id,
          mailid: this.cemp.mailid,
          manager_id: this.cemp.manager_id,
          name: this.cemp.name,
          salary: this.cemp.salary,
          start_date: this.cemp.start_date,
          title: this.cemp.title
        })
        .then(function(response) {
          if (response.data == true) {
            alert("사원 수정되었습니다");
            location.href = "/";
          } else {
            alert("사원 수정 실패");
            location.href = "/";
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>