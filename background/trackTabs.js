/*
function registerTabListner(callback)

registerTabListner will register a listener to detect when changes are made to a tab.
The listner will not listen for created tabs as their title values will 
be of the value about:blank. 

callback must have the parameters (tabId, changeInfo, tab).
callback should check to see if the tabId already exists in the stored tabs.
This is becuase the listner will only fire on updated tabs.

Documentation for onUpdated listener can be found at
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/Tabs/onUpdated

*/

const TAB_LISTNER_FILTERS = {}

function registerTabListner(callback){
    browser.tabs.onUpdated.addListener(callback, TAB_LISTNER_FILTERS)
}


export {registerTabListner};