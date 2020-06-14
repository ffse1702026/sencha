/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('MyApp.Application', {
    extend: 'Ext.app.Application',

    name: 'MyApp',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },
    viewport: {
        controller: 'viewport',
        viewModel: 'viewport'
    },
    stores: [
        'Menu'      // creates one global instance of the Menu store (Ext.getStore('Menu'))
    ],
    defaultToken: 'home',
    launch: function(profile) {
        // The viewport controller requires xtype defined by profiles, so let's perform extra
        // initialization when the application and its dependencies are fully accessible.
        console.log('launch: function(profile)', Ext.Viewport);
        Ext.Viewport.getController().onLaunch();

        Ext.getBody().removeCls('launching');
        this.callParent([profile]);
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
