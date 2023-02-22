QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    'use strict';

    sap.ui.require([
        "logaligroup/invoices/test/unit/AllTest"
    ], function () {
        QUnit.start();
    });
})