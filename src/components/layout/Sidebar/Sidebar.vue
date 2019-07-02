<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <a href=""><svg-icon type="dx-logo" className="logo" /></a>
    </div>
    <div class="sidebar-nav-list-divider">
      <div class="divider"></div>
    </div>
    <el-scrollbar class="sidebar-body">
      <ul class="sidebar-nav-list">
        <li class="sidebar-nav-item" v-for="(menu,i) in menuTreeData" :key="menu.menuId">
          <a class="sidebar-item" :class="{'actived':currentIndex==menu.menuId}" :href="menu.path">
            <i :class="menu.icon"></i>
            <span class="sidebar-item-label">{{menu.menuName}}</span>
          </a>
        </li>
      </ul>
    </el-scrollbar>

    <div class="sidebar-footer" @click="triggerIsCollapse">
      <a class="sidebar-item" href="#">
        <i class="el-icon-d-arrow-left rotate"></i>
        <span class="sidebar-item-label">折叠隐藏</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props:{
    sidebarMini: {
      type: Boolean,
      default: false
    },
    sidebarActive: {
      type: String,
      default: ""
    }
  },
  data(){
    return {
      currentIndex: this.sidebarActive,
      isCollapse: this.sidebarMini,
      menuTreeData: [
        { menuId: 10000, menuName: '个人中心', path:'/user/#/profile', icon:"el-icon-news", children: [] },
        { menuId: 11000, menuName: '数据中心', path:'/data', icon:"el-icon-tickets", children: [] },
        { menuId: 12000, menuName: '主页', path:'/home', icon:"el-icon-phone-outline", children: [] },
        { menuId: 13000, menuName: '图表', path:'/g2', icon:"el-icon-sold-out", children: [] },
      ]
    }
  },
  methods:{
    triggerIsCollapse(){
      this.isCollapse=!this.isCollapse
      this.$emit('onSidebarMiniChange', this.isCollapse);
    },
  },
  mounted(){
    //TODO 取用户有权限看的菜单
  }
}
</script>

<style lang="less">

</style>
