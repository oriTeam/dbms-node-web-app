<template>
    <div id="app">
        <app-header></app-header>
        <main id="main">
            <div class="wrapper">
                <fade-transition origin="center" mode="out-in" :duration="250">
                    <router-view/>
                </fade-transition>
            </div>
        </main>
    </div>
</template>

<script>
    import {FadeTransition} from "vue2-transitions";
    import AppHeader from "./components/common/Header";
    import AppFooter from "./components/common/Footer";

    export default {
        name: 'App',
        components: {
            FadeTransition,
            "app-header": AppHeader,
            "app-footer": AppFooter
        },
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Fira+Sans');
    @import url('https://fonts.googleapis.com/css?family=Varela+Round');

    #app, html {
        font-family: "Varela Round", "Fira Sans", sans-serif;
        font-size: 16px !important;
    }
    #main {
        padding-top: 48px;
    }
</style>
