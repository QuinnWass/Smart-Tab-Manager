import * as TabStorage from '/modules/TabStorage.js'
import { TabNode } from '/modules/TabGraph.js'


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
    console.log("click")
    let tab = await GetTabFromEvent(event)
    let window = await GetWindowFromEvent(event)
    browser.tabs.update(tab.id,{active:true})
    browser.windows.update(window.windowId, {focused: true, drawAttention:true})
}

async function GetTabFromEvent(event){
    let tabId = parseInt(event.target.dataset.tabId)
    return await browser.tabs.get(tabId)
}


async function GetWindowFromEvent(event){
    let windowId = parseInt(event.target.dataset.windowId)
    return await browser.windows.get(windowId)
}


export {HandleRemoveClick, HandleFocusTabClick}