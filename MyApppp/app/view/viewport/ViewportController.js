Ext.define('MyApp.view.viewport.ViewportController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.viewport',

    onLaunch: function() {
        console.log('Show Vie');
        this.showView('main');
    },

    showView: function(xtype) {
        var view = this.lookup(xtype),
            viewport = this.getView();

        if (!view) {
            viewport.removeAll(true);
            view = viewport.add({
                xtype: xtype,
                reference: xtype
            });
        }

        viewport.setActiveItem(view);
    },

});

