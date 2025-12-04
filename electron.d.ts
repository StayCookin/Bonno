// Type definitions for Electron API exposed to renderer

export interface IElectronAPI {
  getVersion: () => Promise<string>;
  printPass: (passData: any) => Promise<void>;
  onNewGuestPass: (callback: () => void) => void;
  removeAllListeners: (channel: string) => void;
  platform: string;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
