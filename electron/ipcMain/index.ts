import {BrowserWindow, ipcMain} from "electron";
import {EventEnum} from "../enums";

/**
 * 监听 渲染进程 => 主线程 通信事件
 */
export function renderToMainListener(win: BrowserWindow) {
  ipcMain.handle(EventEnum.SaveVideo, () => {
    // todo
  })
}
