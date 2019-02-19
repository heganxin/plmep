<template>
  <section class="app-main">
    <transition name="fade" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key"></router-view>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  cachedViews () {
    return this.$store.state.tagsView.cachedViews
  },
  computed: {
    key () {
      return this.$route.fullPath
    }
  }
}
</script>
