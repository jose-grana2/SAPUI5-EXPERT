sap.ui.define([
    'sap/ui/core/UIComponent',
    'logaligroup/invoices/model/models',
    './controller/HelloDialog'

], function (UIComponent, models, HelloDialog) {
    'use strict';

    return UIComponent.extend("logaligroup.invoices.Component", {

        metadata: {
            "manifest": "json"
        },

        init: function () {

            UIComponent.prototype.init.apply(this, arguments);

            this.setModel(models.createRecipient());

            this._helloDialog = new HelloDialog(this.getRootControl());
        }, 
        exit: function () { 
            this._helloDialog.destroy();
            delete this._helloDialog;
        },

        openHelloDialog: function() {
            this._helloDialog.open();
        }

    });

});