<template>
    <div class="app-container">
      <h2><button>gogogogo</button></h2>
      <router-view></router-view>
    </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  mounted: function () {
    console.log('as', this.$store.getters.islogin)
  },
  methods: {
    handleClick () {
      this.$router.push({ path: '/404' })
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
