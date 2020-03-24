
function getTabs(){
    browser.tabs.query({})
    .then((tabs)=>{
        for (let tab of tabs) {
            // do something
          }
    })
    
}
export {getTabs}