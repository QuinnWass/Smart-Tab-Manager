/*
MESSAGE_TYPE used to set type of message in Message class
*/
const MESSAGE_TYPE = {
    CONN_EST: "CONN_EST",
    SET_TAB:"SET_TAB",
    REMOVE_TAB: "REMOVE_TAB"
}


/*
class Message
Simple message class used to create a uniform way of passing messages between Sidebar and Background

Message has tabId in addition to tab to support remove functionality. Handler passes tabID after tab
is removed by browser so it cannot retrieve the tab object
*/
class Message {
    constructor(MESSAGE_TYPE, tab, tabId,  window ){
        this.MESSAGE_TYPE = MESSAGE_TYPE
        this.tab = tab
        this.tabId = tabId
        this.window = window
    }

}

export {Message, MESSAGE_TYPE}