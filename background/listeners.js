/*
NEW_TAB_LISTNER_FILTERS
Restricts when the NewTabListner is fired

Documentation for NEW_TAB_LISTNER_FILTERS can be found at
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/Tabs/onUpdated under extraParameters
*/



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
function registerNewTabListener(callback, parameters){
    browser.tabs.onUpdated.addListener(callback, parameters)
}

/*
function registerRemoveTabListner(callback)

registerRemoveTabListner will register a listener to detect when a tab is removed.

callback must have the parameters (tabId, removeInfo).

Documentation for onRemoved listener can be found at
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onRemoved

*/
function registerRemoveTabListener(callback){
    browser.tabs.onRemoved.addListener(callback)
}


/*
function registerConnectionListner(callback)

registerConnectionListner will register a listener to detect when a connection is established
to the background. 

callback must have the parameter (Port).

Documentation for onConnect listener can be found at
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect

*/
function registerConnectionListner(callback){
    browser.runtime.onConnect.addListener(callback);
}


export {registerNewTabListener, registerRemoveTabListener, registerConnectionListner};