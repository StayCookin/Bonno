import { ipcMain as u, app as o, BrowserWindow as s, shell as a, Menu as p } from "electron";
import * as r from "path";
import * as w from "url";
process.env.NODE_ENV !== "production" && require("electron-reload")(__dirname, {
  electron: r.join(__dirname, "..", "node_modules", ".bin", "electron"),
  hardResetMethod: "exit"
});
let e = null;
const d = process.env.NODE_ENV !== "production", i = process.platform === "darwin";
function c() {
  e = new s({
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
    titleBarStyle: i ? "hiddenInset" : "default",
    backgroundColor: "#ffffff",
    show: !1
  }), e.once("ready-to-show", () => {
    e?.show(), d && e?.webContents.openDevTools();
  }), d ? e.loadURL("http://localhost:5173") : e.loadURL(
    w.format({
      pathname: r.join(__dirname, "../dist/index.html"),
      protocol: "file:",
      slashes: !0
    })
  ), e.on("closed", () => {
    e = null;
  }), e.webContents.setWindowOpenHandler(({ url: n }) => (a.openExternal(n), { action: "deny" }));
}
function f() {
  const n = [
    {
      label: "File",
      submenu: [
        {
          label: "New Guest Pass",
          accelerator: "CmdOrCtrl+N",
          click: () => {
            e?.webContents.send("new-guest-pass");
          }
        },
        { type: "separator" },
        i ? { role: "close" } : { role: "quit" }
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
        ...i ? [{ type: "separator" }, { role: "front" }, { type: "separator" }, { role: "window" }] : [{ role: "close" }]
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
  ], t = p.buildFromTemplate(n);
  p.setApplicationMenu(t);
}
u.handle("app-version", () => o.getVersion());
u.handle("print-pass", async (n, t) => {
  const l = s.getFocusedWindow();
  l && l.webContents.print({
    silent: !1,
    printBackground: !0,
    deviceName: ""
  });
});
o.whenReady().then(() => {
  c(), f(), o.on("activate", () => {
    s.getAllWindows().length === 0 && c();
  });
});
o.on("window-all-closed", () => {
  i || o.quit();
});
o.on("web-contents-created", (n, t) => {
  t.on("new-window", (l, m) => {
    l.preventDefault(), a.openExternal(m);
  });
});
