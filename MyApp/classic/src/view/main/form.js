Ext.define('MyApp.view.main.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'mainform',
    autoScroll: true,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    bodyPadding: 5,
    config: {
        currentEntry: null
    },
    bind:{
        title:'{formTitle}',
        currentEntry:'{currentEntry}'
    },
    defaults: {
        anchor: '100%',
        allowBlank: true,
        msgTarget: 'under'
    },
    items: [ {
        fieldLabel: 'Name',
        name: 'name',
        xtype: 'textfield',
        bind: {
            value: '{currentEntry.name}'
        }
    }, {
        fieldLabel: 'Email',
        name: 'Email',
        xtype: 'textfield',
        bind: {
            value: '{currentEntry.email}'
        }
    }, {
        fieldLabel: 'Age',
        name: 'description',
        xtype: 'textfield',
        bind: {
            value: '{currentEntry.phone}'
        },
        flex: 1
    }, ],
    buttons: [{
        text: 'Save',
        action: 'save',
        handler:'onFormBtnClick'
    }, {
        text: 'Cancel',
        action: 'cancel',
        handler:'onFormBtnClick'
    }]
});