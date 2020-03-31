import * as TabStorage from '/modules/TabStorage.js'
import { TabNode } from '/modules/TabGraph.js';
import * as SidebarCallbacks from "/sidebar/sidebarCallbacks.js"

var connectionMap = new Map()

function HandleNewTab(tabId, changeInfo, tab){
    console.log("New tab")
    console.log(tab.id)
    let tabNode = new TabNode(tab)
    TabStorage.SetTab(tabNode)
    let windowId = tab.windowId
    let port = connectionMap.get(windowId)
    console.log("Message to port: ")
    console.log(port)
    port.postMessage({id:windowId, tab:tab})
}



function HandleNewConnection(Port){
    let sidebarPort = Port
    //fixme use message class
    //fixme store ports in TabStorage
    sidebarPort.postMessage({greeting: "Connection with background established"});
    sidebarPort.onMessage.addListener((message)=>{
      console.log("Sidebar message")
      console.log(message)
      let windowId = message.window.id
      connectionMap.set(windowId, sidebarPort)
      console.log(connectionMap)
    })
}

export {HandleNewTab, HandleNewConnection}