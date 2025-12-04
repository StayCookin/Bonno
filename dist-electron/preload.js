const { contextBridge: r, ipcRenderer: s } = require("electron");
r.exposeInMainWorld("electronAPI", {
  getVersion: () => s.invoke("app-version"),
  printPass: (e) => s.invoke("print-pass", e),
  onNewGuestPass: (e) => {
    s.on("new-guest-pass", e);
  },
  removeAllListeners: (e) => {
    s.removeAllListeners(e);
  },
  platform: process.platform
});
