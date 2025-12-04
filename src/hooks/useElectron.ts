import { useEffect, useState } from 'react';

// Hook to detect if running in Electron
export const useElectron = () => {
  const [isElectron, setIsElectron] = useState(false);
  const [appVersion, setAppVersion] = useState<string>('');
  
  useEffect(() => {
    // Check if we're running in Electron
    const checkElectron = async () => {
      if (window.electronAPI) {
        setIsElectron(true);
        try {
          const version = await window.electronAPI.getVersion();
          setAppVersion(version);
        } catch (error) {
          console.error('Failed to get app version:', error);
        }
      }
    };
    
    checkElectron();
  }, []);
  
  const printPass = async (passData: any) => {
    if (window.electronAPI) {
      try {
        await window.electronAPI.printPass(passData);
      } catch (error) {
        console.error('Failed to print pass:', error);
      }
    } else {
      // Fallback for web version
      window.print();
    }
  };
  
  return {
    isElectron,
    appVersion,
    printPass,
    platform: window.electronAPI?.platform || 'web'
  };
};
