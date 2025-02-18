<template>
  <div class="page-main flex-center flex-column">
    <el-button class="mb10" @click="goToLogin">跳转到登录页</el-button>
    <el-form :model="form" class="form-box">
      <el-form-item label="项目：">
        <el-select
            v-model="form.projectCode"
            placeholder="请选择项目"
            clearable
        >
          <el-option v-for="item in projectList" :label="item.projectName" :value="item.projectCode"/>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {projectList} from "@/constant";
import {useRouter} from "vue-router";

onMounted(() =>{
  // 监听主线程通信
  window.ipcRenderer.on('' , () => {

  })
})


const form = ref({
  projectCode: ''
})

const router = useRouter()
const goToLogin = () => {
  router.push("/login");
}

</script>

<style scoped lang="scss">
.form-box {
  width: 50%;
}

</style>
