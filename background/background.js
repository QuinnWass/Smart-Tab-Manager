import * as BackgroundListeners from './listeners.js' 
import * as BackgroundCallbacks from './backgroundCallbacks.js'
import * as TabStorage from '/modules/TabStorage.js'
import {TabGraph, TabNode} from "/modules/TabGraph.js"
import {test} from './../ModuleTests/TabStorageTests.js'



TabStorage.InitializeTabStorage()
//BackgroundListeners.registerNewTabListener(BackgroundCallbacks.HandleNewTab.bind(this))

BackgroundListeners.registerConnectionListner(BackgroundCallbacks.HandleNewConnection)
BackgroundListeners.registerNewTabListener(BackgroundCallbacks.HandleNewTab)
BackgroundListeners.registerRemoveTabListener(BackgroundCallbacks.HandleRemoveTab)
