const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  getVersion: () => ipcRenderer.invoke('app-version'),
  printPass: (passData) => ipcRenderer.invoke('print-pass', passData),
  onNewGuestPass: (callback) => {
    ipcRenderer.on('new-guest-pass', callback);
  },
  removeAllListeners: (channel) => {
    ipcRenderer.removeAllListeners(channel);
  },
  platform: process.platform
});
