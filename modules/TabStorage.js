import {TabNode, TabGraph} from "./TabGraph.js"


/*
RETURN_FLAGS is used to distiguish behavior in SetTab and RemoveTab
*/
const RETURN_FLAGS = {
    TAB_CREATE: Symbol("TAB_CREATE"),
    TAB_UPDATE: Symbol("TAB_UPDATE")
}

/*
function SetTab(TabNode) is responsable for creating and updating TabNodes in the
extensions internal structure

Returns a promise with a RETURN_FLAGS object if success or an error if failure
*/
async function SetTab(TabNode){
    return (browser.storage.local.get()
        .then((NodeGraph)=>{
            // if tab exists update, return TAB_UPDATE

            // if tab does exist create, return TAB_CREATE
        }))

};

/*
function RemoveTab(TabNode) is responsable for removing TabNodes in the
extensions internal structure

Returns a promise empty if success, or an error if failure
*/
async function RemoveTab(TabNode){

};

export {SetTab, RemoveTab, RETURN_FLAGS}