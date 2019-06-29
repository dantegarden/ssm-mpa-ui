<template>
<test-layout id="app" sidebarActive="sb-20" :sidebarMini="false">
  <router-view></router-view>
</test-layout>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      loading:false,
    }
  },
  components: {
  },
  mounted() {
  },
  methods:{

  }
};
</script>

<style lang="less">

</style>
