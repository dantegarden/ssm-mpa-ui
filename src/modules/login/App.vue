<template>
    <el-container class="container--login" id="app">
        <!-- <el-header>
            <div class="container">
                <h1>
                    <router-link to="/">
                        <svg-icon type="dx-logo" className="skye-logo" />
                    </router-link>
                </h1>
            </div>
        </el-header> -->
        <div class="main-content">
            <div class="container">
                <el-form ref="form" :model="loginForm" :rules="loginRules">
                    <div class="logo"><svg-icon type="dx-logo" className="svg"/></div>
                    <el-form-item prop="username">
                        <el-input v-model="loginForm.username" placeholder="账户名称"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" placeholder="账户密码" v-model="loginForm.password">
                            <!--<a slot="append" class="forget" href="javascript:;">忘记密码？</a>-->
                        </el-input>
                    </el-form-item>
                    <!-- <el-form-item prop="captchaImage" class="captcha-image">
                            <el-input placeholder="请输入右边图片验证码" v-model="form.captchaImage">
                                <img slot="append" src="data:image/png;base64,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"
                                    alt="" id="captcha-image">
                            </el-input>
                        </el-form-item> -->
                    <el-form-item>
                        <el-button type="primary" @click="submitForm()" v-loading.fullscreen.lock="fullscreenLoading">立即登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="copyright">© 2019 后台管理快速构建平台 版权所有 xxxxx</div>
        </div>
    </el-container>
</template>

<script>
import { isvalidUsername } from '@/utils/validate'

export default {
  name: "login",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('请输入至少六位数密码'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'superAdmin',
        password: 'test1234',
        // captchaImage: ""
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      fullscreenLoading: false
    };
  },
  methods: {
    submitForm() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.fullscreenLoading = true;
          this.$store.dispatch("LoginByUsername", this.loginForm).then(() => {
              this.fullscreenLoading = false;
              if (this.$route.query.redirect) {
                let redirect = decodeURIComponent(this.$route.query.redirect);
                let hash = decodeURIComponent(this.$route.hash);
                console.log("redirect", redirect);
                console.log("hash", hash);
                window.location.href = redirect + hash;
              } else {
                window.location.href = "/home";
              }
            })
            .catch(() => {
              this.fullscreenLoading = false;
            });
        } else {
          console.log("登陆失败!!");
          return false;
        }
      });
    }
  }
};
</script>
