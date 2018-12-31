<template>
    <v-flex text-xs-center>
        <button @click="login_via_google" type="button" class="v-btn theme--light btn-light mt-3">
            <span>
                <img src="../../assets/icons/google.svg" alt="" height="20px">
            </span>
            &nbsp;
            <span>
                Đăng nhập với Google
            </span>
        </button>
        <button @click="login_via_facebook" type="button" class="v-btn theme--light btn-light mt-3">
            <span>
                <img src="../../assets/icons/facebook.svg" alt="" height="20px">
            </span>
            &nbsp;
            <span>
                Đăng nhập với Facebook
                </span>
        </button>
        <button @click="login_via_github" type="button" class="v-btn theme--light btn-light mt-3">
            <span>
                <img src="../../assets/icons/github.svg" alt="" height="20px">
            </span>
            &nbsp;
            <span>
                Đăng nhập với Github
                </span>
        </button>
    </v-flex>
</template>

<script>
    import firebase from 'firebase';
    import 'firebase/database';

    export default {
        name: 'auth-button',
        methods: {
            login_via_google: function () {
                var provider = new firebase.auth.GoogleAuthProvider()
                firebase.auth().signInWithPopup(provider).then((res) => {
                    const user = firebase.auth().currentUser;
                    alert("Đăng nhập thành công bằng Google dưới tài khoản " + "\"" + user.displayName + "\"");
                }).catch(err => {
                    alert(err.message);
                    console.log(err);
                })
            },
            login_via_facebook: function () {
                var provider = new firebase.auth.FacebookAuthProvider()
                firebase.auth().signInWithPopup(provider).then((res) => {
                    const user = firebase.auth().currentUser;
                    alert("Đăng nhập thành công bằng Facebook dưới tài khoản " + "\"" + user.displayName + "\"");
                }).catch(err => {
                    alert(err.message);
                    console.log(err);
                })
            },
            login_via_github: function () {
                var provider = new firebase.auth.GithubAuthProvider()
                firebase.auth().signInWithPopup(provider).then((res) => {
                    const user = firebase.auth().currentUser;
                    alert("Đăng nhập thành công bằng Github dưới tài khoản " + "\"" + user.displayName + "\"");
                }).catch(err => {
                    alert(err.message);
                    console.log(err);
                })
            },
        }
    }
</script>
<style scoped>
    .v-btn {
        height: unset !important;
    }
    .btn-light {
        background-color: #fff !important;
        width: 70%;
        margin-bottom: 10px;
        padding: 10px;
    }
    .w-100 {
        width: 100% !important;
    }
    /*.loginBtn {*/
        /*box-sizing: border-box;*/
        /*position: relative;*/
        /*!* width: 13em;  - apply for fixed size *!*/
        /*margin: 20px;*/
        /*padding: 0 15px 0 46px;*/
        /*border: none;*/
        /*text-align: left;*/
        /*line-height: 34px;*/
        /*white-space: nowrap;*/
        /*font-size: 16px;*/
        /*color: #FFF;*/
        /*width: 212px;*/
    /*}*/

    /*.loginBtn:before {*/
        /*content: "";*/
        /*box-sizing: border-box;*/
        /*position: absolute;*/
        /*top: 0;*/
        /*left: 0;*/
        /*width: 34px;*/
        /*height: 100%;*/
    /*}*/

    /*.loginBtn:focus {*/
        /*outline: none;*/
    /*}*/

    /*.loginBtn:active {*/
        /*box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1);*/
    /*}*/

    /*!* Facebook *!*/
    /*.loginBtn--facebook {*/
        /*background-color: #66615B;*/
        /*background-image: linear-gradient(#66615B, #66615B);*/
        /*text-shadow: 0 -1px 0 #66615B;*/
    /*}*/

    /*.loginBtn--facebook:before {*/
        /*border-right: #49453f 1px solid;*/
        /*background-image: url('../../assets/icons/google.svg');*/

    /*}*/

    /*.loginBtn--facebook:hover,*/
    /*.loginBtn--facebook:focus {*/
        /*background-color: #66615B;*/
        /*background-image: linear-gradient(#66615B, #66615B);*/
    /*}*/

    /*!* Google *!*/
    /*.loginBtn--google {*/
        /*background: #66615B;*/
    /*}*/

    /*.loginBtn--google:before {*/
        /*border-right: #49453f 1px solid;*/
        /*height: 100%;*/
        /*background: url('../../assets/icons/google.svg') 6px 6px no-repeat;*/
    /*}*/

    /*.loginBtn--google:hover,*/
    /*.loginBtn--google:focus {*/
        /*background: #66615B;*/
    /*}*/
</style>
