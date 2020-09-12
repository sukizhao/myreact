/**
 * @name Store
 * @desc store 构造器
 */

import { action, configure } from 'mobx'

configure({ enforceActions: 'observed' })

class Store {
    constructor(modules) {
        Object.keys(modules).forEach(moduleName => {
            this[moduleName] = new modules[moduleName]({
                mapStore: this.mapStore.bind(this),
                rootState: this.rootState
            })
        })
    }

    rootState = {}

    mapStore(moduleName) {
        if (moduleName) {
            return this[moduleName] ? this[moduleName] : console.error(new Error(`has no store named "${moduleName}"`))
        } else {
            return this
        }
    }
}

let $mapStore = null
let $rootState = null

class StoreModule {
    constructor({ mapStore, rootState }) {
        $mapStore = mapStore
        $rootState = rootState
    }

    mapStore(name) {
        return $mapStore(name)
    }

    getRootState() {
        return $rootState
    }

    setState(options) {
        action(opt => {
            Object.keys(opt).forEach(key => {
                if (Object.prototype.hasOwnProperty.call(this, key)) {
                    this[key] = opt[key]
                } else {
                    console.error(new Error(`mobx action "setState": has no attribute named "${key}"`))
                }
            })
        })(options)
    }
}

export { Store, StoreModule }