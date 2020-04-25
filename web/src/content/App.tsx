import * as React from 'react'
import Header from './Header/Header'
import AboutUs from './AboutUs/AboutUs'


const App = () => {
    return (
        <div className='App'>
            <Header />
            <div style={{display: 'block', width: `100vw`,}}>
                <AboutUs />
                <AboutUs />

            </div>
           
        </div>
    )
}

export default App
