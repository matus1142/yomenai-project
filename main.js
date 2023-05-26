const { app, BrowserWindow, globalShortcut, clipboard, Menu} = require("electron");
const path = require("path");

const menuItems = [
    {
        label: "History",
        click: async () => {
          const win2 = new BrowserWindow({
            width: 600,
            height: 200,
            show: false,
            backgroundColor: "white",
            icon: __dirname + '/yomenai.ico',
          });
          win2.loadFile("history.html");
          win2.once("ready-to-show", () => {
            win2.show();
          });
        },
      },
];
  
  const menu = Menu.buildFromTemplate(menuItems);
  Menu.setApplicationMenu(menu);

function createWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 750,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    icon: __dirname + '/yomenai.ico',
  });
//   win.webContents.openDevTools();
  globalShortcut.register("CommandOrControl+Shift+C", () => {
    const text = clipboard.readText();
    win.webContents.send("transfer-text", text);
  });
  win.loadFile("index.html");
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// nodemon --watch . --exec "electron ."
// electron-packager . yomenai --overwrite --asar --platform=win32 --arch=x64 --icon={your icon file source} --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName="product name"

// npx electron-packager <sourcedir> <y> --platform=<platform> --arch=<arch> [optional flags...]

// electron-packager . yomenai --all --asar icon=yomenai.ico