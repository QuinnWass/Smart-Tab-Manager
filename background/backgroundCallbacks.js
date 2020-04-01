import * as TabStorage from '/modules/TabStorage.js'
import { TabNode } from '/modules/TabGraph.js';
import * as SidebarCallbacks from '/sidebar/sidebarCallbacks.js'
import * as Message from './../modules/Message.js'

var connectionMap = new Map()

async function HandleNewTab(tabId, changeInfo, tab){
    console.log("New tab")
    console.log(tab.id)
    let tabNode = new TabNode(tab)
    TabStorage.SetTab(tabNode)
    let windowId = tab.windowId
    let window = await browser.windows.get(windowId)
    let port = connectionMap.get(windowId)
    console.log("Message to port: ")
    console.log(port)
    let message = JSON.stringify(new Message.Message(Message.MESSAGE_TYPE.SET_TAB, tab, tab.id, window ))
    port.postMessage(message)
}



function HandleNewConnection(Port){
    let sidebarPort = Port
    //fixme store ports in TabStorage
    const msg = JSON.stringify(new Message.Message(Message.MESSAGE_TYPE.CONN_EST))
    sidebarPort.postMessage(msg);
    sidebarPort.onMessage.addListener((m)=>{
      let message = JSON.parse(m)
      console.log("Sidebar message")
      console.log(message)
      let windowId = message.window.id
      connectionMap.set(windowId, sidebarPort)
      console.log(connectionMap)
    })
}

async function HandleRemoveTab(tabId, removeInfo){
  
  console.log("Handle remove")
  //let tabNode = new TabNode(tab)
  //TabStorage.RemoveTab(tabNode)
  let windowId = removeInfo.windowId
  console.log("Window id remove")
  console.log(windowId)
  let window = await browser.windows.get(windowId)
  let port = connectionMap.get(windowId)
  console.log("Message to port: ")
  console.log(port)
  let message = JSON.stringify(new Message.Message(Message.MESSAGE_TYPE.REMOVE_TAB, null, tabId, window ))
  console.log(typeof(message))
  port.postMessage(message)
}

export {HandleNewTab, HandleNewConnection, HandleRemoveTab}