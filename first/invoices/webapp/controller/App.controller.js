sap.ui.define([
    "sap/ui/core/mvc/Controller",
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @returns 
     */
    function (Controller, MessageToast) {
        'use strict';
        return Controller.extend("logaligroup.invoices.controller.App", {

            onOpenDialogHeader: function() {
                this.getOwnerComponent().openHelloDialog();
            }

        });
    });