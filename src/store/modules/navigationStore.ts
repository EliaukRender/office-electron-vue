import {defineStore} from "pinia";

/**
 * @description: 顶部导航条区域的数据
 */
interface NavigationState {
  openedFileList: any[]; // 假设 openedFileList 是一个字符串数组
}

export const useNavigationStore = defineStore('navigationStore', {
  state: (): NavigationState => ({
    openedFileList: [
      {fileId: '', fileType: 'ppt', fileName: 'ppt测试文件'}
    ]
  }),
  getters: {
    gettersOpenedFileList: (state: NavigationState) => state.openedFileList
  }
});
