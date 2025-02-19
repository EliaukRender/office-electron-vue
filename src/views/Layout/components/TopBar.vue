<template>
  <div class="top-bar flex-start-center">
    <!--  app title  -->
    <div class="app-name br6 t-center">
      <img src="" alt="">
      <span>Eliauk Office</span>
    </div>
    <!--  文件列表区域  -->
    <FileList></FileList>
    <!--  新建文件  -->
    <div class="add-btn pointer br6 t-center">
      <i class="iconfont icon-jia"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import FileList from "@/views/Layout/components/FileList.vue";

</script>

<style scoped lang="scss">
.top-bar {
  width: 100%;
  height: 40px;
  padding: 5px;
  background-color: #e3e3e3;
  font-size: 12px;

  .app-name {
    width: 120px;
    height: 30px;
    line-height: 30px;
    margin-right: 5px;
    background-color: #d7d7d7;
    cursor: pointer;

    &:hover {
      background-color: #f6f6f6;
    }
  }

  .add-btn {
    width: 30px;
    height: 30px;
    line-height: 30px;
    border: 1px solid transparent;

    &:hover {
      border: 1px solid #d7d7d7;
      background-color: #f6f6f6;
    }

    .icon-jia {
      font-size: 24px;
    }
  }
}

</style>
