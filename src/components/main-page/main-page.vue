<template>
  <div class="main_container">
    <el-container>
      <el-header>
        <el-dropdown>
          <span>系统管理员</span>
          <i class="el-icon-caret-bottom" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>

      <el-container>
        <el-aside width="200px">
          <el-menu :default-openeds="[]">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>导航一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
              <el-submenu index="3-4">
                <template slot="title">选项4</template>
                <el-menu-item index="3-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-main>
          <section>
            <div class="breadcrumb-wrap">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <!-- 路由页面显示 -->
            <section class="router-view-wrap">
              <div class="router-view">
                <router-view class="content"></router-view>
              </div>
            </section>
          </section>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      tableData: Array(20).fill(item)
    }
  },
  created () {
    this.$router.push({
      path: '/Table'
    })
  }
}
</script>

<style lang="less" scoped>
  .main_container{
    height: 100%;
  }
  .el-container {
    height: 100%;
  }
  .el-header {
    background-color: #348EED;
    color: #fff;
    line-height: 60px;
    height: 100%;
    text-align: right;
  }
  .el-dropdown {
    display: inline-block;
    height: 60px;
    line-height: 60px;
    color: #fff;
    padding: 0 10px;
    font-size: 16px;
    font-weight: 400;
  }

  .el-aside {
    color: #333;
  }
  .el-menu {
    height: 100%;
    border-right: solid 1px #fff ;
  }
  .el-main {
    padding: 0px 20px;
    background-color: #F5F6FA;
    .breadcrumb-wrap {
      display: flex;
      align-items: center;
      height: 45px;
      font-size: 14px;
      border-top: 2px solid #f2f5f8;
      background-color: transparent;
    }
    .router-view-wrap {
      position: relative;
      width: 100%;
      height: calc(100% - 45px);
    }
    .router-view {
      position: relative;
      width: 100%;
      height: 100%;
      overflow-y: auto;
      padding: 4px;

      .content {
        background-color: #fff;
        padding: 5px 0;
      }
    }
  }
</style>
