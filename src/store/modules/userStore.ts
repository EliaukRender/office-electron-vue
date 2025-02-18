import {defineStore} from "pinia";

/**
 * 全局store
 */
export const useGlobalStore = defineStore('global', {
  state: (): any => ({
    token: "",
  }),
  getters: {},
  actions: {
    // 存储token
    setToken(token: string) {
      this.token = token;
    },
  },
});
