<template>
    <v-container fluid fill-height class="paralax overlay">
        <v-layout align-center justify-center>
            <v-flex xs12 sm10>
                <v-card round class="top-z">
                    <v-toolbar dark text-xs-center color="#3F51B5">
                        <v-toolbar-title>Đăng nhập Firebase - Realtime DB</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text class="bg-light">
                        <v-container>
                            <v-layout row>
                                <v-flex xs12 md7>
                                    <form @submit.prevent="onSignin">
                                        <v-layout>
                                            <v-flex text-xs-center style="visibility: hidden">
                                                <strong>HOẶC</strong>
                                            </v-flex>
                                        </v-layout>
                                        <v-layout row>
                                            <v-flex xs12>
                                                <v-text-field
                                                        name="email"
                                                        label="Email"
                                                        id="email"
                                                        v-model="email"
                                                        type="email"
                                                        prepend-icon="contact_mail"
                                                        clearable
                                                        :rules="[rules.required, rules.isEmail]"
                                                        required
                                                        placeholder="Email của bạn"
                                                        box
                                                >
                                                </v-text-field>
                                            </v-flex>
                                        </v-layout>
                                        <v-layout row>
                                            <v-text-field
                                                    name="password"
                                                    label="Password"
                                                    id="password"
                                                    v-model="password"
                                                    prepend-icon="lock"
                                                    :rules="[rules.required, rules.counter]"
                                                    :append-icon="showPassword ? 'visibility_off' : 'visibility'"
                                                    :type="showPassword ? 'text' : 'password'"
                                                    @click:append="showPassword = !showPassword"
                                                    required
                                                    placeholder="Mật khẩu của bạn"
                                                    box
                                            >
                                            </v-text-field>
                                        </v-layout>
                                        <v-layout row>
                                            <v-flex text-xs-center>
                                                <v-btn dark color="#00bcd4" type="submit">
                                                    Đăng nhập
                                                </v-btn>
                                            </v-flex>
                                        </v-layout>
                                    </form>
                                    <v-layout row row-wrap>
                                        <v-flex text-xs-center>
                                            <v-card-text>
                                                Bạn chưa có tài khoản ?
                                                <router-link to="/firebase/signup">Đăng ký ngay</router-link>
                                            </v-card-text>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                                <v-flex xs12 md5>
                                    <v-layout>
                                        <v-flex text-xs-center>
                                            <strong>HOẶC</strong>
                                        </v-flex>
                                    </v-layout>
                                    <v-layout row>
                                        <v-flex text-xs-center>
                                            <auth-button></auth-button>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import AuthButton from '@/components/firebase/AuthButton'
    import firebase from 'firebase'
    import 'firebase/database'

    export default {
        data() {
            return {
                email: '',
                password: '',
                confirmPassword: '',
                showPassword: false,
                rules: {
                    isEmail: value => {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        return pattern.test(value) || 'Email không hợp lệ.'
                    },
                    required: value => !!value || 'Không được để trống',
                    counter: value => value.length >= 8 || 'Tối tiểu 8 kí tự'
                }
            }
        },
        components: {
            'auth-button': AuthButton
        },
        methods: {
            onSignin() {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                    .then(
                        user => this.$router.replace('dashboard')
                    )
                    .catch(
                        error => {
                            console.log(error)
                            var errorCode = error.code
                            var errorMessage = error.message
                            if (errorCode === 'auth/user-not-found') {
                                alert('Error: User not found')
                            } else if (errorCode === 'auth/wrong-password') {
                                alert('The password is incorrect')
                            } else alert(errorMessage)
                        }
                    )
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    button {
        border-radius: 15px !important;
    }
    .bg-light {
        background-color: #f5f5f5 !important;
    }
    .paralax {
        background-image: url("../../assets/bg02.jpg");
        background-size: cover !important;
        top: 0 !important;
        min-height: 647px;
    }

    .paralax.overlay:after {
        content: "";
        background-image: -webkit-gradient(linear, left top, left bottom, from(#374050), to(#798696));
        background-image: linear-gradient(180deg, #374050 0, #798696);
        opacity: .7;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        min-height: 647px;
    }

    .top-z {
        z-index: 10;
        border-radius: 4px !important;
    }
    .v-toolbar {
        border-top-left-radius: 4px !important;
        border-top-right-radius: 4px !important;
    }

</style>
