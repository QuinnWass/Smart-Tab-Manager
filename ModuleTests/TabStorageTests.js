import {SetTab, RemoveTab,InitializeTabStorage, RETURN_FLAGS} from './../modules/TabStorage.js'
import {TabGraph, TabNode} from "./../modules/TabGraph.js"


async function test(){ 
    let tabs = await browser.tabs.query({})
    InitializeTabStorage()
    //Test normal Add Remove
    for(const tab of tabs){
        let node = new TabNode(tab)
        //Create Tab
        console.assert(await SetTab(node) === RETURN_FLAGS.TAB_SET, "SetTab does not equal RETURN_FLAGS.TAB_SET")
        //Update Tab
        console.assert(await SetTab(node) === RETURN_FLAGS.TAB_SET, "SetTab does not equal RETURN_FLAGS.TAB_SET")
        //Remove Tab
        console.assert(await (RemoveTab(node)) === RETURN_FLAGS.TAB_REMOVE, "RemoveTab does not equal RETURN_FLAGS.TAB_REMOVE")
        //Remove Tab that doesnt exist
        console.assert(await (RemoveTab(node)) === RETURN_FLAGS.RET_ERROR, "RemoveTab does not equal RETURN_FLAGS.RET_ERROR")

        //Test double Remove
    }

}
export {test}