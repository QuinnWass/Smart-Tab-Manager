import * as SidebarCallbacks from "/sidebar/sidebarCallbacks.js"


async function CreateNewTab(tab){
    let page = await browser.runtime.getBackgroundPage()
    let tab_list = page.tab_list
    let tab_container = document.createElement("div")
    let tab_title = document.createElement("a")
    let close_tab_btn = document.createElement("a")
    
    close_tab_btn.dataset.tabId = tab.id
    tab_title.dataset.tabId = tab.id
    tab_container.dataset.tabId = tab.id

    close_tab_btn.addEventListener("click", SidebarCallbacks.HandleRemoveClick)
    
    tab_title.addEventListener("click", SidebarCallbacks.HandleFocusTabClick)

    tab_title.className = "title_item"
    tab_title.innerHTML = tab.title

    tab_container.className = "tab_container"

    close_tab_btn.innerHTML = "x"
    close_tab_btn.className = "btn_item"

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
            return
        }
    }

}

export {CreateNewTab, UpdateTab}