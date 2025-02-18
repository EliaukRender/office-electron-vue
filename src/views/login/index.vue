<template>
  <div class="login-container flex-center">
    <div class="login-box">
      <div class="login-left">
        <img class="login-left-img" src="@/assets/images/common/login-left.png" alt="login">
      </div>
      <div class="login-form">
        <div class="login-logo">
          <!--          <img class="login-icon" src="@/assets/images/common/logo.jpg" alt="">-->
          <h2 class="logo-text">
            仲裁视频下载
          </h2>
        </div>
        <login-form/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginForm from "@/views/login/components/LoginForm.vue";
</script>

<style scoped lang="scss">
@use "./index.scss";
</style>
