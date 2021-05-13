import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

const routes = [
    {
        path: "/",
        component: HelloWorld,
        props: {
            msg: "Hello Vue 3 + TypeScript + Vite",
        },
    },
];

export const router = createRouter({
    routes,
    history: createWebHistory(),
});
