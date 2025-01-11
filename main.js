const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 400,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Menü çubuğunu devre dışı bırak
    const mainMenu = Menu.buildFromTemplate([]);
    Menu.setApplicationMenu(mainMenu);  // Menüyü boş yaparak gizlemiş olduk

    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });
});
