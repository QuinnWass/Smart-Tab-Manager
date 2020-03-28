import {TabNode, TabGraph} from "./TabGraph.js"


/*
RETURN_FLAGS is used to distiguish behavior in SetTab and RemoveTab
*/
const RETURN_FLAGS = {
    TAB_CREATE: "TAB_CREATE",
    TAB_UPDATE: "TAB_UPDATE",
    RET_ERROR: "TABSTORE_RET_ERROR",
    TAB_REMOVE: "TAB_REMOVE"
}

/*
function SetTab(TabNode) is responsable for creating and updating TabNodes in the
extensions internal structure

Returns a promise with a RETURN_FLAGS object if success or an error if failure
*/

async function SetTab(tabNode){
    // tabGraph is a reference to browser.runtime.TAB_GRAPH
    try{
        let page = await browser.runtime.getBackgroundPage()
        let tabGraph = page.TAB_GRAPH
        const hasNode = tabGraph.AddTabNode(tabNode)
        if(hasNode){
            tabGraph.UpdateTabNode(tabNode)
        }else{
            tabGraph.AddTabNode(tabNode)
        }
        if(hasNode){
            return RETURN_FLAGS.TAB_UPDATE
        }
        return RETURN_FLAGS.TAB_CREATE
    }catch(e){
        console.error(e)
        return RETURN_FLAGS.RET_ERROR
    }
};

/*
const hasNode = nodeGraph.has(tabNode.getTabId())
        
        
*/
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
        console.error(e)
        return RETURN_FLAGS.RET_ERROR
    }
    
};

export {SetTab, RemoveTab, RETURN_FLAGS}