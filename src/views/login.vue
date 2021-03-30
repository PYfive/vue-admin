<template>
  <div class="login-container">
    <el-form :model="loginForm"
             status-icon
             :rules="rules"
             ref="ruleForm"
             label-width="100px"
             class="loginForm">
      <el-form-item label="用户名">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-button @click="login">登录</el-button>
    </el-form>
  </div>
</template>
<script>
import {login} from "../api/login";

export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {},

    }
  },
  methods: {
    login() {
      login(this.loginForm).then(
          res => {
            this.$message.success(res.data.msg)
          }
      )
    }
  }
}
</script>
<style scoped>

</style>
