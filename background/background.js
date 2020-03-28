import {registerNewTabListener, registerRemoveTabListener} from './listeners.js' 
import * as TabStorage from '/modules/TabStorage.js'
import {TabGraph, TabNode} from "/modules/TabGraph.js"
import {test} from './../ModuleTests/TabStorageTests.js'



TabStorage.InitializeTabStorage()