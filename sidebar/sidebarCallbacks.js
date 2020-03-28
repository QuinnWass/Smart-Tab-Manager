import * as TabStorage from '/modules/TabStorage.js'
import { TabNode } from '/modules/TabGraph.js'


function RenderNewTab(tabNode){

}

function RenderDeleteTab(tabNode){

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

async function HandleActivateTabClick(tabNode){

}

async function GetTabFromEvent(event){
    let tabId = parseInt(event.target.dataset.tabId)
    return await browser.tabs.get(tabId)

}

export {HandleRemoveClick}