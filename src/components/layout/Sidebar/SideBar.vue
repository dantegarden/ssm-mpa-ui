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
          <a class="sidebar-item" :class="{'actived':currentIndex===menu.menuId}" :href="menu.path">
            <i :class="menu.icon"></i>
            <span class="sidebar-item-label">{{menu.menuName}}</span>
          </a>
        </li>
      </ul>
    </el-scrollbar>

    <div class="sidebar-footer" @click="isCollapse=!isCollapse">
      <a class="sidebar-item" href="#">
        <i class="el-icon-d-arrow-left rotate"></i>
        <span class="sidebar-item-label">折叠隐藏</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
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

  },
  mounted(){
    //TODO 取用户有权限看的菜单
  }
}
</script>

<style lang="less">
  .sidebar {
    width: 200px;
    height: 100%;
    position: absolute;
    left: 0px; // background: #ffffff;
    background-color: #f5f7fa;
    border-right: 1px solid #e6e9f0;
    overflow-y: hidden;
    .sidebar-header {
      line-height: 90px;
      text-align: center;
      .logo {
        width: 45px;
        height: 45px;
        vertical-align: middle;
      }
    }
    .sidebar-body {
      width: 100%;
      height: 100%;
      padding-left: 1px;
      overflow-y: auto;
      .el-scrollbar__wrap {
        overflow-x: auto;
      }
    }
    & > .sidebar-body {
      width: auto;
      height: auto;
      position: absolute; // top: 25px;
      top: 120px;
      left: 0px;
      right: 0px;
      bottom: 50px;
    }
    .sidebar-nav-list {
      padding: 0;
      margin-bottom: 0;
      list-style: none;
      .sidebar-nav-item {
        display: list-item;
        & > a {
          display: block;
          &.actived {
            color: #2f3033;
            border-left-color: #008afe;
            background-color: #e1edfa;
          }
          &:hover {
            background-color: #e1edfa;
          }
        }
      }
    }
    .sidebar-footer {
      border-top: 1px solid #e5e5e5;
      position: absolute;
      bottom: 0px;
      width: 100%;
      height: 50px;
      & > a {
        display: block;
      }
    }
    .sidebar-item {
      height: 45px;
      padding: 0 27px;
      margin: 0 0 5px;
      line-height: 45px;
      color: #8d9199;
      border-left: 3px solid transparent;
      border-right: 3px solid transparent;
      font-size: 14px;
      white-space: nowrap;
      i {
        margin-right: 13px;
        vertical-align: middle;
      }
    }
    .sidebar-nav-list-divider {
      margin: 15px 0;
      height: 1px;
      .divider {
        margin: 0 auto;
        height: 1px;
        width: 180px;
        background-color: #e6e9f0;
      }
    }
  }
</style>
