<template>
  <div class="login-container">
    <div class="header">
      <h1>Vue Admin</h1>
    </div>
    <el-form :model="loginForm"
             status-icon
             :rules="rules"
             ref="loginForm"
             class="loginForm">
      <el-form-item>
        <el-input v-model="loginForm.username"
                  placeholder="账号">
          <i slot="prefix" class="el-input__icon el-icon-user"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password"
                  show-password
                  v-model="loginForm.password"
                  placeholder="密码">
          <i slot="prefix" class="el-input__icon el-icon-lock"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button style="width: 100%" type="primary"
                   :loading="loading"
                   @click="login">登录</el-button>
      </el-form-item>
    </el-form>
    <div class="footer">

    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {},
      loading: false
    }
  },
  methods: {
   login() {
      this.$refs.loginForm.validate( valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push('/')
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style scoped lang="scss">
  .login-container {
    .header {
      margin: 100px 0;
    }

    .loginForm {
      height: 500px;
      width: 400px;
      margin: 0 auto;
    }
  }
</style>
