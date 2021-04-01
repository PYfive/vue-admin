<template>
  <div>
    <h1>欢迎,{{userInfo.username}}</h1>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
      }
    },
    computed: {
      // 使用对象展开运算符将 getter 混入 computed 对象中
      ...mapGetters([
        'userInfo',
        // ...
      ])
    },
    methods: {}
  }
</script>

<style scoped lang='scss'>

</style>
