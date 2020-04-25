import * as React from 'react'
import Section from '../reusableComponents/Section/Section'
import Markdown from '../reusableComponents/Markdown/Markdown'
import { about } from '../../businessLogic/about'

const AboutUs = () => {
    return (
        <div id='about-us'>
            <Markdown
                markdown={about}
            />
        </div>
    
    )
}

export default AboutUs