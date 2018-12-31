<template>
    <div id="app">
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
    export default {
        name: 'App',
        components: {
            FadeTransition
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

</style>
