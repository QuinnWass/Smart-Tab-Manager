const REMOVE_ONE_ELEMENT = 1


/*
class TabNode
Tabnode is the internal representation for tabs.Tab. Allows tracking of children tabs and stores Id and parent Id
*/
class TabNode {
    constructor(tab, parentId = null){
        this._tab = tab
        this._id = tab.id
        this._parentId = parentId
        this._children = []
    }

    AddChild(tabNode){
        this._children.append(tabNode._id)
    }

    RemoveChild(tabNode){
        let index = this._children.indexOf(tabNode._id)
        if (index != -1){
            this._children.splice(index, REMOVE_ONE_ELEMENT)
        }

    }
}


/*
class TabGraph 
TabGraph is the internal representation for tabs the browser currently has open.
It is necessary to track the parent and child relationship for nesting of tabs
*/
class TabGraph {
    constructor(){
        this._tabs = new Map()
        this._topLevelTabs = []
    }
    
    /*
    AddTopLevelTab(tabNode)
    Used to add a top level tab into the TabGraph. Top level tabs are created by the browser independent of
    current tabs. TabNodes must be constructed properly before insert
    */
    AddTopLevelTab(tabNode){
        let tabId = tabNode._id
        if(!this.CheckTabIdExists(tabNode)){
            throw "No id for TabNode"
        }
        this._topLevelTabs.append(tabId)
        this.AddTabNode(tabNode)
    }

    /*
    AddTabNode(tabNode)
    Used to add any tab into the TabGraph. TabNodes must be constructed properly before insert
    */
    AddTabNode(tabNode){
        if(!this.CheckTabIdExists(tabNode)){
            throw "No id for TabNode"
        }
        let tabId = tabNode._.id
        this._tabs.set(tabId,tabNode)
    }

    /*
    RemoveTabNode(tabNode)
    Removes tabNode from internal data structure. Removes from parent tab child list if it exists. 
    Removes from topLevelTab list if exists. Will throw exception of tabNode does not exist.
    Pre: Tab exists
    Post: Tab deleted from this._tabs and ths._topLevelTabs
    */
    RemoveTabNode(tabNode){
        if(!this.TabIdExists(tabNode)){
            throw "No id for TabNode"
        }
        let didContainItem = this._tabs.delete(tabNode._id)
        if (!didContainItem){
            throw "TabNode does not exist"
        }
        let index = this._topLevelTabs.indexOf(tabNode._id)
        if (index != -1){
            this._topLevelTabs.splice(index, REMOVE_ONE_ELEMENT)
        }
        if (tabNode._parentId != null){
            this.RemoveParentTab(tabNode)
        }
    }

    /*
    RemoveParentTab(childTabNode)
    Pre: Parent Tab exists
    Post: Parent Tab deleted from this._tabs
    */
    RemoveParentTab(childTabNode){
        let parentTabId = childTabNode._parentId
        let parentTab = this._tabs.get(parentTabId)
        if (parentTab ==  undefined){
            throw "Parent Tab does not exist"
        }
        let index = parentTab._children.indexOf(childTabNode._id)
        if (index != -1){
            parentTab._children.splice(childTabNode._id, REMOVE_ONE_ELEMENT)
            this._tabs.set(parentTabId, parentTab)
        }

    }
    
    /*
    TabIdExists(tabNode)
    Checks if tab id exists. If it does not the value will be Tabs.TAB_ID_NONE as documented 
    on https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab

    */
    TabIdExists(tabNode){
        return tabNode._id != tabs.TAB_ID_NONE
    }


}

export {TabNode, TabGraph}