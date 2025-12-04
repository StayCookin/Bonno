import { ipcMain as u, app as o, BrowserWindow as i, shell as a, Menu as p } from "electron";
import * as r from "path";
import * as f from "url";
process.env.NODE_ENV !== "production" && require("electron-reload")(__dirname, {
  electron: r.join(__dirname, "..", "node_modules", ".bin", "electron"),
  hardResetMethod: "exit"
});
let e = null;
const c = process.env.NODE_ENV !== "production", s = process.platform === "darwin";
function d() {
  e = new i({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: !1,
      contextIsolation: !0,
      preload: r.join(__dirname, "preload.js")
    },
    icon: r.join(__dirname, "../public/icon.png"),
    titleBarStyle: s ? "hiddenInset" : "default",
    backgroundColor: "#ffffff",
    show: !1
  }), e.once("ready-to-show", () => {
    e == null || e.show(), c && (e == null || e.webContents.openDevTools());
  }), c ? e.loadURL("http://localhost:5173") : e.loadURL(
    f.format({
      pathname: r.join(__dirname, "../dist/index.html"),
      protocol: "file:",
      slashes: !0
    })
  ), e.on("closed", () => {
    e = null;
  }), e.webContents.setWindowOpenHandler(({ url: t }) => (a.openExternal(t), { action: "deny" }));
}
function b() {
  const t = [
    {
      label: "File",
      submenu: [
        {
          label: "New Guest Pass",
          accelerator: "CmdOrCtrl+N",
          click: () => {
            e == null || e.webContents.send("new-guest-pass");
          }
        },
        { type: "separator" },
        s ? { role: "close" } : { role: "quit" }
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
        ...s ? [{ type: "separator" }, { role: "front" }, { type: "separator" }, { role: "window" }] : [{ role: "close" }]
      ]
    },
    {
      label: "Help",
      submenu: [
        {
          label: "About Bonno",
          click: () => {
            a.openExternal("https://bonno.com/about");
          }
        },
        {
          label: "Learn More",
          click: () => {
            a.openExternal("https://bonno.com");
          }
        }
      ]
    }
  ], n = p.buildFromTemplate(t);
  p.setApplicationMenu(n);
}
u.handle("app-version", () => o.getVersion());
u.handle("print-pass", async (t, n) => {
  const l = i.getFocusedWindow();
  l && l.webContents.print({
    silent: !1,
    printBackground: !0,
    deviceName: ""
  });
});
o.whenReady().then(() => {
  d(), b(), o.on("activate", () => {
    i.getAllWindows().length === 0 && d();
  });
});
o.on("window-all-closed", () => {
  s || o.quit();
});
o.on("web-contents-created", (t, n) => {
  n.on("new-window", (l, m) => {
    l.preventDefault(), a.openExternal(m);
  });
});
