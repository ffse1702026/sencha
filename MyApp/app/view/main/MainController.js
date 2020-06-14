/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        console.log('record', record);
        var me = this;
        me.getViewModel().set('currentEntry', record);
        var container = me.getView();
        console.log('container', container);
        container.getLayout().setActiveItem(1)
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    getForm: function() {
        return this.getView().getForm();
    },

    onFormBtnClick: function(btn, record){
        console.log('this', this);
        var me = this,
        vm = me.getViewModel(),store = vm.getStore('personnel'),
        entry = vm.get('currentEntry');
       
        var form = me.getView().down('mainform');
        console.log(vm);
        // var record =form.getForm().getValues();
        var record = Ext.create("MyApp.model.Personnel", {
            name: '1',
            email: '2',
            phone: '3'

        });
        store.insert(0, record);
        console.log('store', store);
        // store.load();
        // store.commitChanges();
        // if (btn.action === 'save') {
        //     if (me.getView().down('mainform').isValid()) {
        //         store.commitChanges();
        //     } else {
        //         return;
        //     }
        // } else {
        //     store.rejectChanges();
        // }

        // me.setActiveEastCard(0);
        // me.gridAddBtnSetDisabled(false);
    }
});
