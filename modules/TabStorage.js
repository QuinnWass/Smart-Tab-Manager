import {TabNode, TabGraph} from "./TabGraph.js"
/*
RETURN_FLAGS is used to distiguish behavior in SetTab and RemoveTab
*/
const RETURN_FLAGS = {
    TAB_SET: "TAB_SET",
    RET_ERROR: "TAB_STORE_RET_ERROR",
    TAB_REMOVE: "TAB_REMOVE",
    TAB_STORE_CREATE: "TAB_STORE_CREATE",
    TAB_STORE_CREATE_FAIL: "TAB_STORE_CREATE_FAIL",
    WINDOW_SET: "WINDOW_SET"
}

/*
async function InitializeTabStorage() is responable for initializing the tabStorage module.
This function should only be run once. If it is run multiple times it will throw an error.

Async function returns an empty promise if success and throws an exception if fail

*/
async function InitializeTabStorage(){
    try{
        let page = await browser.runtime.getBackgroundPage()
        if(page.TAB_GRAPH_INIT){
            throw "TabStorage already initialized"
        }
        page.TAB_GRAPH_INIT = true
        page.TAB_GRAPH = new TabGraph()
        page.WINDOW_TRACKER = new Map()
        page.CONNECTION_TRACKER = new Map()
        return RETURN_FLAGS.TAB_STORE_CREATE
    }catch(e){
        console.error(e)
        return RETURN_FLAGS.TAB_STORE_CREATE_FAIL
    }
}

/*
function SetTab(TabNode) is responsable for creating and updating TabNodes in the
extensions internal structure

Returns a promise with a RETURN_FLAGS object if success or an error if failure
*/

async function SetTab(tabNode){
    try{
        let page = await browser.runtime.getBackgroundPage()
        // tabGraph is a reference to browser.runtime.<backgroundpage>.TAB_GRAPH
        let tabGraph = page.TAB_GRAPH
        tabGraph.AddTabNode(tabNode)
        return RETURN_FLAGS.TAB_SET
    }catch(e){
        console.error(e)
        return RETURN_FLAGS.RET_ERROR
    }
};

/*
function RemoveTab(TabNode) is responsable for removing TabNodes in the
extensions internal structure
*/
async function RemoveTab(TabNode){
    try{    
        let page = await browser.runtime.getBackgroundPage()
        let tabGraph = page.TAB_GRAPH
        tabGraph.RemoveTabNode(TabNode)
        return RETURN_FLAGS.TAB_REMOVE
    }catch(e){
        console.log(e)
        return RETURN_FLAGS.RET_ERROR
    }
    
};

async function SetWindow(Window){
    try{
        let page = await browser.runtime.getBackgroundPage()
        let Window_tracker = page.WINDOW_TRACKER
        Window_tracker.set(window.windowId, Window)
        return RETURN_FLAGS.WINDOW_SET
    }catch(e){
        return RETURN_FLAGS.RET_ERROR
    }
}





export {SetTab, RemoveTab,InitializeTabStorage, RETURN_FLAGS}