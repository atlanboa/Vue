import Vue from "vue";
import Router from "vue-router";
import QNAList from "./components/QNAList.vue";
import QNAView from "./components/QNAView.vue";
import AddQNA from "./components/AddQNA.vue";
// import QNAInsert from "./components/QNAInsert.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes:[
        {
            path: "/qnalist",
            name: "qnalist",
            component: QNAList
        },
        {
            path: "/qnaview/:no",
            name: "qnaview",
            component: QNAView,
            props:true
        },
        {
            path: "/addqna",
            name: "addqna",
            component: AddQNA
        },
        // {
        //     path: "/qnainsert",
        //     name: "qnainsert",
        //     component: QNAInsert
        // },

    ]
})