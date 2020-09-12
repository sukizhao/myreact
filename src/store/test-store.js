import { observable, action, configure } from 'mobx'
import { StoreModule } from '../utils/mobx-store'
import { post } from '../utils/axios'

configure({ enforceActions: true })

class Test extends StoreModule {
    @observable
    msg = ''

    @action.bound
    handleChangeMsg(e) {
        this.setState({ msg: e.target.value })
    }

    @action.bound
    async getSomething() {
        try {
            const res = await post('/some-data', { type: 'news' })
        } catch (err) {
            console.error(err)
        }
    }
}

export default Test