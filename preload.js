const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    clipboardSpeech: (callback) => ipcRenderer.on('transfer-text', callback)
})