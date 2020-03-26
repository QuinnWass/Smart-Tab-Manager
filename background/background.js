import {registerNewTabListner} from './trackTabs.js' 

function dummyCallback(tabId, changeInfo, tab){
    console.log(tabId)
}

registerNewTabListner(dummyCallback)

