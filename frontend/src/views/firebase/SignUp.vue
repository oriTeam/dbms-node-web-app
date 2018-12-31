<template>
    <v-container fluid fill-height class="paralax overlay">
        <v-slide-y-transition>
            <v-layout align-center justify-center>
                <v-flex xs12 sm10>
                    <v-card class="top-z">
                        <v-toolbar dark color="#3F51B5">
                            <v-toolbar-title>Tạo mới tài khoản - Firebase Authentication</v-toolbar-title>
                            <v-spacer></v-spacer>
                        </v-toolbar>
                        <v-card-text class="bg-light">
                            <v-container>
                                <v-layout row>
                                    <v-flex xs12 md7>
                                        <form @submit.prevent="onSignup">
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
                                                        hint="Tối thiểu 8 kí tự"
                                                        :rules="[rules.required, rules.counter]"
                                                        :append-icon="showPassword ? 'visibility_off' : 'visibility'"
                                                        :type="showPassword ? 'text' : 'password'"
                                                        @click:append="showPassword = !showPassword"
                                                        required
                                                        placeholder="Mật khẩu"
                                                        box
                                                >
                                                </v-text-field>
                                            </v-layout>
                                            <v-layout row>
                                                <v-text-field
                                                        name="confirmPassword"
                                                        label="Confirm Password"
                                                        id="confirmPassword"
                                                        v-model="confirmPassword"
                                                        prepend-icon="lock"
                                                        :append-icon="showConfirmPassword ? 'visibility_off' : 'visibility'"
                                                        :type="showConfirmPassword ? 'text' : 'password'"
                                                        @click:append="showConfirmPassword = !showConfirmPassword"
                                                        :rules="[comparePasswords, rules.required]"
                                                        placeholder="Nhập lại mật khẩu"
                                                        box
                                                >
                                                </v-text-field>
                                            </v-layout>
                                            <v-layout row>
                                                <v-flex text-xs-center>
                                                    <v-btn dark color="#00bcd4" type="submit">
                                                        Đăng ký
                                                    </v-btn>
                                                </v-flex>
                                            </v-layout>
                                        </form>
                                        <v-layout row>
                                            <v-flex text-xs-center>
                                                <v-card-text>
                                                    Bạn đã có tài khoản ?
                                                    <router-link to="/firebase/login">Đăng nhập</router-link>
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
        </v-slide-y-transition>
    </v-container>
</template>

<script>
    import AuthButton from '@/components/firebase/AuthButton';
    import firebase from 'firebase/app';
    // Required for side-effects
    import 'firebase/database';

    export default {
        data() {
            return {
                email: '',
                password: '',
                confirmPassword: '',
                showPassword: false,
                showConfirmPassword: false,
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
            "auth-button": AuthButton
        },
        computed: {
            comparePasswords() {
                return (this.password !== this.confirmPassword && this.confirmPassword !== '')
                    ? 'Mật khẩu không khớp nhau. Vui lòng xem lại'
                    : true
            }
        },
        methods: {
            onSignup() {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                    .then(
                        user => this.$router.replace('dashboard')
                    )
                    .catch(
                        error => {
                            var errorCode = error.code
                            var errorMessage = error.message
                            if (errorCode == 'auth/email-already-in-use') {
                                alert('Lỗi : Email đã sử dụng')
                            } else if (errorCode == 'auth/weak-password') {
                                alert('Mật khẩu quá yếu. ' + errorMessage)
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

    .error--text .v-messages__message {
        color: red;
    }
    .v-input__slot {
        background-color: #fff !important;
    }
</style>
