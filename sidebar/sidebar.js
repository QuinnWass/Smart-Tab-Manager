function buildTabListInSidebar(tabList){
    console.log("Try to build")
    var tabContainer = document.getElementsByClassName("tabList")[0];
    for (let tab of tabList) {
        var t = document.createElement("div")
        t.className = "item"
        t.innerHTML = tab.title
        tabContainer.appendChild(t)
    }
}

function onError(e){
    console.log(e)
}

browser.tabs.query({})
    .then(buildTabListInSidebar, onError)

