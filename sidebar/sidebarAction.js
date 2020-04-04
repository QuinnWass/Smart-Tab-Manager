
/*

File should not be needed. Keeping incase this is not so until merge with main
import * as SidebarCallbacks from "/sidebar/sidebarCallbacks.js"


async function CreateNewTab(tab){
    let page = await browser.runtime.getBackgroundPage()
    let tab_list = page.tab_list
    let tab_container = page.page_document.createElement("div")
    let tab_title = page.page_document.createElement("a")
    let close_tab_btn = page.page_document.createElement("a")
    let fav_icon = page.page_document.createElement("img")
    let fav_icon_container = page.page_document.createElement("div")
    
    close_tab_btn.dataset.tabId = tab.id
    tab_title.dataset.tabId = tab.id
    tab_container.dataset.tabId = tab.id
    fav_icon.dataset.tabId = tab.id
    fav_icon_container.dataset.tabId = tab.id

    close_tab_btn.dataset.windowId = tab.windowId
    tab_title.dataset.windowId = tab.windowId
    tab_container.dataset.windowId = tab.windowId
    fav_icon.dataset.windowId = tab.windowId
    fav_icon_container.dataset.windowId = tab.windowId


    close_tab_btn.addEventListener("click", SidebarCallbacks.HandleRemoveClick)
    
    tab_title.addEventListener("click", SidebarCallbacks.HandleFocusTabClick)

    tab_title.className = "title_item"
    tab_title.innerHTML = tab.title

    tab_container.className = "tab_container"

    close_tab_btn.innerHTML = "x"
    close_tab_btn.className = "btn_item browser-style"

    fav_icon.src = tab.favIconUrl
    fav_icon.className = "fav_icon_item"

    fav_icon_container.className = "fav_icon_container"

    fav_icon_container.appendChild(fav_icon)
    tab_container.appendChild(fav_icon)
    tab_container.appendChild(tab_title)
    tab_container.appendChild(close_tab_btn)
    
    tab_list.appendChild(tab_container)
    page.tab_container_map.set(tab.id, tab_container)

}

async function UpdateTab(tab){
    let page = await browser.runtime.getBackgroundPage()
    let tab_container = page.tab_container_map.get(tab.id)
    for(let i = 0; i < tab_container.children.length; i++){
        if(tab_container.children[i].className == "title_item"){
            tab_container.children[i].innerHTML = tab.title
        }else if(tab_container.children[i].className == "fav_icon_item"){
            tab_container.children[i].src = tab.favIconUrl
        }
    }

}

export {CreateNewTab, UpdateTab}
*/