import * as React from 'react'
import Header from './Header/Header'
import AboutUs from './AboutUs/AboutUs'
import Join from './Join/Join'

const App = () => {
    return (
        <div className='App'>
            <Header />
            <div style={{display: 'block', width: `100vw`}}>
                <AboutUs />
                <Join />
            </div>
           
        </div>
    )
}

export default App
