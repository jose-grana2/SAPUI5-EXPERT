
/* global Qunit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    'use strict';

    sap.ui.require([
        "logaligroup/invoices/test/unit/AllTests"
    ], function () {
        console.log("aaaaaaaaaaaa");
        QUnit.start();
    });
})