// 在上下文隔离启用的情况下使用预加载
import { contextBridge, ipcRenderer } from'electron'

contextBridge.exposeInMainWorld('os', {
  getSystemInfo: () => ipcRenderer.invoke('getSystemInfo')
})