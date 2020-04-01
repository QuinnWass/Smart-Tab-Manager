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
*/
class Message {
    constructor(MESSAGE_TYPE, tab = null, window = null){
        this.MESSAGE_TYPE = MESSAGE_TYPE
        this.tab = tab
        this.window = window
    }

}

export {Message, MESSAGE_TYPE}