import * as BackgroundListeners from './listeners.js' 
import * as BackgroundCallbacks from './backgroundCallbacks.js'
import * as TabStorage from '/modules/TabStorage.js'
import {TabGraph, TabNode} from "/modules/TabGraph.js"
import {test} from './../ModuleTests/TabStorageTests.js'



TabStorage.InitializeTabStorage()
BackgroundListeners.registerConnectionListner(BackgroundCallbacks.HandleNewConnection)
BackgroundListeners.registerRemoveTabListener(BackgroundCallbacks.HandleRemoveTab)
