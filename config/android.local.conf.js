exports.config = {
    runner: 'local',

    specs: [
        'C:\\Iterasys\\MyDemoApp145Adv\\features\\comprar_produto.feature'
    ],

    maxInstances: 1,

    capabilities: [{
        platformName: "Android",
        "appium:platformVersion": "13.0",
        "appium:deviceName": "emulator5554",
        "appium:deviceOrientation": "portrait",
        "appium:appPackage": "com.saucelabs.mydemoapp.android",
        "appium:appActivity": "com.saucelabs.mydemoapp.android.view.activities.SplashActivity",
        "appium:automationName": "UiAutomator2",
        browserName: "",
    }],

    services: [
        ['appium', {
            command: 'appium',
            args: {
                address: '127.0.0.1',
                port: 4723
            }
        }]
    ],

    framework: 'cucumber',

    cucumberOpts: {
        require: ['./features/step-definitions/*.js'],
        timeout: 80000
    },

    reporters: ['spec'],
};
