import {HandleRemoveClick, HandleFocusTabClick} from './sidebarCallbacks.js'
import * as SidebarAction from './sidebarAction.js'


async function InitSideBar(){
    try{
        let page = await browser.runtime.getBackgroundPage()

        page.page_document = document
        page.tab_list = page.page_document.getElementsByClassName("tabList")[0];
        page.tab_container_map = new Map()

        let tabs = await browser.tabs.query({})
        for (let tab of tabs) {
            SidebarAction.CreateNewTab(tab)
        }
    }catch(e){
        console.error(e)
    }
}

InitSideBar()
