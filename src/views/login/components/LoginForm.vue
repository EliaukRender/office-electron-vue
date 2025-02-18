<template>
  <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" size="large">
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" placeholder="用户名：admin">
        <template #prefix>
          <el-icon class="el-input__icon">
            <user/>
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
          v-model="loginForm.password"
          type="password"
          placeholder="密码：123456"
          show-password
          autocomplete="new-password"
      >
        <template #prefix>
          <el-icon class="el-input__icon">
            <lock/>
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
  </el-form>
  <div class="login-btn">
    <el-button :icon="CircleClose" round size="large" @click="resetForm(loginFormRef)">
      重置
    </el-button>
    <el-button
        :icon="UserFilled"
        round
        size="large"
        type="primary"
        :loading="loading"
        @click="handleLogin(loginFormRef)"
    >
      登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive} from "vue";
import {CircleClose, Lock, User, UserFilled} from "@element-plus/icons-vue";
import type {ElForm} from "element-plus";
import {useRouter} from "vue-router";

type FormInstance = InstanceType<typeof ElForm>;
const loginFormRef = ref<FormInstance>();
const loginRules = reactive({
  username: [{required: true, message: "请输入用户名", trigger: "blur"}],
  password: [{required: true, message: "请输入密码", trigger: "blur"}]
});

const loading = ref(false);
const router = useRouter()
const loginForm = reactive<any>({
  username: "",
  password: ""
});

// 账号登录
const handleLogin = (formEl: FormInstance | undefined) => {
  if (!formEl) {
    return;
  }
  formEl.validate(async valid => {
    if (!valid) {
      return;
    }
    loading.value = true;
    try {
      // 执行登录
      router.push("/download");
    } finally {
      loading.value = false;
    }
  });
};

// 重置表单数据
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) {
    return;
  }
  formEl.resetFields();
};
</script>

<style scoped lang="scss">
@use "../index.scss";
</style>
