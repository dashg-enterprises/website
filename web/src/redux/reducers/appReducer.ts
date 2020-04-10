import { appState, IAppState } from '../store/templates/appState'

import {

} from '../actions/actionTypes'

export default (state: IAppState = appState, action) => {
    switch (action.type) {
        
        default: {
            return state
        }
    }
}