import { ipcMain, app, BrowserWindow, shell, Menu } from "electron";
import * as path from "path";
import * as url from "url";
let mainWindow = null;
const isDev = process.env.NODE_ENV !== "production";
const isMac = process.platform === "darwin";
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js")
    },
    icon: path.join(__dirname, "../public/icon.png"),
    titleBarStyle: isMac ? "hiddenInset" : "default",
    backgroundColor: "#ffffff",
    show: false
  });
  mainWindow.once("ready-to-show", () => {
    mainWindow?.show();
    if (isDev) {
      mainWindow?.webContents.openDevTools();
    }
  });
  if (isDev) {
    mainWindow.loadURL("http://localhost:5173");
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "../dist/index.html"),
        protocol: "file:",
        slashes: true
      })
    );
  }
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
  mainWindow.webContents.setWindowOpenHandler(({ url: url2 }) => {
    shell.openExternal(url2);
    return { action: "deny" };
  });
}
function createMenu() {
  const template = [
    {
      label: "File",
      submenu: [
        {
          label: "New Guest Pass",
          accelerator: "CmdOrCtrl+N",
          click: () => {
            mainWindow?.webContents.send("new-guest-pass");
          }
        },
        { type: "separator" },
        isMac ? { role: "close" } : { role: "quit" }
      ]
    },
    {
      label: "Edit",
      submenu: [
        { role: "undo" },
        { role: "redo" },
        { type: "separator" },
        { role: "cut" },
        { role: "copy" },
        { role: "paste" }
      ]
    },
    {
      label: "View",
      submenu: [
        { role: "reload" },
        { role: "forceReload" },
        { role: "toggleDevTools" },
        { type: "separator" },
        { role: "resetZoom" },
        { role: "zoomIn" },
        { role: "zoomOut" },
        { type: "separator" },
        { role: "togglefullscreen" }
      ]
    },
    {
      label: "Window",
      submenu: [
        { role: "minimize" },
        ...isMac ? [{ type: "separator" }, { role: "front" }, { type: "separator" }, { role: "window" }] : [{ role: "close" }]
      ]
    },
    {
      label: "Help",
      submenu: [
        {
          label: "About Bonno",
          click: () => {
            shell.openExternal("https://bonno.com/about");
          }
        },
        {
          label: "Learn More",
          click: () => {
            shell.openExternal("https://bonno.com");
          }
        }
      ]
    }
  ];
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}
ipcMain.handle("app-version", () => {
  return app.getVersion();
});
ipcMain.handle("print-pass", async (event, passData) => {
  const win = BrowserWindow.getFocusedWindow();
  if (win) {
    win.webContents.print({
      silent: false,
      printBackground: true,
      deviceName: ""
    });
  }
});
app.whenReady().then(() => {
  createWindow();
  createMenu();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
app.on("window-all-closed", () => {
  if (!isMac) {
    app.quit();
  }
});
app.on("web-contents-created", (event, contents) => {
  contents.on("new-window", (event2, navigationUrl) => {
    event2.preventDefault();
    shell.openExternal(navigationUrl);
  });
});
