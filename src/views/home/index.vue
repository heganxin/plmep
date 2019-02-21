<template>
    <div class="app-container">
      <button>gogogogogogogogo</button>
      <svg-icon iconClass="menu"></svg-icon>
    </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  mounted: function () {
    //      { path: '*', redirect: '/404', hidden: true }])
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
