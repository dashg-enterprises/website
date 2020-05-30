import * as React from 'react'
import Logo from '../Logo/Logo'

const Footer = () => {
    return (
        <div id='footer'>
            <div>
                <Logo type='box' logoSize='xs'/>
                <div id='contact'>
                    <span>Have questions?</span>
                    <span>Contact us:</span>
                    <a href='mailto:contact-us@dashg.io?Subject=Contact%20us'>contact-us@dashg.io</a>

                </div>
            </div>
            

        </div>
    )
}

export default Footer