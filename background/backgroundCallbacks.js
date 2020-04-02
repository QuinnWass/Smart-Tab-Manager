import * as TabStorage from '/modules/TabStorage.js'
import { TabNode } from '/modules/TabGraph.js';
import * as SidebarCallbacks from '/sidebar/sidebarCallbacks.js'
import * as Message from './../modules/Message.js'

var connectionMap = new Map()

async function HandleNewTab(tabId, changeInfo, tab){
    let tabNode = new TabNode(tab)
    TabStorage.SetTab(tabNode)
    let windowId = tab.windowId
    let window = await browser.windows.get(windowId)
    let port = connectionMap.get(windowId)
    let message = JSON.stringify(new Message.Message(Message.MESSAGE_TYPE.SET_TAB, tab, tab.id, window ))
    port.postMessage(message)
}



function HandleNewConnection(Port){
    let sidebarPort = Port
    //fixme store ports in TabStorage
    const msg = JSON.stringify(new Message.Message(Message.MESSAGE_TYPE.CONN_EST, null, null, null))
    sidebarPort.postMessage(msg);
    sidebarPort.onMessage.addListener((m)=>{
      let message = JSON.parse(m)
      let windowId = message.window.id
      connectionMap.set(windowId, sidebarPort)
    })
}

async function HandleRemoveTab(tabId, removeInfo){
  //let tabNode = new TabNode(tab)
  //TabStorage.RemoveTab(tabNode)
  let windowId = removeInfo.windowId
  let window = await browser.windows.get(windowId)
  let port = connectionMap.get(windowId)
  let message = JSON.stringify(new Message.Message(Message.MESSAGE_TYPE.REMOVE_TAB, null, tabId, window ))
  port.postMessage(message)
}

export {HandleNewTab, HandleNewConnection, HandleRemoveTab}