import Vue from "vue";
import Router from "vue-router";
import CustomersList from "./components/CustomersList.vue";
import SearchCustomerById from "./components/SearchCustomerById.vue";
import SearchCustomerByName from "./components/SearchCustomerByName.vue";
import AddCustomer from "./components/AddCustomer.vue";
import DetailCustomer from "./components/DetailCustomer.vue";
import Chartcustomer from "./components/ChartCustomer.vue";
import Updatecustomer from "./components/UpdateCustomer.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "customers",
      alias: "/customer",
      component: CustomersList
    },
    {
      path: "/id",
      name: "id",
      alias: "/customerid",
      component: SearchCustomerById
    },
    {
      path: "/name",
      name: "name",
      alias: "/customername",
      component: SearchCustomerByName
    },
    {
      path: "/add",
      name: "add",
      alias: "/customeradd",
      component: AddCustomer
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: DetailCustomer,
      props : true
    },
    {
      path: "/chartcustomer",
      name: "chart-customer",
      component: Chartcustomer
    },
    {
      path: "/update/:id",
      name: "update",
      component: Updatecustomer,
      props : true
    }
  ]
});