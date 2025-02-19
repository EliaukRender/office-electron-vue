<template>
  <div class="file-list flex-start-center" v-if="!!navigationStore.gettersOpenedFileList?.length">
    <div class="file-item br6 flex-between-center pd-5" v-for="file in navigationStore.gettersOpenedFileList" :key="file">
      <SvgIcon :name="file.fileType" :icon-style="{ width: '20px', height: '20px' }"></SvgIcon>
      <span class="file-name flex-1"> {{ file.fileName }}</span>
      <i class="iconfont icon-guanbi"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useNavigationStore} from "@/store/modules/navigationStore";

const navigationStore = useNavigationStore()
</script>

<style scoped lang="scss">

.file-item {
  width: 200px;
  height: 30px;
  line-height: 30px;
  margin-right: 5px;
  background-color: #d7d7d7;
  text-align: center;
  cursor: pointer;

  .file-name {
    padding: 0 5px;
    text-align: left;
  }

  &:hover {
    background-color: #f6f6f6;
  }
}

.item-color-active {
  background-color: #ffffff;
}
</style>
