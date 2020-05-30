import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import history from './history'
import { rootReducer, rootEpic } from '../reducers/index'
import { routerMiddleware } from 'react-router-redux'
import { createEpicMiddleware } from 'redux-observable'

const routeMiddleware = routerMiddleware(history)
const epicMiddleware = createEpicMiddleware()

let middleware
if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(applyMiddleware(epicMiddleware, routeMiddleware, promise(), thunk))
} else {
    middleware = applyMiddleware(epicMiddleware, routeMiddleware, promise(), thunk)
}

export default createStore(rootReducer, middleware)
epicMiddleware.run(rootEpic)