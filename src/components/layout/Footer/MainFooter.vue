<template>
  <div class="normal-footer" v-show="normalFooter">
    <div class="container-block" style="margin-bottom: 0px;">
      <el-row>
        <el-col :span="4">
          <a href="#">
            <img
              src="/static/images/user/ryan.png"
              alt=""
              class="logo"
            />
          </a>
        </el-col>
        <el-col :span="20">
          <div class="nav">
            <a href="#" class="nav-link">
              Home
            </a>
            <a href="#" class="nav-link">
              Shop
            </a>
            <a href="#" class="nav-link">
              Blog
            </a>
            <a href="#" class="nav-link">
              Service
            </a>
            <a href="#" class="nav-link">
              About
            </a>
            <a href="#" class="nav-link" style="margin-right:0px;">
              Contact
            </a>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MainFooter",
    props: {
      normalFooter: {
        type: Boolean,
        default: false
      },
    }
  }
</script>

<style scoped>

</style>
