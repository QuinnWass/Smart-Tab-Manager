import * as TabStorage from '/modules/TabStorage.js'
import { TabNode } from '/modules/TabGraph.js'
import * as SidebarAction from "./sidebarAction.js"
    

async function RenderNewTab(tab){
    let page = await browser.runtime.getBackgroundPage()
    let tab_container_map = page.tab_container_map
    if(tab_container_map.has(tab.id)){
        return SidebarAction.UpdateTab(tab)
    }
    return SidebarAction.CreateNewTab(tab)
    
}

async function HandleRemoveClick(event){
    let tab = await GetTabFromEvent(event)
    let tabNode = new TabNode(tab)
    let res = await TabStorage.RemoveTab(tabNode)
    if(res != TabStorage.RETURN_FLAGS.TAB_REMOVE){
        console.error(res)
    }
    event.target.parentElement.remove()
    browser.tabs.remove(tabNode.GetTabId())


}

async function HandleFocusTabClick(event){
    let tab = await GetTabFromEvent(event)
    browser.tabs.update(tab.id,{active:true})
}

async function GetTabFromEvent(event){
    let tabId = parseInt(event.target.dataset.tabId)
    return await browser.tabs.get(tabId)

}

export {HandleRemoveClick, HandleFocusTabClick, RenderNewTab}