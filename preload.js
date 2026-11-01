const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('codeSnipAPI', {
    minimize: () => ipcRenderer.send('window-minimize'),
    maximize: () => ipcRenderer.send('window-maximize'),
    close: () => ipcRenderer.send('window-close'),

    onGlobalSpotlight: (callback) => {
        if (typeof callback !== 'function') return () => {};

        const listener = () => callback();
        ipcRenderer.on('global-spotlight-trigger', listener);

        return () => ipcRenderer.removeListener('global-spotlight-trigger', listener);
    },

    exportData: (dataString) => ipcRenderer.invoke('export-data', dataString),
    importData: () => ipcRenderer.invoke('import-data')
});
