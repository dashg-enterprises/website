import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import ConnectedApp from './content/ConnectedApp'
import store from './redux/store/store'
import history from './redux/store/history'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router'
import 'date-input-polyfill'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './muiTheme'

ReactDOM.render(
    (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <ConnectedRouter history={history}>
                    <Route path='/' component={ConnectedApp}/>
                </ConnectedRouter>
            </ThemeProvider>
            
        </Provider>
    ),
    document.getElementById('root'))
