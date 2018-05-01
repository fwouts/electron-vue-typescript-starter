import {injectable} from 'inversify';
import {app, BrowserWindow} from 'electron';

/**
 * We need to find alternative
 * I think is not beautiful
 *
 * @type {string}
 */
const winUrl = process.env.NODE_ENV === 'development'
    ? `http://localhost:9080`
    : `file://${__dirname}/index.html`;

@injectable()
export default class AppService {

    private mainWindow: BrowserWindow | null = null;

    constructor() {
    }

    /**
     * Initialize electron handlers
     */
    start() {

        app.on('ready', this.createWindow);

        app.on('window-all-closed', () => {
            if (process.platform !== 'darwin') {
                app.quit();
            }
        });

        app.on('activate', () => {
            if (this.mainWindow === null) {
                this.createWindow();
            }
        });
    }


    /**
     * Create the mainWindow of your app
     */
    createWindow() {
        this.mainWindow = new BrowserWindow({
            height: 563,
            useContentSize: true,
            width: 1000
        });

        this.mainWindow.loadURL(winUrl);

        this.mainWindow.on('closed', () => {
            this.mainWindow = null
        });
    }
}
