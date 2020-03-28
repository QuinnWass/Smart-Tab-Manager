import {registerNewTabListener, registerRemoveTabListener} from './listeners.js' 
import {SetTab, RemoveTab, RETURN_FLAGS} from '/modules/TabStorage.js'
import {TabGraph} from "/modules/TabGraph.js"
import { TabNode } from '../modules/TabGraph.js'

browser.runtime.getBackgroundPage().then((page)=>{
    page.TAB_GRAPH = new TabGraph()
})



   