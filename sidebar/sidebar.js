import {HandleRemoveClick} from './sidebarCallbacks.js'

function CreateNewTab(tab){
    let tab_list = document.getElementsByClassName("tabList")[0];
    var tab_container = document.createElement("div")
    var tab_title = document.createElement("a")
    var close_tab_btn = document.createElement("a")
    
    close_tab_btn.dataset.tabId = tab.id
    tab_title.dataset.tabId = tab.id
    tab_container.dataset.tabId = tab.id

    close_tab_btn.addEventListener("click", HandleRemoveClick)
    
    tab_title.addEventListener("click", (event)=>{
        alert(event.target.dataset.tabId)
        console.log("title click")
    })

    tab_title.className = "title_item"
    tab_title.innerHTML = tab.title

    tab_container.className = "tab_container"

    close_tab_btn.innerHTML = "x"
    close_tab_btn.className = "btn_item"

    tab_container.appendChild(tab_title)
    tab_container.appendChild(close_tab_btn)

    tab_list.appendChild(tab_container)

}

function buildTabListInSidebar(tabList){
    var tabContainer = document.getElementsByClassName("tabList")[0];
    for (let tab of tabList) {

        CreateNewTab(tab)

        
    }
}

function onError(e){
    console.log(e)
}



browser.tabs.query({})
    .then(buildTabListInSidebar, onError)
