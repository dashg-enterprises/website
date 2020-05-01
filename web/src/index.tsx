import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './content/App'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import * as MomentUtils from '@date-io/moment';
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
                <MuiPickersUtilsProvider utils={MomentUtils}>
                <ConnectedRouter history={history}>
                    <Route path='/' component={App}/>
                </ConnectedRouter>
                </MuiPickersUtilsProvider>
            </ThemeProvider>
            
        </Provider>
    ),
    document.getElementById('root'))
