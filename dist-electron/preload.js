const { contextBridge, ipcRenderer } = require("electron");
contextBridge.exposeInMainWorld("electronAPI", {
  getVersion: () => ipcRenderer.invoke("app-version"),
  printPass: (passData) => ipcRenderer.invoke("print-pass", passData),
  onNewGuestPass: (callback) => {
    ipcRenderer.on("new-guest-pass", callback);
  },
  removeAllListeners: (channel) => {
    ipcRenderer.removeAllListeners(channel);
  },
  platform: process.platform
});
