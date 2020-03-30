import * as TabStorage from '/modules/TabStorage.js'
import { TabNode } from '/modules/TabGraph.js';
import * as SidebarCallbacks from "/sidebar/sidebarCallbacks.js"


function HandleNewTab(tabId, changeInfo, tab){
    let tabNode = new TabNode(tab)
    TabStorage.SetTab(tabNode)
    SidebarCallbacks.RenderNewTab(tab)
}

export {HandleNewTab}