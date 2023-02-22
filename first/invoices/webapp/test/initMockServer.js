sap.ui.define([
    "../localService/mockserver",
    "sap/m/MessageBox"
    
], 
    /**
     * 
     * @param {type of sap.m.MessageBox} MessageBox 
     */
function(mockserver, MessageBox) {
    'use strict';
    
    let aMockservers = [];

    //intialize the mock server
    aMockservers.push(mockserver.init());

    Promise.all(aMockservers).catch(function (oError) {
        MessageBox.error(oError.message);
    }).finally(function () {
        sap.ui.require(['sap/ui/core/ComponentSupport']);
    });

});