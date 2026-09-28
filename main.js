const { app, BrowserWindow, globalShortcut, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;

function createWindow() {
    const isMac = process.platform === 'darwin';

    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        icon: path.join(__dirname, 'icon.ico'),
        frame: false,
        titleBarStyle: isMac ? 'hidden' : 'default',
        trafficLightPosition: isMac ? { x: 18, y: 18 } : undefined,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.setMenu(null);
    mainWindow.loadFile('index.html');
    // mainWindow.webContents.toggleDevTools(); 

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

// Pencere Buton Kontrolleri
ipcMain.on('window-minimize', () => {
    if (mainWindow) mainWindow.minimize();
});

ipcMain.on('window-maximize', () => {
    if (mainWindow) {
        if (mainWindow.isMaximized()) {
            mainWindow.unmaximize();
        } else {
            mainWindow.maximize();
        }
    }
});

ipcMain.on('window-close', () => {
    if (mainWindow) mainWindow.close();
});

// 💾 JSON Dışa Aktarma (Export) Handleri
ipcMain.handle('export-data', async (event, dataString) => {
    const { canceled, filePath } = await dialog.showSaveDialog(mainWindow, {
        title: 'CodeSnip Verilerini Yedekle',
        defaultPath: path.join(app.getPath('downloads'), 'codesnip_backup_26Q3.1.json'),
        filters: [
            { name: 'JSON Dosyası', extensions: ['json'] }
        ]
    });

    if (canceled || !filePath) {
        return { success: false, message: 'Yedekleme iptal edildi.' };
    }

    try {
        fs.writeFileSync(filePath, dataString, 'utf-8');
        return { success: true, message: 'Veriler başarıyla yedeklendi!' };
    } catch (error) {
        return { success: false, message: `Hata oluştu: ${error.message}` };
    }
});

// 📂 EKSİK OLAN KISIM EKLENDİ: JSON İçe Aktarma (Import) Handleri
ipcMain.handle('import-data', async () => {
    try {
        const { canceled, filePaths } = await dialog.showOpenDialog(mainWindow, {
            title: 'CodeSnip Yedeği Seçin',
            properties: ['openFile'],
            filters: [
                { name: 'JSON Dosyaları', extensions: ['json'] },
                { name: 'Tüm Dosyalar', extensions: ['*'] }
            ]
        });

        if (canceled || filePaths.length === 0) {
            return { success: false, message: 'İçe aktarma iptal edildi.' };
        }

        const filePath = filePaths[0];
        const rawData = fs.readFileSync(filePath, 'utf-8');

        // Yüklenen dosyanın geçerli bir JSON olup olmadığını doğrula
        JSON.parse(rawData);

        return { success: true, data: rawData };
    } catch (error) {
        return { success: false, message: 'Seçilen dosya geçerli bir JSON yedeği değil veya okunamadı!' };
    }
});

// Uygulama Başlatma Alanı
app.whenReady().then(() => {
    createWindow();

    globalShortcut.register('CommandOrControl+Shift+S', () => {
        if (mainWindow) {
            if (mainWindow.isMinimized()) mainWindow.restore();
            mainWindow.show();
            mainWindow.focus();

            mainWindow.webContents.send('global-spotlight-trigger');
        }
    });

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('will-quit', () => {
    globalShortcut.unregisterAll();
});
