<template>
<div class="framework">
  <div class="wrapper " :class="{'sidebar-mini':sidebarMini}">
    <sidebar :sidebarMini="sidebarMini" :sidebarActive="sidebarActive"
             @onSidebarMiniChange="onSidebarMiniChange" @onSidebarActiveChange="onSidebarActiveChange"></sidebar>

    <div class="container">
      <div class="topbar">
        <el-menu  mode="horizontal">
          <!-- <el-menu-item index="1">
            <a href="/home" style="display:block;">
            <i class="el-icon-menu"></i>
            </a>
          </el-menu-item> -->
          <el-submenu index="2" >

            <span slot="title">快捷操作</span>
            <div style="width:450px">
              <div style="padding: 18px 20px;border-bottom: 1px solid #ebeef5;">
                <span>功能列表</span>
                <el-button style="float: right; padding: 2px 0" type="text">设置</el-button>
              </div>
            </div>

          </el-submenu>
        </el-menu>
        <el-menu :default-active="activeIndex2" class="topbar-menu" mode="horizontal" @select="handleSelect" style="position:absolute;top:0px;right:0px;">
          <el-submenu index="9" >
            <span slot="title">账户中心</span>
            <div class="topbar-menu-user">
              <div class="topbar-user-info">
                <img src="/static/images/user/face.jpg" class="topbar-user-avatar">
                <p class="topbar-user-email"><span>ruyangit@163.com</span></p>
              </div>
              <div class="topbar-body">
                <el-menu-item index="9-1"><i class="el-icon-edit-outline"></i>
                  <p>写文章</p>
                </el-menu-item>
                <el-menu-item index="9-2"><i class="el-icon-bell"></i>
                  <p>消息</p>
                </el-menu-item>
                <el-menu-item index="9-3"><i class="el-icon-star-off"></i>
                  <p>收藏</p>
                </el-menu-item>
                <el-menu-item index="9-4"><i class="el-icon-service"></i>
                  <p>智能客服</p>
                </el-menu-item>
                <el-menu-item index="9-5"><i class="el-icon-setting"></i>
                  <p>设置</p>
                </el-menu-item>
              </div>
              <div class="btn-list">
                <a class="btn-list-link" href="#" @click="logout">退出管理控制台</a>
              </div>
            </div>
          </el-submenu>
        </el-menu>
      </div>
      <div class="main-body" :style="'padding:'+mainBodyPadding">
        <slot></slot>
        <main-footer :normalFooter="normalFooter"></main-footer>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import perm from '@/utils/permission'
import Sidebar from '@/components/layout/Sidebar/Sidebar'
import MainFooter from '@/components/layout/Footer/MainFooter'
import login_store from '@/modules/login/store'

export default {
  name: "ru-layout",
  components: {
    Sidebar,
    MainFooter
  },
  props: {
    sidebarMini: {
      type: Boolean,
      default: false
    },
    topbarActive: {
      type: String,
      default: ""
    },
    sidebarActive: {
      type: String,
      default: ""
    },
    mainBodyPadding:{
      type: String,
      default: "0px"
    },
    normalFooter:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    logout(){ //登出
      login_store.dispatch("LogOut", this.loginForm).then(() => {})
    },
    onSidebarMiniChange(isCollapse){
      this.sidebarMini = isCollapse
    },
    onSidebarActiveChange(activeMenuIndex){
      this.sidebarActive = activeMenuIndex
    }
  },
  beforeCreate() {
    perm.checkUserLogin()
  }
};
</script>

<style lang="less">
.container-block {
  background-color: #fff; // border-radius: 6px;
  padding: 20px;
  margin-bottom: 15px;
  h4 {
    height: 16px;
    line-height: 16px;
    font-size: 14px;
    color: rgb(51, 51, 51);
    font-weight: bold;
    margin: 0px 0px 20px;
    // padding: 0px;
    padding-left: 10px;
    border-left: 3px solid #3080fe;
  }
}

.topbar-menu-user {
  width: 270px; // height: 280px;
  // background-color: #e5e5e5;
  .topbar-user-info {
    text-align: center;
    padding-top: 16px;
    border-bottom: 1px solid #eaeaea;
    .topbar-user-avatar {
      width: 36px;
      height: 36px;
      border-radius: 18px;
      vertical-align: middle;
    }
    .topbar-user-email {
      margin: 8px 0; // color: #fff;
      font-size: 14px;
    }
  }
  .topbar-body {
    height: 205px;
    padding: 15px;
    .el-menu-item {
      float: left;
      width: 80px;
      height: 80px;
      text-align: center;
      padding-top: 8px;
      i {
        font-size: 23px;
        margin-right: 0px;
      }
    }
  }
  .btn-list {
    padding-top: 6px; // background: rgb(67, 74, 80);
    border-top: 1px solid #eaeaea;
    .btn-list-link {
      height: 35px;
      line-height: 35px;
      display: block;
      transition: all 0.15s;
      text-align: center; // color: #fff; // background-color: #f5f5f6;
      // border-top: #eaeaea;
    }
  }
}

.framework {
  .wrapper {
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
    .container {
      width: auto;
      height: auto;
      position: absolute;
      top: 0px;
      left: 200px;
      right: 0px;
      bottom: 0px; // background: #f5f7fa;
      overflow-y: hidden;
      .topbar {
        height: 61px;
        border-bottom: solid 1px #e6e6e6;
        .topbar-menu {
          padding-left: 1px;
        }
        .el-menu--horizontal {
          border-bottom: 0px;
          & > .el-submenu,
          & > .el-menu-item {
            &.is-active {
              border-bottom: 0px;
              border-color: #fff;
              .el-submenu__title {
                border-bottom: 0px;
                border-color: #fff;
              }
            }
          }
        }
      }
      .main-body {
        width: 100%;
        height: 100%;
        padding-left: 1px;
        overflow-y: auto;
        background-color: #fafafa;
        // padding: 10px;
      }
      & > .main-body {
        width: auto;
        height: auto;
        position: absolute; // top: 25px;
        top: 61px;
        left: 0px;
        right: 0px;
        bottom: 0px;
      }
    }
  }
  & > .wrapper {
    width: auto;
    height: auto;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
  .sidebar-mini {
    .sidebar {
      width: 79px;
      .sidebar-nav-list-divider {
        margin: 30px 0;
        height: 1px;
        .divider {
          margin: 0 auto;
          height: 1px;
          width: 30px;
          background-color: #e6e9f0;
        }
      }
    }
    .container {
      left: 79px;
    }
    .sidebar-footer {
      .rotate {
        transform: rotate(180deg);
        transition: transform 0.2s;
      }
    }
    .sidebar-item {
      .sidebar-item-label {
        display: none;
      }
    }
  }
}
.arrow-down-none{
  &.el-submenu {
    .el-icon-arrow-down {
      &::before {
        content: "";
      }
    }
    .el-submenu__icon-arrow{
      margin-left: 0px;
    }
  }
}
.topbar-search{
  .el-input__inner,.el-input-group__append{
 border-top-right-radius: 4px;
     border-bottom-right-radius: 4px;
  }
  .el-input__inner{
    padding: 0 30px 0 5px;
  }
  .el-input-group__append{
    background-color: transparent;
    position: absolute;
    top: 6px;
    right: 6px;
    //padding: 0 20px;
    // width: 0px;
    border:0px;
    padding: 0 22px 0 5px;
  }
  .el-icon-search{
    font-size: 14px;
  }
}
.normal-footer {
  .content {
    align-items: center;
  }
  .logo {
    width: 80px;
  }
  .nav {
    text-align: right;
  }
  .nav-link {
    margin-right: 20px;
    color: rgba(0, 0, 0, 0.87);
  }
}
</style>

