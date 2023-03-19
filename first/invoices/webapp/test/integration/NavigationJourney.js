sap.ui.define([,
    "logaligroup/invoices/localService/mockserver",
    "sap/ui/test/opaQunit",
    "./pages/HelloPanel"
], 
    /**
     * 
     * @param {typeof sap.ui.test.opaQunit} opaQunit 
     * 
     */
    function(mockserver, opaQunit) {
        
        QUnit.module("Navigation");

        opaQunit("Should open the Hello Dialog", function (Given, When, Then) {
            
            //initialize the mock server
            mockserver.init();
            
            //Arrangements
            Given.iStartMyUIComponent({
                componentConfig: {
                    name: "logaligroup.invoices"
                }
            });

            //Actions
            When.onTheAppPage.iSayHelloDialogButton();

            //Assertions
            Then.onTheAppPage.iSeeTheHelloDialog();

            //Cleanup
            Then.iTeardownMyApp();


        });

    }
);