export const appConfig = {
    title: 'EerahZone',
    version: process.env.VERSION,
    versionCode: process.env.VERSION_CODE,
    port: {
        dev_server: 8080,
    },
    mode: {
        isDevelopment: process.env.NODE_ENV === 'development',
        isProduction: process.env.NODE_ENV === 'production',
        isTest: process.env.NODE_ENV === 'test',
    }
}